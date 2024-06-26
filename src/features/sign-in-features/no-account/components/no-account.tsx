import { Link } from "react-router-dom";

export const NoAccount = () => {
  return (
    <div className="flex justify-center">
      <span className="text-[14px] text-gray-700 mr-1">
        Don't have an account?
      </span>
      <Link to="/sign-up" className="text-[14px] text-blue-500">
        Sign Up
      </Link>
    </div>
  );
};
