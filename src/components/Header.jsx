import React from "react";
const Header = () => {
  return (
    <div className="header_wrapper">
       <div className="Logo"><img src="https://i.gifer.com/H0be.gif" alt="" /></div>
       <div className="Brodcast"><marquee>** Site is currently under development. So please do not perform any activity</marquee></div>
        <ul>
          <li className="mx-1"><a href="#">Login</a></li>
          <li className="mx-2"><a href="#">About</a></li>
        </ul>
    </div>
  );
};

export default Header;
