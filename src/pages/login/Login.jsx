import { useState } from "react";
import { MainLayout } from "../../layouts/MainLayout";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Login } from "../../api/apiAuth";
import { Toaster, toast } from "sonner";
import { Spinner } from "react-bootstrap";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const forgotPasswordHandler = () => {
    console.log("FORGOT PASSWORD");
  };

  const registerHandler = () => {
    // console.log("REGISTER");
    navigate("/signup");
  };

  const loginHandler = (event) => {
    event.preventDefault();

    const loginData = {
      "username": username,
      "password": password,
    };

    setIsLoading(true);
    
    if (loginData.username === "admin" && loginData.password === "admin"){
      sessionStorage.setItem("admin", "true");
      sessionStorage.setItem("user", JSON.stringify({username: "Admin"}));
      navigate("/admin/room");
    } else {
      Login(loginData).then((res) => {
        sessionStorage.setItem("token", res.token);
        sessionStorage.setItem("user", JSON.stringify(res.data));
        navigate('/user/home');
        setIsLoading(false);
      }).catch((err) => {
        toast.error(JSON.parse(err.request.response).message);
        setIsLoading(false);
      })
    }
  };

  return (
    <div className="background-image">
      <div className="overlay">
        <MainLayout />
        <Toaster position="bottom-right" richColors/>
        <div className="d-flex justify-content-center align-items-center h-100 text-white">
          <div className="rounded-2">
            <div className="p-4">
              <div className="d-flex justify-content-center mb-4">
                <h2>Login</h2>
              </div>
              <form onSubmit={loginHandler}>
                <div className="d-flex flex-column gap-4">
                  <input
                    type="text"
                    className="form-control form-control-lg input-field rounded-4"
                    size={40}
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    autoComplete="off"
                    autoCorrect="off"
                    autoSave="off"
                  />
                  <input
                    type="password"
                    className="form-control form-control-lg input-field rounded-4"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="off"
                    autoCorrect="off"
                    autoSave="off"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn btn-success w-100 rounded-5"
                  >
                    {isLoading ? <Spinner animation="border" variant="light" size="sm"/> : <h4>Login</h4>}
                  </button>
                </div>
              </form>

              <div
                style={{ paddingLeft: "0.5rem" }}
                className="d-flex justify-content-between"
              >
                <div className="form-check mt-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember Me
                  </label>
                </div>
                <div className="mt-4">
                  <p className="forgot" onClick={forgotPasswordHandler}>
                    Forgot Password?
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <p className="d-inline-block" style={{ marginRight: "0.5rem" }}>
                  Don't have account?{" "}
                </p>
                <p
                  className="d-inline-block register"
                  onClick={registerHandler}
                >
                  Register
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
