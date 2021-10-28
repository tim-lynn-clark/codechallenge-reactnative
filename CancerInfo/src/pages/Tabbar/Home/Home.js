import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useDispatch, useSelector} from 'react-redux';

import {
  getCancerTypes,
  getCancerDetails,
} from '../../../store/actions/appState';

import Card from '../../../components/Card';

/**
 * @author Tom Jay
 * @function Home
 **/

const Home = props => {
  const dispatch = useDispatch();
  const appState = useSelector(state => state.appStateSlice);

  const {container} = styles;

  useEffect(() => {
    const loadData = async () => {
      try {
        await dispatch(getCancerTypes());
      } catch {}
    };
    loadData();
  }, [dispatch]);

  if (appState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="gray" />
        <Text>Loading Data...</Text>
      </View>
    );
  }

  if (!appState.isLoading && appState.cancerTypes.length === 0) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Sorry, No Data Found...</Text>
      </View>
    );
  }

  return (
    <View style={container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 20,
        }}>
        Cancer Types
      </Text>
      <FlatList
        data={appState.cancerTypes}
        renderItem={({item}) => (
          <LineItem
            item={item}
            navigation={props.navigation}
            dispatch={dispatch}
          />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const LineItem = ({item, navigation, dispatch}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          // Get Cancer Details
          dispatch(getCancerDetails(item.link));
          navigation.navigate('CancerDetails', {
            title: item.name,
          });
        }}>
        <Card style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={styles.cardTitle}>
              <Text style={styles.cardTitleText}>{item.name}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Ionicons name="chevron-forward-outline" size={25} color="gray" />
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  card: {
    margin: 15,
    padding: 2,
    width: 250,
  },
  cardTitle: {width: 200, padding: 10},
  cardTitleText: {fontSize: 18, fontWeight: 'bold'},
});

export default Home;
