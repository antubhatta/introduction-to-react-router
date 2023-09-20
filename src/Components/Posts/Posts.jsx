import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const post= useLoaderData()
   
    return (
        <div className="">
            <h3>Our Posts:{ post.length}</h3>
            <div className="text-center flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {
                    post.map((post)=><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;