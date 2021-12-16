import realm from './initSchema';
import {DICTIONARY_1} from '../../../dictionary.json';

export function getDictionary() {
  try {
    let objDictionary = realm.objects('Dictionary');
    return objDictionary;
  } catch (error) {
    return {status: false, message: error};
  }
}

export function setDictionary(objInput) {
  try {
    realm.write(() => {
      realm.create('Dictionary', objInput);
    });
    return true;
  } catch (error) {
    console.log(error);
    return {status: false, message: error};
  }
}
