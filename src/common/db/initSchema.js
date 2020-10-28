import Realm from "realm";

class Word extends Realm.Object {}
Word.schema = {
    name:'Word',
    primaryKey:'ID',
    properties:{
        ID:'string',
        word:'string',
        translate:'string',
        status:'bool'
    }
}

class Quiz extends Realm.Object{}
Quiz.schema={
    name:'Quiz',
    properties:{
        ID:'string',
        anwsers:'int',
        date:'string'
    }
}

class Dictionary extends Realm.Object {}
Dictionary.schema={
    name:'Dictionary',
    primaryKey:'ID',
    properties:{
        ID:'string',
        word:'string?[]',
        id_user:'string',
    }
}

class User extends Realm.Object {}
User.schema = {
    name:'Account',
    primaryKey:'ID',
    properties:{
        ID:'string',
        name:'string?',
        first_name:'string?',
        last_name:'string?',
        age:'int?',
        email:'string?',
        address:'string?',
        avatar:'string?',
        phone:'string?',
        date:'string?',
        id_facebook:'string?',
        id_apple:'string?',
        password:'string?',
        permission:'int'
    }
}

class History extends Realm.Object{}
History.schema = {
    name:'History',
    properties:{
        ID:'string',
        ID_User:'string',
        total_Mark:'double?',
        total_Question:'int',
        total_fail:'int',
        total_success:'int',
        created_at:'string'
    }
}

class Question extends Realm.Object{}
Question.schema = {
    name:'Question',
    properties:{
        ID:'string',
        question:'string',
        mark:'double?',
        type:'string',
        translate:'string',
        answer:'string',
        dateCreated:'string?',
        dateUpdated:'string?',
    }
}

class Questions extends Realm.Object{}
Questions.schema = {
    name:'Questions',
    properties:{
        ID:'string',
        questions:'Question[]',
        ID_User:'string'
    }
}

let key = new Int8Array(64)
const config ={
    schema:[
        Word.schema,
        Dictionary.schema,
        User.schema,
        History.schema,
        Questions.schema,
        Question.schema,
    ],
    path:'application.realm',
    encryptionKey:key,
    deleteRealmIfMigrationNeeded:true
}

const realmInstance = new Realm(config);

export default realmInstance;