
import React, { Component, PropTypes } from 'react';
import { Alert, TouchableOpacity, View, ListView, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Form, Item, List, ListItem, Input, Label } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

var SERVER_LOGIN_URL = 'http://mhs.rey1024.com/1415051002/addKategori.php';


class Home extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      pass: "",
    };
  }

  onSave() {
    fetch(SERVER_LOGIN_URL + '?email=' + this.state.email + '&password=' + this.state.password + '&tlp=' + this.state.tlp)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert("Data ada yang salah");
         }
         else 
       {
          Alert.alert("Data Berhasil Tersimpan");
        }  
        
      })
      .done();
  }

  

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>{(this.props.name) ? this.props.name : 'Regitrasi'}</Title>
          </Body>

        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
            <Label>Email</Label>
              <Input 
                onChangeText={(e) => this.setState({ email: e })} 
                text = {this.state.email}
              />
            </Item>
            <Item floatingLabel>
            <Label>Password</Label>
              <Input 
                onChangeText={(e) => this.setState({ password: e })} 
                text = {this.state.password}
              />
            </Item>
             <Item floatingLabel>
            <Label>No Telpon</Label>
              <Input 
                onChangeText={(e) => this.setState({ tlp: e })} 
                text = {this.state.tlp}
              />
            </Item>
          </Form>
          <Button primary style={styles.confirm} onPress={() => this.onSave()}><Text> Save </Text></Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(Home);
