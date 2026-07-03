import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm text-slate-600 text-center mt-3">
        Already have account? {""}
        <Link
          to="/login"
          className="text-blue-600 hover:text-blue-900 font-bold"
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
