import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export default function Navigation() {
  const navItems = [
    { title: 'one', pathname: '#one' },
    { title: 'two', pathname: '#two' },
    { title: 'three', pathname: '#three' },
    { title: 'four', pathname: '#four' },
  ];

  return (
    <Nav>
      <ul>
        {navItems.map((navItem) => (
          <li key={navItem.title}>
            <HashLink to={navItem.pathname}>{navItem.title}</HashLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  padding: 36px 15px;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;

    li {
      &::before {
        content: '/';
        color: #f7484e;
        padding: 0 12px 0 9px;
      }

      &:first-child {
        &::before {
          display: none;
        }
      }

      a {
        color: #f7484e;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.875em;
        font-weight: bold;
        position: relative;
        display: inline-block;

        &:hover {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            border-bottom: 3px solid;
            border-color: #fff;
            bottom: -0.4em;
            border-width: 2px;
            display: block;
          }
        }
      }
    }
  }
`;
