import api, { route } from "@forge/api";

import Resolver from "@forge/resolver";

const resolver = new Resolver();

resolver.define("getText", (req) => {
  return "Hello, World!";
});

resolver.define("getCurrentUser", async () => {
  const response = await api
    .asUser()
    .requestConfluence(route`/wiki/rest/api/user/current`, {
      headers: {
        Accept: "application/json",
      },
    });
  return await response.json();
});

export const macroHandler = resolver.getDefinitions();
