'use strict'
import 'babel-polyfill'
import {db} from '../firebase'

export async function saveData (data, collection) {
  return await db.collection(collection).add(data)
}
