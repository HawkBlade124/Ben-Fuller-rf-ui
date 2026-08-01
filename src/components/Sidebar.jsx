const rainFocusLogo = '/nav-logo.png'
const clientLogo = '/nav-org.png'

function Sidebar(){
    return(<>
        <div id="appLogos">
            <div id="eventLogos">
                <img src={rainFocusLogo} alt="Rain Focus"/>
                <img src={clientLogo} alt="Client Logo"/>
            </div>
            <div id="accountIcon">
                <span>FL</span>
            </div>
        </div>
    </>)
}
export default Sidebar