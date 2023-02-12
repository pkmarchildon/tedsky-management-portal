import { useReducer, useState } from 'react';
import { formDataFormating } from '@/providers/functions';
import { fieldReducer } from '@/providers/reducers';
import variables from '../../server/variables.json';
import { Open_Sans } from '@next/font/google';

/* Components */
import TextField from './CreateItemForm/TextField';
import OptionsField from './CreateItemForm/OptionsField';

const openSans = Open_Sans({
  style: ['normal'],
  weight: '400',
  subsets: ['latin'],
  fallback: ['Helvetica Neue', 'Helvetica', 'system-ui', 'Arial']
});

const fieldsValues = {
  productId: {
    id: 'productId',
    label: 'Product ID',
    type: 'textField',
    value: '',
    inputdType: 'text'
  },
  name: {
    id: 'name',
    label: 'Name',
    type: 'textField',
    value: '',
    inputdType: 'text'
  },
  brand: {
    id: 'brand',
    label: 'Brand',
    type: 'textField',
    value: '',
    inputdType: 'text'
  },
  store: {
    id: 'store',
    label: 'Store',
    value: '',
    type: 'optionField',
    options: variables.stores
  },
  price: {
    id: 'price',
    label: 'Price',
    type: 'textField',
    value: '',
    inputdType: 'number'
  },
  units: {
    id: 'units',
    label: 'Units',
    value: '',
    type: 'optionField',
    options: variables.units
  },
  date: {
    id: 'date',
    label: 'Date',
    type: 'textField',
    value: '',
    inputdType: 'text'
  }
};

let initialFields = {
  productId: '',
  name: '',
  category: '',
  price: '',
  units: '',
  lastUpdated: '',
  store: '',
  tags: ''
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

function setInitialFields(itemData) {
  initialFields.productId = itemData.productId;
  initialFields.name = itemData.name;
  initialFields.category = itemData.category;
  initialFields.price = itemData.price;
  initialFields.units = itemData.units;
  initialFields.lastUpdated = itemData.lastUpdated;
  initialFields.store = itemData.store;
  initialFields.tags = itemData.tags;
}

export default function UpdateForm({ itemData, closeForm }) {
  const [formData, dispatch] = useReducer(fieldReducer, initialFields);
  const [submitting, setSubmitting] = useState(false);

  setInitialFields(itemData);

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
    <form
      className='updateForm-container'
      onSubmit={handleSubmit}
      method='post'
    >
      <div className='updateForm-gridContainer'>{fields}</div>

      <div className='updateForm-buttonsContainer'>
        <button
          type='button'
          className='updateForm-cancelButton'
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
  );
}
