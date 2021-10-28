import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export default function PortfolioNavigation(props) {
  const { setOpen, setClosed, setSelectedItem } = props;

  const navItems = [
    { title: 'One', pathname: '#one' },
    { title: 'Two', pathname: '#two' },
    { title: 'Three', pathname: '#three' },
  ];

  const handleNavItemClick = (index) => {
    setOpen(true);
    setClosed(false);
    setSelectedItem(index);
  };

  return (
    <Nav>
      <ul>
        {navItems.map((navItem, index) => (
          <li key={navItem.title}>
            <HashLink
              to={navItem.pathname}
              onClick={() => handleNavItemClick(index)}
            >
              {navItem.title}
            </HashLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  padding: 36px 15px;
  position: absolute;
  top: 55vh;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;

    li {
      &::before {
        content: '/';
        color: #000;
        padding: 0 12px 0 9px;
      }

      &:first-child {
        &::before {
          display: none;
        }
      }

      a {
        color: #000;
        text-decoration: none;
        font-size: 0.875em;

        &:hover {
          color: rgb(247, 72, 78);
        }
      }
    }
  }
`;
