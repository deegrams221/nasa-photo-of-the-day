// import
import React, {useState} from "react";

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
            <div className = "apod-card">
                <img src = {dailyAPODURL} alt = "NASA Astrological Image of the Day" />
                <h2>{dailyAPODTitle}</h2>
                <h3>{explanation}</h3>
                <br></br>
                <button type = "primary" onClick = {toggleMode}>Less Info</button>
            </div>
        )
    } else {
        return (
            <div className = "apod-card">
                <img src = {dailyAPODURL} alt = "NASA Astrological Image of the Day" />
                <h2>{dailyAPODTitle}</h2>
                <br></br>
                <button type="primary" onClick={toggleMode}>More Info</button>
            </div>
        )
    }
}