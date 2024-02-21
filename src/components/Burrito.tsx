import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Burrito = (burrito: BurritoObject) => {
	const nav = useNavigate();
  const id = useParams();

	return (
		// to be a card
		<div>
			<h3>{burrito.Name}</h3>
			<img
				src={burrito.ImageUrl}
				alt="burrito"
			/>
			<h5>{burrito.Price}</h5>
			<h5>{burrito.Location}</h5>
			<h5>{burrito.Protein}</h5>
			<h5>{burrito.Review}</h5>
			<h5>{burrito.Rating}</h5>
			<button onClick={() => nav(`/Burritos/${id}/`)}>Details?</button>
		</div>
	);
};
export default Burrito;
