/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaMessage } from './beta-message.js';
/**
 * Representation of the 'BetaSucceededResult' schema.
 */
export type BetaSucceededResult = {
  /**
   * Default: "succeeded".
   */
  type: 'succeeded';
  message: BetaMessage;
} & Record<string, any>;
