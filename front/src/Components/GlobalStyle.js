import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};

    * {
        box-sizing:border-box;
        color: #353535;
    }

    body {
        background-color: #E6E0C3;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor:pointer;
        background-color:#5E4931;
        color: white;
        border:none;
        border-radius:4px;
        font-size:1em;
        margin-top:1em;
        padding:0.6em 1em;
        font-weight:600;
    }

    input[type="text"] {
        background:none;
        border:none;
        border-bottom:1px solid #aaa;
        color:#353535;
        padding:10px;
        outline:none;
        font-size:1.5em;
        text-align:center;
    }
`;
