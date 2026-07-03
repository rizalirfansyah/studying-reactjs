import FormLogin from "../Fragments/FormLogin";

const AuthLayout = (props) => {
  const { title, children } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl text-blue-600 font-bold mb-2">{title}</h1>
        <p className="font-regular text-slate-700 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
