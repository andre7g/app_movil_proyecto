import axios from 'axios';

const AlimentosApi = axios.create({
    baseURL:'http://10.0.2.2:5196/apiconsume/obtener?endpoint=api'
    //baseURL:'http://205.209.122.7:8095/apiconsume/obtener?endpoint=api'
});

export default AlimentosApi;