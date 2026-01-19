import './Footer.css';
export default function Footer() {
    return (
        <footer id="footer">
            <div class="container">
                <div class="footer-wrapper">
                    <div class="footer-faded-text">Nitish</div>

                    <div class="link-wrapper">
                        <div>
                            <a href="#">Projects</a>
                        </div>
                        <div>
                            <a href="#">skills</a>
                        </div>
                        <div>
                            <a href="#">Contacts_Me</a>
                        </div>
                    </div>

                    <div class="icon-wrapper">
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-solid fa-envelope"></i>
                    </div>

                </div>
            </div>
        </footer>
    )
}