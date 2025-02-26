import countryData from "../api/countryData.json"

export const About = ()=>{
    return <section className="container about-section pt-5">
        <h2 className="display-2 text-center  text-capitalize fw-bold">
!Here are the Interesting Facts!
<br />
We're proud of 
        </h2>
 <div className="gradient-cards my-5">
 {
    countryData.map((curtElem)=>{
        const {id, capital , interestingFact , population,countryName}=curtElem;
        return<div className="card-css " key={id} >
        <div className="container-card bg-blue-box">
          <p className="card-title">{countryName}</p>
          <p>
              <span className="card-description">Capital:</span>
              {capital}
          </p>
          <p>
              <span className="card-description">Population:</span>
              {population}
          </p>
          <p>
              <span className="card-description">Interesting Fact:</span>
             {interestingFact}
          </p>
        </div>
      
        </div>
    })
 }
 </div>
    </section>
}