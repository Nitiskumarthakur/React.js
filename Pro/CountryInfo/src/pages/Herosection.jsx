import { FaLongArrowAltRight } from "react-icons/fa";
export default function Herosection(){
    return(
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the world, one Country at a time.
                    </h1>
                    <p className="paragraph">
                       Disconver the histroy, culture, and beauty of every nation.
                       search, and filter through contries to find the details you
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box ">
                        Start Exploring <FaLongArrowAltRight/>
                    </button>
                </div>
                <div className="hero-image">
                    <img  src="/explore-the-world.jpg" alt="" className="banner-image"/>
                </div>
            </div>
        </main>
    )
}