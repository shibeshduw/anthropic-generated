/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CacheControlEphemeral } from './cache-control-ephemeral.js';
import type { PromptCachingBetaRequestTextBlock } from './prompt-caching-beta-request-text-block.js';
import type { PromptCachingBetaRequestImageBlock } from './prompt-caching-beta-request-image-block.js';
/**
 * Representation of the 'PromptCachingBetaRequestToolResultBlock' schema.
 */
export type PromptCachingBetaRequestToolResultBlock = {
  cache_control?: ({ type: 'ephemeral' } & CacheControlEphemeral) | any;
  type: 'tool_result';
  /**
   * Pattern: "^[a-zA-Z0-9_-]+$".
   */
  tool_use_id: string;
  is_error?: boolean;
  content?:
    | string
    | (
        | ({ type: 'image' } & PromptCachingBetaRequestImageBlock)
        | ({ type: 'text' } & PromptCachingBetaRequestTextBlock)
      )[];
};
