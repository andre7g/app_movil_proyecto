import axios from 'axios';
const PostApi = axios.create({
    baseURL:'http://10.0.2.2:5196/apiconsume/create?endpoint=api'
    //baseURL:'http://205.209.122.7:8095/apiconsume/create?endpoint=api'
});
export default PostApi;