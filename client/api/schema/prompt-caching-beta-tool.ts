/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { InputSchema } from './input-schema.js';
import type { CacheControlEphemeral } from './cache-control-ephemeral.js';
/**
 * Representation of the 'PromptCachingBetaTool' schema.
 */
export type PromptCachingBetaTool = {
  /**
   * Description of what this tool does.
   *
   * Tool descriptions should be as detailed as possible. The more information that the model has about what the tool is and how to use it, the better it will perform. You can use natural language descriptions to reinforce important aspects of the tool input JSON schema.
   */
  description?: string;
  /**
   * Name of the tool.
   *
   * This is how the tool will be called by the model and in tool_use blocks.
   * Max Length: 64.
   * Min Length: 1.
   * Pattern: "^[a-zA-Z0-9_-]{1,64}$".
   */
  name: string;
  /**
   * [JSON schema](https://json-schema.org/) for this tool's input.
   *
   * This defines the shape of the `input` that your tool accepts and that the model will produce.
   */
  input_schema: InputSchema;
  cache_control?: ({ type: 'ephemeral' } & CacheControlEphemeral) | any;
};
