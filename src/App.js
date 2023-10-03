import React from "react";
import Main from "./Components/Main/Main";
import * as Env from "./environments";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

function App() {
  return <Main />;
}

export default App;
