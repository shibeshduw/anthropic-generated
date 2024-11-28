/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaMessageBatchResult } from './beta-message-batch-result.js';
/**
 * Representation of the 'BetaMessageBatchIndividualResponse' schema.
 */
export type BetaMessageBatchIndividualResponse = {
  /**
   * Developer-provided ID created for each request in a Message Batch. Useful for matching results to requests, as results may be given out of request order.
   *
   * Must be unique for each request within the Message Batch.
   */
  custom_id: string;
  result: BetaMessageBatchResult;
} & Record<string, any>;
