import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm my-3 text-slate-600 text-center">
        Don't have an account? {""}
        <Link
          to="/register"
          className="text-blue-600 hover:text-blue-900 font-bold"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
