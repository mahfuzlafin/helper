import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

const data1 = firestore
    .collection('users')
    .doc('b7fu4i7iy5JESLTrpPWv')
    .collection('cartItems')
    .doc('OkfUviK1tzwZaA3Yve0s');

const data2 = firebase.doc(
    '/users/b7fu4i7iy5JESLTrpPWv/cartItems/OkfUviK1tzwZaA3Yve0s'
);

const data2 = firebase.collection('/users/b7fu4i7iy5JESLTrpPWv/cartItems');
