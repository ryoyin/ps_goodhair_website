const Form = () => {
    return (
        <form>
            <div className="caption">一分鐘線上自助登記</div>
            <input type="text" name="name" placeholder="姓名" required />
            <input type="text" name="tel" placeholder="手提電話" required />
            <input type="text" name="email" placeholder="電郵" required />
            <select name="shop" required>
                <option value="" disabled selected hidden> 選擇療程分店 </option>
            </select>
            <select name="date" required>
                <option value="" disabled selected hidden> 選擇療程日期 </option>
            </select>
            <select name="time" required>
                <option value="" disabled selected hidden> 選擇療程時間 </option>
            </select>
            
            <div className="checkable_block">
                <div className="checkable_item">
                    <input type="checkbox" name="tnc" />
                    本人已閱讀並同意
                    <Link href='/'>
                        <a>私隱政策</a>
                    </Link>
                    與
                    <Link href='/'>
                        <a>條款細則</a>
                    </Link>
                    。
                </div>
                <div className="checkable_item">
                <input type="checkbox" name="news" />
                本人本人願意日後繼續收取Good Hair之產品資料及宣傳資訊。如選擇拒絕接收，本人同時將不會收到貴公司的任何禮品、折扣及其他優惠資訊。
                </div>
            </div>

            <input type="submit" value="完成登記" />

            <div className="remark">* 療程效果會因個人之皮膚、身體狀況等因素而有所不同。</div>

        </form>
    )
}

export default Form