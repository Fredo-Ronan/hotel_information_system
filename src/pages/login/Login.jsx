import { MainLayout } from "../../layouts/MainLayout";
import "../login/Login.css";

export const LoginPage = () => {
  const forgotPasswordHandler = () => {
    console.log("FORGOT PASSWORD");
  };

  const registerHandler = () => {
    console.log("REGISTER");
  };

  return (
    <div className="background-image">
      <div className="overlay">
        <MainLayout />
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="rounded-2">
            <div className="p-4">
              <div className="d-flex justify-content-center mb-4">
                <h2>Login</h2>
              </div>
              <form action="">
                <div className="d-flex flex-column gap-4">
                  <input
                    type="text"
                    className="form-control form-control-lg input-field rounded-4"
                    size={40}
                    placeholder="Username"
                  />
                  <input
                    type="password"
                    className="form-control form-control-lg input-field rounded-4"
                    placeholder="Password"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn btn-success w-100 rounded-5"
                  >
                    <h4>Login</h4>
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
