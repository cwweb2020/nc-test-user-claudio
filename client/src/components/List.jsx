import React from "react";

function List({ user, index }) {
  return (
    <>
      <tr>
        <td>{(index+1)}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.address}</td>
        <td>{user.ssn}</td>
      </tr>
    </>
  );
}

export default List;
