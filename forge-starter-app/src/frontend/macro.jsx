import ForgeReconciler, { Text, User } from "@forge/react";
import React, { useEffect, useState } from "react";

import { invoke } from "@forge/bridge";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    invoke("getCurrentUser").then(setUser);
  }, []);

  return (
    <>{user ? <User accountId={user.accountId} /> : <Text>Loading...</Text>}</>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
