import { createGlobalStyle } from "styled-components";

export const globals = {
    primaryColor: "#00aaff",
    secondaryColor: "#ff00aa",
    tertiaryColor: "#00ffaa",
    backgroundColor: "#fafafa",
}


export default createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-color: ${globals.backgroundColor};
    }
`