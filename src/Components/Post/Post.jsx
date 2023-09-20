import { Link, useNavigate } from "react-router-dom";
const Post = ({post}) => {
    const {id,title,body}=post
  const naviGate=useNavigate()
    const handleDetails=()=>{
        naviGate(`/post/${id}`)
    }
    return (
        <div className="border rounded-xl bg-emerald-800 flex flex-col  p-6">
            <h3 className="text-3xl">Id: {id}</h3>
            <h3 className="text-lg w-[300px] mx-auto">Title: {title}</h3>
            <p className="text-xs w-[300px] mx-auto mb-4">Body: {body}</p>
           
           <Link to={`/post/${id}`}><button>Details</button></Link>
           <button onClick={handleDetails}>Click to details</button>
           
        </div>
    );
};

export default Post;