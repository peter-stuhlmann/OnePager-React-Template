import styled from 'styled-components';

const SectionStyles = styled.section`
  position: relative;
  z-index: 1;
  background-color: #fff;

  & > div {
    box-sizing: border-box;
    padding: 96px;

    @media (max-width: 900px) {
      padding: 10px;
    }

    &:first-child {
      width: 50%;
      height: 100vh;
      position: sticky;
      top: 0;
      bottom: 0;
      left: 0;
      float: left;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 900px) {
        width: 100%;
        float: none;
        position: relative;
      }
    }

    &:last-child {
      width: 50%;
      min-height: 100vh;
      margin-left: 50%;

      @media (max-width: 900px) {
        width: 100%;
        margin-left: 0;
      }
    }

    p,
    h3 {
      margin: 0;
      padding: 24px;
    }

    ol {
      list-style-type: none;
      counter-reset: ol-counter;
      margin: 0;
      padding: 0;

      & > li {
        counter-increment: ol-counter;

        &::before {
          content: counter(ol-counter) '. ';
          color: rgb(247, 72, 78);
          font-weight: bold;
        }
      }
    }

    a {
      color: rgb(247, 72, 78);

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

export default SectionStyles;
