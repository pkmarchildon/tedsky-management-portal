import { useReducer, useState } from 'react';
import { Open_Sans } from '@next/font/google';
import styles from './createForm.module.css';

import { formDataFormating } from '@/providers/functions';
import { fieldReducer } from '@/providers/reducers';
import variables from '../../../server/variables.json';

/* Components */
import TextField from './TextField';
import OptionsField from './OptionsField';

const openSans = Open_Sans({
  style: ['normal'],
  weight: '400',
  subsets: ['latin'],
  fallback: ['Helvetica Neue', 'Helvetica', 'system-ui', 'Arial']
});

const fieldsValues = {
  name: {
    id: 'name',
    label: 'Name',
    value: '',
    type: 'textField',
    inputType: 'text'
  },
  price: {
    id: 'price',
    label: 'Price',
    value: '',
    type: 'textField',
    inputType: 'number'
  },
  units: {
    id: 'units',
    label: 'Units',
    value: '',
    type: 'optionField',
    options: variables.units
  },
  store: {
    id: 'store',
    label: 'Store',
    value: '',
    type: 'optionField',
    options: variables.stores
  }
};

const initialFields = {
  name: '',
  price: '',
  units: '',
  store: ''
};

function createFields(
  handleChangeTextInput,
  handleChangeOptionInput,
  formData
) {
  var fields = [];
  const keys = Object.keys(fieldsValues);

  keys.forEach((key) => {
    if (fieldsValues[key].type === 'textField') {
      fields.push(
        <TextField
          key={fieldsValues[key].id}
          id={fieldsValues[key].id}
          label={fieldsValues[key].label}
          type={fieldsValues[key].inputType}
          onChange={handleChangeTextInput}
          fieldData={formData[key]}
        />
      );
    } else {
      fields.push(
        <OptionsField
          key={fieldsValues[key].id}
          id={fieldsValues[key].id}
          label={fieldsValues[key].label}
          options={fieldsValues[key].options}
          handleChange={handleChangeOptionInput}
          fieldData={formData[key]}
        />
      );
    }
  });

  fields.push();

  return fields;
}

export default function CreateItemForm({ closeForm }) {
  const [formData, dispatch] = useReducer(fieldReducer, initialFields);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    console.log(formData);

    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);

    closeForm();
  };

  const handleChangeTextInput = (event) => {
    const formatedData = formDataFormating(event);
    dispatch({
      type: 'create',
      data: formatedData
    });
  };

  const handleChangeOptionInput = (event) => {
    if (event.target.value === 'other') {
    }

    const formatedData = formDataFormating(event);
    dispatch({
      type: 'create',
      data: formatedData
    });
  };

  const fields = createFields(
    handleChangeTextInput,
    handleChangeOptionInput,
    formData
  );

  return (
    <div className={styles.createUpdateFormBlur}>
      <form
        className={styles.createUpdateFormContainer}
        onSubmit={handleSubmit}
        method='post'
      >
        {fields}

        <div className={styles.createUpdateFormButtonsContainer}>
          <button
            type='button'
            className={styles.createUpdateFormCancelButton}
            style={{ fontFamily: `${openSans.style.fontFamily}` }}
            onClick={closeForm}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='actionButton'
            style={{
              fontFamily: `${openSans.style.fontFamily}`,
              fontSize: '16px'
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
