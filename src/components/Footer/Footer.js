import React from 'react'

import './Footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="footer_content">
                    <div className="footer_left"> 
                        <div>
                            <p>상호명 오픈포맷 주식회사</p>
                            <p>대표자 KIM THOMAS SUNGJIN</p>
                            <p>사업자등록번호 823 86 02119</p>
                        </div>
                        <div>
                            <p>대표번호 010 9705 5145</p>
                            <p>주소 서울 구로구 디지털로33길 11</p>
                        </div>
                    </div>
                    <div className="footer_right">
                        <p>서비스 이용약관</p>
                        <p>개인정보 처리방침</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
