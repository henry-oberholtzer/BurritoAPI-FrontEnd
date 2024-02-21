import { getBurritoFailure, getBurritoSuccess } from "./actions";


export const getBurrito = (q: BurritoApiQuery, dispatchFunction: React.Dispatch<object>) => {
  const { protein, maxPrice, minRating, random, page, pageSize } = q;
  fetch(`${import.meta.env.VITE_SERVER_URL}/api/Burritos?protein=${protein}?maxPrice=${maxPrice}?minRating=${minRating}?random=${random}?minRating=${minRating}?page=${page}?pageSize=${pageSize}&api_key=${import.meta.env.VITE_BURRITO_API_KEY}`)
  .then(r => r.json())
  .then((jsonified) => {
    const action = getBurritoSuccess(jsonified.data);
    dispatchFunction(action);
  })
  .catch((error) => {
    const action = getBurritoFailure(error);
    dispatchFunction(action)
  })
}
