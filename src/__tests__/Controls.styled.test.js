/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StyledControls from "../components/styled/Controls.styled";
import Game from "../components/Game";
import userEvent from "@testing-library/user-event";
import beach from '../assets/beach.jpg'
import fruitland from '../assets/fruitland.jpg'

describe("Controls", () => {
  it("user clicks previous level to click on previous image", async () => {
    render(<Game />);

    const user = userEvent.setup()

    const previousLevelButton = screen.queryByRole("button", {name: "Previous Level"})

    const nextLevelButton = screen.queryByRole("button", {name: "Next Level"})

    await user.click(nextLevelButton)

    expect(screen.getByTestId('image-level')).toEqual(beach)

    await user.click(previousLevelButton)

    expect(screen.getByTestId('image-level')).toEqual(fruitland)
  });
  it("fullscreen mode", async () => {
    render(<Game/>)

    const user = userEvent.setup()

    const game = await screen.findByTestId("image-level")

    const fullscreenButton = await screen.findByRole("button", {name: "Fullscreen"})

    await user.click(fullscreenButton)

    expect(game.fullscreenElement).toBe(true)
  })
});
