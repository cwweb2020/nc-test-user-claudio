import axios from 'axios';

const AxiosClient = axios.create({

    baseURL: 'http://localhost:8081',
    
});
export default AxiosClient;