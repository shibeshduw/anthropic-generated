/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ResponseTextBlock } from './response-text-block.js';
import type { ResponseToolUseBlock } from './response-tool-use-block.js';
/**
 * Representation of the 'ContentBlockStartEvent' schema.
 */
export type ContentBlockStartEvent = {
  /**
   * Default: "content_block_start".
   */
  type: 'content_block_start';
  index: number;
  content_block:
    | ({ type: 'text' } & ResponseTextBlock)
    | ({ type: 'tool_use' } & ResponseToolUseBlock);
} & Record<string, any>;
