import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Todos from './TodosBurritos';
import Home from './Home';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

export const getBurrito = (q: BurritoApiQuery) => {
  const { protein, maxPrice, minRating, random, page, pageSize } = q;
  fetch(`${import.meta.env.VITE_SERVER_URL}/api/Burritos?protein=${protein}?maxPrice=${maxPrice}?minRating=${minRating}?random=${random}?minRating=${minRating}?page=${page}?pageSize=${pageSize}&api_key=${import.meta.env.VITE_BURRITO_API_KEY}`)
  .then(r => r.json())
  .then((jsonified) => {
    return jsonified.data;
  })
  .catch((error) => {
    return error.message;
  })
}

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/burritos',
			element: <Todos />,
			loader: async ({ params }) => {
				return getBurrito(params);
			},
		},
		// {
		// 	path: '/burritos/:burritoId'
		// 	element: <BurritoDetalles />
		// }
	]);
  return (
		<>
			<Header />
			<h1>Burrito API</h1>
			<RouterProvider router={router} />
		</>
	);
}

export default App
