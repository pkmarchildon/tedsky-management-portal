import { useEffect } from 'react';

import styles from './createForm.module.css';

function addEventListeners(id) {
  const inputId = `${id}-input`;
  const labelId = `${id}-label`;

  const inputDOMElement = document.getElementById(inputId);
  const labelDOMElement = document.getElementById(labelId);

  inputDOMElement.addEventListener('focus', () => {
    labelDOMElement.style.color = 'var(--primary-shade-3)';
    labelDOMElement.style.transition = 'all ease-in-out 150ms';
  });

  inputDOMElement.addEventListener('blur', () => {
    labelDOMElement.style.color = 'var(--neutral-shade-6)';
  });
}

export default function DateSelector({ id, label, handleChange, fieldData }) {
  const inputId = `${id}-input`;
  const labelId = `${id}-label`;

  useEffect(() => {
    addEventListeners(id);
  }, []);

  return (
    <fieldset className={styles.fieldContaier}>
      <label id={labelId} className={styles.fieldLabelFloatingLabel}>
        {label}
      </label>

      <input
        id={inputId}
        type='date'
        className={`${styles.fieldInput} ${styles.fill} ${styles.fieldText} ${styles.pointer}`}
        value={fieldData || ''}
        onChange={handleChange}
      ></input>
    </fieldset>
  );
}
