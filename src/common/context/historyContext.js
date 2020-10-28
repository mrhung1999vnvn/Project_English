import React, { useState } from "react";
import { UserContext } from "./userContext";
import {saveHistory,getHistory} from '../db/history';

export const HistoryContext = React.createContext();
export function HistoryProvider(props) {
    const uContext =React.useContext(UserContext);
    const initHistory={
        ID:'',
        ID_User:'',
        total_Mark:0.0,
        total_Question:0,
        total_fail:0,
        total_success:0,
        created_at:''
    }
    const [history,set_history]=useState(initHistory);
    const setData = (input) =>{
        if(input){
            saveHistory(input);
        }
    }

    const getData = () => {
        let objectHistory = getHistory(uContext.data.accountId);
        console.log(objectHistory)
        set_history((oldState)=>({...oldState,objectHistory}))
        
        return {status:true,data:history}
    }

    const store ={
        data:history,
        setData,
        getData
    }

    return(
        <HistoryContext.Provider value={store}>
            {props.children}
        </HistoryContext.Provider>
    );
}
