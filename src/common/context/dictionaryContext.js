import React, { useState } from "react";
import {setDictionary,getDictionary} from '../db/dictionary';

export const DictionaryContext = React.createContext();
export function DictionaryProvider(props) {
    const [states,set_states]=useState(initDicitionary);
    const initDicitionary ={
        ID:'',
        word:[],
        id_user:''
    }
    
    const setData = (objInput,accountId) =>{
        if(objInput.length>0){
            const obj={
                ID:Math.random().toString(36).substr(2,9),
                word:objInput,
                id_user:accountId
            }
            setDictionary(obj);
            console.log(obj);
            set_states((oldStates)=>({...oldStates,...obj}))
        }
        return true;
    }

    const getData = () =>{
        // set_states(initDicitionary);
        let resultDictionary = getDictionary();
        set_states((oldStates)=>({...oldStates,...resultDictionary}))
        return JSON.parse(JSON.stringify(resultDictionary));
    }

    


    const store = {
        data:states,
        setData,
        getData
    }

    return (
        <DictionaryContext.Provider value={store}> 
            {props.children} 
        </DictionaryContext.Provider>
    );
}