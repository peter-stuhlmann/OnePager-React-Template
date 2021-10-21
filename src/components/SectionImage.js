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
  width: calc(100% - 20px);
  height: calc(100vh - 120px);
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;
