import footer from "../../api/footer.json"
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footer = ()=>{
    const iconMap = {
        MdPlace: <MdPlace />,
        IoCallSharp:<IoCallSharp />,
        TbMailPlus:<TbMailPlus />
    }

    return <footer className="bg-dark">
        <div className="container my-5 pt-5">
            <div className="row ">
                {
footer.map((curtElem , index)=>{
    const {icon , title, details}= curtElem;
    return(
        <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12  text-light d-flex gap-3 flex-lg-row flex-md-row py-sm-1  py-md-2 flex-sm-column flex-column  text-center text-sm-center justify-content-center">
            <div className="icon display-4 text-primary  align-content-start">{iconMap[icon]}</div>
        <div className="fw-bold   ">
        <div className="fs-3 ">{title}</div>
        <div className="fs-4">{details}</div>
        </div>
        </div>
    )
})
                }
              
            </div>
        </div>
        <div className="container-fluid   p-3" style={{backgroundColor:"#080509"}}>
            <div className="row">
                <div className="col-lg-6">
                <div className="fw-bold d-flex justify-content-center">
                    <p className="d-flex gap-lg-4 gap-md-4 gap-sm-3 gap-2 pt-2">
                        Copyright &copy; 2024, All Right Reserved 
                        <NavLink to="https://harshitodo.netlify.app/" target="_blank" className="text-info text-decoration-none">
                        HarshitTodoLink.
                        </NavLink>
                    </p>
                    </div>    
                </div>
                <div className="col-lg-6 col-12 ">
                        <ul className="d-flex  justify-content-center gap-3 gap-md-5 gap-sm-3 gap-lg-5 py-2 ">
                            <li> <NavLink to='/' className={`text-decoration-none border-bottom  text-light` } > Home </NavLink> </li>
                            <li> <NavLink to='/about' className={`text-decoration-none border-bottom text-light` } > About </NavLink> </li>
                            <li> <NavLink to='https://harshitpokemon.netlify.app/' target="_blank" className={`text-decoration-none border-bottom text-light` } > Pokemon  </NavLink> </li>
                            <li> <NavLink to='/contact'  className={`text-decoration-none border-bottom text-light` } > Contact </NavLink> </li>
                        </ul>
                </div>
            </div>
        </div>
    </footer>
}
