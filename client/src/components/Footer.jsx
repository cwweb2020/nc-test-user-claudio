import React from "react";
import { Wrapper } from "../styledComponents/wrapper";

function Footer() {
  return (
    <>
      <section className="footer-total bg-black">
        <Wrapper width='85%' mh="25vh" jc="space-between" ai="center">
          <h2 className="fs-6 text-white">Copyright</h2>
          <h2 className="fs-6 text-white">All rights reserved</h2>
        </Wrapper>
      </section>
    </>
  );
}

export default Footer;
