import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    //TODO: このあたりの意味を調べる
    this.dataSource = ds.cloneWithRows(this.props.libraries)
  }
  render() {
    //stateの中身がpropsとして送られていくる
    console.log(this.props);
    return;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

//LibraryListコンポーネントにProviderコンポーネント経由でStoreの値を渡す
//mapStateToPropsはstoreからこのコンポーネントで使いたいstateをpropsとして受け取る関数
//librariesだけが取得できる
//connect関数を使うことで、Storeにアクセスする
//Stateから受け取るPropsの値を指定する
export default connect(mapStateToProps)(LibraryList);
