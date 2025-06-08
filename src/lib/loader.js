import apiRequest from "./apiRequest";

export const postloader = async ({request,params}) => {

const topPost = await apiRequest.get('post/topPost');
const user = await apiRequest.get('/user');

return {
    topPost:topPost.data.data,
    user:user.data.data};
}

export const catPostloader = async ({request,params}) => {

    const post = await apiRequest.get('post?catogries='+params.id);
    
    return {post:post.data.data};
    }

export const singlePageLoader  = async ({request,params}) => {
    const post = await apiRequest.get('post/'+params.id);
    return {post:post.data.data};
}

export const profileLoder = async ({request,params}) => {
   const post = await apiRequest.get('/post/mypost');
   return {post:post.data.data};
}

export const editorLoader = async ({request,params}) => {
    
    const post = await apiRequest.get('post/editor/'+params.userid)
    return {post:post.data.data};
}