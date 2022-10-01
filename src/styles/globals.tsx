import { css, Global } from '@emotion/react'

const styles = css`
  :root {
    --color-primary: #465f81;
    --color-secondary: #ffffff;

    --bg-primary: #182642;
    --bg-secondary: #141620;

    --text-primary: #ffffff;
    --text-secondary: #222222;

    --color-button: #486084;
    --color-button-text: #ffffff;
    --color-button-hover: #7296c0;
    --color-button-hover-text: #ffffff;

    --color-input: #262d44;
    --color-input-text: #ffffff;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-family: Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #14161a;
    color: white;
  }
`

const GlobalStyles = () => {
  return <Global styles={styles} />
}

export default GlobalStyles
