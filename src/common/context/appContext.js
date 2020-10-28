import React, { useState } from "react";
import {setDictionary,getDictionary} from '../db/dictionary';
import {saveHistory,getHistory} from '../db/history';


export const AppContext = React.createContext();
export function AppProvider(props) {
    //Dictionary
    const [dictionary,set_dictionary]=useState(initDicitionary);
    const initDicitionary ={
        ID:'',
        word:[],
        id_user:''
    }

    const setDictionaryContext = (objInput,accountId) =>{
        if(objInput.length>0){
            const obj={
                ID:Math.random().toString(36).substr(2,9),
                word:objInput,
                id_user:accountId
            }
            setDictionary(obj);
            console.log(obj);
            set_dictionary((oldStates)=>({...oldStates,...obj}))
        }
        return true;
    }

    const getDictionaryContext = () =>{
        let resultDictionary = getDictionary();
        set_dictionary((oldStates)=>({...oldStates,...resultDictionary}))
        return JSON.parse(JSON.stringify(resultDictionary));
    }

    // History
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
    const setHistoryContext = (objInput) =>{
        if(input){
            saveHistory(objInput);
        }
    }

    const getHistoryContext = () =>{
        let objectHistory = getHistory(uContext.data.accountId);
        console.log(objectHistory)
        set_history((oldState)=>({...oldState,objectHistory}))
        
        return {status:true,data:history}
    }



    const store = {
        dictionary:{
            data:dictionary,
            getDictionaryContext,
            setDictionaryContext,
        },
        history:{
            data:history,
            getHistoryContext,
            setHistoryContext
        }
    }

    return (
        <AppContext.Provider value={store}>
            {props.children}
        </AppContext.Provider>
    );
}