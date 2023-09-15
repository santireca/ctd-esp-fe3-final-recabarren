/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'

export const initialState = { theme: "light", data: [], getData: () => {} };

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

    const [theme, dispatchTheme] = useReducer(themeReducer, 'light');

    function themeReducer(state, action) {

        switch (action.type) {
        case "setThemeLight":
            return "light";

        case "setThemeDark":
            return "dark";

        default:
            throw new Error(`No se reconoce el type: ${action.type}`);
        }
    }

    const changeTheme = () => {
        if (theme === 'light') {
        dispatchTheme({ type: "setThemeDark", payload: theme.theme });
        } else{
        dispatchTheme({ type: "setThemeLight", payload: theme.theme });
        }
    };

    const [data, setdata] = useState();

    const getData = async () => {
        const response = await axios("https://jsonplaceholder.typicode.com/users");
        const responseData = response.data;
        setdata(responseData);
    };

    const value = {
        ...initialState,
        theme: theme,
        data: data,
        getData: getData,
        changeTheme: changeTheme
    };

    return (
        <ContextGlobal.Provider value={value}>
            {children}
        </ContextGlobal.Provider>
    );
};
