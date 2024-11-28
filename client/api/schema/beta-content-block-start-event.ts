/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaResponseTextBlock } from './beta-response-text-block.js';
import type { BetaResponseToolUseBlock } from './beta-response-tool-use-block.js';
/**
 * Representation of the 'BetaContentBlockStartEvent' schema.
 */
export type BetaContentBlockStartEvent = {
  /**
   * Default: "content_block_start".
   */
  type: 'content_block_start';
  index: number;
  content_block:
    | ({ type: 'text' } & BetaResponseTextBlock)
    | ({ type: 'tool_use' } & BetaResponseToolUseBlock);
} & Record<string, any>;
