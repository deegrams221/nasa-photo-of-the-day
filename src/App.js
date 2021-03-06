// imports
import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "./components/Header";
import APODCard from "./components/APODCard";
import styled from "styled-components";

// Styled-components (Day Two)
const StyledApp = styled.div `
  text-align: center;
  width: 100vw;
`;


function App() {
  // state variables
  const[photo, setPhoto] = useState("");
  const[title, setTitle] = useState("");
  const[info, setInfo] = useState("");
  const[date, setDate] = useState("");

  // effect hook
  useEffect(() => {
    axios
      // calling Nasa API
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        // states for each variable
        const dailyAPOD = response.data.url;
        console.log("daily APOD url: ", dailyAPOD);
        setPhoto(dailyAPOD);

        const dailyAPODTitle = response.data.title;
        setTitle(dailyAPODTitle);

        const dailyAPODInfo = response.data.explanation;
        setInfo(dailyAPODInfo);

        const dailyAPODDate = response.data.date;
        setDate(dailyAPODDate);
      })
      // catch error message
      .catch(error => {
        console.log(`API currently down: `, error);
      })
  }, [])

  return (
    <StyledApp>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Header date = {date} />
      <APODCard dailyAPODURL = {photo} dailyAPODTitle = {title} explanation = {info} />
    </StyledApp>
  );
}

export default App;
