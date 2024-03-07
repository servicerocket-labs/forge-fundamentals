import Resolver from "@forge/resolver";
import { fetch } from "@forge/api";

const resolver = new Resolver();

resolver.define("getJoke", async () => {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  return await response.json();
});

export const spacePageHandler = resolver.getDefinitions();
