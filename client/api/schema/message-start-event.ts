/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Message } from './message.js';
/**
 * Representation of the 'MessageStartEvent' schema.
 */
export type MessageStartEvent = {
  /**
   * Default: "message_start".
   */
  type: 'message_start';
  message: Message;
} & Record<string, any>;
