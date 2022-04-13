import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { MainWrapper } from 'assets/styles/GlobalStyledComponents/MainWrapper.style';
import { Title } from 'components/atoms/Title/Title';
import { useContext, useState } from 'react';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleFieldChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues(initialFormState);
  };

  return (
    <>
      <MainWrapper as="form" onSubmit={handleSubmitUser}>
        <Title>Add new student</Title>
        <FormField label={'Name'} id="name" name="name" value={formValues.name} onChange={handleFieldChange} />
        <FormField label={'Attendance'} id="attendance" name="attendance" value={formValues.attendance} onChange={handleFieldChange} />
        <FormField label={'Average'} id="average" name="average" value={formValues.average} onChange={handleFieldChange} />
        <Button>Add</Button>
      </MainWrapper>
    </>
  );
};

export default AddUser;
