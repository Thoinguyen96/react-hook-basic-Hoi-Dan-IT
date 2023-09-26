import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slice/counterSlice";

function Counter() {
    const disPath = useDispatch();
    const count = useSelector((state) => state.counter.value);
    return (
        <div>
            <button onClick={() => disPath(increment())} className="btn btn-primary">
                increment
            </button>
            <button onClick={() => disPath(decrement())} className="btn btn-primary">
                decrement
            </button>
            <span>{count}</span>
        </div>
    );
}

export default Counter;
