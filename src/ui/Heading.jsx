import { css, styled } from "styled-components";

const types = {
  h1: css`
    font-size: 3rem;
    font-weight: 600;
  `,
  h2: css`
    font-size: 2rem;
    font-weight: 600;
  `,
  h3: css`
    font-size: 2rem;
    font-weight: 500;
  `,
};

const Heading = styled.h1`
  ${(props) => types[props.as]}
  line-height: 1.4;
`;

export default Heading;
