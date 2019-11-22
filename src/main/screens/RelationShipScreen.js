import React, { Component } from 'react';
import { SafeAreaView, View as V, Text as T, ScrollView, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { styles as s } from 'react-native-style-tachyons'

import Friends from '@screens/Friends';
import FriendsRequest from '@screens/FriendsRequest';

import CustomHeaderComponent from '@screens/SharedComponent/CustomHeader'

class RelationShip extends Component {
  static navigationOptions = ({ navigation }) => {
    return ({
      headerTitle: <CustomHeaderComponent
        {...navigation}
        onPress={(selectedIndex) => navigation.state.params.showPage(selectedIndex)}
        selectedIndex={0}
        buttons={['friends', 'friendsRequest']}
        pushPage={true} 
      />,
      headerStyle: { borderBottomWidth: 0, elevation: 0, shadowOpacity: 0 }
    })
  }
  showPage(selectedIndex) {
    switch (selectedIndex) {
      case 0:
        this.scroll.scrollTo({ x: 0, y: 0, animated: true })
      case 1:
        this.scroll.scrollTo({ x: selectedIndex * Dimensions.get('window').width, y: 0, animated: true })
    }
  }

  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.navigation.setParams({ showPage: (selectedIndex) => this.showPage(selectedIndex) })
  }

  render() {
    return <SafeAreaView>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        ref={(node) => this.scroll = node}
        /* onScroll={(event)=>{
          this.setState({page: _.ceil(event.nativeEvent.contentOffset.x / Dimensions.get('window').width)})
        }} */
        scrollEnabled={false}
        scrollEventThrottle={16}
      >
        <V style={[{ width: Dimensions.get('window').width }, s.flx_i]}>
          <Friends {...this.props} />
        </V>
        <V style={[{ width: Dimensions.get('window').width }, s.flx_i]}>
          <FriendsRequest {...this.props} />
        </V>
      </ScrollView>
    </SafeAreaView>
  }
}


export default RelationShipScreen = connect(
  (state, props) => ({
    lang: state.app.lang,
  }),
  (dispatch, props) => ({
  }),
)(RelationShip)

