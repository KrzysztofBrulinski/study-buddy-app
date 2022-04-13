import UsersList from 'components/organisms/UsersList/UsersList';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import { useContext } from 'react';
import { UsersContext } from 'providers/UsersProvider';

const Dashboard = () => {
  const { users } = useContext(UsersContext);

  return <UsersList users={users} />;
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
