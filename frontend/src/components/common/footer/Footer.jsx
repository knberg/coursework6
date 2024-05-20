import React from 'react';
import FooterColumn from './FooterColumn';
import { Link } from 'react-router-dom';

const Footer = () => {
  const columns = [
    {
      title: 'Категория 1',
      links: [
        { url: '/category1/link1', text: 'Ссылка 1' },
        { url: '/category1/link2', text: 'Ссылка 2' },
        { url: '/category1/link3', text: 'Ссылка 3' },
      ],
    },
    {
      title: 'Категория 2',
      links: [
        { url: '/category2/link1', text: 'Ссылка 1' },
        { url: '/category2/link2', text: 'Ссылка 2' },
        { url: '/category2/link3', text: 'Ссылка 3' },
      ],
    },
    {
        title: 'Категория 3',
        links: [
          { url: '/category2/link1', text: 'Ссылка 1' },
          { url: '/category2/link2', text: 'Ссылка 2' },
          { url: '/category2/link3', text: 'Ссылка 3' },
        ],
      },
  ];

  return (
    <footer className="footer">
      <div className="footer-columns">
          <div className='footer-column'>
            <Link to="/" className="logo">GoodJob</Link>
          </div>
          {columns.map((column, index) => (
            <FooterColumn key={index} title={column.title} links={column.links} />
          ))}
      </div>
      <div className="footer-bottom">
        <p>© 2024 GoodJob. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;