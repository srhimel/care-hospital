import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const FireBaseInit = () => {
    initializeApp(firebaseConfig);
}

export default FireBaseInit;