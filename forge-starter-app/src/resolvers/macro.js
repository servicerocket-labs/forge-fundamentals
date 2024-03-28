import api, { route } from "@forge/api";

import Resolver from "@forge/resolver";

const resolver = new Resolver();

resolver.define("getCurrentUser", async () => {
  const response = await api
    .asUser()
    .requestConfluence(route`/wiki/rest/api/user/current`, {
      headers: {
        Accept: "application/json",
      },
    });
  const currentUser = await response.json();
  return currentUser;
});

export const macroHandler = resolver.getDefinitions();
