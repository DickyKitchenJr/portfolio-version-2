import React from "react";

function Header({styling}) {

  return (
    <>
      <h1 className={`${styling}-banner`}>DK's Portfolio</h1>
    </>
  );
}

export default Header;
