import { useState, useReducer } from 'react';
import Burrito from './Burrito';
import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const TodosBurritos = () => {
	const burritoList = useLoaderData() as burritoArray;
	//useeffect is in api call file...

		return (
			<>

				<h1>todos los burritos results</h1>
				<div className="results">
					{burritoList.map((burrito, index: number) => (
						<Burrito
							key={index}
							Name={burrito.Name}
							Location={burrito.Location}
							// <img src="{burrito.ImageUrl" />
							index={index}
						/>
					))}
				</div>
			</>
		);
	}
export default TodosBurritos;
