import { Link } from "react-router-dom";
const User = ({user}) => {
   const {id,name,email,phone}=user
    return (
        <div className="border rounded-lg bg-blue-900 p-4">
            <h3>Name:{name}</h3>
            <p>Email:{email}</p>
            <p className="mb-5">Phone:{phone}</p>
            <Link to={`/user/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default User;