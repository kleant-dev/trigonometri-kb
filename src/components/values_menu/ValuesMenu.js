"use client";

import React, { useState, useRef } from "react";
import "@/styles/Menu.css";
import { Button } from "../ui/button";

function ValuesMenu(props) {
  function tan() {
    console.log("dd");
    switch (Number(props.degreeAngle)) {
      case 90:
        return "--";
      case 180:
        return "--";
      case 270:
        return "--";
      case 360:
        return "--";
    }
    return props.trigValues.tan;
  }
  return (
    <div className="w-full fixed bottom-0 pl-4 pb-4 pr-4">
      <div className="grid grid-cols-3 gap-4 ">
        <Button className="p-1 overflow-auto">
          cos(θ) = {props.trigValues.cos}
        </Button>
        <Button className="p-1 overflow-auto">
          sin(θ) = {props.trigValues.sin}
        </Button>
        <Button className="p-1 overflow-auto">tan(θ) = {tan()}</Button>
        <Button className="p-1 overflow-auto">
          cot(θ) = {props.trigValues.cot}
        </Button>
        <Button className="p-1 overflow-auto">
          sec(θ) = {props.trigValues.sec}
        </Button>
        <Button className="p-1 overflow-auto">
          csc(θ) = {props.trigValues.csc}
        </Button>
      </div>
    </div>
  );
}

export default ValuesMenu;
