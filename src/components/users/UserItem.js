import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_url, id } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt={login}
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>

      <div>
        <a
          href={"https://github.com/mojombo"}
          className="btn btn-dark btn-sm my-1"
        >
          Moar
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};
export default UserItem;