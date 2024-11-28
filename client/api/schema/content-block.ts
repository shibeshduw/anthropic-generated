/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { ResponseTextBlock } from './response-text-block.js';
import type { ResponseToolUseBlock } from './response-tool-use-block.js';
/**
 * Representation of the 'ContentBlock' schema.
 */
export type ContentBlock =
  | ({ type: 'text' } & ResponseTextBlock)
  | ({ type: 'tool_use' } & ResponseToolUseBlock);
