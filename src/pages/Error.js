import React from 'react'
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="body-blue">
      <img className="logo-login" src="/roomies-logo2.png" alt=""/>
      <h1 className="h1-animation">Page not found</h1>
      <Link className="link-errorpage" to="/profile">Home</Link>
    </div>
  )
}

export default ErrorPage;