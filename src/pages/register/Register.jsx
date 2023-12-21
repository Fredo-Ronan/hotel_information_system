import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { Register } from "../../api/apiAuth";
import { Spinner } from "react-bootstrap";

export const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/");
  };

  const registerHandler = (event) => {
    event.preventDefault();

    const data = {
      "username": username,
      "password": password,
      "firstname": firstName,
      "lastname": lastName,
      "email": email,
      "no_telp": noTelp,
    };

    setIsLoading(true);

    Register(data).then((res) => {
      navigate(`/verification_send/${encodeURIComponent(email)}`);
      setIsLoading(false);
    }).catch((err) => {
      // console.log(JSON.parse(err.request.response).message);
      toast.error(JSON.parse(err.request.response).message);
      setIsLoading(false);
    })
  };

  return (
    <div className="background-image">
      <div className="overlay">
        <Toaster position="bottom-right" richColors/>
        <div className="d-flex justify-content-center align-items-center h-100 text-white">
          <div className="rounded-2">
            <div className="p-4">
              <div className="d-flex justify-content-center mb-4">
                <h2>Sign Up</h2>
              </div>
              <form onSubmit={registerHandler}>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex gap-4">
                    <input
                      type="text"
                      className="form-control form-control-lg input-field rounded-4"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      autoComplete="off"
                      autoCorrect="off"
                      autoSave="off"
                    />
                    <input
                      type="text"
                      className="form-control form-control-lg input-field rounded-4"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      autoComplete="off"
                      autoCorrect="off"
                      autoSave="off"
                    />
                  </div>
                  <input
                    type="email"
                    className="form-control form-control-lg input-field rounded-4"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="off"
                    autoCorrect="off"
                    autoSave="off"
                  />
                  <input
                    type="number"
                    className="form-control form-control-lg input-field rounded-4"
                    placeholder="No Telepon"
                    value={noTelp}
                    onChange={(e) => setNoTelp(e.target.value)}
                    required
                    autoComplete="off"
                    autoCorrect="off"
                    autoSave="off"
                  />
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
                    {isLoading ? <Spinner animation="border" variant="light" size="sm"/> : <h4>Register</h4>}
                  </button>
                </div>
              </form>

              <div className="d-flex justify-content-center mt-4">
                <p className="d-inline-block" style={{ marginRight: "0.5rem" }}>
                  Already have account?{" "}
                </p>
                <p className="d-inline-block register" onClick={loginHandler}>
                  Login
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
