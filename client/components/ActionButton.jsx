export default function ActionButton({ text, action }) {
  return (
    <span className='actionButton' onClick={action}>
      {text}
    </span>
  );
}
