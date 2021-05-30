///SET UP DATA LAYER


// WE NEED THIS TO TRACK THE BASKET

import React,{createContext,useContext,useReducer} from "react";
//this is data layer
export const StateContext=createContext();
///this build a provider///
export const StateProvider=({reducer,initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>  
    {children}
     </StateContext.Provider>
);
//this is how to use it inside a component

export const useStateValue=()=> useContext(StateContext)