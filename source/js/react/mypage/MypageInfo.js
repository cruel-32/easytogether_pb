import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class MypageInfo extends Component {
  render() {
    const { myInfo, onToggle } = this.props;
    console.log('myInfo', this.props)
    return (
      <article className="info">
		<div className="head">
			<h1>PROFILE</h1>
			<Button className="btn edit" onClick={onToggle}>Edit</Button>
		</div>
		<p className="thumbnail"><img src={myInfo.thumbnail} alt="프로필 이미지"/></p>
		<p className="text name">{myInfo.username}</p>
		<p className="text"> <span>{myInfo.birth}</span> / <span>{myInfo.sex}</span></p>
		</article>
    );
  }
}

export default MypageInfo;