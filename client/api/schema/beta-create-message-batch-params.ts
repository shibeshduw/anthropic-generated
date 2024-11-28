/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaMessageBatchIndividualRequestParams } from './beta-message-batch-individual-request-params.js';
/**
 * Representation of the 'BetaCreateMessageBatchParams' schema.
 */
export type BetaCreateMessageBatchParams = {
  /**
   * List of requests for prompt completion. Each is an individual request to create a Message.
   */
  requests: BetaMessageBatchIndividualRequestParams[];
};
