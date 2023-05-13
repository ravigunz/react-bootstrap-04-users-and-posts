import { React, useEffect } from "react";
import axios from "axios";
// import bootstrap from 'bootstrap'

export default function App() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>App</h1>
    </div>
  );
}
