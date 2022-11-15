import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  ${({ theme }) => css`
    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: ${theme['gray-100']};
      background-color: ${theme['gray-800']};
      font: 400 1rem 'Roboto', sans-serif;

      :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${theme['green-500']};
        color: ${theme['gray-100']};
      }
    }
  `}

  border-style,
  input,
  textarea,
  button,
  select {
    font: inherit;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
`
