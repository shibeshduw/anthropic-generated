/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'BetaAPIError' schema.
 */
export type BetaAPIError = {
  /**
   * Default: "api_error".
   */
  type: 'api_error';
  /**
   * Default: "Internal server error".
   */
  message: string;
} & Record<string, any>;