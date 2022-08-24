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
        src="https://console.dialogflow.com/api-client/demo/embedded/ac3e54c0-0104-4733-bbfd-5be8157817cc"
      ></iframe>
    </header>
  );
};

export default Body;
