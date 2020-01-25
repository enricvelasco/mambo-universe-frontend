"use strict"
import 'babel-polyfill'
import firebase from '../firebase'

export async function createUserWithEmail(email, password) {
  return await firebase.auth().createUserWithEmailAndPassword(email, password)
}

export async function sigInUserWithEmail(email, password) {
  return await firebase.auth().signInWithEmailAndPassword(email, password)
}
