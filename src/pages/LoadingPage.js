import React from 'react'
import './../css/LoadingPage.css'

function LoadingPage() {
  return (
    <div className="body-blue">
      <img className="logo-login loading" src="/roomies-logo2.png" alt=""/>
      <div class="container-dots">
        <div class='dot dot-one'></div>
        <div class='dot dot-two'></div>
        <div class='dot dot-three'></div>
        <div class='dot dot-four'></div>
      </div>
    </div>
  )
}

export default LoadingPage;