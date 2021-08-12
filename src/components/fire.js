import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCwUc1Y6JBz-zqcE7-RhHUSP3RueqxlBeI',
    authDomain: 'chat-app-c58b1.firebaseapp.com',
    databaseURL: 'https://chat-app-c58b1.firebaseio.com',
    projectId: 'chat-app-c58b1',
    storageBucket: 'chat-app-c58b1.appspot.com',
    messagingSenderId: '228339880471',
    appId: '1:228339880471:web:9698831c1baf8290e04252',
    measurementId: 'G-2VKQGRLE3Z',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
