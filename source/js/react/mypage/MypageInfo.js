import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class MypageInfo extends Component {
  render() {
    const { myInfo, onToggle } = this.props;
    console.log('myInfo', this.props)
    return (
      <article className="info">
		<h1>My Profile</h1>
		<p><span className="thumbnail"><img src={myInfo.thumbnail} alt="프로필 이미지"/></span></p>
		<p><span className="text">{myInfo.username}</span></p>
		<p><span className="text">{myInfo.birth}</span> / <span className="text">{myInfo.sex}</span></p>
		<p className="button">
			<Button color="primary" className="edit" onClick={onToggle} >
			프로필 보기 및 수정
			</Button>
		</p>
	</article>
    );
  }
}

export default MypageInfo;