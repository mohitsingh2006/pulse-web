import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import AuthContext from "../context/auth";

const Login = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const { AuthCheck, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/dashboard";

  const [togglePassword, setTogglePassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues:{
      email:"admin@admin.com",
      password:"admin@123"
    }
  });

  const onSubmit = async (data) => {
    try {
      const toastId = toast.loading("Please wait...");
      const response = await axios.post(`${API_URL}auth/login`, data);
      //const response = await axios.get(`https://dummyjson.com/products`,data);

      //console.log(response);
      if (response.data.token) {
        const userInfo = {
          token: response.data.token,
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
        };

        localStorage.setItem("pulse-user-info", JSON.stringify(userInfo));
        login(userInfo);
        reset();
        toast.success("Login successfully.", {
          id: toastId,
        });
        navigate("/dashboard");
      } else {
        toast.error(response.data.message, {
          id: toastId,
        });

        reset({ password: "" });
      }
    } catch (err) {
      toast.dismissAll();

      if (err.status === 400) {
        toast.error(err.response.data.message);
        reset({ password: "" });
      } else {
        toast.error(err.message);
        reset();
      }
    }
  };

  useEffect(() => {
    if (AuthCheck()) {
      navigate(redirectPath, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="container-sm  position-relative login-page">
      <div className="login-top-bg position-absolute"></div>
      <div className="row justify-content-center pt-5">
        <div className="col-12 col-xl-10 pt-5">
          <div className="row">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="col-12 col-lg-6 d-none d-lg-block">
              <div className="h-100 d-flex algin-items-center">
                <img src="images/logo.svg" alt="Logo" width={400} />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="mt-0 mt-lg-5">
                <div className="text-center small-logo-outer">
                  <img src="images/logo.svg" alt="" width={150} />
                  <div>
                    <span>Login to Your Account</span>
                  </div>
                </div>
                <div className="form-outer">
                  <form method="post" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                      <label className="form-label">Email</label>
                      <input
                        type="text"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email address",
                          },
                        })}
                        className={`form-control bg-light ${
                          errors.email && "is-invalid"
                        }`}
                        placeholder="Please enter Email."
                      />
                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email.message}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 position-relative">
                      <label className="form-label">Password</label>
                      <input
                        type={togglePassword === true ? "text" : "password"}
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 5,
                            message: "Password must be at least 5 characters",
                          },
                        })}
                        className={`form-control bg-light ${
                          errors.password && "is-invalid"
                        }`}
                        placeholder="Pleae enter password."
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password.message}
                        </div>
                      )}

                      {!errors.password && (
                        <div className="eye-icon position-absolute">
                          {togglePassword === true ? (
                            <IoEyeOutline
                              color="#bfbfbf"
                              size={25}
                              onClick={() => setTogglePassword(!togglePassword)}
                            />
                          ) : (
                            <IoEyeOffOutline
                              color="#bfbfbf"
                              size={25}
                              onClick={() => setTogglePassword(!togglePassword)}
                            />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="d-flex justify-content-end mt-1">
                      <div>
                        <a
                          className="forgot-password"
                          href="#"
                          title="Forgot Password"
                        >
                          Forgot Password
                        </a>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between buttons mt-5">
                      <div>
                        <button
                          type="submit"
                          className={`btn btn-primary ${
                            !isValid || isSubmitting
                              ? "disabled opacity-75"
                              : ""
                          }`}
                          disabled={!isValid || isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                aria-hidden="true"
                              ></span>
                              Submitting...
                            </>
                          ) : (
                            "Login"
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
