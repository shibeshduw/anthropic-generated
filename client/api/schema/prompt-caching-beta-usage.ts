/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'PromptCachingBetaUsage' schema.
 */
export type PromptCachingBetaUsage = {
  /**
   * The number of input tokens which were used.
   */
  input_tokens: number;
  /**
   * The number of input tokens used to create the cache entry.
   */
  cache_creation_input_tokens: number | any;
  /**
   * The number of input tokens read from the cache.
   */
  cache_read_input_tokens: number | any;
  /**
   * The number of output tokens which were used.
   */
  output_tokens: number;
} & Record<string, any>;
