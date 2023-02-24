import { useEffect } from 'react';

import styles from '../CreateUpdateForm/createForm.module.css';

function _floatingLabel(domElement) {
  domElement.style.top = '-18px';
  domElement.style.color = 'var(--neutral-shade-5)';
  domElement.style.fontSize = '0.8em';
  domElement.style.left = '10px';
}

function _fieldInputTransparent(domElement) {
  domElement.style.backgroundColor = 'transparent';
  domElement.style.borderColor = 'var(--neutral-shade-2)';
}

function _isFieldEmpty(content, labelElement, inputElement) {
  if (content) {
    _floatingLabel(labelElement);
    _fieldInputTransparent(inputElement);
  } else {
    inputElement.style.backgroundColor = 'var(--neutral-shade-2)';
  }
}

function _addEventListeners() {
  const inputId = 'tags-input';
  const labelId = 'tags-label';

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

    _isFieldEmpty(event.target.value, labelDOMElement, inputDOMElement);
  });
}

function inputKeyUp(event, handleEnter) {
  event.which = event.which || event.keyCode;

  if (event.which == 13) {
    const newTag = event.target.value;

    handleEnter({
      type: 'addTag',
      data: newTag
    });

    event.target.value = '';
  }
}

export default function TagField({ handleEnter }) {
  useEffect(() => {
    _addEventListeners();
  }, []);

  return (
    <fieldset className={styles.fieldContaier}>
      <label
        id='tags-label'
        className={`${styles.fieldLabel} ${styles.fieldText}`}
      >
        Tags
      </label>
      <input
        id='tags-input'
        type='text'
        className={`${styles.fieldInput} ${styles.fieldText}`}
        onKeyUp={(event) => inputKeyUp(event, handleEnter)}
      />
    </fieldset>
  );
}
