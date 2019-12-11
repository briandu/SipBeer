import React from 'react';
import styled from 'styled-components';

import { color } from './components/variables';

const InputField = styled.div`
  margin: 1.5em 0;
`;

const Label = styled.label`
  font-size: .8em;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin-top: .5em;
  padding: .75em 1em;
  font-size: 16px;
  border: 1px solid ${color.grey30};
  border-style: solid;
  border-radius: .2em;
`;

export default ({ label, type, name }) => (
  <InputField>
    <Label>
      {label}
      <Input type={type} name={name} />
    </Label>
  </InputField>
);
