import { createGlobalStyle } from "styled-components";

export const globals = {
    primaryColor: "rgb(0, 50, 150)",
    secondaryColor: "#fff",
    tertiaryColor: "rgb(255, 200, 0)"
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