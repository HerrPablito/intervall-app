import { useState } from "react";
import "./loadingpage.scss";
import SetTimer from "../setTimer/setTimer";
import { useNavigate } from "react-router-dom";

function LoadingPage() {
  return (
    <div className="loadingpage">
      <h1 className="loadingpage-h1">INTERVAL</h1>
      <h3 className="loadingpage-h3">For all your timing needs</h3>
    </div>
  );
}

export default LoadingPage;
