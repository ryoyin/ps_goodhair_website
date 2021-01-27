import { format, getDay, isToday, parseISO, addHours, isBefore, add } from 'date-fns'
import MyDatePicker from './MyDatePicker';
import { MenuItem, Select } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import useDisabledDate from './hooks/useDisabledDate'

const dateFormat = 'yyyy-MM-dd'

export default function MyTimeDateShopComponent(props) {
    const { className, placeholder, myDate, setMyDate, myShop, locale, timeConfig, myTime, setMyTime } = props;
    const [today, setToday] = useState(null);
    const [firstDay, setFirstDay] = useState(false);
    const [after28Day, setAfter28Day] = useState(false);
    const { dayTimelist, getMyList } = useDisabledDate({ myShop, firstDay, myDate, today, setToday, setAfter28Day, setFirstDay })

    return (
        <>


            <MyDatePicker
                className={className}
                placeholder={myShop ? placeholder : '請先選擇分店'}
                myDate={myDate} 
                myShop={myShop}
                dateFormat={dateFormat}
                disabled={!myShop}
                onChange={date => { setMyDate(format(date, dateFormat)); setMyTime('') }}
                shouldDisableDate={(currentDate) => {
                    const enableToday = isToday(currentDate);
                    const isBefore28 = isBefore(currentDate, after28Day);
                    const closeDay = [...myShop.close_day || [], ...myShop.full_dates || []].indexOf(format(currentDate, dateFormat)) > -1;
                    return !(enableToday || isBefore28) || closeDay;
                }}
                invalidLabel="錯誤格式"
                cancelLabel="取消"
                okLabel="確定"
                locale={locale}
            />


            <Select {...timeConfig} value={myTime} disabled={!myDate} onChange={x => setMyTime(x.target.value)} displayEmpty={true} >
                <MenuItem value={''}>{!!myDate ? (dayTimelist.length > 0 ? timeConfig.placeholder : '已過辨工時間') : '請先選擇日期'}</MenuItem>
                {dayTimelist?.map((x, idx) => <MenuItem key={'time_' + idx} value={x} >{getMyList(myShop, today)[x]}</MenuItem>)}
            </Select>


        </>
    )
}
