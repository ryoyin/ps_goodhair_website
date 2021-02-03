
import React, {useEffect, useState, useContext} from 'react';
import Link from 'next/link';
import {submitForm } from '../../utils/common';
import { SystemContext } from '../../utils/SystemProvider';
import MyTimeDateShopComponent from '../common/MyTimeDateShopComponent';
import {MenuItem, Select, InputLabel } from '@material-ui/core';
import enLocale from "date-fns/locale/en-US";
import zhLocale from "date-fns/locale/zh-TW";
import MyShop from "../common/MyShop";

const Form = () => {
    const system = useContext(SystemContext);
    const shop = {
        className: 'shop-input',
        placeholder: "選擇療程分店",
        name: 'center',
        underline: 'none',
        // required: true
    }
    const time = {
        className: 'time-input',
        type: 'time',
        name: 'time',
        // className: 'form-control form-control-lg form-input',
        placeholder: "選擇療程日期",
    }
    const date = {
        className: 'date-input',
        type: 'date',
        name: 'datepicker',
        placeholder: "選擇療程時間",
    }

    const [myName, setMyName] = useState('');
    const [myPhone, setMyPhone] = useState('');
    const [myMail, setMyMail] = useState('');
    const [myShop, setMyShop] = useState('');
    const [myDate, setMyDate] = useState(null);
    const [myTime, setMyTime] = useState('');
    const [isPrivacy, setIsPrivacy] = useState(false);
    const [isAcceptPromote, setIsAcceptPromote] = useState(false);


    const submit = () => {
        const checkingBuilder = (condition, msg) => { return { condition: condition, msg: msg } }
        const rolesConfig =
        {
            name: { data: myName, checking: [checkingBuilder((v) => !v, '請輸入姓名。')] },
            tel: { data: myPhone, checking: [checkingBuilder((v) => !v, '請輸入電話。'), checkingBuilder((v) => !/^(0|[1-9][0-9]*)$/.test(v), '請輸入正確的電話。'),] },
            // email: {
            //     data: myMail, checking: [checkingBuilder((v) => !v, '請輸入電郵地址。')
            //         , checkingBuilder((v) => !/(?:[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(v), '請輸入正確的電郵地址。')]
            // },
            // area: { data: myArea, checking: [checkingBuilder((v) => !v, '請選擇電話區號。')] },
            time: { data: myTime, checking: [checkingBuilder((v) => !v, '請選擇時間。')] },
            center: { data: myShop, checking: [checkingBuilder((v) => !v, '請選擇分店。')] },
            datepicker: { data: myDate, checking: [checkingBuilder((v) => !v, '請選擇日期。')] },
            privacy: { data: isPrivacy, checking: [checkingBuilder((v) => !v, '請同意優惠條款及細則，及私隱政策。')] }
        }

        const error = Object.keys(rolesConfig).map(x => {
            const me = rolesConfig[x];
            return me.checking?.find(y => y.condition(me.data))?.msg;
        }).filter(x => !!x)
        // console.log(error)
        if (error.length > 0) { alert(error.join('\n')); return; }
        submitForm({
            name: myName,
            tel_area: '',
            tel: myPhone,
            email: myMail,
            center: myShop.id,
            datepicker: myDate,
            time: myTime,
            name_big5: '',
            form_value: 1,
            viewLang: 'tc',
            position: '',
            gender: 'F',
            hide: '',
            formType: 'PH_Website_F8_HK1173_PS2783_5903',
            freetryitem: 'Nil',
            question: '',
            referral: '',
            ageRange: '0',
            distinct: '0',
            Landing_ID: 'PH_Website_F8_HK1173_PS2783_5903',
            PSTeam: 'PS2783',
            PromotionCode: 'HK1173',
            promotion_code: 'HK1173',
            PIC: 'Kary Lam',
            Channel: 'Website',
            Landing_Description: '髮神F8生髮療程-免費體驗送水光針面膜1盒',
            TreatmentCode: 'FPR2214',
            SMS: '1',
            Reserve1: '',
            Reserve2: '',
        }).then((x) => {
            router.push(window.location.origin + '/thankyou');
        }).catch(x => alert('系統錯誤，請稍後再試。'))
    }

    return (
        <form>
            <div className="caption">一分鐘線上自助登記</div>
            <input type="text" name="name" placeholder="姓名" onChange={(e) => setMyName(e.target.value)} />
            <input type="text" name="tel" placeholder="手提電話" onChange={(e) => setMyPhone(e.target.value)} />
            <input type="text" name="email" placeholder="電郵" onChange={(e) => setMyMail(e.target.value)} />
            {/* <select name="shop" required>
                <option value="" disabled selected hidden> 選擇療程分店 </option>
            </select> 
             <select name="date" required>
                <option value="" disabled selected hidden> 選擇療程日期 </option>
            </select>
            <select name="time" required>
                <option value="" disabled selected hidden> 選擇療程時間 </option>
            </select> */}
             {/* <Select {...shop} value={myShop} onChange={x => { setMyShop(x.target.value); setMyTime(''); setMyDate(null); }} displayEmpty={true}>
                <MenuItem value={''} disabled>{shop.placeholder}</MenuItem>
                {
                    system.shopList?.map((x, idx) => <MenuItem key={'shop_' + idx} value={x} >{x.name}</MenuItem>)
                }
            </Select> */}
            <MyShop shop={shop} myShop={myShop} setMyShop={setMyShop} setMyDate={setMyDate} setMyTime={setMyTime} system={system} />
            {/* <select name="center" value={myShop} onChange={x => { setMyShop(x.target.value); setMyTime(''); setMyDate(null); }} required>
                <option value="" disabled> 選擇療程分店 </option>
                {
                    system.shopList?.map((x, idx) => <option key={'shop_' + idx} value={x}>{x.name}</option>)
                }
            </select>  */}
            <MyTimeDateShopComponent
                className={date.className}
                placeholder={date.placeholder}
                myDate={myDate} setMyDate={setMyDate}
                myShop={myShop}
                myTime={myTime} setMyTime={setMyTime}
                locale={zhLocale}
                timeConfig={time}
            /> 
            <div className="checkable_block">
                <div className="checkable_item">
                    <input type="checkbox" name="tnc" value={isPrivacy} onChange={() => setIsPrivacy(!isPrivacy)} />
                    本人已閱讀並同意
                    <a href='/privacy' target='_blank'>私隱政策</a>
                    與
                    <a href='/terms-and-conditions' target='_blank'>條款細則</a>
                    。
                </div>
                <div className="checkable_item">
                <input type="checkbox" name="news" value={isAcceptPromote} onChange={() => setIsAcceptPromote(!isAcceptPromote)} />
                本人本人願意日後繼續收取Good Hair之產品資料及宣傳資訊。如選擇拒絕接收，本人同時將不會收到貴公司的任何禮品、折扣及其他優惠資訊。
                </div>
            </div>

            <input type="button" value="完成登記" onClick={() => { submit() }} />

            <div className="remark">* 療程效果會因個人之皮膚、身體狀況等因素而有所不同。</div>

        </form>
    )
}

export default Form