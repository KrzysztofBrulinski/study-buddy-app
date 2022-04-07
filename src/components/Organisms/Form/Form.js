import FormField from 'components/Molecules/FormField/FormField';
import { Button } from 'components/Atoms/Button/Button';
import styled from 'styled-components';
import { MainWrapper } from 'assets/styles/StyledComponents/MainWrapper.style';

const Form = ({ formValues, setFormValues, setUsers, users, initialFormState }) => {
  const handleFieldChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  const StyledTitle = styled.h1`
    color: ${({ theme }) => theme.colors.darkGrey};
    margin-bottom: 10px;
  `;

  return (
    <>
      <MainWrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label={'Name'} id="name" name="name" value={formValues.name} onChange={handleFieldChange} />
        <FormField label={'Attendance'} id="attendance" name="attendance" value={formValues.attendance} onChange={handleFieldChange} />
        <FormField label={'Average'} id="average" name="average" value={formValues.average} onChange={handleFieldChange} />
        <Button>Add</Button>
      </MainWrapper>
    </>
  );
};

export default Form;
