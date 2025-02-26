export const Contact = ()=>{
const handleFormAction =(formApi)=>{
const res = Object.fromEntries(formApi.entries());
console.log(res);

}


    return <section className="container mt-4">
        <h2 className="display-2 text-center p-4">Contact Us</h2>
        <form  className="contact-form d-flex flex-column justify-content-center align-items-center " action={handleFormAction}>
      
   <input type="text" className="form-control" id="username" placeholder="Enter Your Name" autoComplete="off" required name="username" />

  <input type="email" className="form-control" id="email" placeholder="Your Email" autoComplete="off" required name="email" />

  <textarea className="form-control" placeholder="Leave a comment here" id="Message" autoComplete="off" required name="Message"/>

<button className=" fs-2 rounded-pill   " type="submit" value="submit"> Send</button>

        </form>
    </section>
}