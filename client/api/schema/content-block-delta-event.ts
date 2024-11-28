/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { TextContentBlockDelta } from './text-content-block-delta.js';
import type { InputJsonContentBlockDelta } from './input-json-content-block-delta.js';
/**
 * Representation of the 'ContentBlockDeltaEvent' schema.
 */
export type ContentBlockDeltaEvent = {
  /**
   * Default: "content_block_delta".
   */
  type: 'content_block_delta';
  index: number;
  delta:
    | ({ type: 'input_json_delta' } & InputJsonContentBlockDelta)
    | ({ type: 'text_delta' } & TextContentBlockDelta);
} & Record<string, any>;
