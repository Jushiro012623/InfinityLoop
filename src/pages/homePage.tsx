import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="">
      Home Pages
      <Link to={"/login"}>LOGIN</Link>
    </div>
  );
};

export default HomePage;
