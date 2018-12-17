import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, FlatList, Alert, PanResponder, Share, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Card, Icon } from 'react-native-elements';
import { dishes } from '../shared/dishes';
import { comments } from '../shared/comments';
import { addFavorites } from '../redux/ActionCreators';
import baseUrl from '../shared/baseUrl';

function RenderDish(props) {
  const dish = props.dish;
  handleViewRef = ref => this.view = ref;

  const recognizeDrag = ({ moveX, moveY, dx, dy }) => {
    if (dx > 200)
      return true;
    else
      return false;
  }

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e, gestureState) => {
      return true;
    },
    onPanResponderGrant: () => {
      this.view.rubberBand(1000).then(endState => console.log(endState.finished ? 'finished' : 'cancelled'));
    },
    onPanResponderEnd: (e, gestureState) => {
      console.log("pan responder end", gestureState);
      if (recognizeDrag(gestureState))
        Alert.alert(
          'Add Favorite',
          'Are you sure you wish to add ' + dish.name + ' to your favorites?',
          [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => { props.favorite ? console.log('Already favorite') : props.onPress(dish.id) } },
          ],
          { cancelable: false }
        );

      return true;
    }
  });

  const shareDish = (title, message, url) => {
    Share.share({
      title: title,
      message: title + ': ' + message + ' ' + url,
      url: url
    }, {
        dialogTitle: 'Share ' + title
      })
  }

  if (dish) {
    return (
      <Animatable.View
        animation="fadeInDown"
        duration={1000}
        delay={100}
        ref={this.handleViewRef}
        {...panResponder.panHandlers}>
        <Card
          featuredTitle={dish.name}
          image={require('./images/uthappizza.png')}
        >
          <Text style={{ margin: 10 }}>{dish.description}</Text>
          <View style={styles.icons}>
            <Icon
              raised
              reverse
              name={props.favorite ? 'heart' : 'heart-o'}
              size={12}
              color='#f50'
              type='font-awesome'
              onPress={() => props.favorite ? console.log('Already a favorite') : props.onPress(dish.id)}
            />
            <Icon
              raised
              reverse
              name='share'
              size={12}
              type='font-awesome'
              color='#51D2A8'
              onPress={() => shareDish(dish.name, dish.description, baseUrl + dish.image)} />
          </View>
        </Card>
      </Animatable.View>
    );
  } else {
    return (
      <View></View>
    );
  }
};

function RenderComments(props) {
  const comments = props.comments;

  const renderCommentItem = ({ item, index }) => {
    return (
      <Animatable.View animation="fadeInUp" duration={1000} delay={100}>
        <View key={index} style={{ margin: 10 }}>
          <Text style={{ fontSize: 14 }}>{item.comment}</Text>
          <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
          <Text style={{ fontSize: 12 }}>{'--' + item.author + ', ' + item.date}</Text>
        </View>
      </Animatable.View>
    );
  }

  return (
    <Card title='Comments'>
      <FlatList
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={item => item.id.toString()}
      />
    </Card>
  );
};

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes,
      comments,
    };
  }

  static navigationOptions = {
    title: 'Meal Details'
  }

  markFavorite = (dishId) => {
    this.props.addFavorites(dishId);
  }

  render() {
    const dishId = this.props.navigation.getParam('dishId')
    return (
      <ScrollView>
        <RenderDish
          favorite={this.props.favorites.some(itemId => itemId === dishId)}
          onPress={this.markFavorite}
          dish={this.state.dishes[+dishId]}
        />
        <RenderComments comments={comments.filter(comment => comment.dishId === dishId)} />
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

const mapStateToProps = state => ({
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps, { addFavorites })(DishDetail);
