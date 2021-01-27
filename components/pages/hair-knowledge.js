import loadCustomRoutes from 'next/dist/lib/load-custom-routes'
import Link from 'next/link'
import Form from '../form/form'
const HairKnowledgeLayout = (props) => {
    const gender = props.gender
    const tn = props.translation.content
    const hairLossCases = props.translation.content.hair_loss
    return (
        <main className={`treatment treatment-${gender}`}>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="desktop">
                                <div className="banner-hero"><img src={tn.banner_hero} /></div>
                                <div className="banner-tagline"><img src={tn.banner_tagline} /></div>
                                <div className="banner-free-trial-banner"><img src="/images/treatment_free_trial_banner.png" /></div>
                            </div>
                            <div className="mobile">
                                <div className="banner-mobile-hero"><img src="/images/m_women_mobile_banner.png" /></div>
                            </div>
                            <Form />
                            {/* <form>
                                <div className="caption">一分鐘線上自助登記 </div>
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
                                    本人願意日後繼續收取Good Hair之產品資料及宣傳資訊。如選擇拒絕接收，本人同時將不會收到貴公司的任何禮品、折扣及其他優惠資訊。
                                    </div>
                                </div>

                                <input type="submit" value="完成登記" />

                                <div className="remark">* 療程效果會因個人之皮膚、身體狀況等因素而有所不同。</div>

                            </form> */}
                        </div>
                    </div>
                    <div className="free-trial-banner">
                        <img src="/images/treatment_free_trial_banner.png" />
                    </div>
                </div>
            </div>

            <div className="section first">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="/images/treatment-section-1.png" className="section-heading" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 description">醫療級軟激光生髮科技，針對易脫髮的生長週期，以「止脫」為理念，專門解決大量脫髮問題，延長頭髮的壽命，平衡脫髮速度及生長速度。</div>
                        <div className="col-md-12 hair-knowledge"><img src="/images/treatment-section-1-info.png" /></div>
                        <div className="hand-icon">
                            <img src="/images/finger_icon.png" />
                        </div>
                    </div>
                </div>
            </div>



            <div className="section even">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="/images/treatment-section-2.png" className="section-heading" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="content fda">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 info"><img src="/images/treatment-1-fda-step1.png" /></div>
                        <div className="col-sm-8 description"><p>醫學軟激光穿透表層細胞，到達毛囊根部，而毛囊根部含有豐富的黑色素，能夠強烈地吸收這個波長軟激光能量，令頭髮及毛囊保持健康生長，防止脫髮。</p></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"><i className="fas fa-sort-down"></i></div>
                        <div className="col-sm-8"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 info"><img src="/images/treatment-1-fda-step2.png" /></div>
                        <div className="col-sm-8 description"><p>滲透獨家活養精華，提高毛囊養份，刺激毛囊生長，強化頭皮及頭髮健康。完成療程後，髮根變得強韌，脫髮情況大大減少，毛囊細胞及頭髮回復濃密健康，即時年輕。</p></div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="/images/treatment-section-3.png" className="section-heading" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section successful-case">
                <div className="container">
                    <div className="row successful-case-img-block">
                        <div className="col-lg-6 col-md-12">
                            <img src={tn.case_before} />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <img src={tn.case_after} />
                        </div>
                    </div>
                    <div className="row remark">
                        <div className="col-md-12">*療程效果及進度會因個人之皮膚、身體狀況等因素而有所不同。</div>
                    </div>
                </div>
            </div>

            <div className="section even">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="/images/treatment-section-4.png" className="section-heading" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="section hair-loss-type">
                <div className="container">
                    <div className="row">
                        {gender == 'male' ? (
                            <>
                                {
                                    hairLossCases.map((hairLossCase, idx) => (
                                        <div 
                                            className={
                                                'col-lg-4 col-md-6 hair-loss-block '
                                                + (idx == 3 ? 'offset-lg-1' : '')
                                                + (idx == 4 ? 'offset-lg-2 offset-md-3' : '')
                                            }
                                            key={hairLossCase.id}
                                        >
                                            <img src={hairLossCase.numpic} className="number" />
                                            <img src={hairLossCase.pic} className="head" />
                                            <div>
                                                <p>{hairLossCase.name}</p>
                                                <p>{hairLossCase.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        ) : (
                                <>
                                    {
                                        hairLossCases.map((hairLossCase) => (
                                            <div className="col-lg-3 col-md-6 hair-loss-block" key={hairLossCase.id}>
                                                <img src={hairLossCase.numpic} className="number" />
                                                <img src={hairLossCase.pic} className="head" />
                                                <div>
                                                    <p>{hairLossCase.name}</p>
                                                    <p>{hairLossCase.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </>

                            )
                        }
                    </div>
                </div>
            </div>
            {/* <div className="section hair-loss-type">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 hair-loss-block" key={hairLoss.id}>
                            <img src={hairLoss.numpic} className="number" />
                            <img src={hairLoss.pic} className="head" />
                            <div>
                                <p>{hairLoss.name}</p>
                                <p>{hairLoss.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="section hair-loss-type">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 hair-loss-block">
                            <img src="/images/treatment-hair-loss-type-num1.png" className="number" />
                            <img src="/images/treatment-hair-loss-type-1.png" className="head" />
                            <div>
                                <p>脂溢性禿髮</p>
                                <p>前額兩側及頭頂的頭髮對稱地變得稀疏及幼細。頭油多，阻塞毛孔，皮脂積存在毛囊，引起發炎，生長期的頭髮變成靜止期，造成脫髮。</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 hair-loss-block">
                            <img src="/images/treatment-hair-loss-type-num2.png" className="number" />
                            <img src="/images/treatment-hair-loss-type-2.png" className="head" />
                            <div>
                                <p>Ｍ字型脫髮</p>
                                <p>前額髮線開始稍微向後移，情況嚴重時延至後枕。</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 hair-loss-block">
                            <img src="/images/treatment-hair-loss-type-num3.png" className="number" />
                            <img src="/images/treatment-hair-loss-type-3.png" className="head" />
                            <div>
                                <p>普及性稀疏</p>
                                <p>壓力令頭油過多，緊張令頭蓋肌肉拉緊，影響血液循環，導致頭頂之頭髮稀疏及脫髮，通常會造成禿頭。</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 hair-loss-block">
                            <img src="/images/treatment-hair-loss-type-num4.png" className="number" />
                            <img src="/images/treatment-hair-loss-type-4.png" className="head" />
                            <div>
                                <p>雄性脫髮</p>
                                <p>女性常見脫髮原因之一，一般都頭髮變得稀疏，不會完全禿頭。一般於 20-30歲開始，多源於遺傳。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="/images/treatment-section-5.png" className="section-heading" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="faq" id="faq">
                <ul>
                    <li>
                        <h2 className="question">甚麼是FDA防脫髮療程？</h2>
                        <div className="answer">
                            <p>事實證明，FDA防脫髮療程可以使頭髮更濃密，更強壯和更健康。並且可以顯著改善頭髮的外觀和體積。在各種研究過程中，激光生髮有助於減緩甚至阻止85％接受治療的患者脫髮。在55％的病例中，患者還發現了新的頭髮生長。</p>
                            <p>最好盡快開始FDA防脫髮療程，以最大程度地恢復頭髮。在脫髮的第一階段或部分脫髮的情況下使用，效果最佳。將FDA防脫髮療程與其他療法結合也可以幫助優化結果。隨著脫髮的更高級階段，它仍然有助於減緩或阻止脫髮。</p>
                            <p>一旦開始FDA防脫髮療程治療，結果通常會在兩個月後開始出現，並在接下來的幾個月中逐漸改善。如果治療中斷，脫髮將在幾個月後再次恢復，並且頭髮將逐漸恢復其初始狀態。 FDA防脫髮療程僅在繼續治療時才有效。</p>
                        </div>
                        <i className="fas fa-caret-right"></i>
                    </li>
                    <li>
                        <h2 className="question">FDA防脫髮療程：成熟的科學</h2>
                        <div className="answer">
                            <p>事實證明，FDA防脫髮療程可以使頭髮更濃密，更強壯和更健康。並且可以顯著改善頭髮的外觀和體積。在各種研究過程中，激光生髮有助於減緩甚至阻止85％接受治療的患者脫髮。在55％的病例中，患者還發現了新的頭髮生長。</p>
                            <p>最好盡快開始FDA防脫髮療程，以最大程度地恢復頭髮。在脫髮的第一階段或部分脫髮的情況下使用，效果最佳。將FDA防脫髮療程與其他療法結合也可以幫助優化結果。隨著脫髮的更高級階段，它仍然有助於減緩或阻止脫髮。</p>
                            <p>一旦開始FDA防脫髮療程治療，結果通常會在兩個月後開始出現，並在接下來的幾個月中逐漸改善。如果治療中斷，脫髮將在幾個月後再次恢復，並且頭髮將逐漸恢復其初始狀態。 FDA防脫髮療程僅在繼續治療時才有效。</p>
                        </div>
                        <i className="fas fa-caret-right"></i>
                    </li>
                    <li>
                        <h2 className="question">FDA防脫髮療程的原理，如何促進頭髮再生？</h2>
                        <div className="answer">
                            <p>事實證明，FDA防脫髮療程可以使頭髮更濃密，更強壯和更健康。並且可以顯著改善頭髮的外觀和體積。在各種研究過程中，激光生髮有助於減緩甚至阻止85％接受治療的患者脫髮。在55％的病例中，患者還發現了新的頭髮生長。</p>
                            <p>最好盡快開始FDA防脫髮療程，以最大程度地恢復頭髮。在脫髮的第一階段或部分脫髮的情況下使用，效果最佳。將FDA防脫髮療程與其他療法結合也可以幫助優化結果。隨著脫髮的更高級階段，它仍然有助於減緩或阻止脫髮。</p>
                            <p>一旦開始FDA防脫髮療程治療，結果通常會在兩個月後開始出現，並在接下來的幾個月中逐漸改善。如果治療中斷，脫髮將在幾個月後再次恢復，並且頭髮將逐漸恢復其初始狀態。 FDA防脫髮療程僅在繼續治療時才有效。</p>
                        </div>
                        <i className="fas fa-caret-right"></i>
                    </li>
                    <li>
                        <h2 className="question">FDA防脫髮療程的優勢</h2>
                        <div className="answer">
                            <p>事實證明，FDA防脫髮療程可以使頭髮更濃密，更強壯和更健康。並且可以顯著改善頭髮的外觀和體積。在各種研究過程中，激光生髮有助於減緩甚至阻止85％接受治療的患者脫髮。在55％的病例中，患者還發現了新的頭髮生長。</p>
                            <p>最好盡快開始FDA防脫髮療程，以最大程度地恢復頭髮。在脫髮的第一階段或部分脫髮的情況下使用，效果最佳。將FDA防脫髮療程與其他療法結合也可以幫助優化結果。隨著脫髮的更高級階段，它仍然有助於減緩或阻止脫髮。</p>
                            <p>一旦開始FDA防脫髮療程治療，結果通常會在兩個月後開始出現，並在接下來的幾個月中逐漸改善。如果治療中斷，脫髮將在幾個月後再次恢復，並且頭髮將逐漸恢復其初始狀態。 FDA防脫髮療程僅在繼續治療時才有效。</p>
                        </div>
                        <i className="fas fa-caret-right"></i>
                    </li>
                    <li>
                        <h2 className="question">為什麼要選擇FDA防脫髮療程？</h2>
                        <div className="answer">
                            <p>事實證明，FDA防脫髮療程可以使頭髮更濃密，更強壯和更健康。並且可以顯著改善頭髮的外觀和體積。在各種研究過程中，激光生髮有助於減緩甚至阻止85％接受治療的患者脫髮。在55％的病例中，患者還發現了新的頭髮生長。</p>
                            <p>最好盡快開始FDA防脫髮療程，以最大程度地恢復頭髮。在脫髮的第一階段或部分脫髮的情況下使用，效果最佳。將FDA防脫髮療程與其他療法結合也可以幫助優化結果。隨著脫髮的更高級階段，它仍然有助於減緩或阻止脫髮。</p>
                            <p>一旦開始FDA防脫髮療程治療，結果通常會在兩個月後開始出現，並在接下來的幾個月中逐漸改善。如果治療中斷，脫髮將在幾個月後再次恢復，並且頭髮將逐漸恢復其初始狀態。 FDA防脫髮療程僅在繼續治療時才有效。</p>
                        </div>
                        <i className="fas fa-caret-right"></i>
                    </li>
                    <li>
                        <h2 className="question">FDA防脫髮療程的需要治療次數？</h2>
                        <div className="answer">
                            <p>事實證明，FDA防脫髮療程可以使頭髮更濃密，更強壯和更健康。並且可以顯著改善頭髮的外觀和體積。在各種研究過程中，激光生髮有助於減緩甚至阻止85％接受治療的患者脫髮。在55％的病例中，患者還發現了新的頭髮生長。</p>
                            <p>最好盡快開始FDA防脫髮療程，以最大程度地恢復頭髮。在脫髮的第一階段或部分脫髮的情況下使用，效果最佳。將FDA防脫髮療程與其他療法結合也可以幫助優化結果。隨著脫髮的更高級階段，它仍然有助於減緩或阻止脫髮。</p>
                            <p>一旦開始FDA防脫髮療程治療，結果通常會在兩個月後開始出現，並在接下來的幾個月中逐漸改善。如果治療中斷，脫髮將在幾個月後再次恢復，並且頭髮將逐漸恢復其初始狀態。 FDA防脫髮療程僅在繼續治療時才有效。</p>
                        </div>
                        <i className="fas fa-caret-right"></i>
                    </li>
                </ul>
            </div>
        </main >
    )
}

export default HairKnowledgeLayout