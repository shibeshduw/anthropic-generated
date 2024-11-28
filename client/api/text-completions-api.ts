/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-ai-sdk/core';
import type { CompletionRequest, CompletionResponse } from './schema/index.js';
/**
 * Representation of the 'TextCompletionsApi'.
 * This API is part of the 'api' service.
 */
export const TextCompletionsApi = {
  /**
   * [Legacy] Create a Text Completion.
   *
   * The Text Completions API is a legacy API. We recommend using the [Messages API](https://docs.anthropic.com/en/api/messages) going forward.
   *
   * Future models and features will not be compatible with Text Completions. See our [migration guide](https://docs.anthropic.com/en/api/migrating-from-text-completions-to-messages) for guidance in migrating from Text Completions to Messages.
   * @param body - Request body.
   * @param headerParameters - Object containing the following keys: anthropic-version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  completePost: (
    body: CompletionRequest,
    headerParameters?: { 'anthropic-version'?: string }
  ) =>
    new OpenApiRequestBuilder<CompletionResponse>('post', '/v1/complete', {
      body,
      headerParameters
    })
};
