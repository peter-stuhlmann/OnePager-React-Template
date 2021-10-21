import styled from 'styled-components';

export default function PortfolioImage(props) {
  const { src, alt, title, description } = props;

  return (
    <StyledPortfolioImage>
      <img src={src} alt={alt} />
      <div>
        <h3>{title && title}</h3>
        <div>{description && description}</div>
      </div>
    </StyledPortfolioImage>
  );
}

const StyledPortfolioImage = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;

  img {
    height: 100vh;
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
