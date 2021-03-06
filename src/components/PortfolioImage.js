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
    closed,
    setClosed,
    index,
    selectedItem,
    setSelectedItem,
    inViewPort,
    list,
  } = props;

  const handleOpenClick = () => {
    setOpen(true);
    setClosed(false);
    setSelectedItem(index);
  };

  const handleNextClick = () => {
    setOpen(true);
    setClosed(false);
    setSelectedItem(index + 1);
  };

  const handleCloseClick = () => {
    setClosed(true);

    setTimeout(() => {
      setOpen(false);
      setSelectedItem(null);
    }, 2250);
  };

  console.log(id);

  return (
    <Item index={index} selectedItem={selectedItem}>
      {open && (
        <Button
          to={'#' + id}
          onClick={() => handleCloseClick()}
          inViewPort={inViewPort}
          closed={closed}
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <i />
        </Button>
      )}
      <StyledPortfolioImage id={id} open={open} closed={closed}>
        <img src={src} alt={alt} />
        <div>
          <h3>{title && title}</h3>
          <div>{description && description}</div>
          {!open && (
            <HashLink
              className="more"
              to={'#' + id}
              onClick={() => handleOpenClick()}
            >
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <div>More</div>
            </HashLink>
          )}
        </div>
      </StyledPortfolioImage>
      <Content open={open} dangerouslySetInnerHTML={{ __html: content }} />
      {open && index + 1 < list.length && (
        <NextButton
          to={'#' + list[index + 1].id}
          onClick={() => handleNextClick()}
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <div>Next</div>
        </NextButton>
      )}
    </Item>
  );
}

const Item = styled.div`
  display: ${(props) =>
    props.selectedItem === null
      ? 'block'
      : props.selectedItem === props.index
      ? 'block'
      : 'none'};
`;

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

    .more {
      transform: scale(1);
      opacity: 1;
    }
  }

  .more {
    transition: 0.4s transform cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
    font-size: 16px;
    display: block;
    width: 3.75em;
    height: 4.25em;
    margin: 25px auto 0 auto;
    transform-origin: center center;
    color: #fff;
    position: absolute;
    top: 57px;
    text-decoration: none;
    transform: scale(0.5);
    opacity: 0;

    @media (max-width: 1050px) {
      transform: scale(1);
      opacity: 1;
    }

    span {
      border-top: 1.125em solid transparent;
      border-right: none;
      border-bottom: 1em solid transparent;
      border-left: 1.875em solid #292929;
      position: absolute;
      top: 0;
      left: 50%;
      transform-origin: left bottom;
      border-radius: 3px 3px 0 0;
      z-index: 100;

      &:nth-child(1) {
        transform: rotateZ(60deg) rotateY(0) rotateX(0deg);
        transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
      }
      &:nth-child(2) {
        transform: rotateZ(120deg) rotateY(0) rotateX(0deg);
        transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s;
      }
      &:nth-child(3) {
        transform: rotateZ(180deg) rotateY(0) rotateX(0deg);
        transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s;
      }
      &:nth-child(4) {
        transform: rotateZ(240deg) rotateY(0) rotateX(0deg);
        transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s;
      }
      &:nth-child(5) {
        transform: rotateZ(300deg) rotateY(0) rotateX(0deg);
        transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
      }
      &:nth-child(6) {
        transform: rotateZ(360deg) rotateY(0) rotateX(0deg);
        transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
      }
    }

    div {
      transition: 0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045) 0s;
      z-index: 200;
      position: absolute;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 0.05em;
      top: 50%;
      left: 50%;
      display: block;
      transform: translate(-50%, -50%);
      line-height: 1em;
    }
  }

  img {
    ${(props) => props.open && 'animation: heightMinimize 2s forwards 0.15s;'};
    ${(props) => props.closed && 'animation: heightMaximize 2s forwards;'};
    height: 100vh;
    transition: 15s transform linear;

    &:hover {
      transform: scale(1.3);
    }

    @keyframes heightMinimize {
      from {
        height: 100vh;
      }
      to {
        height: 60vh;
      }
    }

    @keyframes heightMaximize {
      from {
        height: 60vh;
      }
      to {
        height: 100vh;
      }
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
  display: ${(props) => (props.open ? 'block' : 'none')};
  padding: 70px 0 50px 0;
  opacity: 0;
  ${(props) => props.open && 'animation: opacity 2s forwards 0.15s; '};

  p {
    padding: 96px;
  }

  img {
    width: 100%;
  }

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Button = styled(HashLink)`
  position: ${(props) => (props.more ? 'relative' : 'absolute')};
  ${(props) =>
    !props.more &&
    ` position: absolute;
      top: 24vh;
      left: 50%;
      transform: translate(-50%, -50%);
      
      @media (min-width: 1051px) {
        animation: buttonAnimation 2s forwards 0.15s;
      }

      @keyframes buttonAnimation {
        from {
          left: 50%;
        }
        to {
          left: 30%;
        }
      }
    `};

  display: block;
  ${(props) => (props.closed ? 'display: none' : 'display: block')};
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
    display: ${(props) => (props.inViewPort ? 'block' : 'none')};

    ${(props) =>
      !props.more &&
      `
        top: 24px;
        right: 24px;
        left: auto;
        position: fixed;
        transform: none;
      `}

    ${(props) =>
      props.more &&
      `
        opacity: 1;
        display: block;
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
    top: 9.5px;
    left: 4.5px;
    font-size: 12px;
    color: #fff;
  }
`;

const NextButton = styled(HashLink)`
  transition: 0.4s transform cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  font-size: 16px;
  display: block;
  width: 3.75em;
  height: 4.25em;
  padding-bottom: 50px;
  margin: 25px auto 0 auto;
  transform-origin: center center;
  color: #fff;
  position: relative;
  text-decoration: none;

  span {
    border-top: 1.125em solid transparent;
    border-right: none;
    border-bottom: 1em solid transparent;
    border-left: 1.875em solid #292929;
    position: absolute;
    top: 0;
    left: 50%;
    transform-origin: left bottom;
    border-radius: 3px 3px 0 0;
    z-index: 100;

    &:nth-child(1) {
      transform: rotateZ(60deg) rotateY(0) rotateX(0deg);
      transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
    }
    &:nth-child(2) {
      transform: rotateZ(120deg) rotateY(0) rotateX(0deg);
      transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s;
    }
    &:nth-child(3) {
      transform: rotateZ(180deg) rotateY(0) rotateX(0deg);
      transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s;
    }
    &:nth-child(4) {
      transform: rotateZ(240deg) rotateY(0) rotateX(0deg);
      transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s;
    }
    &:nth-child(5) {
      transform: rotateZ(300deg) rotateY(0) rotateX(0deg);
      transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
    }
    &:nth-child(6) {
      transform: rotateZ(360deg) rotateY(0) rotateX(0deg);
      transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
    }
  }

  div {
    transition: 0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045) 0s;
    z-index: 200;
    position: absolute;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.05em;
    top: 30%;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    line-height: 1em;
    color: #fff !important;
  }
`;
