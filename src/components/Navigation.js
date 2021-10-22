import React, { useState } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
  const { color, underlineColor, main } = props;

  const navItems = [
    { title: 'About', pathname: '#about' },
    { title: 'Work', pathname: '#work' },
    { title: 'Contact', pathname: '#contact' },
    { title: 'Shop', pathname: 'https://google.com' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav color={color} underlineColor={underlineColor} main={main}>
        <ul>
          {navItems.map((navItem) => (
            <NavItem navItem={navItem} setOpen={setOpen} />
          ))}
        </ul>
      </Nav>
      <Button onClick={() => setOpen(!open)} open={open}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <i />
      </Button>
      {open && (
        <MobileNav>
          {navItems.map((navItem) => (
            <NavItem navItem={navItem} setOpen={setOpen} />
          ))}
        </MobileNav>
      )}
    </>
  );
}

function NavItem(props) {
  const { navItem, setOpen } = props;

  return (
    <li key={navItem.title} onClick={() => setOpen(false)}>
      {navItem.pathname.startsWith('#') && (
        <HashLink to={navItem.pathname}>{navItem.title}</HashLink>
      )}
      {navItem.pathname.startsWith('http') && (
        <a href={navItem.pathname} target="_blank" rel="noopener noreferrer">
          {navItem.title}
        </a>
      )}
      {!navItem.pathname.startsWith('http') &&
        !navItem.pathname.startsWith('#') && (
          <Link to={navItem.pathname}>{navItem.title}</Link>
        )}
    </li>
  );
}

const MobileNav = styled.ul`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;

  a {
    padding: 12px;
    display: block;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  padding: 36px 15px;

  @media (max-width: 900px) {
    display: ${(props) => (props.main ? 'relative' : 'none')};
  }

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

const Button = styled.a`
  position: fixed;
  top: 24px;
  left: 24px;
  display: block;
  width: 3.75em;
  height: 4.25em;
  margin: 0 auto;
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
  z-index: 20001;
  font-size: 11px;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }

  span {
    border-top: 1.125em solid transparent;
    border-right: none;
    border-bottom: 1em solid transparent;
    border-left: 1.875em solid #f7484e;
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    border-radius: 3px 3px 0 0;

    &:nth-child(1) {
      transform: rotateZ(60deg) rotateY(0deg) rotateX(0);
    }

    &:nth-child(2) {
      transform: rotateZ(120deg) rotateY(0deg) rotateX(0);
    }

    &:nth-child(3) {
      transform: rotateZ(180deg) rotateY(0deg) rotateX(0);
    }

    &:nth-child(4) {
      transform: rotateZ(240deg) rotateY(0deg) rotateX(0);
    }

    &:nth-child(5) {
      transform: rotateZ(300deg) rotateY(0deg) rotateX(0);
    }

    &:nth-child(6) {
      transform: rotateZ(360deg) rotateY(0deg) rotateX(0);
    }
  }

  ${(props) =>
    !props.open &&
    `&:hover {
      i::before {
        left: 3px;
      }
      i::after {
        left: -3px;
      }
    }`}

  i {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 16px;
    line-height: 1em;
    height: ${(props) => (!props.open ? '2px' : '0')};
    left: 0;
    top: 8px;
    transform-origin: center center;
    margin: 0 1.1em;
    background: #fff;
    transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1),
      height 0.4s cubic-bezier(0.77, 0, 0.175, 1),
      margin 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    text-transform: none;
    font-style: normal;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 16px;
      height: 2px;
      left: 0;
      position: absolute;
      background: #fff;
      transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1),
        left 0.4s cubic-bezier(0.77, 0, 0.175, 1),
        top 0.4s cubic-bezier(0.77, 0, 0.175, 1),
        bottom 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    }

    &::before {
      ${(props) =>
        !props.open
          ? ` 
            top: -6px;
            transform: rotateZ(0deg);`
          : `
            transform: rotateZ(45deg);
            top: -1px;
            left: 0;`}
    }

    &::after {
      ${(props) =>
        !props.open
          ? ` 
            bottom: -6px;
            transform: rotateZ(0deg);`
          : `
            transform: rotateZ(-45deg);
            bottom: -1px;
            left: 0;`}
    }
  }
`;
