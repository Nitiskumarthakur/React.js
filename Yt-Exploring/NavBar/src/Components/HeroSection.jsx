import '../Index.css'
import Card from './Card'
export default function HeroSection() {

    let ar = {
        name:"Nitish",
        age:20,
    }
    return (
        <div>
            <main className="hero-section main ">
                <div className="container">
                    <div className=" banner-column ">
                        <div className="banner-inner">
                            <h1 className="heading-xl">
                                All Your Files in One Secure Location.
                            </h1>
                            <p className="paragraph">
                                We stores all your most important files in one secure location.
                                Access them whenever needed, share and <br></br>collaborate with your
                                connections.
                            </p>
                            <button className="btn btn-darken btn-inline">
                                Get Started<i className="bx bx-right-arrow-alt"></i>
                            </button>
                        </div>
                        <div className="banner-img">
                            <img
                                className="banner-image"
                                src="https://miro.medium.com/v2/resize:fit:1358/format:webp/1*fJPv56d5KMjEOBperw4Rrw.jpeg"
                                alt="Illustration"
                            />
                        </div>
                    </div>
                    <div className="card">
                        {/* <Card /> */}
                        
                    </div>
                </div>
            </main>
        </div>
    )
}