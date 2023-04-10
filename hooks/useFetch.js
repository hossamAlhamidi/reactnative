import {useState,useEffect} from 'react'
import axios from 'axios'
// import {RAPID_API_KEY} from '@env'

// const rapidApiKey = RAPID_API_KEY;
const useFetch = (endpoint,query) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': '6f01fb7f37msh4de012d953d7a86p1fa36ejsned65f402838b',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.request(options);
            setData(response.data.data);
        } catch (error) {
            setError(error);
            alert(error);
        } finally {
            setLoading(false);
        }
      }

        useEffect(() => {
            fetchData();
        }, []);

        const refetch = () => {
            setIsLoading(true)
            fetchData();
        }

        return {data,loading,error,refetch}

}

export default useFetch