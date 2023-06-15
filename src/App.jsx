import React, { useState } from 'react';
import Card from './components/Card';
import initialData from './helpers/initialData';
import fetchData from './services/api';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(city).then((response) => { setData(response); });
  };

  return (

    <div className="flex w-full h-screen items-center justify-center flex-col">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none"
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="bg-teal-950 p-3 rounded-lg ml-4 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>
      <Card data={data} />
    </div>
  );
}

export default App;
