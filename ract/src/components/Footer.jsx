import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/137818849?s=400&u=f336cd39b8b5824dc42d45a71d230a72b2bc21a6&v=4"}
          alt="Founder"
        />

        <h2>vikas Rajput</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.facebook.com/profile.php?id=100015353594949&mibextid=ZbWKwL" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a href="https://instagram.com/vikas_rajput2002?igshid=OGQ5ZDc2ODk2ZA==" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Vikasrajput12" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;