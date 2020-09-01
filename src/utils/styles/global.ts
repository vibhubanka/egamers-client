import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { sm, md, lg, xl } from './breakpoints';

export const container = css`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${sm}px) {
    max-width: 540px;
  }

  @media (min-width: ${md}px) {
    max-width: 720px;
  }

  @media (min-width: ${lg}px) {
    max-width: 960px;
  }

  @media (min-width: ${xl}px) {
    max-width: 1140px;
  }
`;

export const Container = styled.div(container);

export default css`
  :root {
    --dark: rgb(29, 34, 43);
    --light: #f8f9fa;
  }

  body {
    margin: 0;
  }

  .app {
    background-color: var(--dark);
    color: var(--light);
  }
`;
