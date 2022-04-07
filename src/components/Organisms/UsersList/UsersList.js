import UsersListItem from 'components/Molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { MainWrapper } from 'assets/styles/StyledComponents/MainWrapper.style';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <MainWrapper>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </MainWrapper>
    </>
  );
};

export default UsersList;
