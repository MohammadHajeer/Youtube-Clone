import axios from "axios";


const BASE_URL: string = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '20'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const getData = async (url: string = 'search') => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}