import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button/index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Username"
        type="text"
        placeholder="insert username e.g rizalipee"
        name="username"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="******"
        name="confirmPassword"
      />

      <Button classname="bg-slate-700 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
