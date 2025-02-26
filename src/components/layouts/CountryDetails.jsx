import { NavLink, useParams } from "react-router-dom"
import { getCountryData } from "../../api/CountryApi";
import { useEffect, useState, useTransition } from "react";
import { Loader } from "../ui/Loader";



export const CountryDetails = ()=>{

    const param = useParams();
    const [isPending, startTransition]= useTransition();
const [detail , setDetail] = useState()

useEffect(()=>{ 
startTransition(async()=>{
    const res =   await getCountryData(param.id);
    
    
    if(res.status===200){

        setDetail(res.data[0]);
    }
})
},[])

if(isPending){ return <div className="text-center text-light  display-1  fw-bold "><Loader/></div>}
    

 return (

    <section className="card-css my-5 country-details-card container">
        <div className="container-card bg-white-box">
            {detail && (
<div className="country-image d-flex flex-lg-row flex-sm-column gap-sm-5 text-sm-center flex-column gap-5 text-center    align-items-lg-center align-items-md-center align-items-sm-center align-items-center        justify-content-lg-evenly">
    <img src={detail.flags.svg} alt={detail.flags.alt}  className="flag" />
    <div className="country-content">
        <p className="card-title">{detail.name.official}</p>
        <div className="infoContainer">
            <p>
                <span className="card-description">Native Names:</span>
                {Object.keys(detail.name.nativeName).map((key)=>detail.name.nativeName[key].common).join(", ")}
            </p>
            <p>
                <span className="card-description">Population: </span>
                {detail.population.toLocaleString()}
            </p>
            <p>
                <span className="card-description">Region: </span>
                {detail.region}
            </p>
            <p>
                <span className="card-description">Sub Region: </span>
                {detail.subregion}
            </p>
            <p>
                <span className="card-description">Capital: </span>
                {detail.capital}
            </p>
            <p>
                <span className="card-description">Top Level Domain: </span>
                {detail.tld[0]}
            </p>
            <p>
                <span className="card-description">Currencies:</span>
                {Object.keys(detail.currencies).map((curtElem)=>detail.currencies[curtElem].name).join(", ")}
            </p>
            <p>
                <span className="card-description">Languages:</span>
                {Object.keys(detail.languages).map((curtElem)=>detail.languages[curtElem]).join(", ")}
            </p>
        </div>
       
    </div>
</div>
            )}
             <NavLink to="/country" className=" d-flex mt-md-2 mt-lg-0 mt-sm-3 mt-4  justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center ">
            <button>Go Back</button>
            </NavLink>
        </div>
    </section>
    )
}