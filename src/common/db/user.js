import realm from './initSchema';

export function setUser(objInput) {
  try {
    const existItem = realm.objects('Account').length;
    console.log(
      'Log App ~ file: user.js ~ line 6 ~ setUser ~ existItem',
      existItem,
    );
    const newObj = {
      ID: `${existItem + 1}`,
      ...objInput,
    };
    console.log('Log App ~ file: user.js ~ line 11 ~ setUser ~ newObj', newObj);
    realm.write(() => {
      realm.create('Account', newObj);
    });
    return true;
  } catch (error) {
    console.log(error);
    return {status: false, message: error};
  }
}

export function getUser() {
  try {
    let objDictionary = realm.objects('Account');
    return objDictionary[0];
  } catch (error) {
    return {status: false, message: error};
  }
}

export function clearAll() {
  try {
    realm.write(() => {
      realm.deleteAll();
    });
  } catch (error) {
    return {status: false, message: error};
  }
}
