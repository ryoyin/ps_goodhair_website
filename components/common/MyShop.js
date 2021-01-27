import React from 'react';
import {MenuItem, Select, InputLabel } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';


const MyShop = ({shop,setMyShop,setMyDate,setMyTime,myShop,system}) =>{
    let fontColor = {};
    myShop !== "" ? fontColor = {color: '#222'} : fontColor = {color: 'gray'};
    const defaultMaterialTheme1 = createMuiTheme({
        overrides: {
            MuiSelect: {
                select: fontColor,
            },
        },
    });



    return(
        <ThemeProvider theme={defaultMaterialTheme1}>
            <Select {...shop} value={myShop} onChange={x => { setMyShop(x.target.value); setMyTime(''); setMyDate(null); }} displayEmpty={true} disableUnderline >
                    <MenuItem value={''} disabled>{shop.placeholder}</MenuItem>
                    {
                        system.shopList?.map((x, idx) => <MenuItem key={'shop_' + idx} value={x} >{x.name}</MenuItem>)
                    }
            </Select>
        </ThemeProvider>
    ) 
}

export default MyShop;