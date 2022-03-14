import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {

    const { data } = await axios.get((url), {

        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'b8e9d3bf20mshaf5e15641d01fa9p17a0e9jsn4867706a99c2'
          }

    })

    return data;

}