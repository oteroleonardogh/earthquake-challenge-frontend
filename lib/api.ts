import axios from 'axios';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
//console.log('Using NEXT_PUBLIC_API_URL: ', NEXT_PUBLIC_API_URL);

const axiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
  //withCredentials: true,
});

export async function createCity(name: string, latitude: number, longitude: number, population: number): Promise<void> {
  const url = '/cities/';
  const data = {
    name,
    latitude,
    longitude,
    population,
  };
  await axiosInstance.post(url, data);
}

export const getNearestEarthquake = async (city: string, startDate: string, endDate: string, magnitude: string) => {
  const url = `/nearest_earthquake/${city}/${startDate}/${endDate}/${magnitude}/`;
  const response = await axiosInstance.get(url);
  return response.data;
};
