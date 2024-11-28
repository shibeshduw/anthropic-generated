/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-ai-sdk/core';
import type {
  BetaListResponseMessageBatch,
  BetaCreateMessageBatchParams,
  BetaMessageBatch
} from './schema/index.js';
/**
 * Representation of the 'MessageBatchesApi'.
 * This API is part of the 'api' service.
 */
export const MessageBatchesApi = {
  /**
   * List all Message Batches within a Workspace. Most recently created batches are returned first.
   * @param queryParameters - Object containing the following keys: before_id, after_id, limit.
   * @param headerParameters - Object containing the following keys: anthropic-beta, anthropic-version, x-api-key.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  betaMessageBatchesList: (
    queryParameters?: { before_id?: string; after_id?: string; limit?: number },
    headerParameters?: {
      'anthropic-beta'?: string;
      'anthropic-version'?: string;
      'x-api-key'?: string;
    }
  ) =>
    new OpenApiRequestBuilder<BetaListResponseMessageBatch>(
      'get',
      '/v1/messages/batches?beta=true',
      {
        queryParameters,
        headerParameters
      }
    ),
  /**
   * Send a batch of Message creation requests.
   *
   * The Message Batches API can be used to process multiple Messages API requests at once. Once a Message Batch is created, it begins processing immediately. Batches can take up to 24 hours to complete.
   * @param body - Request body.
   * @param headerParameters - Object containing the following keys: anthropic-beta, anthropic-version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  betaMessageBatchesPost: (
    body: BetaCreateMessageBatchParams,
    headerParameters?: {
      'anthropic-beta'?: string;
      'anthropic-version'?: string;
    }
  ) =>
    new OpenApiRequestBuilder<BetaMessageBatch>(
      'post',
      '/v1/messages/batches?beta=true',
      {
        body,
        headerParameters
      }
    ),
  /**
   * This endpoint is idempotent and can be used to poll for Message Batch completion. To access the results of a Message Batch, make a request to the `results_url` field in the response.
   * @param messageBatchId - ID of the Message Batch.
   * @param headerParameters - Object containing the following keys: anthropic-beta, anthropic-version, x-api-key.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  betaMessageBatchesRetrieve: (
    messageBatchId: string,
    headerParameters?: {
      'anthropic-beta'?: string;
      'anthropic-version'?: string;
      'x-api-key'?: string;
    }
  ) =>
    new OpenApiRequestBuilder<BetaMessageBatch>(
      'get',
      '/v1/messages/batches/{messageBatchId}?beta=true',
      {
        pathParameters: { messageBatchId },
        headerParameters
      }
    ),
  /**
   * Batches may be canceled any time before processing ends. Once cancellation is initiated, the batch enters a `canceling` state, at which time the system may complete any in-progress, non-interruptible requests before finalizing cancellation.
   *
   * The number of canceled requests is specified in `request_counts`. To determine which requests were canceled, check the individual results within the batch. Note that cancellation may not result in any canceled requests if they were non-interruptible.
   * @param messageBatchId - ID of the Message Batch.
   * @param headerParameters - Object containing the following keys: anthropic-beta, anthropic-version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  betaMessageBatchesCancel: (
    messageBatchId: string,
    headerParameters?: {
      'anthropic-beta'?: string;
      'anthropic-version'?: string;
    }
  ) =>
    new OpenApiRequestBuilder<BetaMessageBatch>(
      'post',
      '/v1/messages/batches/{messageBatchId}/cancel?beta=true',
      {
        pathParameters: { messageBatchId },
        headerParameters
      }
    ),
  /**
   * Streams the results of a Message Batch as a `.jsonl` file.
   *
   * Each line in the file is a JSON object containing the result of a single request in the Message Batch. Results are not guaranteed to be in the same order as requests. Use the `custom_id` field to match results to requests.
   * @param messageBatchId - ID of the Message Batch.
   * @param headerParameters - Object containing the following keys: anthropic-beta, anthropic-version, x-api-key.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  betaMessageBatchesResults: (
    messageBatchId: string,
    headerParameters?: {
      'anthropic-beta'?: string;
      'anthropic-version'?: string;
      'x-api-key'?: string;
    }
  ) =>
    new OpenApiRequestBuilder<any>(
      'get',
      '/v1/messages/batches/{messageBatchId}/results?beta=true',
      {
        pathParameters: { messageBatchId },
        headerParameters
      }
    ),
  /**
   * List all Message Batches within a Workspace. Most recently created batches are returned first.
   * @param queryParameters - Object containing the following keys: before_id, after_id, limit.
   * @param headerParameters - Object containing the following keys: anthropic-beta, anthropic-version, x-api-key.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  betaMessageBatchesList_1: (
    queryParameters?: { before_id?: string; after_id?: string; limit?: number },
    headerParameters?: {
      'anthropic-beta'?: string;
      'anthropic-version'?: string;
      'x-api-key'?: string;
    }
  ) =>
    new OpenApiRequestBuilder<BetaListResponseMessageBatch>(
      'get',
      '/v1/messages/batches',
      {
        queryParameters,
        headerParameters
      }
    ),
  /**
   * Send a batch of Message creation requests.
   *
   * The Message Batches API can be used to process multiple Messages API requests at once. Once a Message Batch is created, it begins processing immediately. Batches can take up to 24 hours to complete.
   * @param body - Request body.
   * @param headerParameters - Object containing the following keys: anthropic-beta, anthropic-version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  betaMessageBatchesPost_1: (
    body: BetaCreateMessageBatchParams,
    headerParameters?: {
      'anthropic-beta'?: string;
      'anthropic-version'?: string;
    }
  ) =>
    new OpenApiRequestBuilder<BetaMessageBatch>(
      'post',
      '/v1/messages/batches',
      {
        body,
        headerParameters
      }
    ),
  /**
   * This endpoint is idempotent and can be used to poll for Message Batch completion. To access the results of a Message Batch, make a request to the `results_url` field in the response.
   * @param messageBatchId - ID of the Message Batch.
   * @param headerParameters - Object containing the following keys: anthropic-beta, anthropic-version, x-api-key.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  betaMessageBatchesRetrieve_1: (
    messageBatchId: string,
    headerParameters?: {
      'anthropic-beta'?: string;
      'anthropic-version'?: string;
      'x-api-key'?: string;
    }
  ) =>
    new OpenApiRequestBuilder<BetaMessageBatch>(
      'get',
      '/v1/messages/batches/{messageBatchId}',
      {
        pathParameters: { messageBatchId },
        headerParameters
      }
    ),
  /**
   * Batches may be canceled any time before processing ends. Once cancellation is initiated, the batch enters a `canceling` state, at which time the system may complete any in-progress, non-interruptible requests before finalizing cancellation.
   *
   * The number of canceled requests is specified in `request_counts`. To determine which requests were canceled, check the individual results within the batch. Note that cancellation may not result in any canceled requests if they were non-interruptible.
   * @param messageBatchId - ID of the Message Batch.
   * @param headerParameters - Object containing the following keys: anthropic-beta, anthropic-version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  betaMessageBatchesCancel_1: (
    messageBatchId: string,
    headerParameters?: {
      'anthropic-beta'?: string;
      'anthropic-version'?: string;
    }
  ) =>
    new OpenApiRequestBuilder<BetaMessageBatch>(
      'post',
      '/v1/messages/batches/{messageBatchId}/cancel',
      {
        pathParameters: { messageBatchId },
        headerParameters
      }
    ),
  /**
   * Streams the results of a Message Batch as a `.jsonl` file.
   *
   * Each line in the file is a JSON object containing the result of a single request in the Message Batch. Results are not guaranteed to be in the same order as requests. Use the `custom_id` field to match results to requests.
   * @param messageBatchId - ID of the Message Batch.
   * @param headerParameters - Object containing the following keys: anthropic-beta, anthropic-version, x-api-key.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  betaMessageBatchesResults_1: (
    messageBatchId: string,
    headerParameters?: {
      'anthropic-beta'?: string;
      'anthropic-version'?: string;
      'x-api-key'?: string;
    }
  ) =>
    new OpenApiRequestBuilder<any>(
      'get',
      '/v1/messages/batches/{messageBatchId}/results',
      {
        pathParameters: { messageBatchId },
        headerParameters
      }
    )
};
