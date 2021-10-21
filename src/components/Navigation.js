import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
  const { color, underlineColor } = props;

  const navItems = [
    { title: 'one', pathname: '#one' },
    { title: 'two', pathname: '#two' },
    { title: 'three', pathname: '#three' },
    { title: 'four', pathname: 'https://google.com' },
  ];

  return (
    <Nav color={color} underlineColor={underlineColor}>
      <ul>
        {navItems.map((navItem) => (
          <li key={navItem.title}>
            {navItem.pathname.startsWith('#') && (
              <HashLink to={navItem.pathname}>{navItem.title}</HashLink>
            )}
            {navItem.pathname.startsWith('http') && (
              <a
                href={navItem.pathname}
                target="_blank"
                rel="noopener noreferrer"
              >
                {navItem.title}
              </a>
            )}
            {!navItem.pathname.startsWith('http') &&
              !navItem.pathname.startsWith('#') && (
                <Link to={navItem.pathname}>{navItem.title}</Link>
              )}
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
        color: ${(props) => props.color};
        padding: 0 12px 0 9px;
      }

      &:first-child {
        &::before {
          display: none;
        }
      }

      a {
        color: ${(props) => props.color};
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
            border-color: ${(props) => props.underlineColor};
            bottom: -0.4em;
            border-width: 2px;
            display: block;
          }
        }
      }
    }
  }
`;
