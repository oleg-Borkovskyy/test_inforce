import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <div className='navbar'>
        <Link className='navbar__links' to='/home'>Products</Link>
      </div>
      );
}

export default Navbar;