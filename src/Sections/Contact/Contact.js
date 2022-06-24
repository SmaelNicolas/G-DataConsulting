import { Button, Form } from "react-bootstrap"
import { Title } from "../../Components/Title/Title"
export const Contact = () => {

    return(
        <>
            <Title text={"Contactanos"} />

            <div className="contact">

                <div className="contact-form">

                    <Form target="_blank" action="https://formsubmit.co/aimemelissa1@gmail.com" method="POST" id="form">
                        <div className="form-group">
                            <div className="form-row">
                                <div classNem="col">
                                    <input type="text" name="name" className="form-control" placeholder="Full Name" required/>
                                </div>
                                <div classNem="col">
                                    <input type="text" name="company" className="form-control" placeholder="Company" required/>
                                </div>
                                <div classNem="col">
                                    <input type="number" name="phone" className="form-control" placeholder="Phone Number" required/>
                                </div>
                                <div className="col">
                                    <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
                        </div>

                        <Button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</Button>
                    </Form>

                </div>

                <div className="contact-img">
                    <img src="https://via.placeholder.com/150" alt="..." />
                </div>
                
            </div>
        </>
    )
}