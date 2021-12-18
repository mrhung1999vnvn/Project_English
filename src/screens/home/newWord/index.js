import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Container, Title, TextRN} from '../../../common/components';

import {Item} from './item';
import {DICTIONARY_1} from '../../../../dictionary.json';
import {DictionaryContext} from '../../../common/context/dictionaryContext';
import {UserContext} from '../../../common/context/userContext';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppContext} from '../../../common/context/appContext';

let arr = [];
export default function NewWord({navigation}) {
  const flatListRefs = React.createRef();
  const dContext = React.useContext(AppContext);
  const uContext = React.useContext(UserContext);

  const [sizeWords, set_sizeWords] = useState(0);

  const _onSave = (indx, item) => {
    if (indx + 1 <= 200) {
      if (arr.length < 4) {
        flatListRefs.current.scrollToIndex({
          animated: true,
          index: indx + 1,
        });
        arr.push(item);
        set_sizeWords(arr.length);
      } else {
        arr.push(item);
        dContext.dictionary.setDictionaryContext(arr, uContext.data.accountId);
        arr = [];
        navigation.navigate('ResultAfterNewWords');
      }
    } else {
      flatListRefs.current.scrollToIndex({
        animated: true,
        index: 0,
      });
    }
  };

  const _onNext = (indx) => {
    if (indx + 1 <= 200) {
      flatListRefs.current.scrollToIndex({
        animated: true,
        index: indx + 1,
      });
    } else {
      flatListRefs.current.scrollToIndex({
        animated: true,
        index: 0,
      });
    }
  };

  return (
    <Container>
      <StatusBar
        animated={false}
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View
        style={{
          height: '15%',
          justifyContent: 'center',
          paddingHorizontal: 30,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tab')}
          style={{flexDirection: 'row'}}>
          <Icon name="arrowleft" size={40} color={'#FF8811'} />
          <Text style={{fontSize: 25, color: '#FF8811', fontWeight: 'bold'}}>
            {' '}
            Choose new words
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          ref={flatListRefs}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
          initialScrollIndex={0}
          scrollEnabled={false}
          pagingEnabled={true}
          legacyImplementation={false}
          style={{
            height: '100%',
            width: Dimensions.get('window').width,
          }}
          data={Object.getOwnPropertyNames(DICTIONARY_1).splice(0, 200)}
          renderItem={({item, index}) => (
            <Item
              onSave={() => _onSave(index, item)}
              onNext={() => _onNext(index)}
              index={index}
              word={item}
            />
          )}
          keyExtractor={(item) => item.idQ}
        />
        <Title style={{marginBottom: 10}}>{sizeWords}/5</Title>
      </View>
    </Container>
  );
}
