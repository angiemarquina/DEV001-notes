import { app } from '../firebase/config'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'

const auth = getAuth(app)
export function loginWithGoogle () {
  const googleProvider = new GoogleAuthProvider()
  return signInWithPopup(auth, googleProvider)
}

export function logout () {
  return signOut(auth)
}
