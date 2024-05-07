import { FirebaseError } from 'firebase/app'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth, googleAuthProvider } from './servers/google-auth-server'
import { User } from './types/user'

export default function LoginApi() {
  const onGoogleLogin = async (): Promise<User> => {
    try {
      const res = await signInWithPopup(auth, googleAuthProvider)
      const credential = GoogleAuthProvider.credentialFromResult(res)
      const token = credential?.accessToken
      console.log('token', token)
      console.log('user', res.user)

      const user: User = {
        accessToken: credential?.accessToken,
        email: res.user.email,
        photoURL: res.user.photoURL,
        displayName: res.user.displayName,
        uid: res.user.uid,
      }
      return user
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData?.email
        const credential = GoogleAuthProvider.credentialFromError(error)

        console.log('errorCode', errorCode)
        console.log('errorMessage', errorMessage)
        console.log('email', email)
        console.log('credential', credential)
      }
      throw error
    }
  }
  return {
    onGoogleLogin,
  }
}
