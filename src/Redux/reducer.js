import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action.js";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== Number(action.payload)
        ),
      };

    case FILTER:
      return {
        ...state,
        myFavorites: [
          ...state.allCharacters.filter(
            (char) => char.gender === action.payload
          ),
        ],
      };

    case ORDER:
      switch (action.payload) {
        case "A":
          return {
            ...state,
            myFavorites: [
              ...state.allCharacters.sort((a, b) => (a.id > b.id ? 1 : -1)),
            ],
          };

        case "D":
          return {
            ...state,
            myFavorites: [
              ...state.allCharacters.sort((a, b) => (a.id < b.id ? 1 : -1)),
            ],
          };

        default:
          break;
      }
      break;

    default:
      return { ...state };
  }
};

export default reducer;
