import { useEffect } from 'react';

import { Open_Sans } from '@next/font/google';
import styles from './createForm.module.css';

const openSans = Open_Sans({
  style: ['normal'],
  weight: '400',
  subsets: ['latin'],
  fallback: ['Helvetica Neue', 'Helvetica', 'system-ui', 'Arial']
});

function createOptions(options) {
  let fields = [];

  for (let option in options) {
    let value = options[option].value;
    fields.push(
      <option id={value} key={value} value={value}>
        {options[option].label}
      </option>
    );
  }

  return fields;
}

function fieldInputTransparent(domElement) {
  domElement.style.backgroundColor = 'transparent';
  domElement.style.borderColor = 'var(--neutral-shade-2)';
}

function addEventListeners(id) {
  const inputId = `${id}-input`;
  const labelId = `${id}-label`;

  const inputDOMElement = document.getElementById(inputId);
  const labelDOMElement = document.getElementById(labelId);

  inputDOMElement.addEventListener('change', () => {
    fieldInputTransparent(inputDOMElement);
  });

  inputDOMElement.addEventListener('focus', () => {
    labelDOMElement.style.color = 'var(--primary-shade-3)';
    labelDOMElement.style.transition = 'all ease-in-out 150ms';
  });

  inputDOMElement.addEventListener('blur', () => {
    labelDOMElement.style.color = 'var(--neutral-shade-6)';
  });
}

export default function OptionsField({
  id,
  label,
  options,
  handleChange,
  fieldData
}) {
  const inputId = `${id}-input`;
  const labelId = `${id}-label`;

  useEffect(() => {
    addEventListeners(id);
  }, []);

  return (
    <fieldset className={styles.fieldContaier}>
      <label id={labelId} className={styles.fieldLabelFloatingLabel}>
        {fieldData && label}
      </label>

      <select
        name={id}
        id={inputId}
        onChange={handleChange}
        className={
          fieldData
            ? `${styles.fieldInput} ${styles.fill} ${styles.fieldText}`
            : `${styles.fieldInput} ${styles.fieldText}`
        }
        style={{
          fontFamily: `${openSans.style.fontFamily}`,
          cursor: 'pointer'
        }}
        required={true}
      >
        {!fieldData ? (
          <option
            id={`${id}-emptyOption`}
            name={`${id}-emptyOption`}
            value=''
            className={styles.fieldText}
          >
            {label}
          </option>
        ) : (
          <option
            id={`${id}-emptyOption`}
            name={`${id}-emptyOption`}
            value={fieldData}
            className={styles.fieldText}
          >
            {fieldData}
          </option>
        )}

        {createOptions(options)}
      </select>
    </fieldset>
  );
}
