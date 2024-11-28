/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaTextContentBlockDelta } from './beta-text-content-block-delta.js';
import type { BetaInputJsonContentBlockDelta } from './beta-input-json-content-block-delta.js';
/**
 * Representation of the 'BetaContentBlockDeltaEvent' schema.
 */
export type BetaContentBlockDeltaEvent = {
  /**
   * Default: "content_block_delta".
   */
  type: 'content_block_delta';
  index: number;
  delta:
    | ({ type: 'input_json_delta' } & BetaInputJsonContentBlockDelta)
    | ({ type: 'text_delta' } & BetaTextContentBlockDelta);
} & Record<string, any>;
