/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaCacheControlEphemeral } from './beta-cache-control-ephemeral.js';
import type { BetaBase64ImageSource } from './beta-base-64-image-source.js';
/**
 * Representation of the 'BetaRequestImageBlock' schema.
 */
export type BetaRequestImageBlock = {
  cache_control?: ({ type: 'ephemeral' } & BetaCacheControlEphemeral) | any;
  type: 'image';
  source: { type: 'base64' } & BetaBase64ImageSource;
};
