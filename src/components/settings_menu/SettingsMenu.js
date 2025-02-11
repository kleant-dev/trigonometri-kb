"use client";

import React, { useState, useRef } from "react";
import { slide as Menu } from "react-burger-menu";
import "@/styles/Menu.css";

function SettingsMenu(props) {
  return (
    <Menu noOverlay disableAutoFocus isOpen={false} width={375}>
      <label
        className="centered large-print underlined"
        style={{ padding: "1em 0" }}
      >
        Njesia e kendit
        <select
          id="angle-value-dropdown"
          style={{ marginLeft: "0.25em" }}
          className="bg-red-400"
          onChange={props.handleAngleUnitChange}
        >
          <option value="degrees">Grade</option>
          <option value="radians">Radian</option>
        </select>
      </label>

      <label className="centered large-print">Funksionet Trigonometrike</label>
      <div className="centered" style={{ whitespace: "nowrap" }}>
        <label>
          cos:
          <input
            id="cos-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleTrigSelectionChange}
          />
        </label>
        <label>
          sin:
          <input
            id="sin-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleTrigSelectionChange}
          />
        </label>
        <label>
          tan:
          <input
            id="tan-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleTrigSelectionChange}
          />
        </label>
      </div>
      <div
        className="centered underlined"
        style={{ whitespace: "nowrap", padding: "1em" }}
      >
        <label>
          cot:
          <input
            id="cot-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleTrigSelectionChange}
          />
        </label>
        <label>
          sec:
          <input
            id="sec-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleTrigSelectionChange}
          />
        </label>
        <label>
          cosec:
          <input
            id="csc-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleTrigSelectionChange}
          />
        </label>
      </div>

      <label className="centered large-print">
        Detajet e rrethit trigonometrik
      </label>
      <div className="centered" style={{ whitespace: "nowrap" }}>
        <label>
          Boshtet:
          <input
            id="axis-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleCircleDetailChange}
          />
        </label>
        <label>
          Gradet:
          <input
            id="degree-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleCircleDetailChange}
          />
        </label>
      </div>
      <div className="centered" style={{ whitespace: "nowrap" }}>
        <label>
          Radianet:
          <input
            id="radian-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleCircleDetailChange}
          />
        </label>
        <label>
          Vlerat e radianit ne Pi:
          <input
            id="pi-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleCircleDetailChange}
          />
        </label>
      </div>
      <div
        className="centered underlined"
        style={{ whitespace: "nowrap", paddingBottom: "1em" }}
      >
        <label>
          Kuadrantet:
          <input
            id="quadrant-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleCircleDetailChange}
          />
        </label>
        <label>
          Shenjat :
          <input
            id="sign-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleCircleDetailChange}
          />
        </label>
      </div>
    </Menu>
  );
}

export default SettingsMenu;
