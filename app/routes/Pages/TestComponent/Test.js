import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsersRequest } from "../../../store/actions/users";

import UsersList from "./UsersList";

const Test = (props) => {
  const { getUsersRequest, users } = props;

  useEffect(() => {
    getUsersRequest();
  }, [getUsersRequest]);

  return (
    <>
      <UsersList users={users.items} />
    </>
  );
};

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
})(Test);
