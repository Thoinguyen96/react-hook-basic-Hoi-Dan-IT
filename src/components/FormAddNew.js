import { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { createUserRedux } from "../action/actions";
function FormAddNew() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    const isCreating = useSelector((state) => state.user.isCreating);

    const handleCreateUser = () => {
        dispatch(createUserRedux(email, password, userName));
        setEmail("");
        setPassword("");
        setUserName("");
    };
    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Enter email"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Pass word</Form.Label>
                        <Form.Control
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="Pass word"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>User name</Form.Label>
                        <Form.Control
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            type="text"
                            placeholder="User name"
                        />
                    </Form.Group>
                </Form>
                <button
                    disabled={isCreating === true}
                    onClick={handleCreateUser}
                    type="button"
                    className="btn btn-success"
                >
                    Create
                </button>
            </Container>
        </>
    );
}

export default FormAddNew;
