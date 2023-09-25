import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserRedux, fetchAllUser } from "../action/actions";
import { useSelector } from "react-redux";
function TableUser(props) {
    // const [dataUser, setDataUser] = useState([]);
    const dispatch = useDispatch();

    const dataUser = useSelector((state) => state.user.listUsers);
    const isError = useSelector((state) => state.user.isError);
    const isLoading = useSelector((state) => state.user.isLoading);

    useEffect(() => {
        dispatch(fetchAllUser());
    }, []);

    const handleDeleteUser = (id) => {
        dispatch(deleteUserRedux(id));
    };
    return (
        <>
            <Container className="mt-3">
                {isError === true ? (
                    <div>Something Error, Please try again</div>
                ) : (
                    <>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Email Address</th>
                                    <th>Username</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {isLoading === true ? (
                                <thead>
                                    <tr>
                                        <th>Is Loading data...</th>
                                    </tr>
                                </thead>
                            ) : (
                                <>
                                    {dataUser &&
                                        dataUser.length > 0 &&
                                        dataUser.map((data, index) => {
                                            return (
                                                <tbody key={index}>
                                                    <tr>
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
                                                </tbody>
                                            );
                                        })}
                                </>
                            )}
                        </Table>
                    </>
                )}
            </Container>
        </>
    );
}

export default TableUser;
