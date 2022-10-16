import React from 'react'

import headerImg1 from '../../assets/images/header1.png'

import './Header.css'

function Header(){
    return(
        <div className="header">
            <div className="container">
                <div className="header_container">
                    <div className="header_content">
                        <h1 className="header_title">이제 내 브랜드를 키우세요</h1>
                        <p className="header_subtitle">
                        마켓플레이스의 의존도를 낮추고 
                        리퍼럴 마케팅 자동화부터
                        고객 관리까지 인센토로 해결하세요
                        </p>
                        <a className="header_link">무료로 시작하기</a>
                    </div>
                    <div>
                        <img src={headerImg1} className="header_img" alt="headerImg1"/>

                    </div>
                </div>
            </div> 
        </div>
    )
}
export default Header
