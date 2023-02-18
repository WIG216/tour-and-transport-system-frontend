import React, { Children } from 'react'
import {createContext, useEffect, useState} from "react";
// import axios from "axios";
import {data} from "autoprefixer";

const UserContext = () => {
    const [user,setUser] = useState(null);
    const [ready,setReady] = useState(false);
    useEffect(() => {
      if (!user) {
        // axios.get('/profile').then(({data}) => {
        //   setUser(data);
        //   setReady(true);
        // });
      }
    }, []);
    return (
      <UserContext.Provider value={{user,setUser,ready}}>
        {Children}
      </UserContext.Provider>
    );
}

export default UserContext