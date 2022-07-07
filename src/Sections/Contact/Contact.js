import { TextField } from "@mui/material"
import { Button, Form } from "react-bootstrap"
import { Title } from "../../Components/Title/Title"
import contact from "../../Assets/Imgs/contact.png"
import vector from "../../Assets/Imgs/Vector.png"
import { useContext } from 'react';
import { LanguageContext } from "../../Context/LanguageContext";

export const Contact = () => {

    const { data } = useContext(LanguageContext);

    return(
        <div id="contact" className="darkBlue py-5">
            <Title text={data.contact.title} />

            <div className="contact">

                <div className="contact-form whiteBg">

                    <Form target="_blank" action="https://formsubmit.co/aimemelissa1@gmail.com" method="POST" id="form">
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col my-1">
                                    <TextField id="name" label={data.contact.txt1} variant="standard" type="text" name="Name" className="form-control py-1 px-2" placeholder="Full Name" required/>
                                </div>
                                <div className="col my-1">
                                    <TextField id="company" label={data.contact.txt2} variant="standard"  type="text" name="Company" className="form-control py-1 px-2" placeholder="Company"/>
                                </div>
                                <div className="col my-1">
                                    <TextField id="pone" label={data.contact.txt3} variant="standard"  type="number" name="Phone" className="form-control py-1 px-2" placeholder="Phone Number" required/>
                                </div>
                                <div className="col my-1">
                                    <TextField id="email" label={data.contact.txt4} variant="standard"  type="email" name="Email" className="form-control py-1 px-2" placeholder="Email Address" required/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <TextField multiline id="text" label={data.contact.txt5} variant="standard" placeholder="Your Message" className="form-control py-1 px-2" name="message" rows={4} required />
                        </div>

                        <div className="button-container">
                            <Button type="submit" className="my-1 contact-button">{data.contact.input}</Button>
                        </div>
                    </Form>

                </div>

                <div className="contact-img">
                    <img src={contact} alt="contact" className="contact-imagen"/>
                </div>
                
            </div>

            <img 
                className="contact-vector"
                src={vector} 
                alt="vector"
            />
        </div>
    )
}