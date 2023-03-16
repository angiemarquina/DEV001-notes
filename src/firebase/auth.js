import { app } from '../firebase/config'

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'

export const auth = getAuth(app)
export function loginWithGoogle () {
  const googleProvider = new GoogleAuthProvider()
  return signInWithPopup(auth, googleProvider)
}
