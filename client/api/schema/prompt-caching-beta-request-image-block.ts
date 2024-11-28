/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { CacheControlEphemeral } from './cache-control-ephemeral.js';
import type { Base64ImageSource } from './base-64-image-source.js';
/**
 * Representation of the 'PromptCachingBetaRequestImageBlock' schema.
 */
export type PromptCachingBetaRequestImageBlock = {
  cache_control?: ({ type: 'ephemeral' } & CacheControlEphemeral) | any;
  type: 'image';
  source: { type: 'base64' } & Base64ImageSource;
};
