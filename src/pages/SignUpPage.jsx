import { useRef, useState } from "react";
import Input from "../components/Input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createUser } from "../api/api";
import { useMutation } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
import { useUserContext } from "../context/contextHooks";

const SignUpPage = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const cfmPasswordRef = useRef(null);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, loginUser } = useUserContext();

  const {
    mutate,
    isPending,
    isError: isRequestError,
    error: requestError,
  } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      loginUser({
        userId: data.id,
        username: data.fields.Username,
      });
      navigate("/explore/featured");
    },
  });

  if (user) {
    return <Navigate to="/explore/featured" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsError(false);
    setError("");

    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value;
    const confirmPassword = cfmPasswordRef.current.value;

    if (username === "") {
      setIsError(true);
      setError("Please enter your username.");
      return;
    }

    if (password.includes(" ")) {
      setIsError(true);
      setError("Password must not contain spaces.");
      return;
    }

    if (password !== confirmPassword) {
      setIsError(true);
      setError("Please enter the same password in both password fields.");
      return;
    }

    mutate({ username, password });
  };

  return (
    <div className="w-full min-h-full py-10">
      <div className="m-auto p-5 max-w-[700px] md:max-w-lg">
        {(isError || isRequestError) && (
          <div className="bg-black border-2 border-red-900 text-white p-2.5 mb-2.5 text-sm">
            {isError && error}
            {isRequestError && requestError.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="px-5 py-4">
          <div className="space-y-8">
            <h1 className="text-white text-4xl text-center font-bold">
              Create Your Account
            </h1>
            <Input
              ref={usernameRef}
              type="text"
              name="username"
              label="Username"
            />
            <Input
              ref={passwordRef}
              type="password"
              name="password"
              label="Password"
              styles="tracking-widest "
            />
            <Input
              ref={cfmPasswordRef}
              type="password"
              name="confirm-password"
              label="Confirm you password"
              styles="tracking-widest "
            />
          </div>
          <button className=" w-full mt-10 px-2 py-2.5 text-white font-medium shadow-lg rounded-sm bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-300 hover:to-blue-600">
            {!isPending && "Sign up"}
            {isPending && (
              <CircularProgress
                size={18}
                sx={{ color: "white", marginBottom: "-2px" }}
              />
            )}
          </button>
          <Link to="/login" className="flex justify-center mt-6">
            <p className="text-center text-sm text-gray-300 hover:text-white  border-b-[1px] border-gray-300">
              Already have an account? Log in.
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
