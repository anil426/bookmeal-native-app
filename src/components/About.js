import React, {Component} from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { leaders } from '../shared/leaders';

class About extends Component {
    constructor(props){
      super(props);
      this.state = {
        leaders
      };
    }
    static navigationOptions = {
      title: 'About Us'
    }

    renderLeaderItem = ({item, index}) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: require('./images/uthappizza.png')}}
          hideChevron={true}
        />
      );
    }

    renderLeaders = () => {
      return (
        <FlatList
          data={this.state.leaders}
          renderItem={this.renderLeaderItem}
          keyExtractor={item => item.id.toString()}
        />
      );
    }

    render(){
      return (
        <ScrollView style={{marginBottom: 10}}>
          <Card>
            <Text style={{textAlign: 'center', fontWeight: '700', margin: 10, borderBottomColor: '#aba8a8', borderBottomWidth: 1, paddingBottom: 10}}>Our History</Text>
            <Text style={{marginTop: 10}}>
              Started in 2010, Ristorante con Fusion quickly established
              itself as a culinary icon par excellence in Hong Kong. With
              its unique brand of world fusion cuisine that can be found nowhere else,
              it enjoys patronage from the A-list clientele in Hong Kong.  Featuring
              four of the best three-star Michelin chefs in the world,
             you never know what will arrive on your plate the next time you visit us.</Text>
            <Text style={{marginTop: 10}}> The restaurant traces its humble beginnings
            to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan,
             that featured for the first time the world's best cuisines in a pan.</Text>
          </Card>
          <Card>
          <Text style={{textAlign: 'center', fontWeight: '700', margin: 10, borderBottomColor: '#aba8a8', borderBottomWidth: 1, paddingBottom: 10}}>Corporate Leadership</Text>
            {this.renderLeaders()}
          </Card>
        </ScrollView>
      );
    }
};

export default About;

