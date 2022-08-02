import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StyledControls from "../components/styled/Controls.styled";
import Game from "../components/Game";
import userEvent from "@testing-library/user-event";
import beach from '../assets/beach.jpg'
import fruitland from '../assets/fruitland.jpg'

console.log(beach)

describe("Controls", () => {
  it("user clicks previous level to click on previous image", async () => {
    render(<Game />);

    const user = userEvent.setup()

    const previousLevelButton = screen.queryByRole("button", {name: "Previous Level"})

    const nextLevelButton = screen.queryByRole("button", {name: "Next Level"})

    await user.click(nextLevelButton)

    expect(screen.queryByRole("img").src).toEqual(beach)

    await user.click(previousLevelButton)

    expect(screen.queryByRole("img").src).toEqual(fruitland)
  });
});
