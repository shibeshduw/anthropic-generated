/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaInvalidRequestError } from './beta-invalid-request-error.js';
import type { BetaAuthenticationError } from './beta-authentication-error.js';
import type { BetaPermissionError } from './beta-permission-error.js';
import type { BetaNotFoundError } from './beta-not-found-error.js';
import type { BetaRateLimitError } from './beta-rate-limit-error.js';
import type { BetaAPIError } from './beta-api-error.js';
import type { BetaOverloadedError } from './beta-overloaded-error.js';
/**
 * Representation of the 'BetaErrorResponse' schema.
 */
export type BetaErrorResponse = {
  /**
   * Default: "error".
   */
  type: 'error';
  error:
    | ({ type: 'api_error' } & BetaAPIError)
    | ({ type: 'authentication_error' } & BetaAuthenticationError)
    | ({ type: 'invalid_request_error' } & BetaInvalidRequestError)
    | ({ type: 'not_found_error' } & BetaNotFoundError)
    | ({ type: 'overloaded_error' } & BetaOverloadedError)
    | ({ type: 'permission_error' } & BetaPermissionError)
    | ({ type: 'rate_limit_error' } & BetaRateLimitError);
} & Record<string, any>;
