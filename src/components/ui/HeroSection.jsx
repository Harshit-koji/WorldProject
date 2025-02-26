import { MdDoubleArrow } from "react-icons/md"



export const HeroSection   = ()  => {

    return<main className="hero-section" >
    <div className="container">
    <div className=" row align-items-center gap-md-5 gap-lg-0  gap-sm-5 gap-5  ">
    <div className="col-lg-6 col-md-12 col-sm-12  col-12 order-lg-0 order-md-1 order-sm-1 order-1 d-flex flex-column align-items-md-center align-items-sm-center text-md-center text-sm-center text-lg-start     align-items-lg-start fs-2  text-center align-items-center ">
    <h1 className=" display-1  fw-bold"> Explore the World, <br/> One Country at a Time.</h1>
    <p className="fs-4 my-5">Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.</p>
    <button className="rounded-pill    ">
        Start Exploring  <MdDoubleArrow />
    </button>
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-0 order-sm-0  align-self-start">
    <img className="img-fluid" src="/Images/world.png" alt="picture of world" />
    
    </div>
    
    </div>
    </div>
    
        </main>

}