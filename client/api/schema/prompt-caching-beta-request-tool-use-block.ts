/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CacheControlEphemeral } from './cache-control-ephemeral.js';
/**
 * Representation of the 'PromptCachingBetaRequestToolUseBlock' schema.
 */
export type PromptCachingBetaRequestToolUseBlock = {
  cache_control?: ({ type: 'ephemeral' } & CacheControlEphemeral) | any;
  type: 'tool_use';
  /**
   * Pattern: "^[a-zA-Z0-9_-]+$".
   */
  id: string;
  /**
   * Max Length: 64.
   * Min Length: 1.
   * Pattern: "^[a-zA-Z0-9_-]{1,64}$".
   */
  name: string;
  input: Record<string, any>;
};