# Exercise 5 - Modifying the UI

Let’s take a look at modifying the UI by introducing some UI Kit 2 components.
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
