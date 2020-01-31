'use strict'
import 'babel-polyfill'
import firebase from '../firebase'

export async function createUserWithEmail (email, password) {
  return await firebase.auth().createUserWithEmailAndPassword(email, password)
}

export async function sigInUserWithEmail (email, password) {
  return await firebase.auth().signInWithEmailAndPassword(email, password)
}

export async function getCurrentUser () {
  return new Promise(async (resolve) => {
    await firebase.auth().onAuthStateChanged(resolve)
  })
}

export async function signOut () {
  await firebase.auth().signOut()
}

export async function deleteUser () {
  const user = await getCurrentUser()
  if (user !== null && user !== undefined) {
    await user.delete()
    return user.email
  } else {
    return 'error on try to delete user'
  }
}
