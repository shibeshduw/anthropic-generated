/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaCreateMessageParams } from './beta-create-message-params.js';
/**
 * Representation of the 'BetaMessageBatchIndividualRequestParams' schema.
 */
export type BetaMessageBatchIndividualRequestParams = {
  /**
   * Developer-provided ID created for each request in a Message Batch. Useful for matching results to requests, as results may be given out of request order.
   *
   * Must be unique for each request within the Message Batch.
   * Max Length: 64.
   * Min Length: 1.
   * Pattern: "^[a-zA-Z0-9_-]{1,64}$".
   */
  custom_id: string;
  /**
   * Messages API creation parameters for the individual request.
   *
   * See the [Messages API reference](/en/api/messages) for full documentation on available parameters.
   */
  params: BetaCreateMessageParams;
};
