import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

export default function UrlList() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    // Solicitar las URLs desde el backend
    axiosInstance.get('/')
      .then(res => {
        console.log('Respuesta de URLs:', res.data);  // Verifica si la respuesta contiene los datos correctamente
        setUrls(res.data);
      })
      .catch(err => {
        console.error('Error al obtener las URLs:', err);
      });
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Tus URLs Acortadas</h2>
      <table className="border-collapse table-fixed w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-2 py-1">Original</th>
            <th className="px-2 py-1">Acortada</th>
            <th className="px-2 py-1">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(urls) && urls.map((url) => (
            <tr key={url._id} className="border-t">
              <td className="block overflow-hidden text-ellipsis whitespace-nowrap text-blue-600 underline">{url.full}</td>
              <td className="max-w-[200px] px-2 py-1 overflow-hidden">
                <a href={`content-enthusiasm-production.up.railway.app/${url.short}`} target="_blank" rel="noopener noreferrer" className='block overflow-hidden text-ellipsis whitespace-nowrap text-green-600 underline'>
                  {url.short}
                </a>
              </td>
              <td className="p-2">{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}