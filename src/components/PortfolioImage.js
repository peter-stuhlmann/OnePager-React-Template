import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export default function PortfolioImage(props) {
  const {
    src,
    alt,
    title,
    description,
    id,
    content,
    open,
    setOpen,
    index,
    setSelectedItem,
    inViewPort,
  } = props;

  const handleOpenClick = () => {
    setOpen(true);
    setSelectedItem(index);
  };

  const handleCloseClick = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      {open && inViewPort && (
        <Button to={'#' + id} onClick={() => handleCloseClick()}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <i />
        </Button>
      )}
      <StyledPortfolioImage id={id} open={open}>
        <img src={src} alt={alt} />
        <div>
          <h3>{title && title}</h3>
          <div>{description && description}</div>
          {!open && (
            <Button more to={'#' + id} onClick={() => handleOpenClick()}>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <div>MORE</div>
            </Button>
          )}
        </div>
      </StyledPortfolioImage>
      {open && (
        <Content open={open} dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </>
  );
}

const StyledPortfolioImage = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;

  &:hover {
    a {
      opacity: 1;
    }
  }

  img {
    height: ${(props) => (props.open ? '60vh' : '100vh')};
    transition: 15s transform linear;

    &:hover {
      transform: scale(1.3);
    }
  }

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: #fff;

    h3 {
      margin: 0;
      padding: 0 !important;
    }
  }
`;

const Content = styled.div`
  padding: 70px 0 50px 0;

  p {
    padding: 96px;
  }

  img {
    width: 100%;
  }
`;

const Button = styled(HashLink)`
  position: ${(props) => (props.more ? 'relative' : 'absolute')};
  ${(props) =>
    !props.more &&
    'position: absolute; top: 24vh; left: 30%; transform: translate(-50%, -50%);'};
  display: block;
  width: 3.75em;
  height: 4.25em;
  margin: ${(props) => (props.more ? '20px auto' : '0 auto;')};
  transform-origin: center center;
  z-index: 20001;
  font-size: 11px;
  cursor: pointer;
  opacity: ${(props) => (props.more ? '0' : '1')};
  transition: 0.2s;

  @media (max-width: 1050px) {
    ${(props) =>
      !props.more &&
      `
        top: 24px;
        right: 24px;
        left: auto;
        position: fixed;
        transform: none;
      `}
  }

  span {
    border-top: 1.125em solid transparent;
    border-right: none;
    border-bottom: 1em solid transparent;
    border-left: 1.875em solid
      ${(props) => (props.more ? '#292929' : '#f7484e')};
    position: absolute;
    top: 0;
    left: 50%;
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

  i {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 16px;
    line-height: 1em;
    height: 0;
    left: 0;
    top: 8px;
    transform-origin: center center;
    margin: 0 1.1em;
    background-color: #fff;
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
      transform: rotateZ(45deg);
      top: -1px;
      left: 0;
    }

    &::after {
      transform: rotateZ(-45deg);
      bottom: -1px;
      left: 0;
    }
  }

  div {
    position: absolute;
    top: 8px;
    left: 4.5px;
    font-size: 12px;
    color: #fff;
  }
`;
