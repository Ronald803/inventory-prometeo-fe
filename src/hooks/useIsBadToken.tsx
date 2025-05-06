import { useNavigate } from "react-router-dom";

export const useIsBadToken = (
  isLoading: boolean,
  isError: boolean,
  error: { data: { message: string } } | any
) => {
  const navigate = useNavigate();
  if (!isLoading && isError && error.data.message == "bad-token") {
    localStorage.setItem("t", "");
    navigate("/login");
  }
};
