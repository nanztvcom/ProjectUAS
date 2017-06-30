
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, ListItem, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { closeDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';

import styles from './style';

class SideBar extends Component {

  static propTypes = {
    // setIndex: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content style={styles.sidebar} >
        <ListItem button onPress={() => { Actions.login(); this.props.closeDrawer(); }} >
        <Icon active name="flame" />
          <Text>Logout</Text>
        </ListItem>
        <ListItem button onPress={() => { Actions.blank(); this.props.closeDrawer(); }} >
          <Icon active name="flask" />
          <Text>Jasa</Text>
        </ListItem>
         <ListItem button onPress={() => { Actions.kategori(); this.props.closeDrawer(); }} >
           <Icon active name="cart" />
          <Text>Buka Toko</Text>
        </ListItem>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    setIndex: index => dispatch(setIndex(index)),
  };
}

export default connect(null, bindAction)(SideBar);
