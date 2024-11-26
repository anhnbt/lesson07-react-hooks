import React, { useEffect, useState } from "react";
import ToggleMenu from "./ToggleMenu";
import { FaBars, FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // () => {} => componentDidUpdate
  // useEffect(callback, []) => componentDidMount
  useEffect(() => {
    document.title = `You click ${count} times`;
  }, [count]);
  // useEffect(callback); // 1
  // useEffect(callback, []); // 2
  // useEffect(callback, [count]); // 3

  return (
    <div className="card">
      <div className="card-body d-flex justify-content-center align-items-center">
        <Button variant="warning" onClick={() => setCount(count - 1)}>
          <FaMinus /> Decrement
        </Button>
        <div className="mx-2">You click {count} times</div>
        <Button variant="success" onClick={() => setCount(count + 1)}>
          <FaPlus /> Increment
        </Button>
      </div>

      <div className="my-5">
        <Button variant="primary" onClick={() => setIsVisible(!isVisible)}>
          <FaBars />
        </Button>
        {isVisible && <ToggleMenu></ToggleMenu>}
      </div>
    </div>
  );
};
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   render() {
//     return (
//       <>
//         <div>You click {this.state.count} times</div>
//         <button onClick={() =>}>Increment</button>
//       </>
//     );
//   }
// }

export default Counter;
