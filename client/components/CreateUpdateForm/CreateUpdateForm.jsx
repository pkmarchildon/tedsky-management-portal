import { useReducer, useState } from 'react';
import { formDataFormating } from '@/providers/formatters';
import { fieldReducer } from '@/providers/reducers';
import { updateItem } from '@/providers/itemOperations';
import { Open_Sans } from '@next/font/google';

import variables from '../../../server/variables.json';

import styles from './createForm.module.css';

/* Components */
import TextField from './TextField';
import OptionsField from './OptionsField';
import DateSelector from './DateSelector';
import TagField from '../TagField/TagField';
import Tag from '../Tag/Tag';

const openSans = Open_Sans({
  style: ['normal'],
  weight: '400',
  subsets: ['latin'],
  fallback: ['Helvetica Neue', 'Helvetica', 'system-ui', 'Arial']
});

const fieldsValues = {
  itemId: {
    id: 'itemId',
    label: 'Item ID',
    type: 'textField',
    value: '',
    inputType: 'text',
    disabled: true
  },
  category: {
    id: 'category',
    label: 'Category',
    value: '',
    type: 'optionField',
    options: variables.categories
  },
  name: {
    id: 'name',
    label: 'Name',
    type: 'textField',
    value: '',
    inputType: 'text'
  },
  brand: {
    id: 'brand',
    label: 'Brand',
    type: 'textField',
    value: '',
    inputType: 'text'
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
    inputType: 'number'
  },
  units: {
    id: 'units',
    label: 'Units',
    value: '',
    type: 'optionField',
    options: variables.units
  },
  tags: {
    type: 'tagField'
  }
};

let initialFields = {
  itemId: '',
  name: '',
  category: '',
  price: 0,
  units: '',
  store: '',
  tags: []
};

function _createTags(tags, removeTag) {
  let tagComponents = [];

  if (tags) {
    tags.forEach((tag) => {
      tagComponents.push(<Tag key={tag} text={tag} handleDelete={removeTag} />);
    });
  }

  return tagComponents;
}

function _createFields(
  handleChangeTextInput,
  handleChangeOptionInput,
  formData,
  isCreatingItem,
  _removeTag,
  dispatch
) {
  var fields = [];
  const keys = Object.keys(fieldsValues);

  keys.forEach((key) => {
    if (key === 'itemId') {
      if (!isCreatingItem) {
        fields.push(
          <TextField
            key={fieldsValues[key].id}
            id={fieldsValues[key].id}
            label={fieldsValues[key].label}
            type={fieldsValues[key].inputType}
            onChange={handleChangeTextInput}
            fieldData={formData[key]}
            disabled={fieldsValues[key].disabled ? true : false}
          />
        );
      }
    } else {
      switch (fieldsValues[key].type) {
        case 'textField':
          fields.push(
            <TextField
              key={fieldsValues[key].id}
              id={fieldsValues[key].id}
              label={fieldsValues[key].label}
              type={fieldsValues[key].inputType}
              onChange={handleChangeTextInput}
              fieldData={formData[key]}
              disabled={fieldsValues[key].disabled ? true : false}
            />
          );
          break;

        case 'optionField':
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
          break;

        case 'dateField':
          fields.push(
            <DateSelector
              key={fieldsValues[key].id}
              id={fieldsValues[key].id}
              label={fieldsValues[key].label}
              handleChange={handleChangeOptionInput}
              fieldData={formData[key]}
            />
          );
          break;

        case 'tagField':
          const tags = _createTags(formData.tags, _removeTag);

          fields.push(
            <div key='tags' className={styles.tagsFieldContainer}>
              <TagField id='tags' handleEnter={dispatch} />
              <div className={styles.tagsContainer}>{tags}</div>
            </div>
          );
          break;

        default:
          throw new Error('Invalid type of field: ' + fieldsValues[key].type);
      }
    }
  });

  fields.push();

  return fields;
}

function _setInitialFields(itemData) {
  initialFields.itemId = itemData.itemId;
  initialFields.name = itemData.name;
  initialFields.category = itemData.category;
  initialFields.price = itemData.price;
  initialFields.units = itemData.units;
  initialFields.lastUpdated = itemData.lastUpdated;
  initialFields.store = itemData.store;
  initialFields.tags = itemData.tags;
}

export default function CreateUpdateForm({
  isCreatingItem,
  itemData,
  closeForm,
  itemsDispatch,
  createNewItem,
  updateItem
}) {
  const [formData, dispatch] = useReducer(fieldReducer, initialFields);
  const [submitting, setSubmitting] = useState(false);

  _setInitialFields(itemData);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isCreatingItem) {
      createNewItem(formData, itemsDispatch);
    } else {
      updateItem(formData, itemsDispatch);
    }

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

  function _removeTag(text) {
    dispatch({
      type: 'removeTag',
      data: text
    });
  }

  const fields = _createFields(
    handleChangeTextInput,
    handleChangeOptionInput,
    formData,
    isCreatingItem,
    _removeTag,
    dispatch
  );

  return (
    <form
      className={styles.createUpdateFormContainer}
      onKeyDown={(e) => {
        e.key === 'Enter' && e.preventDefault();
      }}
      onSubmit={handleSubmit}
      method='post'
    >
      <div className={styles.updateFormGridContainer}>{fields}</div>

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
  );
}
