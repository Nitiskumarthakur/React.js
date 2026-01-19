import './Header.css'
export default function Header() {
    return (

        <div class="navbar">
            <div class="logo-container">
                {/* <img src="userAsst/Ne logo.png" class="logo"> */}
                <div class="logo-text">Nitish</div>
            </div>

            <div class="nav-items">
                <div><a href="#project">Project</a></div>
                <div><a href="#skills">Skills</a></div>
                <div><a href="#contact">Contact me</a></div>
            </div>
        </div>


    )
}