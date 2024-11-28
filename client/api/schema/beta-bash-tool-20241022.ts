/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaCacheControlEphemeral } from './beta-cache-control-ephemeral.js';
/**
 * Representation of the 'BetaBashTool20241022' schema.
 */
export type BetaBashTool20241022 = {
  cache_control?: ({ type: 'ephemeral' } & BetaCacheControlEphemeral) | any;
  type: 'bash_20241022';
  /**
   * Name of the tool.
   *
   * This is how the tool will be called by the model and in tool_use blocks.
   */
  name: 'bash';
};
