import React, { useEffect, useState } from "react";
import List from "../components/List";
import { UserConsumer } from "../context/UserProvider";
import { Wrapper } from "../styledComponents/wrapper";
import IdleTimer from '../IdleTimer';

function Table() {
  const [isTimeout, setIsTimeout] = useState(false);
  const { users, getData } = UserConsumer()
  
  useEffect(() => {
    if (users.length === 0) {
      getData();
    }
      
  }, [users])

  useEffect(() => {
    setIsTimeout(false);
    const timer = new IdleTimer({
      timeout: 120, //expire after 10 seconds
      onTimeout: () => {
        setIsTimeout(true)
        getData();
      },
      onExpired: () => {
        //do something if expired on load
        setIsTimeout(true);
      //  getData()
      }
  
    });

    return () => {
      timer.cleanUp();
    };
  }, [isTimeout]);
 
  return (
    <>
    <Wrapper width="100%" mh="100vh" jc="center" ai="flex-start">
      <table
        className="table table-striped"
        style={{ width: "55%", marginTop: "10vh" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>SSN</th>
          </tr>
        </thead>
        <tbody>
        {
          users.length > 0 ? users.map((user, index) => (
             <List key={index} user={user} index={index} />
          ))
          : <tr><th>No user</th></tr>
        }
        </tbody>
      </table>
      </Wrapper>
    </>
  );
}

export default Table;
