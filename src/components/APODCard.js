// import
import React, {useState} from "react";
import styled from "styled-components";
import Button from "./Button";

// Styled-components (Day Two)
const StyledAPODCard = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    padding: 2rem;
`;

const StyledImg = styled.img `
    margin-bottom: 1em;
    width: 90vh;
`;

const StyledH2 = styled.h2 `
    font-size: 2.5rem;
    margin: 0;
    padding: 1rem;
`;

const StyledH3 = styled.h3 `
    font-size: 1.4rem;
`;

// export
export default function APODCard({dailyAPODURL, dailyAPODTitle, explanation}) {
    // toggle info content
    const [showContent, setShowContent] = useState(false);
    const toggleMode = (e) => {
        e.preventDefault();
        setShowContent(!showContent);
    };
    if(showContent) {
        return (
            <StyledAPODCard>
                <StyledImg src = {dailyAPODURL} alt = "NASA Astrological Image of the Day" />
                <StyledH2>{dailyAPODTitle}</StyledH2>
                <StyledH3>{explanation}</StyledH3>
                <br></br>
                <Button type = "infoButton" onClick = {toggleMode}>Less Info</Button>
            </StyledAPODCard>
        )
    } else {
        return (
            <StyledAPODCard>
                <StyledImg src = {dailyAPODURL} alt = "NASA Astrological Image of the Day" />
                <StyledH2>{dailyAPODTitle}</StyledH2>
                <br></br>
                <Button type="infoButton" onClick={toggleMode}>More Info</Button>
            </StyledAPODCard>
        )
    }
}