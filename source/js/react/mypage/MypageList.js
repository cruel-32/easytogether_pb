import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class MypageList extends Component {
  render() {
    const { myInfo, onToggle } = this.props;
    console.log('MypageList', this.props)
    return (
    <article className="list">
    <h1 className="blind">Lists</h1>
    <ul>
      <li>
        <Button>
          <span className="label">가입한 모임</span> <span className="count">{myInfo.togethers.length}</span>
        </Button>
      </li>
      <li>
        <Button>
          <span className="label">참여한 이벤트</span> <span className="count">{myInfo.events.length}</span>
        </Button>
      </li>
    </ul>
	</article>
    );
  }
}

export default MypageList;