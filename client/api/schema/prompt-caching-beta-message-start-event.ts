/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { PromptCachingBetaMessage } from './prompt-caching-beta-message.js';
/**
 * Representation of the 'PromptCachingBetaMessageStartEvent' schema.
 */
export type PromptCachingBetaMessageStartEvent = {
  /**
   * Default: "message_start".
   */
  type: 'message_start';
  message: PromptCachingBetaMessage;
} & Record<string, any>;
