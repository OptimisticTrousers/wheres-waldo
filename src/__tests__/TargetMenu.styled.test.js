import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StyledControls from "../components/styled/Controls.styled";
import Game from "../components/Game";
import userEvent from "@testing-library/user-event";
import beach from "../assets/beach.jpg";
import fruitland from "../assets/fruitland.jpg";
import { TargetMenu } from "../components/styled/TargetMenu.styled";
import { Target } from "../components/styled/Target.styled";
import { TargetImage } from "../components/styled/TargetImage.styled";

describe("TargetMenu", () => {
  const mockCoordinates = {
    horizontalOffset: "50%",
    verticalOffset: "0%",
  };
  test("displays correct characters", () => {
    render(
      <Target coordinates={mockCoordinates}>
        <TargetImage />
        <TargetMenu>
          <li data-testid="character">Odlaw</li>
          <li data-testid="character">Waldo</li>
          <li data-testid="character">Wilma</li>
          <li data-testid="character">The Wizard</li>
          <li data-testid="character">Woof</li>
        </TargetMenu>
      </Target>
    );

    const unorderedMenu = screen.queryAllByTestId("character");

    expect(unorderedMenu).toBe();
  });
});
