// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
    setPersistence,
    browserLocalPersistence,
    onAuthStateChanged,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut as firebaseSignOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
    sendPasswordResetEmail,
    fetchSignInMethodsForEmail,
    verifyPasswordResetCode,
    confirmPasswordReset,
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    setDoc,
    collection,
    addDoc,
} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCjjsljMohsGbvOOxj2kuv5PGywG-NgwW4',
    authDomain: 'myproject-dd0cb.firebaseapp.com',
    projectId: 'myproject-dd0cb',
    storageBucket: 'myproject-dd0cb',
    messagingSenderId: '648871360118',
    appId: '1:648871360118:web:d68bf3ba203a751b3d1157',
    measurementId: 'G-WBZJN6Z0V5',
}
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account',
})
setPersistence(auth, browserLocalPersistence)
    .then(() => {
        console.log('Persistence set to local storage.')
    })
    .catch(error => {
        console.error('Error setting persistence:', error)
    })
const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)
}

const signOut = async () => {
    await firebaseSignOut(auth)
}
const signUpWithEmail = async (email, password, displayName) => {
    try {
        const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
        )
        await sendEmailVerification(result.user)

        // 設置使用者的 displayName
        await updateProfile(result.user, {
            displayName: displayName,
        })

        return result
    } catch (error) {
        console.error('Error during signup:', error)
        throw error
    }
}
const addUserInfo = async (uid, infoData) => {
    try {
        await setDoc(doc(db, 'users', uid), infoData)
    } catch (error) {
        console.error('Error during signup:', error)
        // 處理錯誤
        throw error
    }
}
const signInWithEmail = (email, password) => {
    try {
        return signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.error('Error during sign in:', error.code, error.message)
        throw error
    }
}
const resendVerificationEmail = async () => {
    const user = auth.currentUser
    if (user) {
        await sendEmailVerification(user)
    }
}
const emailIsRegister = async email => {
    try {
        const methods = await fetchSignInMethodsForEmail(auth, email)
        return methods
    } catch (error) {
        console.error('Error during sign in:', error.code, error.message)
        throw error
    }
}
const sendResetEmail = async email => {
    try {
        await sendPasswordResetEmail(auth, email)
        console.log('重置密碼連結已發送，請檢查你的信箱。')
    } catch (error) {
        console.error('Error during sign in:', error.code, error.message)
        throw error
    }
}
const verifyResetCode = async oobCode => {
    try {
        await verifyPasswordResetCode(auth, oobCode)
    } catch (error) {
        console.error('Error during sign in:', error.code, error.message)
        throw error
    }
}
const resetPassword = async (oobCode, newPassword) => {
    try {
        await confirmPasswordReset(auth, oobCode, newPassword)
    } catch (error) {
        console.error('重置密碼錯誤:', error)
        this.errorMessage = '重置密碼失敗，請稍後再試'
    }
}
export {
    firebaseApp,
    auth,
    signInWithGoogle,
    signOut,
    signUpWithEmail,
    signInWithEmail,
    resendVerificationEmail,
    addUserInfo,
    emailIsRegister,
    sendResetEmail,
    verifyResetCode,
    resetPassword,
}
