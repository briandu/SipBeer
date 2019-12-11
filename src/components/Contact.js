import React from 'react';
import styled from 'styled-components';

import { color, breakpoint } from './variables/index';
import selectOptions from '../data/selectOptions';
import contactImage from '../assets/images/contact-rep.svg';
import MaxWidth from './MaxWidth';
import InputField from '../InputField';

const Title = styled.h2`
  margin-bottom: 1em;
`;

const Image = styled.img`
  order: 1;
  min-width: 0;
  max-width: 20em;
  height: auto;
  object-fit: contain;
`;

const FormContent = styled.div`
  flex-shrink: 0;
  max-width: 22em;
`;

const Form = styled.form``;

const SubmitBtn = styled.div`
  width: 10em;
  padding: .8em 1.2em;
  font-weight: 400;
  text-align: center;
  background-color: ${color.brand};
  border: 0;
  border-radius: 10em;
  cursor: pointer;
  transition: .2s ease;

  :hover {
    background-color: ${color.brandDark};
  }
`;

const Submit = styled.input`
  color: ${color.white};
  font-size: 1em;
`;

const SelectField = styled.div``;
const SelectLabel = styled.label`
  font-size: .75em;
`;

const SelectWrap = styled.div`  
  margin: .5em 0 2em;
  padding: .75em 1em;
  background-color: ${color.white};
  border: 1px solid ${color.grey30};
  border-style: solid;
  border-radius: .2em;
`;

const Select = styled.select`
  box-sizing: border-box; 
  width: 100%;
  font-size: 16px;
  background: 0;
  border: 0;
`;

const Contact = styled(MaxWidth)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10em;

  @media ${breakpoint.large} {
    flex-direction: row;
    justify-content: space-around;

    ${Image} {
      order: 0;
      max-width: 30em;
      margin-right: 2em;
    }
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
          <SelectField>
            <SelectLabel>Preferred location</SelectLabel>
            <SelectWrap>
              <Select>
                {selectOptions.map((opt) => {
                  const {
                    value, label, isDisabled, isSelected,
                  } = opt;
                  return (
                    <option
                      value={value}
                      disabled={isDisabled}
                      selected={isSelected}
                    >
                      {label}
                    </option>
                  );
                })}
              </Select>
            </SelectWrap>
          </SelectField>
          <SubmitBtn>
            <Submit type="submit" />
          </SubmitBtn>
        </Form>
      </FormContent>
    </Contact>
  );
};
