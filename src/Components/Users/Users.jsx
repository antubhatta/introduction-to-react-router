import { useLoaderData } from "react-router-dom";
import User from "./User/User";

const Users = () => {
    const users=useLoaderData()
    
    return (
        <div>
            <h2>Users Section:{users.length}</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-7 gap-4">
            {
                users.map((item,idx)=><User key={idx} user={item}></User>)
            }
           </div>
        </div>
    );
};

export default Users;