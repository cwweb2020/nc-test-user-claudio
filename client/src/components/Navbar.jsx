import React from "react";
import { Link } from "react-router-dom";
import { AuthConsumer } from "../context/AuthProvider";
import { Mybutton } from "../styledComponents/Mybutton";

function Navbar() {
  const { removeToken } = AuthConsumer();
  return (
    <>
      <section className="nav-total">
        <div className="nav-wrapper">
          <div className="box box1">
            <h2>Aplication</h2>
          </div>
          <div className="box box2">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/user">
                <li>Users</li>
              </Link>
              <Mybutton Bc="red" onClick={removeToken}>
                Logout
              </Mybutton>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
