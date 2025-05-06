import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useIsLogged = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("t");
    if (!token) {
      navigate("/login");
    }
  }, []);
};
