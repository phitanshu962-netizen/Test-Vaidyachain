import { db } from '../firebase'
import { collection, doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore'

const COUNTER_COLLECTION = 'counters'
const COUNTER_DOC = 'main'

export const counterService = {
  // Get current counter value from Firebase
  async getCounter() {
    try {
      const counterRef = doc(db, COUNTER_COLLECTION, COUNTER_DOC)
      const docSnap = await getDoc(counterRef)
      
      if (docSnap.exists()) {
        return docSnap.data().value || 0
      } else {
        // Initialize counter if it doesn't exist
        await setDoc(counterRef, { value: 0 })
        return 0
      }
    } catch (error) {
      console.error('Error getting counter:', error)
      return 0
    }
  },

  // Update counter value in Firebase
  async updateCounter(newValue) {
    try {
      const counterRef = doc(db, COUNTER_COLLECTION, COUNTER_DOC)
      await setDoc(counterRef, { value: newValue })
      return newValue
    } catch (error) {
      console.error('Error updating counter:', error)
      throw error
    }
  },

  // Increment counter
  async incrementCounter() {
    try {
      const counterRef = doc(db, COUNTER_COLLECTION, COUNTER_DOC)
      await updateDoc(counterRef, {
        value: increment(1)
      })
      
      const docSnap = await getDoc(counterRef)
      return docSnap.data().value
    } catch (error) {
      console.error('Error incrementing counter:', error)
      throw error
    }
  },

  // Decrement counter
  async decrementCounter() {
    try {
      const counterRef = doc(db, COUNTER_COLLECTION, COUNTER_DOC)
      await updateDoc(counterRef, {
        value: increment(-1)
      })
      
      const docSnap = await getDoc(counterRef)
      return docSnap.data().value
    } catch (error) {
      console.error('Error decrementing counter:', error)
      throw error
    }
  },

  // Reset counter
  async resetCounter() {
    try {
      const counterRef = doc(db, COUNTER_COLLECTION, COUNTER_DOC)
      await setDoc(counterRef, { value: 0 })
      return 0
    } catch (error) {
      console.error('Error resetting counter:', error)
      throw error
    }
  }
}