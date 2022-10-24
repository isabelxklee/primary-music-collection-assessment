import { showAll } from "../bin/show-all.js";
import { addAlbum } from "../bin/add.js";
import { toBeArrayOfSize } from "jest-extended";

describe("play all albums", () => {
  test("that don't exist", () => {
    const data = showAll();
    expect(data).toBeArrayOfSize(0);
  });

  test("that exist", () => {
    addAlbum(`add "The Dark Side of the Moon" "Pink Floyd"`);
    addAlbum(`add "Ride the Lightning" "Metallica"`);
    const data = showAll();
    expect(data).toBeArrayOfSize(2);
  });
});
