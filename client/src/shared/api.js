import axios from 'axios';

axios.defaults.baseURL = 'https://car-api2.p.rapidapi.com/api/';
axios.defaults.headers.common['x-rapidapi-key'] = "9329d2f913msh798e4b2030d4db3p141625jsncbbe6d3e649c";

export const getMakesApi = async() => {
    const {data} = await axios.get('/makes');
    return data;
}