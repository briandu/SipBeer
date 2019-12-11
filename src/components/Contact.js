import React from 'react';
import styled from 'styled-components';

import MaxWidth from './MaxWidth';
import InputField from '../InputField';

const Contact = styled(MaxWidth)`
  height: 50vh;
`;

const Title = styled.h2`
  margin-bottom: 1em;
`;

const FormContent = styled.div`
  max-width: 22em;
`;

const Form = styled.form`
  
`;

const Submit = styled.input`
  
`;

export default ({ setNotificationIsActive }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotificationIsActive(true);
    setTimeout(() => {
      setNotificationIsActive(false);
    }, 3000);
  };

  return (
    <Contact>
      <FormContent>
        <Title>Need some help? We got your back.</Title>
        <Form onSubmit={handleSubmit}>
          <InputField
            label="Full name"
            type="text"
            name="name"
          />
          <InputField
            label="Phone number"
            type="tel"
            name="phone number"
          />
          <InputField
            label="Email"
            type="email"
            name="email"
          />
          <Submit type="submit" />
        </Form>
      </FormContent>
    </Contact>
  );
};
