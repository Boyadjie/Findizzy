import React from 'react';

const Socials = (props) => {
  return (
    <div className='socials'>
      {props.socials.map((item) =>
        <a key={item.name} href={item.link}><img src={`/img/socials/${item.image}`} alt={`${item.name} Logo`} /></a>
      )}
    </div>
  );
};

export default Socials;