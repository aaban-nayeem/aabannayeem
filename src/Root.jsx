import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="bg-[#0C0C0C] mx-[2.5rem]">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
