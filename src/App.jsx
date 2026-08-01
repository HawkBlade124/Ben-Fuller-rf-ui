import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const icons = '/person-portal.png'
const navLogo = '/Logo.png'
const logicArrow = '/logic-arrow.png'
const addCircleOutline = '/add-circle-outline.png'
const computer = '/computer.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="appBody">
      <Sidebar/>
      <Navigation/>
      <div id="homeBody">
     <section id="homeHead">
      <div id="top">
        <img src={navLogo} alt="Event Logo" />
        <div id="eventInfo">
          <h1 id="eventTitle">RainFocus Summit</h1>
          <div id="eventDatePlace">
            <p id="eventDate">December 15th</p>
            <p id="eventPlace">Lehi, Utah</p>
          </div>        
        </div>
        <button id="editButton">Edit Event</button>
      </div>
      <div id="eventDesc">
        <h2 id="descHead">Event setup guide</h2>
        <p id="descBody">See the available list of modules below. We suggest that you start with the attendee module.</p>
      </div>      
     </section>
     <section className="eventBody">
      <div className="eventBodyHead">
        <img src={icons} alt="userLogo" />
        <h3 className="eventBodyHeadTitle">Attendee</h3>
      </div>
      <div className="eventSteps">
        <section className="stepSection">
          <strong>Step 1:</strong> Base Settings
          <div className="stepBox">
            <div className="stepCol">
              <div className="stepColTitle">General</div>
              <p>Define Attendee types & attributes</p>
            </div>
            <div className="stepCol">
              <div className="stepColTitle">Title</div>
              <p>Description that explains the value goes here. Description that explains the value goes here. </p>
            </div>
            <div className="stepCol">
              <div className="stepColTitle">Title</div>
              <p>Description that explains the value goes here. Description that explains the value goes here. </p>
            </div>
          </div>          
        </section>
        <section className="stepSection">
          <strong>Step 2:</strong> Build registration workflows
          <div className="stepBox registration">
            <div className="stepCol">
              <div className="stepColTitle"><img src={logicArrow} alt="Right Arrow" />Attendee Registration</div>
              <p>Start by creating a general registration workflow</p>
            </div>
            <div className="stepCol">
              <div className="stepColTitle"><img src={logicArrow} alt="Right Arrow" />Attendee Registration</div>
              <p>Start by creating a general registration workflow</p>
            </div>
            <div className="stepCol">
              <div className="stepColTitle"><img src={logicArrow} alt="Right Arrow" />Attendee Registration</div>
              <p>Start by creating a general registration workflow</p>
            </div>
            <div className="stepCol addWorkflow">
              <div className="stepColTitle"><img src={addCircleOutline} alt="Right Arrow" />Attendee Registration</div>
              <p>Add Registration Workflow</p>
            </div>
          </div>  
        </section>
        <section className="stepSection">
          <strong>Step 3:</strong> Design post-registration experiences.
          <div className="stepBox registration">
            <div className="stepCol">
              <div className="stepColTitle"><img src={computer} alt="Right Arrow" />Attendee Portal</div>
              <p>Manage the portal that attendees will see after they’ve register for your event.</p>
            </div>
          </div>  
        </section>
      </div>
     </section>
     </div>
     </div>
    </>
  )
}

export default App
