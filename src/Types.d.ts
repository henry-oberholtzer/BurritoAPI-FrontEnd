interface BurritoObject {
  burritoId: int;
  name: string;
  price: int;
  location: string;
  protein: string;
  review: string;
  imageUrl: string;
  user: string;
  rating: int;
}

interface Action {
  type: string,
  error?: string,
  burritoList?: BurritoObject[]
}

interface BurritoApiQuery {
  protein?: string,
  maxPrice?: int,
  minRating?: int,
  random?: bool,
  page?: int,
  pageSize?: int,
}

type burritoReducerState = {
  isLoaded: bool,
  burritoList: BurritoObject[],
  error: null,
}
