import { useEffect } from 'react';

import { Open_Sans } from '@next/font/google';
import styles from './createForm.module.css';

const openSans = Open_Sans({
  style: ['normal'],
  weight: '400',
  subsets: ['latin'],
  fallback: ['Helvetica Neue', 'Helvetica', 'system-ui', 'Arial']
});

function floatingLabel(domElement) {
  domElement.style.top = '-18px';
  domElement.style.color = 'var(--neutral-shade-5)';
  domElement.style.fontSize = '0.8em';
  domElement.style.left = '10px';
}

function fieldInputTransparent(domElement) {
  domElement.style.backgroundColor = 'transparent';
  domElement.style.borderColor = 'var(--neutral-shade-2)';
}

function isFieldEmpty(content, labelElement, inputElement) {
  if (content) {
    floatingLabel(labelElement);
    fieldInputTransparent(inputElement);
  } else {
    inputElement.style.backgroundColor = 'var(--neutral-shade-2)';
  }
}

function addEventListeners(id) {
  const inputId = `${id}-input`;
  const labelId = `${id}-label`;

  const inputDOMElement = document.getElementById(inputId);
  const labelDOMElement = document.getElementById(labelId);

  inputDOMElement.addEventListener('focus', () => {
    labelDOMElement.style.top = '-18px';
    labelDOMElement.style.left = '10px';
    labelDOMElement.style.color = 'var(--primary-shade-3)';
    labelDOMElement.style.fontSize = '0.8em';
    labelDOMElement.style.transition = 'all ease-in-out 150ms';
    inputDOMElement.style.backgroundColor = 'transparent';
  });

  inputDOMElement.addEventListener('blur', (event) => {
    labelDOMElement.style.top = '25%';
    labelDOMElement.style.left = '20px';
    labelDOMElement.style.color = 'var(--neutral-shade-6)';
    labelDOMElement.style.fontSize = '16px';

    isFieldEmpty(event.target.value, labelDOMElement, inputDOMElement);
  });
}

export default function TextField({
  id,
  label,
  type,
  onChange,
  fieldData,
  disabled,
  required
}) {
  const inputId = `${id}-input`;
  const labelId = `${id}-label`;

  useEffect(() => {
    addEventListeners(id);
  }, []);

  return (
    <fieldset className={styles.fieldContaier}>
      <label
        id={labelId}
        htmlFor={inputId}
        className={
          fieldData
            ? `${styles.fieldLabel} ${styles.fill} ${styles.fieldText}`
            : `${styles.fieldLabel} ${styles.fieldText}`
        }
      >
        {label}
      </label>
      <input
        id={inputId}
        name={id}
        type={type}
        className={
          fieldData
            ? `${styles.fieldInput} ${styles.fill} ${styles.fieldText}`
            : `${styles.fieldInput} ${styles.fieldText}`
        }
        onChange={onChange}
        style={{ fontFamily: `${openSans.style.fontFamily}` }}
        required={required}
        value={fieldData || ''}
        disabled={disabled || false}
      />
    </fieldset>
  );
}
