import React, { useEffect, useRef, useState } from "react";
import { Mybutton } from "../styledComponents/Mybutton";
import { Title } from "../styledComponents/Title";
import { Wrapper } from "../styledComponents/wrapper";
import { UserConsumer } from "../context/UserProvider";
import { checkSsn } from "../helper";
import IdleTimer from "../IdleTimer";

function Home() {
  const { insertData, users, getData } = UserConsumer();
  const formRef = useRef();
  const [collection, setCollection] = useState([]);
  const [isTimeout, setIsTimeout] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    address: "",
    ssn: "",
  });

  useEffect(() => {
    if (users.length === 0) {
      getData();
    }
  }, [users]);

  useEffect(() => {
    setIsTimeout(false);
    const timer = new IdleTimer({
      timeout: 120, //expire after 10 seconds
      onTimeout: () => {
        setIsTimeout(true);
        getData();
      },
      onExpired: () => {
        //do something if expired on load
        setIsTimeout(true);
        //  getData()
      },
    });

    return () => {
      timer.cleanUp();
    };
  }, [isTimeout]);

  const handleData = (e) => {
    //  user.current[e.target.name] = e.target.value;
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkSsn(users, user.ssn)) {
      alert("SSN already exist");
      return;
    }
    insertData(user);
    setCollection([...collection, user]);
    alert("information insterted");
    e.target.reset();
  };

  const handleReset = (e) => {
    formRef.current.reset();
  };

  return (
    <>
      <section className="form-total">
        <Title>Add User </Title>
        <div className="form-wrapper">
          <form className="form-label" onSubmit={handleSubmit} ref={formRef}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name.."
                className="form-control"
                name="firstName"
                onChange={handleData}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Last Name.."
                className="form-control"
                name="lastName"
                onChange={handleData}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Address.."
                className="form-control"
                name="address"
                onChange={handleData}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="SSN.."
                className="form-control"
                name="ssn"
                onChange={handleData}
              />
            </div>
            <Wrapper width="60%" mh="25vh" jc="space-between" ai="center">
              <Mybutton Bc="#2374e1">Save</Mybutton>
              <Mybutton Bc="#e2504c" type="button" onClick={handleReset}>
                Reset
              </Mybutton>
            </Wrapper>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
