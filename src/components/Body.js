import React from "react";
import logo from "../logo.svg";
import "../App.css";

const Body = () => {
  return (
    <header className="App-header">
      <iframe
        width="350"
        height="430"
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/54991d5f-8eab-486a-a4f1-9ad4c6ef6433"
      ></iframe>
    </header>
  );
};

export default Body;
