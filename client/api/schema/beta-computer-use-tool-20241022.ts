/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaCacheControlEphemeral } from './beta-cache-control-ephemeral.js';
/**
 * Representation of the 'BetaComputerUseTool20241022' schema.
 */
export type BetaComputerUseTool20241022 = {
  cache_control?: ({ type: 'ephemeral' } & BetaCacheControlEphemeral) | any;
  type: 'computer_20241022';
  /**
   * Name of the tool.
   *
   * This is how the tool will be called by the model and in tool_use blocks.
   */
  name: 'computer';
  /**
   * The height of the display in pixels.
   * Minimum: 1.
   */
  display_height_px: number;
  /**
   * The width of the display in pixels.
   * Minimum: 1.
   */
  display_width_px: number;
  /**
   * The X11 display number (e.g. 0, 1) for the display.
   */
  display_number?: number | any;
};
