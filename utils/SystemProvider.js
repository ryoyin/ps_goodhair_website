import React, {createContext, useState, useEffect} from 'react'; 
// import {useRouter} from 'next/router';
import {getShopList} from './common'

export const SystemContext = createContext(null);

export const SystemProvider = (props) => {
    // const router = useRouter();
    // const[lang, setLang] = useState(getCurrentLang(router));
    // const[firstInit, setFirstInit] = useState(true);
    const[shopList, setShopList] = useState([]);
// console.log(router);
    const fetch = async () => {
        const rs = await getShopList().catch(x => { return false }) || []
        // console.log(rs);
        setShopList(rs);
    }

    useEffect(() => {
        fetch();
    }, []);



    return(
        <SystemContext.Provider 
            value={{
                shopList: shopList
            }}>
            {props.children}
        </SystemContext.Provider>
    );

}
