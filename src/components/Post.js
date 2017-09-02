import React, { Component } from 'react';
import { Text } from 'react-native';

export const Post = (props) => {
  const { titleStyle } = styles;
  return (
    <Text style={titleStyle}>
      {props.post.title}
    </Text>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}
