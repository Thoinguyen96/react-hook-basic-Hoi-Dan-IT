import { increaseCounter, decreaseCounter } from "./action/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import Home from "./components/Home";
function App(props) {
    const dispatch = useDispatch();

    // const newCount = useSelector((state) => state.counter.count);
    // const desc = useSelector((state) => state.counter.description);
    // const nickname = useSelector((state) => state.counter.nickname);

    const handleIncrease = () => {
        dispatch(increaseCounter());
    };
    const handleDecrease = () => {
        dispatch(decreaseCounter());
    };
    useEffect(() => {
        fetchAllUser();
    }, []);
    const fetchAllUser = async () => {
        let res = await axios.get("http://localhost:8080/users/all");
        const data = res && res.data ? res.data : [];
        console.log(data);
    };
    return (
        <div className="App">
            <Home />
        </div>
    );
}
export default App;
