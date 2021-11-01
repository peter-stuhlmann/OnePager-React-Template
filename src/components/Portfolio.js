import React, { useEffect, useRef, useState } from 'react';

import StyledSection from './StyledSection';
import SectionImage from './SectionImage';
import Navigation from './Navigation';
import PortfolioNavigation from './PortfolioNavigation';
import PortfolioImage from './PortfolioImage';
import styled from 'styled-components';

export default function Portfolio() {
  const items = [
    {
      id: 'one',
      image: 'https://image-placeholder.vercel.app/?w=250&h=120&text=%20',
      altText: 'Placeholder',
      title: 'Lorem ipsum I',
      description: 'Diam nonumy eirmod tempor invidunt',
      content:
        '<p><b>Lorem ipsum dolor sit amet</b><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</b><br />At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><img src="https://image-placeholder.vercel.app/?w=550&h=250&text=Image"/><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><img src="https://image-placeholder.vercel.app/?w=550&h=250&text=Image" alt="Placeholder"/><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p><b>Lorem ipsum dolor sit amet</b></p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet</p>',
    },
    {
      id: 'two',
      image:
        'https://image-placeholder.vercel.app/?w=250&h=120&text=%20&background=gray',
      altText: 'Placeholder',
      title: 'Lorem ipsum II',
      description: 'Diam nonumy eirmod tempor invidunt',
      content:
        '<p><b>Lorem ipsum dolor sit amet</b><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</b><br />At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><img src="https://image-placeholder.vercel.app/?w=550&h=250&text=Image"/><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><img src="https://image-placeholder.vercel.app/?w=550&h=250&text=Image" alt="Placeholder"/><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p><b>Lorem ipsum dolor sit amet</b></p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet</p>',
    },
    {
      id: 'three',
      image: 'https://image-placeholder.vercel.app/?w=250&h=120&text=%20',
      altText: 'Placeholder',
      title: 'Lorem ipsum III',
      description: 'Diam nonumy eirmod tempor invidunt',
      content:
        '<p><b>Lorem ipsum dolor sit amet</b><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</b><br />At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><img src="https://image-placeholder.vercel.app/?w=550&h=250&text=Image"/><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><img src="https://image-placeholder.vercel.app/?w=550&h=250&text=Image" alt="Placeholder"/><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p><b>Lorem ipsum dolor sit amet</b></p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet</p>',
    },
  ];

  const [open, setOpen] = useState(false);
  const [closed, setClosed] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [inViewPort, setInViewPort] = useState(0);

  const list = selectedItem !== null ? [items[selectedItem]] : items;

  const ref = useRef();

  useEffect(() => {
    const onScroll = () => {
      setInViewPort(
        ref?.current?.offsetTop <= window.pageYOffset + 50 &&
          ref?.current?.offsetTop + ref?.current?.offsetHeight >=
            window.pageYOffset
      );
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [inViewPort]);

  return (
    <CustomizedStyledSection id="work" ref={ref} open={open} closed={closed}>
      <div style={{ backgroundColor: '#fff' }}>
        <div>
          <div>
            <SectionImage
              src="https://image-placeholder.vercel.app/?w=250&h=120&text=Work"
              alt="Placeholder"
            />
            <PortfolioNavigation
              setOpen={setOpen}
              setClosed={setClosed}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <Navigation color="#000" underlineColor="rgb(247, 72, 78)" />
        </div>
      </div>
      <div style={{ padding: 0 }}>
        {list.map((item, index) => (
          <PortfolioImage
            key={item.title}
            id={item.id}
            src={item.image}
            alt={item.altText}
            title={item.title}
            description={item.description}
            content={item.content}
            open={open}
            setOpen={setOpen}
            closed={closed}
            setClosed={setClosed}
            index={index}
            setSelectedItem={setSelectedItem}
            inViewPort={inViewPort}
          />
        ))}
      </div>
    </CustomizedStyledSection>
  );
}

const CustomizedStyledSection = styled(StyledSection)`
  @media (min-width: 1051px) {
    & > div {
      &:first-child {
        ${(props) => props.open && 'animation: leftSection 2s forwards 0.15s;'}
        ${(props) => props.closed && 'animation: leftSectionClose 2s forwards;'}
      }
      &:last-child {
        ${(props) => props.open && 'animation: rightSection 2s forwards 0.15s;'}
        ${(props) =>
          props.closed && 'animation: rightSectionClose 2s forwards;'}

        img {
          width: 100%;
        }
      }
    }
  }

  @keyframes leftSection {
    from {
      width: 50%;
    }
    to {
      width: 30%;
    }
  }

  @keyframes rightSection {
    from {
      width: 50%;
      margin-left: 50%;
    }
    to {
      width: 70%;
      margin-left: 30%;
    }
  }

  @keyframes leftSectionClose {
    from {
      width: 30%;
    }
    to {
      width: 50%;
    }
  }

  @keyframes rightSectionClose {
    from {
      width: 70%;
      margin-left: 30%;
    }
    to {
      width: 50%;
      margin-left: 50%;
    }
  }
`;
