import './App.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const nav = useNavigate();

	return (
		<>
			<h1>Home page</h1>
			<p>Register for a JWT token</p>
			<form>
				<label htmlFor="email">Email:</label>
				<input
					type="text"
					id="email"
					name="email"
				/>
				<label htmlFor="pwd">Password:</label>
				<input
					type="password"
					id="pwd"
					name="pwd"
				/>
				<button>register</button>
			</form>
			<hr />
			<p>Login</p>
			<form>
				<label htmlFor="email">Email:</label>
				<input
					type="text"
					id="email"
					name="email"
				/>
				<label htmlFor="pwd">Password:</label>
				<input
					type="password"
					id="pwd"
					name="pwd"
				/>
				<button>login</button>
			</form>
			<hr />
			<h3>See all burritos</h3>
			<button onClick={() => nav(`/burritos/`)}>See all</button>
			<hr />
			<h3>See a random burrito</h3>
			<button>Rando</button>
			{/* nav to burrito-id page */}
			<hr />
			<h3>Search burrito by...?</h3>
			<form>
				<label htmlFor="query">Search</label>
				<input
					type="text"
					id="query"
					name="query"
				/>
				<button>find</button>
				{/* api call here */}
			</form>
		</>
	);
}
