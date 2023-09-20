import { useLoaderData } from "react-router-dom";


const Userdetails = () => {
    const user=useLoaderData()
    const {name,username,website}=user
    return (
        <div>
            <h3 className="text-2xl">Show the user details</h3>
            <h4>Name:{name}</h4>
            <h5>User Name: {username}</h5>
            <p>Website: {website}</p>
          
        </div>
    );
};

export default Userdetails;