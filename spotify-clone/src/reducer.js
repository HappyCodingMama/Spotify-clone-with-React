export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQCQWU4Ys42t5FTInM4HTqs-5HQRpifAcN_P61Nge7JF0BQ-s5L5XpF0R69yAT4z6SggoRQyHL1kGsCLlcIHLvbdx1zjMWeg3gGBNojcj9TGtBfG-6KBUbd9lTYjGQblE_Lop8bekZx91NWm87J27YUQm37ZtPGdQGwjlKhzQgARbt1O",
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
