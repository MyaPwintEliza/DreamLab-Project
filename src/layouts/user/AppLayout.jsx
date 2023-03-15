import { Outlet } from "react-router-dom";
import Footer from "../../components/user/Footer";
import NavBar from "../../components/user/Navbar";
import UserLogin from "../../components/user/UserLogin";
import UserRegister from "../../components/user/UserRegister";
import { useLoginContext } from "../../contexts/LoginContext";
import { useRegisterContext } from "../../contexts/RegisterContext";

const AppLayout = () => {
  const { status: registerStatus } = useRegisterContext();
  const { status: loginStatus } = useLoginContext();
  return (
    <div>
      <NavBar />
      <article>
        <Outlet />
      </article>
      <Footer />
      {registerStatus && (
        <div className="bg-textColor4 bg-opacity-50 fixed w-screen h-screen top-0 z-50 flex justify-center items-center">
          <UserRegister />
        </div>
      )}
      {loginStatus && (
        <div className="bg-textColor4 bg-opacity-50 fixed w-screen h-screen top-0 z-50 flex justify-center items-center">
          <UserLogin />
        </div>
      )}
    </div>
  );
};

export default AppLayout;
