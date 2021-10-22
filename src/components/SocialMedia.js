import React from 'react';
import styled from 'styled-components';

import Twitter from '../assets/icons/Twitter';
import Xing from '../assets/icons/Xing';
import LinkedIn from '../assets/icons/LinkedIn';

export default function SocialMedia() {
  const icons = [
    {
      title: 'Twitter',
      icon: <Twitter />,
      href: 'https://twitter.com',
    },
    {
      title: 'Xing',
      icon: <Xing />,
      href: 'https://xing.com',
    },
    {
      title: 'LinkedIn',
      icon: <LinkedIn />,
      href: 'https://linkedin.com',
    },
  ];

  return (
    <Container>
      {icons.map((icon) => (
        <Icon
          key={icon.title}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon.icon}
        </Icon>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 24px;
  margin-top: 20px;
`;

const Icon = styled.a`
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  margin-right: 40px;
  cursor: pointer;
`;
