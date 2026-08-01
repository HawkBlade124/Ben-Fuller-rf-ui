import { useState } from 'react'

function Navigation(){
    const [isDropOpen, setIsDropOpen] = useState(false)

    return(
    <>
      <nav id="navSide">
        <div id="navHead">
         <div id="navEventTitle">RainFocus Summit</div>
         <div id="navEventLocation">Lehi, UT &bull; December 15th</div>
        </div>
        <div id="navSearch">
            <svg className="searchIcon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="6" stroke="#767676" strokeWidth="1.5"/>
                <path d="M17 17L13.5 13.5" stroke="#767676" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input type="search" placeholder="Search"/>
        </div>
        <ul id="navigation">
            <div className="navItem">
                <span className="navCircle"></span>
                <span className="navLink"> Guide</span>
            </div>
            <div className="navItem withDrop">
                <div className="dropOpt" onClick={() => setIsDropOpen(!isDropOpen)}>
                    <span className="navCircle"></span>
                    <span className="navLink"> Attendees</span>
                    <svg className={`navChevron${isDropOpen ? ' open' : ''}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="#767676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                    {isDropOpen && (
                    <div className="navDrop">
                        <ul>
                            <li>Attendees</li>
                            <li>Attendee Types</li>
                            <li>Packages</li>
                            <li>Reg Codes</li>
                            <li>Discounts</li>
                        </ul>
                    </div>
                    )}
            </div>
            <div className="navItem">
                <span className="navCircle"></span>
                <span className="navLink"> Content</span>
            </div>
            <div className="navItem">
                <span className="navCircle"></span>
                <span className="navLink"> Exhibitors</span>
            </div>
        </ul>
      </nav>
    </>
    )
}

export default Navigation