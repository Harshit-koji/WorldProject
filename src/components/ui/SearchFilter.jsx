

export const SearchFilter = ({filter,setFilter ,search,setSearch ,data,setData})=>{

const handleSearchChange =(e)=>{
    e.preventDefault();
setSearch(e.target.value)

}
const handleSelectChange =(e)=>{
    e.preventDefault();
    setFilter(e.target.value)
}
const handleAceDesBtn = (value)=>{
    const sortCountry =[...data].sort((a,b)=>{
        return value==="ace"?
        a.name.common.localeCompare(b.name.common)
        :b.name.common.localeCompare(a.name.common);

    })
    setData(sortCountry);
}


    return (
    <section className="section-searchFilter container">
        <input type="text " placeholder="search" value={search} onChange={handleSearchChange}  className="px-4 py-1 rounded-pill" />
         
         <div>
            <button className="fs-5 rounded-pill" onClick={()=>handleAceDesBtn("ace")}>Ace</button>
         </div>
         <div>
            <button className="fs-5 rounded-pill" onClick={()=>handleAceDesBtn("des")}>Des</button>
         </div>
         <div>
            <select  className="select-section" value={filter} onChange={handleSelectChange}>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania </option>
            </select>
         </div>
    </section>
    
    )
}