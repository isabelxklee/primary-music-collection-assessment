import { playAlbum } from "../bin/play.js";
import { addAlbum } from "../bin/add.js";
import { jest } from "@jest/globals";

describe("play an album", () => {
  test("that exists and hasn't been played", () => {
    console.log = jest.fn();
    addAlbum(`add "The Dark Side of the Moon" "Pink Floyd"`);
    const data = playAlbum("The Dark Side of the Moon");
    expect(data).toBe(`You're listening to "The Dark Side of the Moon"`);
    expect(console.log.mock.calls[0][0]).toBe(
      `You're listening to "The Dark Side of the Moon"`
    );
  });

  test("that exists and has already been played", () => {
    console.log = jest.fn();
    addAlbum(`add "Ride the Lightning" "Metallica"`);
    playAlbum("Ride the Lightning");
    const data = playAlbum("Ride the Lightning");
    expect(data).toBe("This album has already been played.");
    expect(console.log.mock.calls[0][0]).toBe(
      "This album has already been played."
    );
  });
});
