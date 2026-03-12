import { useNavigate } from "react-router-dom"
import { getLoggedUser } from "../http-utils/user-requests";

export function AuthenticatedRoute(props) {
  const navigate = useNavigate();
  const user = getLoggedUser();

  if (!user) {
    navigate('/login')
    return;
  }

  return <props.element {...props} />;
}