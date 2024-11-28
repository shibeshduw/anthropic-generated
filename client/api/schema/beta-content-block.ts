/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaResponseTextBlock } from './beta-response-text-block.js';
import type { BetaResponseToolUseBlock } from './beta-response-tool-use-block.js';
/**
 * Representation of the 'BetaContentBlock' schema.
 */
export type BetaContentBlock =
  | ({ type: 'text' } & BetaResponseTextBlock)
  | ({ type: 'tool_use' } & BetaResponseToolUseBlock);