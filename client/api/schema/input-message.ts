/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { RequestTextBlock } from './request-text-block.js';
import type { RequestImageBlock } from './request-image-block.js';
import type { RequestToolUseBlock } from './request-tool-use-block.js';
import type { RequestToolResultBlock } from './request-tool-result-block.js';
/**
 * Representation of the 'InputMessage' schema.
 */
export type InputMessage = {
  role: 'user' | 'assistant';
  content:
    | string
    | (
        | ({ type: 'image' } & RequestImageBlock)
        | ({ type: 'text' } & RequestTextBlock)
        | ({ type: 'tool_result' } & RequestToolResultBlock)
        | ({ type: 'tool_use' } & RequestToolUseBlock)
      )[];
};
