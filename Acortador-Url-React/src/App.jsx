import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div>
          <p>API URL: {import.meta.env.VITE_API_BASE_URL}</p>
        </div>
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Acortador Url
        </h1>
        <UrlForm/>
        <UrlList/>

    </div>
    
  )
}
