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
        <TargetMenu />
      </Target>
    );

    const unorderedMenu = screen.getByRole("list");

    expect(unorderedMenu).toBe();
  });
});
