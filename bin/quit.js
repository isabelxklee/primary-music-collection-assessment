#!/usr/bin/env node
import { albums, rl } from "../variables.js";

export const quitApp = () => {
  albums = [];
  console.log("Bye!");
  rl.close();
};
