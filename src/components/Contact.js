import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { MailComposer } from 'expo';

class Contact extends Component {
  sendMail() {
    MailComposer.composeAsync({
      recipients: ['confusion@food.net'],
      subject: 'Enquiry',
      body: 'Hi Triple Seven'
    })
  };
  render() {
    return (
      <View>
        <Animatable.View animation="fadeInDown" duration={2000} delay={100}>
          <Card>
            <Text style={{ textAlign: 'center', fontWeight: '700', margin: 10, borderBottomColor: '#aba8a8', borderBottomWidth: 1, paddingBottom: 10 }}>Contact Information</Text>
            <Text style={{ marginTop: 10 }}> 121, Clear Water Bay Road</Text>
            <Text style={{ marginTop: 10 }}> Clear Water Bay, Kowloon</Text>
            <Text style={{ marginTop: 10 }}> LAGOS</Text>
            <Text style={{ marginTop: 10 }}> Tel: +234 1234 5678</Text>
            <Text style={{ marginTop: 10 }}> Fax: +234 8765 4321</Text>
            <Text style={{ marginTop: 10, marginBottom: 20 }}> Email:triple7@food.net</Text>
            <Button
              title="Send Email"
              icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
              onPress={this.sendMail}
              color="#512DA8"
            />
          </Card>
        </Animatable.View>
      </View>
    );
  }
};

export default Contact;
