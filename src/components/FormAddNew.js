import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
function FormAddNew() {
    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Pass word</Form.Label>
                        <Form.Control type="password" placeholder="Pass word" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="text" placeholder="User name" />
                    </Form.Group>
                </Form>
                <button type="button" className="btn btn-success">
                    Create
                </button>
            </Container>
        </>
    );
}

export default FormAddNew;
