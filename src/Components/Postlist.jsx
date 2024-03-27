import { useContext} from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Post-List-Provider";
import Welcome from "./Welcome";
import Loadingspinner from "./LoadingSpinner";

const PostList=()=>{
   const{postList,fetching}= useContext(PostListData);
    return(
        <>
        {fetching && <Loadingspinner></Loadingspinner>}
        {! fetching && postList.length === 0 && <Welcome/>}
        {! fetching && postList.map((post)=>(
        <Post key={post.id} post={post}/>
        ))}
        </>
    );
};
export default PostList;