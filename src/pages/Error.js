import React from 'react'
import { Link } from "react-router-dom";


function Error() {
  return (
    <div>
      <h1 class="black">Page not found</h1>
      <Link to="/profile">Home</Link>
    </div>
  )
}

export default Error;