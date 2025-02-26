import { useTransition } from "react"
import { useEffect } from "react"
import { getCountry } from "../api/CountryApi";
import { useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { SearchFilter } from "../components/ui/SearchFilter";
import { Loader } from "../components/ui/Loader";



export const Country = ()=>{
const [isPending, startTransition]= useTransition();
const [data , setData] = useState([]);
const [search, setSearch]= useState();
const [filter, setFilter]= useState("All");

useEffect(()=>{ 
startTransition(async()=>{
    const res =   await getCountry();
   setData(res.data);
})
},[])
// searchFunction function 
const searchFunction = (curtData)=>{
    if(search){
       return curtData.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return curtData;
}
const filterSelect = (curtData) =>{
    if(filter==="All")return curtData;
    return curtData.region === filter;
}
// main code for search 
const filterData = data.filter((curtData)=> searchFunction(curtData) && filterSelect(curtData) )

if(isPending){ return <div className="text-center text-light  display-1  fw-bold "><Loader/></div>}
   
   return <section className="container-fluid my-5 py-2">
       <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} data={data}  setData={setData} />
        <div className="container">
        
            <ul className=" country-grid d-grid gap-5 grid-four-col">
           {
                filterData.map((curtElem, index)=>{
                    
                    return <CountryCard key={index} countryData= {curtElem}/>
                })
            }
            </ul>
          </div>
       
    </section>
}

const CountryCard = ({countryData})=>{
const {flags, name, population, region, capital} = countryData;
    return(
        <li className="card-css">
                <div className="container-card bg-white-box">
                    <img className="img-fluid" src={flags.svg} alt={flags.alt} />
                    <div className="countryInfo pt-5">
                        <p className="card-title">{name.common.length > 10 ?name.common.slice(0,10)+"...":name.common} </p>
                        <p>
                            <span className="card-description">Population:</span>
                            {population.toLocaleString()}
                        </p>
                        <p>
                            <span className="card-description">Region:</span>
                            {region}
                        </p>
                        <p>
                            <span className="card-description">Capital:</span>
                            {capital[0]}
                        </p>
                        <NavLink to={`/country/${name.common}`}>
<button className="rounded-pill">Know More  <MdDoubleArrow /></button>
</NavLink>
                    </div>
                </div>
        </li>
    )
}