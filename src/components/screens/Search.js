import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Header from '../common/Header';
import SearchIcon from '../../assets/icons/search.png';
import CloseIcon from '../../assets/icons/close.png';
import List from '../common/List';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const products = useSelector(state => state);
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [oldData, setOldData] = useState(products.product.data);
  const [searchedList, setSearchedList] = useState([]);

  const filterData = txt => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(txt.toLowerCase());
    });
    setSearchedList(newData);
  };

  const clearSearchData = () => {
    setSearch('');
    filterData('');
  };

  return (
    <View style={styles.container}>
      <Header title={'Search Items'} />
      <View style={styles.searchView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={SearchIcon} style={styles.icon} />
          <TextInput
            value={search}
            onChangeText={txt => {
              setSearch(txt);
              filterData(txt);
            }}
            placeholder="Search Items here ..."
            style={styles.input}
          />
        </View>
        {search !== '' && (
          <TouchableOpacity
            style={[
              styles.icon,
              {justifyContent: 'center', alignItems: 'center'},
            ]}
            onPress={() => clearSearchData()}>
            <Image source={CloseIcon} style={styles.SearchIcon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={{marginTop: 20}}>
        <FlatList
          data={searchedList}
          renderItem={({item, index}) => {
            return <List item={item} index={index} showQtyBtn={false} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchView: {
    width: '90%',
    height: 50,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'center',
  },
  input: {
    width: '70%',
    marginLeft: 10,
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  SearchIcon: {
    width: 18,
    height: 18,
    resizeMode: 'center',
  },
});

export default Search;
