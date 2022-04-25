import React from 'react';

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h3>Notre Newsletter</h3>

      <form>
        <input type="mail" name='mail' id='mail' placeholder='adresse.mail@gmail.com' />
        <input type="submit" name="submit" value="S'ABONNER" className='btn'/>
      </form>
    </div>
  );
};

export default Newsletter;