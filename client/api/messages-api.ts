/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-ai-sdk/core';
import type {
  CreateMessageParams,
  Message,
  BetaCreateMessageParams,
  BetaMessage,
  BetaCountMessageTokensParams,
  BetaCountMessageTokensResponse,
  PromptCachingBetaCreateMessageParams,
  PromptCachingBetaMessage
} from './schema/index.js';
/**
 * Representation of the 'MessagesApi'.
 * This API is part of the 'api' service.
 */
export const MessagesApi = {
  /**
   * Send a structured list of input messages with text and/or image content, and the model will generate the next message in the conversation.
   *
   * The Messages API can be used for either single queries or stateless multi-turn conversations.
   * @param body - Request body.
   * @param headerParameters - Object containing the following keys: anthropic-version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  messagesPost: (
    body: CreateMessageParams,
    headerParameters?: { 'anthropic-version'?: string }
  ) =>
    new OpenApiRequestBuilder<Message>('post', '/v1/messages', {
      body,
      headerParameters
    }),
  /**
   * Send a structured list of input messages with text and/or image content, and the model will generate the next message in the conversation.
   *
   * The Messages API can be used for either single queries or stateless multi-turn conversations.
   * @param body - Request body.
   * @param headerParameters - Object containing the following keys: anthropic-beta, anthropic-version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  betaMessagesPost: (
    body: BetaCreateMessageParams,
    headerParameters?: {
      'anthropic-beta'?: string;
      'anthropic-version'?: string;
    }
  ) =>
    new OpenApiRequestBuilder<BetaMessage>('post', '/v1/messages?beta=true', {
      body,
      headerParameters
    }),
  /**
   * Count the number of tokens in a Message.
   *
   * The Token Count API can be used to count the number of tokens in a Message, including tools, images, and documents, without creating it.
   * @param body - Request body.
   * @param headerParameters - Object containing the following keys: anthropic-beta, anthropic-version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  betaMessagesCountTokensPost: (
    body: BetaCountMessageTokensParams,
    headerParameters?: {
      'anthropic-beta'?: string;
      'anthropic-version'?: string;
    }
  ) =>
    new OpenApiRequestBuilder<BetaCountMessageTokensResponse>(
      'post',
      '/v1/messages/count_tokens?beta=true',
      {
        body,
        headerParameters
      }
    ),
  /**
   * Send a structured list of input messages with text and/or image content, and the model will generate the next message in the conversation.
   *
   * The Messages API can be used for either single queries or stateless multi-turn conversations.
   * @param body - Request body.
   * @param headerParameters - Object containing the following keys: anthropic-beta, anthropic-version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  promptCachingBetaMessagesPost: (
    body: PromptCachingBetaCreateMessageParams,
    headerParameters?: {
      'anthropic-beta'?: string;
      'anthropic-version'?: string;
    }
  ) =>
    new OpenApiRequestBuilder<PromptCachingBetaMessage>(
      'post',
      '/v1/messages?beta=prompt_caching',
      {
        body,
        headerParameters
      }
    ),
  /**
   * Count the number of tokens in a Message.
   *
   * The Token Count API can be used to count the number of tokens in a Message, including tools, images, and documents, without creating it.
   * @param body - Request body.
   * @param headerParameters - Object containing the following keys: anthropic-beta, anthropic-version.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  betaMessagesCountTokensPost_1: (
    body: BetaCountMessageTokensParams,
    headerParameters?: {
      'anthropic-beta'?: string;
      'anthropic-version'?: string;
    }
  ) =>
    new OpenApiRequestBuilder<BetaCountMessageTokensResponse>(
      'post',
      '/v1/messages/count_tokens',
      {
        body,
        headerParameters
      }
    )
};
