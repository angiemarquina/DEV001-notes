import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDyYp6kyQ7olrHLrI2IcwdXMRvtNUspcRM',
  authDomain: 'mirai-469e1.firebaseapp.com',
  projectId: 'mirai-469e1',
  storageBucket: 'mirai-469e1.appspot.com',
  messagingSenderId: '660187453680',
  appId: '1:660187453680:web:6c3bbc2b7e061860998a35'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
