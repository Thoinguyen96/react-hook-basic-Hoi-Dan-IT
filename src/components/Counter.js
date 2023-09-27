// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { decrement, increment } from "../redux/slice/counterSlice";

// function Counter() {
//     const disPath = useDispatch();
//     const count = useSelector((state) => state.counter.value);
//     return (
//         <div>
//             <button onClick={() => disPath(increment())} className="btn btn-primary">
//                 increment
//             </button>
//             <button onClick={() => disPath(decrement())} className="btn btn-primary">
//                 decrement
//             </button>
//             <span>{count}</span>
//         </div>
//     );
// }

// export default Counter;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slice/counterSlice";
function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    );
}
export default Counter;
