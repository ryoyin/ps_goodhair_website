import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import zhLocale from "date-fns/locale/zh-TW";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import React from 'react';

const defaultMaterialTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#b6e5e6',
            contrastText: '#fff',
        }
    },
    overrides: {
        MuiInputBase: {
            root: {
                height: '100%',
            },
        },
    },
});


export default function MyDatePicker(props) {
    const { className, placeholder, myDate, myShop, dateFormat = 'yyyy-MM-dd', onChange, shouldDisableDate, disabled,
        invalidLabel = "錯誤格式", cancelLabel = "取消", okLabel = "確定", locale = zhLocale } = props;
    const [open, isOpen] = React.useState(false)
    return (
        <MuiPickersUtilsProvider locale={locale} utils={DateFnsUtils}>
            <ThemeProvider theme={defaultMaterialTheme}>
                <KeyboardDatePicker
                    className={className}
                    placeholder={placeholder}
                    value={myDate}
                    onChange={onChange}
                    format={dateFormat}
                    invalidLabel={invalidLabel}
                    cancelLabel={cancelLabel}
                    okLabel={okLabel}
                    shouldDisableDate={shouldDisableDate}
                    disabled={disabled}
                    inputProps={{ disabled: true, style: { cursor: myShop ? 'pointer' : 'unset' } }}
                    onClick={() => { if (myShop) isOpen(true) }}
                    onClose={() => isOpen(false)}
                    onAccept={() => isOpen(false)}
                    open={open}
                    disablePast
                    // autoOk
                />
            </ThemeProvider>
        </MuiPickersUtilsProvider>

    )
}