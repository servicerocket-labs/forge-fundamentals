# Exercise 5 - Modifying the UI

The forge CLI has a command called `forge tunnel` that runs the app's code from your local machine. This has a number of benefits including "hot reloading" - code changes will be applied instantly without having to re-deploy the app. This is great for quick prototyping and testing.

**Note:** Changes still need to be deployed in order to persist once you close the the tunnel.

Additionally, requests will be redirected to your local machine so you can view logs and other diagnostics in real time.

To get started, modify `manifest.yml` to use the native Node.js runtime and then run `forge tunnel` in your terminal. This offers several improvements compared to the current Forge runtime and allows us to use `forge tunnel` without needing to install Docker ([more info](https://developer.atlassian.com/platform/forge/runtime-reference/native-nodejs-runtime/)).

```yaml
app:
  id: ari:cloud:ecosystem::app/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  runtime:
    name: nodejs18.x
```

```shell
forge tunnel
```

Now that `forge tunnel` is up and running, let’s take a look at modifying the UI by introducing some UI Kit 2 components.
Instead of displaying plain text, I want the macro to display the name and profile picture of the current user using the User component.

A list of UI components can be found in the [Atlassian
docs](https://developer.atlassian.com/platform/forge/ui-kit-2/user/).

To do so, we will need to update `src/frontend/index.jsx`

1. First, we import the `User` component

   ```jsx
   import { User } from "@forge/react";
   ```

2. The `User` component requires an accountId prop which we can get from the `getCurrentUser` function we added previously.

   ```jsx
   <User accountId={data.accountId} />
   ```

3. The updated code should look like:

   ```jsx
   import ForgeReconciler, { Text } from "@forge/react";
   import React, { useEffect, useState } from "react";

   import { User } from "@forge/react";
   import { invoke } from "@forge/bridge";

   const App = () => {
     const [user, setUser] = useState(null);

     useEffect(() => {
       invoke("getCurrentUser").then(setUser);
     }, []);

     return (
       <>
         {user ? (
           <User accountId={user.accountId} />
         ) : (
           <Text>{"Loading..."}</Text>
         )}
       </>
     );
   };

   ForgeReconciler.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```

4. And here is the final result when you refresh the page:

   ![](./img/exercise-5/user-component.png)

Remember that these changes will need to be deployed with `forge deploy` in order for them to persist once we close the tunnel.
