interface BurritoObject {
  BurritoId: int;
  Name: string;
  Price: int;
  Location: string;
  Protein: string;
  Review: string;
  ImageUrl: string;
  User: string;
  Rating: int;
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
