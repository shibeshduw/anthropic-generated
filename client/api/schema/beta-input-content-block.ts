/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaRequestTextBlock } from './beta-request-text-block.js';
import type { BetaRequestImageBlock } from './beta-request-image-block.js';
import type { BetaRequestToolUseBlock } from './beta-request-tool-use-block.js';
import type { BetaRequestToolResultBlock } from './beta-request-tool-result-block.js';
import type { BetaRequestPDFBlock } from './beta-request-pdf-block.js';
/**
 * Representation of the 'BetaInputContentBlock' schema.
 */
export type BetaInputContentBlock =
  | ({ type: 'document' } & BetaRequestPDFBlock)
  | ({ type: 'image' } & BetaRequestImageBlock)
  | ({ type: 'text' } & BetaRequestTextBlock)
  | ({ type: 'tool_result' } & BetaRequestToolResultBlock)
  | ({ type: 'tool_use' } & BetaRequestToolUseBlock);
