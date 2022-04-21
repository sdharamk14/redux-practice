import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions/userAction";

const User = () => {
  const { users, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) return <div>...Loading</div>;

  return (
    <div>
      <ul>
        {users.length &&
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default User;
