import React from "react";

const ContactMe = () => {
    return(
<Container fluid = {true} style ={{height: "75vh"}} >
    <hr className ="col-11 mt-1 ml-0 pt-0 pb-2"/>
    <section className="row">
        {/* <!-- Card Header --> */}
        <section className="card-header py-50" id="contactHeader">
        </section>
        </section>
            {/* <!-- Added padding --> */}
            <h2 className="display 4 py-20">Contact</h2>
            <label for= "Email" classname = "form-label">Email: meredithjonesp@gmail.com</label>
                <p> Phone: 610-213-XXXX </p>           
        <section class="justify-content-end" id="linked-icons">
            {/* <!-- Link to my resume --> */}
            <p> <a href="resume/meredith_jones_resume.pdf" download="Download My Resume">Download a PDF of my resume</a>
                <i class="fa fa-file-pdf-o fa-2x" aria-hidden="true" aria-label="Meredith Jones Resume"></i></section>
                <section class="justify-content-end" id="linked-icons">
            </section>  
            </a>
            </p>
                 
    </Container>
  )
}
 
export default ContactMe;