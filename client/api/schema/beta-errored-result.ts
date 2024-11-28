/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaErrorResponse } from './beta-error-response.js';
/**
 * Representation of the 'BetaErroredResult' schema.
 */
export type BetaErroredResult = {
  /**
   * Default: "errored".
   */
  type: 'errored';
  error: BetaErrorResponse;
} & Record<string, any>;
