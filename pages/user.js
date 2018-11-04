import React from "react";
import axios from "axios";
import User from "../components/User";

const UserPage = ({ user }) => <User user={user} />;

UserPage.getInitialProps = async function getUser({ query: { username } }) {
  const { data: user } = await axios.get(
    `http://localhost:8080/api/users/${username}`,
  );

  return { user };
};

export default UserPage;
