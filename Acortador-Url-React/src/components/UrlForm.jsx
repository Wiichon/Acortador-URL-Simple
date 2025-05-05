import { useState } from 'react';
import axios from '../api/axiosInstance';

export default function UrlForm() {
  const [input, setInput] = useState('');
  const [shortUrl, setShortUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/shorten', { full: input });
      setShortUrl(res.data.short);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="">
      <div className="min-w-full flex items-center justify-center bg-gray-100 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded shadow"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pega tu URL"
            className="w-full sm:w-3/4 border p-3 rounded text-sm sm:text-base"
          />
          <button
            type="submit"
            className="w-full sm:w-1/4 bg-blue-600 text-white p-3 rounded text-sm sm:text-base hover:bg-blue-700 transition"
          >
            Acortar
          </button>
        </form>
      </div>
      
    </div>
  );
}

