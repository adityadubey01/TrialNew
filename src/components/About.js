import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>This is the AboutUs Page</h2>
      <Outlet />
    </div>
  );
};

export default About;
