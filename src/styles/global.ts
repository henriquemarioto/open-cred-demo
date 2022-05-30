import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
    */
    *{
        box-sizing: border-box;
        
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        font-family: Helvetica, sans-serif;
        vertical-align: baseline;
        background-color: transparent;
        color: var(--gray-700);
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button{
        cursor: pointer;
    }
    body{
        background-color: var(--background-color);
    }

    :root{
        --background-color: #F8F9FA;
        --white: #FFFFFF;
        --green: #1FAB89;
        --gray: #E0E1E2;
        --gray-500: #A0AEC0;
        --gray-700: #2D3748;
        --yellow-100: #EBCC86;
        --yellow-400: #ECB22E;
        --red: #F4A0A0;
        --box-shadow: 0px 3.500000238418579px 5.500000476837158px 0px #00000005;
    }
`;
