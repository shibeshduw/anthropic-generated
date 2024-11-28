/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaCacheControlEphemeral } from './beta-cache-control-ephemeral.js';
import type { BetaBase64PDFSource } from './beta-base-64-pdf-source.js';
/**
 * Representation of the 'BetaRequestPDFBlock' schema.
 */
export type BetaRequestPDFBlock = {
  cache_control?: ({ type: 'ephemeral' } & BetaCacheControlEphemeral) | any;
  type: 'document';
  source: BetaBase64PDFSource;
};
