import React from 'react'
import { Link } from "react-router-dom";


function Error() {
  return (
    <div className="body-blue">
      <h1>Page not found</h1>
      <Link className="link-errorpage" to="/profile">Home</Link>
    </div>
  )
}

export default Error;