import "./signin.css";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    props.onSubmit(data);
  };

  return (
    <main className="form-signin d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <div className="form-floating">
          <input
            id="user"
            {...register("user")}
            type="email"
            className="form-control"
          ></input>
          <label htmlFor="user">User</label>
        </div>
        <div className="form-floating">
          <input
            id="password"
            {...register("password")}
            type="password"
            className="form-control"
          ></input>
          <label htmlFor="password">Password:</label>
        </div>
        <input
          type="submit"
          value="Submit"
          className="w-100 btn btn-lg btn-primary"
        ></input>
      </form>
    </main>
  );
};

export default Login;
