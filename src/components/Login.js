import React from 'react';

function Login() {
  return (
    <div className="Login">
        <input type="text" id="username" placeHolder="UserName@gmail.com"/>
        <br />
        <input type="password" id="password" placeHolder="****" />
        <br />
        <br />
        <button>Login</button>
        
    </div>
  );
}

export default Login;
