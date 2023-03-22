import {useState, useEffect} from 'react';
import axios from 'axios';


const useFetch = (endpoint,query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '16d7d6fbd8mshd2be37e8bb4d1dbp171217jsnbbc7d2e95d5b',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
      };
    
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false)
        } catch (error) {
            setError(error);
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    },[]);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch};

};

export default useFetch;