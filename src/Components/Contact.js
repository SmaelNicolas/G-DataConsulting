import { Form } from "react-bootstrap"
export const Contact = () => {

    return(
        
        <div className="">
            <Form id="form">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Textarea</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>
            </Form>
            
        </div>
    )
}