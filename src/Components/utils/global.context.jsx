import { createContext, useReducer, useMemo } from "react";
import PropTypes from "prop-types";

export const initialState = {
  theme: "light",
  data: [],
};

// Acciones
const CHANGE_THEME = "CHANGE_THEME";
const SET_DATA = "SET_DATA";

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeTheme = () => {
    dispatch({ type: CHANGE_THEME });
  };

  const setData = (data) => {
    dispatch({ type: SET_DATA, payload: data });
  };

  const value = useMemo(
    () => ({
      theme: state.theme,
      data: state.data,
      changeTheme,
      setData,
    }),
    [state]
  );

  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
