import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { MainWrapper } from 'assets/styles/GlobalStyledComponents/MainWrapper.style';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';

const UsersList = ({ users }) => {
  return (
    <>
      <MainWrapper>
        <Title>Students</Title>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </MainWrapper>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersList;
