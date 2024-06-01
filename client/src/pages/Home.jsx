import Posts from "../components/Posts";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.username) navigate("/login");
    toast(`Welcome ${user?.username}`, {
      position: "top-right",
    });
  }, [navigate]);
  return (
    <div>
      <Posts />
      <ToastContainer />
    </div>
  );
};

export default Home;
