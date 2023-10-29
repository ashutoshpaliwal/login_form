import React, { useState } from 'react';
import styled from 'styled-components';
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
    background-color: #ffe4b2; /* Light Orange Background */
 margin-top: 50px;
 
  @media (max-width: 400px) {
    width: 80%; /* Adjust width for smaller screens */
  }
`;
const FormLabel = styled.label`
  margin-bottom: 8px;
`;
const InputField = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return ( <PageContainer>
    <LoginFormContainer>

      <form onSubmit={handleSubmit}>
        <FormLabel>Username:</FormLabel>
        <InputField
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <FormLabel>Password:</FormLabel>
        <InputField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </LoginFormContainer>
    </PageContainer>
  );
};

export default LoginForm;

