import React, {
    useEffect
  } from 'react'
  import {
    format,
    getDay,
    isToday,
    parseISO,
    addHours,
    isBefore,
    add
  } from 'date-fns'
  
  const removeTimeList = ({
    firstDay,
    myDate,
    dateFormat,
    myShop
  }) => {
    return [{
        condition: firstDay,
        removeRules: (k) => k < myShop.first_work_day_first
      },
      {
        condition: myShop?.full_times ? myShop.full_times[myDate] : false,
        removeRules: (k) => myShop.full_times[myDate]?.indexOf(k) > -1
      },
      {
        condition: isToday(parseISO(myDate)),
        removeRules: (k) => k < format(addHours(new window.Date(), 2), 'HHmm')
      },
      // {
      //   condition: ['2021-01-06'].indexOf(format(parseISO(myDate), dateFormat)) > -1,
      //   removeRules: (k) => (k > 1700)
      // }, // ignore sample
      // {
      //   condition: ['2021-01-08'].indexOf(format(parseISO(myDate), dateFormat)) > -1,
      //   removeRules: (k) => (k < 2100)
      // } // ignore sample
    ]
  }
  
  const getMyList = (myShop, selectedDate) => {
    selectedDate = typeof selectedDate == 'string' ? parseISO(selectedDate) : selectedDate;
    let list = myShop?.weekday_time
    switch (getDay(selectedDate).toString()) {
      case '6':
        list = myShop?.sat_time;
        break
      case '0':
        list = myShop?.sun_time;
        break
    }
    return list
  }
  
  function useDisabledDate({
    myShop,
    firstDay,
    myDate,
    today,
    setToday,
    setAfter28Day,
    setFirstDay,
    dateFormat
  }) {
    useEffect(() => {
      const date = new window.Date()
      const currentMonthFirstDayDate = new window.Date(date.getFullYear(), date.getMonth(), 1)
      if ([0, 6].find(x => x === getDay(currentMonthFirstDayDate))) {
        currentMonthFirstDayDate.setDate(currentMonthFirstDayDate.getDate() + 1)
      }
      setToday(date)
      setAfter28Day(add(new window.Date(), {
        days: 28
      }))
      setFirstDay(isToday(currentMonthFirstDayDate))
    }, [])
  
    return {
      dayTimelist: (!myShop || !myDate) ?
        [] :
        removeTimeList({
          firstDay,
          myDate,
          dateFormat,
          myShop
        }).reduce((accumulator, current) => {
          if (current.condition) return accumulator.filter((k) => !current.removeRules(k))
          return accumulator
        }, Object.keys(getMyList(myShop, myDate))),
      getMyList: getMyList
    }
  }
  
  export default useDisabledDate
  