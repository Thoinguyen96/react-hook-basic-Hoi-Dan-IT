import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../redux/slice/userSlice";

function Content() {
    const disPath = useDispatch();
    const listUser = useSelector((state) => state.user.listUser);
    const isLoading = useSelector((state) => state.user.isLoading);
    const isError = useSelector((state) => state.user.isError);

    console.log(listUser);

    useEffect(() => {
        disPath(fetchAllUser());
    }, []);

    if (isLoading === true && isError === false) {
        return <div>is Loading data...</div>;
    }
    if (isLoading === false && isError === true) {
        return <div>Error, Please try again</div>;
    }
    return (
        <div>
            {listUser &&
                listUser.length > 0 &&
                listUser.map((user, index) => {
                    return (
                        <div key={index}>
                            <h4>{user.email}</h4>
                            <h5>{user.username}</h5>
                        </div>
                    );
                })}
        </div>
    );
}

export default Content;
