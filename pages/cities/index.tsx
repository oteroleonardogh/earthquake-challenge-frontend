import { useState } from 'react';
import { createCity } from '../../lib/api';

export default function CitiesPage() {
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [population, setPopulation] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createCity(name, latitude, longitude, population);
      setMessage('City created successfully');
    } catch (error: any) {
      setMessage(`Error creating city: ${error.message}`);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Create City</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">
            Name:
          </label>
          <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} className="border-gray-300 border p-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="latitude" className="mb-1 font-medium">
            Latitude:
          </label>
          <input type="number" id="latitude" name="latitude" required value={latitude} onChange={(e) => setLatitude(parseFloat(e.target.value))} className="border-gray-300 border p-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="longitude" className="mb-1 font-medium">
            Longitude:
          </label>
          <input type="number" id="longitude" name="longitude" required value={longitude} onChange={(e) => setLongitude(parseFloat(e.target.value))} className="border-gray-300 border p-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="population" className="mb-1 font-medium">
            Population:
          </label>
          <input type="number" id="population" name="population" required value={population} onChange={(e) => setPopulation(parseInt(e.target.value))} className="border-gray-300 border p-2" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Create
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}
