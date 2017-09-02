import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Post } from './Post';
import { ListView } from 'react-native';

class PostList extends Component {
  componentWillMount() {
    //rowHasChangedがよくわからん
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.posts)
  }

  renderRow(post) {
    return <Post post={post} />
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(PostList);
