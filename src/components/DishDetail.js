import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { dishes } from '../shared/dishes';

function RenderDish(props){
  const dish = props.dish;

  if(dish){
    return (
      <Card
        featuredTitle={dish.name}
        image={require('./images/uthappizza.png')}
      >
        <Text style={{margin: 10}}>{dish.description}</Text>
      </Card>
    );
  } else {
    return (
      <View></View>
    );
  }
};

class DishDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes,
      selectedDish: null,
    };
  }

  static navigationOptions = {
    title: 'Meal Details'
  }

  render(){
    const dishId = this.props.navigation.getParam('dishId')
    return (<RenderDish dish={this.state.dishes[+dishId]} />);
  }
};

export default DishDetail;
