import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class MypageLink extends Component {
  render() {
    const { myInfo, onToggle } = this.props;
    console.log('MypageLink', this.props)
    return (
    <article className="links">
    <h1 className="blind">Links</h1>
		<ul>
      <li><a href="" className="link">모임 운영권 결제 안내</a></li>
      <li><a href="" className="link">친구초대</a></li>
      <li><a href="" className="link">공지사항</a></li>
      <li><a href="" className="link">설정</a></li>
      <li><a href="" className="link">고객센터</a></li>
      <li><a href="" className="link">버그리포트 및 제안</a></li>
    </ul>
	</article>
    );
  }
}

export default MypageLink;