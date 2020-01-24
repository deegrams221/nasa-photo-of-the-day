import React from "react";
import styled from "styled-components";

// Styled-components (Day Two)
const Button = styled.button `
    color: #61dafb;
    font-size: 1em;
    font-weight: 700;
    margin: 1em;
    padding: 1em 5em;
    border-radius: 3px;

    ${props => (props.type === 'infoButton' ? `background: #282c34;` : null)}
`;

export default Button;