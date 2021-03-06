import {atom, selector} from 'recoil';
import axios from 'axios';

export const Post = atom({
    key : 'Post',
    default : [],
});

export const getPost = selector({
    key : "getPost",
    get : async({get}) =>{
        const PostData = get(Post);
        const response = await axios.get('http://localhost:3065/posts',{
            withCredentials : true
        })
        console.log(response.data);
        return response.data;
    },
})