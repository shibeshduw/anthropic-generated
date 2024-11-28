/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaCacheControlEphemeral } from './beta-cache-control-ephemeral.js';
/**
 * Representation of the 'BetaRequestTextBlock' schema.
 */
export type BetaRequestTextBlock = {
  cache_control?: ({ type: 'ephemeral' } & BetaCacheControlEphemeral) | any;
  type: 'text';
  /**
   * Min Length: 1.
   */
  text: string;
};
