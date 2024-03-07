import ForgeReconciler, { Button, Text } from "@forge/react";
import React, { useEffect, useState } from "react";

import { invoke } from "@forge/bridge";

const App = () => {
  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    const data = await invoke("getJoke");
    setJoke(data.joke);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <Text>{joke ? joke : "Loading..."}</Text>
      <Button onClick={fetchJoke}>Next joke</Button>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
