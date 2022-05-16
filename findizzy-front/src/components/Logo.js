import React from 'react';

const Logo = (props) => {
  return (
    <div className='logo'>
      <a href="/">
        <img src={`/img/${props.image}.png`} alt="Logo" />
      </a>
    </div>
  );
};

export default Logo;