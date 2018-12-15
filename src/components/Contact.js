import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const Contact = () => {
  return (
    <View>
      <Animatable.View animation="fadeInDown" duration={2000} delay={100}>
        <Card>
          <Text style={{ textAlign: 'center', fontWeight: '700', margin: 10, borderBottomColor: '#aba8a8', borderBottomWidth: 1, paddingBottom: 10 }}>Contact Information</Text>
          <Text style={{ marginTop: 10 }}> 121, Clear Water Bay Road</Text>
          <Text style={{ marginTop: 10 }}> Clear Water Bay, Kowloon</Text>
          <Text style={{ marginTop: 10 }}> HONG KONG</Text>
          <Text style={{ marginTop: 10 }}> Tel: +852 1234 5678</Text>
          <Text style={{ marginTop: 10 }}> Fax: +852 8765 4321</Text>
          <Text style={{ marginTop: 10 }}> Email:confusion@food.net</Text>
        </Card>
      </Animatable.View>
    </View>
  );
};

export default Contact;
