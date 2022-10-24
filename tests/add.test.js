import { addAlbum } from "../bin/add.js";

describe("add an album", () => {
  test("that doesn't exist yet", () => {
    const data = addAlbum(`add "The Dark Side of the Moon" "Pink Floyd"`);
    expect(data).toBe(`Added "The Dark Side of the Moon" by Pink Floyd`);
  });

  test("that has invalid inputs", () => {
    const data = addAlbum(`add The Dark Side of the Moon Pink Floyd La La La`);
    expect(data).toBe("Please enter a valid album title and artist name.");
  });

  test("that already exists", () => {
    const data = addAlbum(`add "The Dark Side of the Moon" "Pink Floyd"`);
    expect(data).toBe(
      "Error: this album title already exists in the database. Please try adding a different album!"
    );
  });
});
