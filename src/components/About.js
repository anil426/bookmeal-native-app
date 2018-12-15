import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import baseUrl from '../shared/baseUrl';
import { fetchLeaders } from '../redux/ActionCreators';
import { Loading } from './Loader';


class About extends Component {

  static navigationOptions = {
    title: 'About Us'
  }

  componentDidMount() {
    this.props.fetchLeaders();
  }

  renderLeaderItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        title={item.name}
        subtitle={item.description}
        leftAvatar={{ uri: item.imageurl }}
        hideChevron={true}
      />
    );
  }

  renderLeaders = () => {
    return (
      <FlatList
        data={this.props.leaders}
        renderItem={this.renderLeaderItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }

  render() {
    const { isLoading, leaders } = this.props;
    return (
      <ScrollView style={{ marginBottom: 10 }}>
        <Animatable.View animation="fadeInDown" duration={2000} delay={100}>
          <Card>
            <Text style={{ textAlign: 'center', fontWeight: '700', margin: 10, borderBottomColor: '#aba8a8', borderBottomWidth: 1, paddingBottom: 10 }}>Our History</Text>
            <Text style={{ marginTop: 10 }}>
              Started in 2010, Ristorante con Fusion quickly established
              itself as a culinary icon par excellence in Hong Kong. With
              its unique brand of world fusion cuisine that can be found nowhere else,
              it enjoys patronage from the A-list clientele in Hong Kong.  Featuring
              four of the best three-star Michelin chefs in the world,
             you never know what will arrive on your plate the next time you visit us.</Text>
            <Text style={{ marginTop: 10 }}> The restaurant traces its humble beginnings
            to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan,
             that featured for the first time the world's best cuisines in a pan.</Text>
          </Card>
        </Animatable.View>
        <Animatable.View animation="fadeInDown" duration={2000} delay={100}>
          <Card title='Corporate Leadership'>
            {isLoading ? <Loading /> : this.renderLeaders()}
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
};

const mapStateToProps = state => ({
  leaders: state.leaders.leaders,
  isLoading: state.leaders.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchLeaders: () => dispatch(fetchLeaders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);

