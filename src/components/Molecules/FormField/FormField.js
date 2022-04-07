import React from 'react';
import { Label } from 'components/Atoms/Label/Label';
import { Input } from 'components/Atoms/Input/Input';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:last-of-type {
    margin-bottom: 15px;
  }

  Label {
    margin: 10px 0;
  }
`;

const FormField = ({ value, onChange, label, name, id, type = 'text', ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default FormField;