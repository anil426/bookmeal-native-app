import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { dishes } from '../shared/dishes';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes,
      selectedDish: null,
    };
  }

  static navigationOptions = {
    title: 'Menu'
  }

  render() {
    const { navigate } = this.props.navigation;

    const renderMenuItem = ({ item, index }) => {
      return (
        <Animatable.View animation="fadeInRightBig" duration={500}>
          <Tile
            key={index}
            title={item.name}
            caption={item.description}
            featured
            onPress={() => navigate('DishDetail', { dishId: item.id })}
            imageSrc={{ uri: 'https://picsum.photos/300/300?image=488' }}
          />
        </Animatable.View>
      );
    }

    return (
      <FlatList
        data={this.state.dishes}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
};

export default Menu;