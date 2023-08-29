/* import React from 'react';
import ico3DModeling from 'img/ico_3d_modeling.png'
import { Link, useNavigate } from 'react-router-dom';
import ISTJ from 'img/mbti/ISTJ.png'


function Test() {
    const navigate = useNavigate()

    const clickAnswer = () => {
        navigate('/result')
    }

    return (
        <div className="test">
            <div className="test_content">
                <h1>광주광역시 동구 여행 스타일 테스트</h1>
                <h2>나의 성향에 맞춰 떠나보는 광주 여행!</h2>
                <div className="qa">
                    <div className="q">집에만 있으니 지루하다, 이럴 때 내 행동은?</div>
                    <div className="a">
                        <label onClick={() => clickAnswer()}>
                            <input type="radio" name="survey1" />
                            <span>집에서도 즐길 거리가 한가득이지, 배달음식을 시켜 넷플릭스를 본다.</span>
                        </label>
                        <label onClick={() => clickAnswer()}>
                            <input type="radio" name="survey1" />
                            <span>시간되는 사람~? 당장 나가서 친구들을 만난다.</span>
                        </label>
                    </div>

                    <img src={ISTJ} alt="ISTJ character" className='img_mbti_test' />
                    <div className='processbar'>
                        <span className='text'>진행 수 (5/20)</span>
                        <span className='process' style={{width:"20%"}}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;
 */