import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import app from "./firebaseConfig";
import { getDatabase, ref, update } from "@firebase/database";
import { Alert } from "react-native";
import { validate_email, validate_field } from "../utils/validation";

const auth = getAuth(app);
const database = getDatabase(app);

export default function Login({ email, password }) {
  if (validate_email(email) == false || validate_field(password) == false) {
    Alert.alert("Please check your email and password");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const user_data = {
        last_login: Date.now(),
      };

      update(ref(database, "users/" + user.uid), user_data);
      Alert.alert("You're now logged in!");
    })

    .catch(function (error) {
      const error_code = error.code;
      const error_message = error.message;

      Alert.alert(error_message);
    });
}
