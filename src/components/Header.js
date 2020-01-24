import React from "react";
import styled from "styled-components";

// Styled-components (Day Two)
const StyledHeader = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #282c34;
  color: white;
  font-size: calc(10px + 2vmin);
`;

const StyledH1 = styled.h1 `
    font-size: 3rem;
`;

const StyledH3 = styled.h3 `
    font-size: 1.4rem;
`;

export default function Header ({date}) {
    return (
        <StyledHeader>
            <StyledH1>NASA Photo of the Day!</StyledH1>
            <StyledH3>{date}</StyledH3>
        </StyledHeader>
    )
}