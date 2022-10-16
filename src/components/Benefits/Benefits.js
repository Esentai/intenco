import React from 'react'

import Benefits1 from '../../assets/images/ic_customer.png'
import Benefits2 from '../../assets/images/ic_customerchart.png'
import Benefits3 from '../../assets/images/ic_customerplus.png'

import Benefits4 from '../../assets/images/benefits4.png'
import Benefits5 from '../../assets/images/benefits5.png'

import Benefits6 from '../../assets/images/benefits6.png'
import Benefits7 from '../../assets/images/benefits7.png'

import Benefits8 from '../../assets/images/benefits8.png'



import './Benefits.css'

function Benefits(){
    return(
        <div className="benefits">
            <div className="container">
                <h1 className="benefits_title"> 왜 <span>incento</span> 가 필요한가요?</h1>
                <h3 className="benefits_subtitle">고객 관리와 마케팅은 인센토에 맡기고 제품 개발에만 집중 할 수 있습니다</h3>
                <div className="benefits_items">
                    <div className="benefits_item">
                        <img src={Benefits3} alt="benefits_item"/>
                        <p>고객 획득</p>
                    </div>
                    <div className="benefits_item">
                        <img src={Benefits2} alt="benefits_item"/>
                        <p>고객 관리</p>
                    </div>
                    <div className="benefits_item">
                        <img src={Benefits1} alt="benefits_item"/>
                        <p>고객 확장</p>
                    </div>
                </div>

                <div className="section2">
                    <img src={Benefits4} alt="Benefits4"/>
                    <div>
                        <p className="section2_text1">리퍼럴 마케팅</p>
                        <p className="section2_text2">5분만에 가장 효과적인
                            리퍼럴 마케팅으로
                            신규고객을 획득하세요</p>
                    </div>
                </div>

                <div className="section3">
                    <div>
                        <p className="section2_text1">데이터</p>
                        <p className="section2_text2">입체적인 정보를 얻고, 확실한 고객관리를 하세요</p>
                    </div>
                    <img src={Benefits5} alt="Benefits4"/>
                </div>

                <div className="section4">
                    <div className="section4_text">
                        <p className="section2_text1">CRM</p>
                        <p className="section2_text2">정확하고 입체적인
                            정보를 사용해
                            고객들을 인게이지먼트(Engagement)
                            하세요</p>
                    </div>
                    <div className="section4_images">
                        <img src={Benefits6} alt="Benefits4"/>
                        <img width="271" src={Benefits7} alt="Benefits4"/> 
                    </div>
                </div>
            </div>
            <div className="section5">
                    <img src={Benefits8}/>
                    <h3>내 사이트에 맞춰 커스텀 할 수 있어요</h3>
            </div>

            <div className="section6">
                    <h3>인센토 솔루션, <br/> 먼저 사용하고 결정하세요</h3>
                    <a href="#">무료로 시작하기</a>
            </div>


        </div>
    )
}
export default Benefits
