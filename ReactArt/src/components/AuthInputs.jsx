import { useState } from 'react';
import { styled } from  'styled-components';

import Button from './Button'
import Input from './Input';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
          {/* <Label className={`label ${emailNotValid?'invalid':''}`}>Email</Label> */}
          {/* <Label $invalid={emailNotValid}>Email</Label> */}
          <Input
            label="Email"
            invalid={emailNotValid}
            type="email"
            //style={{ backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db' }}
            //className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          {/* <Label className={`label ${emailNotValid?'invalid':''}`}>Password</Label> */}
          {/* <Label $invalid={emailNotValid}>Password</Label> */}
          <Input
            label="Password"
            type="password"
            //className={passwordNotValid ? 'invalid' : undefined}
            invalid={emailNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
        {/* <button className='button' onClick={handleLogin}>Sign In</button> */}
      </div>
    </div>
  );
}