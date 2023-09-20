import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const posts=useLoaderData()
    const {id,title}=posts
    const navigate=useNavigate()
    const {postId}=useParams()
    console.log(postId)

    const handleGoBack=()=>{
        navigate(-1)
    }
    
    return (
        <div>
            <h3>Post details section</h3>
            <h3>Id:{id}</h3>
            <h4>Title:{title}</h4>
            <button onClick={handleGoBack}>GO BACK</button>
        </div>
    );
};

export default PostDetails;