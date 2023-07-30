import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/Features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>
        <button
          className="rounded-full bg-yellow-500"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span>{count}</span>
        <button
          className="rounded-full bg-yellow-500"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="rounded-full bg-yellow-500"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by amount
        </button>
      </div>
    </>
  );
}

export default App;
