/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InvalidRequestError } from './invalid-request-error.js';
import type { AuthenticationError } from './authentication-error.js';
import type { PermissionError } from './permission-error.js';
import type { NotFoundError } from './not-found-error.js';
import type { RateLimitError } from './rate-limit-error.js';
import type { APIError } from './api-error.js';
import type { OverloadedError } from './overloaded-error.js';
/**
 * Representation of the 'ErrorResponse' schema.
 */
export type ErrorResponse = {
  /**
   * Default: "error".
   */
  type: 'error';
  error:
    | ({ type: 'api_error' } & APIError)
    | ({ type: 'authentication_error' } & AuthenticationError)
    | ({ type: 'invalid_request_error' } & InvalidRequestError)
    | ({ type: 'not_found_error' } & NotFoundError)
    | ({ type: 'overloaded_error' } & OverloadedError)
    | ({ type: 'permission_error' } & PermissionError)
    | ({ type: 'rate_limit_error' } & RateLimitError);
} & Record<string, any>;
