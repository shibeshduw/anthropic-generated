/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Usage' schema.
 */
export type Usage = {
  /**
   * The number of input tokens which were used.
   */
  input_tokens: number;
  /**
   * The number of output tokens which were used.
   */
  output_tokens: number;
} & Record<string, any>;
