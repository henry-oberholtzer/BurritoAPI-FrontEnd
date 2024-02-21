import Burrito from './Burrito';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TodosBurritos = () => {
	const burritoList = useLoaderData() as BurritoObject[];
	const nav = useNavigate();

		return (
			<>
				<h1>todos los resultados de los burritos</h1>
				<div className="results">
					{burritoList.map((burrito) => (
						<Burrito
							{...burrito}

							// <img src="{burrito.ImageUrl" />
						/>
					))}
				</div>
				<button onClick={() => nav(`/`)}>go home</button>
			</>
		);
	}
export default TodosBurritos;
