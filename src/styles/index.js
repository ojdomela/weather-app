import { createGlobalStyle } from "styled-components";

export const globals = {
    primaryColor: "#01ad01",
    secondaryColor: "#fff",
    tertiaryColor: "#e2eff8"
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
        min-height: 100vh;
        background-color: ${globals.secondaryColor};
    }
`