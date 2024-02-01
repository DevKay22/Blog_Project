import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul className='footer__categories'>
        <li><Link to="/post/categories/agriculture">Agriculture</Link></li>
        <li><Link to="/post/categories/business">Business</Link></li>
        <li><Link to="/post/categories/education">Education</Link></li>
        <li><Link to="/post/categories/entertainment">Entertainment</Link></li>
        <li><Link to="/post/categories/arts">Arts</Link></li>
        <li><Link to="/post/categories/investment">Investment</Link></li>
        <li><Link to="/post/categories/uncategorized">Uncategorized</Link></li>
        <li><Link to="/post/categories/weather"> Weather</Link></li>
        <li><Link to="/post/categories/sport">Sport</Link></li>

      </ul>

      <div className='footer__copyright'>
        <small>
          All Rights Reserved &copy; Copyright, Kay.
        </small>

      </div>
    </footer>
  )
}

export default Footer