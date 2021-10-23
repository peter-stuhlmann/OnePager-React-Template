import styled from 'styled-components';

export default function SectionImage(props) {
  const { src, alt } = props;

  return (
    <StyledSectionImage>
      <img src={src} alt={alt} />
    </StyledSectionImage>
  );
}

const StyledSectionImage = styled.div`
  height: calc(100vh - 140px);
  margin: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;
