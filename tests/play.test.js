import { playAlbum } from "../bin/play.js";
import { addAlbum } from "../bin/add.js";
import { jest } from "@jest/globals";

describe("play an album", () => {
  test("that exists and hasn't been played", () => {
    console.log = jest.fn();
    addAlbum(`add "The Dark Side of the Moon" "Pink Floyd"`);
    const data = playAlbum(`play "The Dark Side of the Moon"`);
    expect(data).toBe(`You're listening to "The Dark Side of the Moon"`);
  });

  test("that exists and has already been played", () => {
    console.log = jest.fn();
    addAlbum(`add "Ride the Lightning" "Metallica"`);
    playAlbum(`play "Ride the Lightning"`);
    const data = playAlbum(`play "Ride the Lightning"`);
    expect(data).toBe("This album has already been played.");
  });
});
