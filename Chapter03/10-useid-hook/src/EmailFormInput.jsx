import { useId } from 'react';

function EmailFormInput() {
  const emailInputId = useId();
  
  return (
    <div>
      <label htmlFor={emailInputId}>Email address1:</label>
      <input id={emailInputId} type="email" />
    </div>
  );
}

export default EmailFormInput;