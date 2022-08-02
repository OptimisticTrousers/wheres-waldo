import React from "react";
import { render, waitForDomChange, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StyledControls from "../components/styled/Controls.styled";
import Game from "../components/Game";
import userEvent from "@testing-library/user-event";
import beach from "../assets/beach.jpg";
import fruitland from "../assets/fruitland.jpg";
import { StyledHeader } from "../components/styled/Header.styled";
import { waitFor, within } from "@testing-library/dom";

describe("Header", () => {
  test("user changing from light mode to dark mode", async () => {
    render(<StyledHeader/>);

    const user = userEvent.setup();

    const banner = screen.queryByRole("banner")
    const moon = screen.queryByRole("button");

    await user.click(moon);

    await waitFor(() => {

      expect(banner.backgroundColor).toEqual("black");
    })


  });
});
