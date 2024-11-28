/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { PromptCachingBetaRequestTextBlock } from './prompt-caching-beta-request-text-block.js';
import type { PromptCachingBetaRequestImageBlock } from './prompt-caching-beta-request-image-block.js';
import type { PromptCachingBetaRequestToolUseBlock } from './prompt-caching-beta-request-tool-use-block.js';
import type { PromptCachingBetaRequestToolResultBlock } from './prompt-caching-beta-request-tool-result-block.js';
/**
 * Representation of the 'PromptCachingBetaInputMessage' schema.
 */
export type PromptCachingBetaInputMessage = {
  role: 'user' | 'assistant';
  content:
    | string
    | (
        | ({ type: 'image' } & PromptCachingBetaRequestImageBlock)
        | ({ type: 'text' } & PromptCachingBetaRequestTextBlock)
        | ({ type: 'tool_result' } & PromptCachingBetaRequestToolResultBlock)
        | ({ type: 'tool_use' } & PromptCachingBetaRequestToolUseBlock)
      )[];
};
