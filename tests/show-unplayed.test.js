import { showUnplayed, showUnplayedByArtist } from "../bin/show-unplayed.js";
import { addAlbum } from "../bin/add.js";
import { toBeArrayOfSize } from "jest-extended";

describe("show all unplayed albums", () => {
  test("that don't exist", () => {
    const data = showUnplayed();
    expect(data).toBeArrayOfSize(0);
  });

  test("that exist", () => {
    addAlbum(`add "The Dark Side of the Moon" "Pink Floyd"`);
    addAlbum(`add "Ride the Lightning" "Metallica"`);
    const data = showUnplayed();
    expect(data).toBeArrayOfSize(2);
  });
});

describe("show unplayed albums by a given artist", () => {
  test("that don't exist", () => {
    const data = showUnplayedByArtist(`show all by "Beastie Boys"`);
    expect(data).toBeArrayOfSize(0);
  });

  test("that exist", () => {
    const data = showUnplayedByArtist(`show all by "Pink Floyd"`);
    expect(data).toBeArrayOfSize(1);
  });
});
