import React, { useState, useMemo } from "react";
import ErrorBoundary from "./ErrorBoundary";

 
const MyComponent = ({ data }) => {
  return (
    <>
      <div className="shopping-list">
        <h3>Shopping List for {data.name}</h3>
        <ul>
          <li>{data.Element}</li>
        </ul>
      </div>
    </>
  );
};

const App = () => {
  const [errorMessage, setErrorMessage] = useState("dd");
 
  const data = {
    Element: [errorMessage],
  };

  return (
    <>
      <input type="text" onChange={(e) => setErrorMessage(e.target.value)} />
      <ErrorBoundary errorMessage={errorMessage}>
        {/* I made the Error here from data to  datae  to make the error*/}
        <MyComponent datad={data} />
      </ErrorBoundary>
      <button>test</button>
    </>
  );
};

export default App;
