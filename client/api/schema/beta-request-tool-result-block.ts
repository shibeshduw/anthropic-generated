/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaCacheControlEphemeral } from './beta-cache-control-ephemeral.js';
import type { BetaRequestTextBlock } from './beta-request-text-block.js';
import type { BetaRequestImageBlock } from './beta-request-image-block.js';
/**
 * Representation of the 'BetaRequestToolResultBlock' schema.
 */
export type BetaRequestToolResultBlock = {
  cache_control?: ({ type: 'ephemeral' } & BetaCacheControlEphemeral) | any;
  type: 'tool_result';
  /**
   * Pattern: "^[a-zA-Z0-9_-]+$".
   */
  tool_use_id: string;
  is_error?: boolean;
  content?:
    | string
    | (
        | ({ type: 'image' } & BetaRequestImageBlock)
        | ({ type: 'text' } & BetaRequestTextBlock)
      )[];
};
