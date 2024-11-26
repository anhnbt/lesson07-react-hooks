import { useEffect } from "react";

const ToggleMenu = () => {
  useEffect(() => {
    return () => {
      // componentWillUnmount
      console.log("Gọi vào đây khi component render");
    };
  });

  return (
    <>
      <ul className="list-unstyled d-flex gap-2">
        <li>
          <a href="#" className="text-decoration-none">Home</a>
        </li>
        <li>
          <a href="#" className="text-decoration-none">About</a>
        </li>
        <li>
          <a href="#" className="text-decoration-none">Contact</a>
        </li>
      </ul>
    </>
  );
};

export default ToggleMenu;
