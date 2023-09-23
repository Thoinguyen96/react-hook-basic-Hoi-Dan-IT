import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
function TableUser(props) {
    const [dataUser, setDataUser] = useState([]);
    useEffect(() => {
        fetchAllUser();
    }, []);
    const fetchAllUser = async () => {
        let res = await axios.get("http://localhost:8080/users/all");

        const data = res && res.data ? res.data : [];
        if (data) {
            setDataUser(data);
            console.log(data);
        }
    };
    const handleDeleteUser = (id) => {
        const resultDelete = dataUser.filter((data) => {
            return data.id !== id;
        });
        console.log(resultDelete);
        setDataUser(resultDelete);
    };
    return (
        <>
            <Container className="mt-3">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email Address</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataUser &&
                            dataUser.length > 0 &&
                            dataUser.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.email}</td>
                                        <td>{data.username}</td>
                                        <td>
                                            <button
                                                onClick={() => handleDeleteUser(data.id)}
                                                className="btn btn-danger"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default TableUser;
