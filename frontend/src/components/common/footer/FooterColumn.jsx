import React from 'react';
import { Link } from 'react-router-dom';

// Компонент для колонки с полезными ссылками по категориям
const FooterColumn = ({ title, links }) => {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}><Link to={link.url}>{link.text}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;