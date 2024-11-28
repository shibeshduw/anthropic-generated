/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CacheControlEphemeral } from './cache-control-ephemeral.js';
/**
 * Representation of the 'PromptCachingBetaRequestTextBlock' schema.
 */
export type PromptCachingBetaRequestTextBlock = {
  cache_control?: ({ type: 'ephemeral' } & CacheControlEphemeral) | any;
  type: 'text';
  /**
   * Min Length: 1.
   */
  text: string;
};
