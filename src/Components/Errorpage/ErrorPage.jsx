import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError()
    console.log(error)
    return (
        <div>
            <h2>Oops!</h2>
            <p>Sorry an unexpected error has occurred</p>
            <p>{error.statusText || error.message}</p>
      {
        error.status===404 && <div>
            <h3>Page not found</h3>
            <p>Go back where you form</p>
            <Link to="/"><button>Home</button></Link>
        </div>
      }
        </div>
    );
};

export default ErrorPage;