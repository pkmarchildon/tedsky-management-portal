import styles from './action-button.module.css';

export default function ActionButton({ text, action }) {
  return (
    <span
      className={`${styles.actionButton} ${
        text === 'Delete' && styles.deleteButton
      }`}
      onClick={action}
    >
      {text}
    </span>
  );
}
