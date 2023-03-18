import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ShouldBeLoggedIn = ({ children }) => {
  const location = useLocation();
  const isLogin = useSelector((state) => state.auth.isLogin_true);

  if (isLogin) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export const ShouldBeLoggedOut = ({ children }) => {
  const location = useLocation();
  const isLogin = useSelector((state) => state.auth.isLogin_true);

  if (!isLogin) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};
