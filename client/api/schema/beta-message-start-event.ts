/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaMessage } from './beta-message.js';
/**
 * Representation of the 'BetaMessageStartEvent' schema.
 */
export type BetaMessageStartEvent = {
  /**
   * Default: "message_start".
   */
  type: 'message_start';
  message: BetaMessage;
} & Record<string, any>;
