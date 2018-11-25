import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

export default class PostForm extends Component {
  state = {
    title: '',
    body: ''
  }
  submitForm = () => {
    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body
    });
  };

  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>
            Title
          </Label>
          <Input 
          onChangeText={title => this.setState({title})}
          value={this.state.title}/>
        </Item>
        <Item floatingLabel>
          <Label>
            Body
          </Label>
          <Input style={styles.body} multiline
          onChangeText={body => this.setState({body})}
          value={this.state.body} />
        </Item>        
        <Button title="Save Post" onPress={this.submitForm} />
      </Form>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    height: 300,
    textAlignVertical: "top"
  },
});