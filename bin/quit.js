#!/usr/bin/env node
import { albums, rl } from "../variables.js";

export const quitApp = () => {
  while (albums.length > 0) {
    albums.pop();
  }

  console.log("Bye!");
  rl.close();
  return albums;
};
