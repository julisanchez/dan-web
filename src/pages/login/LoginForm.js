const LoginForm = ({ state, handleChange, onSubmit }) => {
  const _onSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };

  return (
    <main className="form-signin d-flex justify-content-center align-items-center">
      <form onSubmit={_onSubmit}>
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <div className="form-floating">
          <input
            id="user"
            value={state.user}
            onChange={handleChange("user")}
            type="email"
            className="form-control"
          ></input>
          <label htmlFor="user">User</label>
        </div>
        <div className="form-floating">
          <input
            id="password"
            value={state.password}
            onChange={handleChange("password")}
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

export default LoginForm;
