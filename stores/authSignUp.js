import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import app from "./firebaseConfig";
import {
  validate_email,
  validate_password,
  validate_field,
} from "../utils/validation";
import { Alert } from "react-native";

const auth = getAuth(app);
const database = getDatabase(app);

export default function Register({ email, fullName, password, username }) {
  if (validate_email(email) == false || validate_password(password) == false) {
    Alert.alert("Please check your email and password");
    return;
  }
  if (validate_field(fullName) == false || validate_field(username) == false) {
    Alert.alert("Please fill out all the fields");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const user_data = {
        fullName: fullName,
        email: email,
        username: username,
        password: password,
        last_login: Date.now(),
      };

      set(ref(database, "users/" + user.uid), user_data);
      Alert.alert("You're all set!");
    })
    .catch(function (error) {
      const error_code = error.code;
      const error_message = error.message;

      Alert.alert(error_message);
    });
}
