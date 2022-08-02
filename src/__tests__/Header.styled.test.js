import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StyledControls from "../components/styled/Controls.styled";
import Game from "../components/Game";
import userEvent from "@testing-library/user-event";
import beach from "../assets/beach.jpg";
import fruitland from "../assets/fruitland.jpg";
import Header from "../components/styled/Header.styled";
import { within } from "@testing-library/dom";

describe("Header", () => {
  test("user changing from light mode to dark mode", async () => {
    render(<Header />);

    const user = userEvent.setup();
    const banner = screen.getByRole("banner");

    within(banner).getByRole("button");

    await user.click(banner);

    expect(banner.backgroundColor).toEqual("black")
  });
});
