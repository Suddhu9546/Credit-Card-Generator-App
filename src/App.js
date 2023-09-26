import "./App.css";
import Body from "./components/Body/Body";
import FrontCardPos from "./components/Card/FrontCardPos";
import BackCardPos from "./components/Card/BackCardPos";
import Form from "./components/Form/Form";
import React, { createContext, useState } from 'react'


export const CardContext = createContext()


function App() {

  const [cardHolderNameShow, setcardHolderNameShow] = useState();
  const [cardNumberShow, setcardNumberShow] = useState();
  const [monthShow, setMonthShow] = useState();
  const [yearShow, setYearShow] = useState();
  const [cvvNumberShow, setCvvNumberShow]= useState();

  return (
    <>
    <CardContext.Provider value={{ cardHolderNameShow, setcardHolderNameShow ,cardNumberShow, setcardNumberShow,monthShow, setMonthShow,yearShow, setYearShow, cvvNumberShow, setCvvNumberShow}}>
      <div className="BodyPos">
        <Body />
      </div>
      <div className="FrontCardPos">
        <FrontCardPos />
      </div>
      <div className="BackCardPos">
        <BackCardPos />
      </div>
      <div className="Cent_er">
        <Form/>
      </div>
      </CardContext.Provider>
    </>
  );
}

export default App;
