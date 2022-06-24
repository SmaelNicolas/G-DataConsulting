import { TextField } from "@mui/material"
import { Button, Form } from "react-bootstrap"
import { Title } from "../../Components/Title/Title"

export const Contact = () => {

    return(
        <div id="contact">
            <Title text={"Contactanos"} />

            <div className="contact">

                <div className="contact-form">

                    <Form target="_blank" action="https://formsubmit.co/aimemelissa1@gmail.com" method="POST" id="form">
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col my-1">
                                    <TextField id="name" label="Name" variant="standard" type="text" name="Name" className="form-control py-1 px-2" placeholder="Full Name" required/>
                                </div>
                                <div className="col my-1">
                                    <TextField id="company" label="Company" variant="standard"  type="text" name="Company" className="form-control py-1 px-2" placeholder="Company"/>
                                </div>
                                <div className="col my-1">
                                    <TextField id="pone" label="Phone Number" variant="standard"  type="number" name="Phone" className="form-control py-1 px-2" placeholder="Phone Number" required/>
                                </div>
                                <div className="col my-1">
                                    <TextField id="email" label="Email" variant="standard"  type="email" name="Email" className="form-control py-1 px-2" placeholder="Email Address" required/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <TextField multiline id="text" label="Text" variant="standard" placeholder="Your Message" className="form-control py-1 px-2" name="message" rows={4} required />
                        </div>

                        <Button type="submit" className="btn my-1">Submit Form</Button>
                    </Form>

                </div>

                <div className="contact-img">
                    <img src="https://via.placeholder.com/150" alt="..." />
                </div>
                
            </div>
        </div>
    )
}