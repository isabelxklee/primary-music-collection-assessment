import { showAll, showAllByArtist } from "../bin/show-all.js";
import { addAlbum } from "../bin/add.js";
import { toBeArrayOfSize } from "jest-extended";

describe("show all albums", () => {
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

describe("show all albums by a given artist", () => {
  test("that don't exist", () => {
    const data = showAllByArtist(`show all by "Beastie Boys"`);
    expect(data).toBeArrayOfSize(0);
  });

  test("that exist", () => {
    addAlbum(`add "This is a test." "Pink Floyd"`);
    addAlbum(`add "Hello World" "Pink Floyd"`);
    addAlbum(`add "Test Album" "Pink Floyd"`);
    const data = showAllByArtist(`show all by "Pink Floyd"`);
    expect(data).toBeArrayOfSize(4);
  });
});
