import React, {Component} from 'react';

const MypageTemplate = ({form, children}) => {
  return (
      <section className="in"> 
      {children}
      {form} 
      </section>
  );
};

export default MypageTemplate;


//    <!-- profile -->
//    <article className="box myInfo"></article>

//    <!-- activity log -->
//    <article className="box">
//      <h1 className="blind">활동로그</h1>
//      <ul>
//        <li>
//          <span className="label">가입한 모임</span>
//          <span>0</span>
//        </li>
//        <li>
//          <span className="label">참여한 이벤트</span>
//          <span>0</span>
//        </li>
//      </ul>
//    </article>

//    <!-- setting -->
//    <article className="box">
//      <h1 className="blind">설정</h1>
//      <ul>
//        <li><a href="#"><span>모임 운영권 결제 안내</span></a></li>
//        <li><a href="#"><span>친구초대</span></a></li>
//        <li><a href="#"><span>공지사항</span></a></li>
//        <li><a href="#"><span>설정</span></a></li>
//        <li><a href="#"><span>고객센터</span></a></li>
//        <li><a href="#"><span>버그리포트 및 기능제안</span></a></li>
//      </ul>
//    </article>