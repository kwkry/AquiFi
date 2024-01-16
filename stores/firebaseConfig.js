import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXRl8_RayZUVT8-OYYahS0wmFSlch33mM",
  authDomain: "real-time-water-database.firebaseapp.com",
  databaseURL:
    "https://real-time-water-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "real-time-water-database",
  storageBucket: "real-time-water-database.appspot.com",
  messagingSenderId: "786162668605",
  appId: "1:786162668605:web:fc394ae964a768da920654",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
