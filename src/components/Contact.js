import React from 'react';
import styled from 'styled-components';

import { color } from './variables/index';
import contactImage from '../assets/images/contact-rep.svg';
import MaxWidth from './MaxWidth';
import InputField from '../InputField';

const Contact = styled(MaxWidth)`
`;

const Title = styled.h2`
  margin-bottom: 1em;
`;

const Image = styled.img`
  
`;

const FormContent = styled.div`
  max-width: 22em;
`;

const Form = styled.form``;

const Submit = styled.input`
  width: 10em;
  padding: .8em 1.2em;
  color: ${color.white};
  font-weight: 400;
  font-size: 1em;
  background-color: ${color.brand};
  border: 0;
  border-radius: 10em;
  cursor: pointer;
  transition: .2s ease;

  :hover {
    background-color: ${color.brandDark};
  }
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
    <Contact id="contact">
      <Image src={contactImage} alt="Contact representative" />
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
