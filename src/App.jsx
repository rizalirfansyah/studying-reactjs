import React from "react";
import "./App.css";
import Button from "./components/Elements/Button/index";
import InputForm from "./components/Elements/Input/index";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl text-blue-600 font-bold mb-2">Login</h1>
        <p className="font-regular text-slate-700 mb-8">
          Welcome, Please Enter your details
        </p>
        <form action="">
          <InputForm
            label="email"
            type="email"
            placeholder="example@gmail.com"
            name="email"
          />
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-slate-900 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              className="text-sm border rounded w-full py-2 px-3 text-slate-800 placeholder: opacity-80"
              placeholder="***"
            />
          </div>
          <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
