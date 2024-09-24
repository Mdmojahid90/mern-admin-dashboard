function LoginAsAdmin() {
  return (
    <div className="container">
      <h3 className="asadmin">Sorry you are not admin</h3>
      <p className="admin-para">
        if you want to login as Admin use Email:{" "}
        <span className="secret">virat@gmail.com </span>
        Password: <span className="secret">123456</span>
      </p>
    </div>
  );
}

export default LoginAsAdmin;
