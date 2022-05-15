import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { MainWrapper } from 'assets/styles/GlobalStyledComponents/MainWrapper.style';
import { Title } from 'components/atoms/Title/Title';
import { useContext } from 'react';
import { UsersContext } from 'providers/UsersProvider';
import { useForm } from 'hooks/useForm';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  errorMessage: '',
};

const AddUser = () => {
  const { formValues, handleFieldChange, handleClearForm, handleConsentToggle, handleThrowError } = useForm(initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      handleClearForm();
    } else {
      handleThrowError('You need to accept that checkbox');
    }
  };

  return (
    <>
      <MainWrapper as="form" onSubmit={handleSubmitUser}>
        <Title>Add new student</Title>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleFieldChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleFieldChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleFieldChange} />
        <FormField label="Consent" id="consent" name="consent" type={'checkbox'} checked={formValues.consent} onChange={handleConsentToggle} />
        <Button>Add</Button>

        {formValues.errorMessage ? <p>{formValues.errorMessage}</p> : null}
      </MainWrapper>
    </>
  );
};

export default AddUser;
