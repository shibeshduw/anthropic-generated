/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Model } from './model.js';
import type { Metadata } from './metadata.js';
/**
 * Representation of the 'CompletionRequest' schema.
 */
export type CompletionRequest = {
  model: Model;
  /**
   * The prompt that you want Claude to complete.
   *
   * For proper response generation you will need to format your prompt using alternating `\n\nHuman:` and `\n\nAssistant:` conversational turns. For example:
   *
   * ```
   * "\n\nHuman: {userQuestion}\n\nAssistant:"
   * ```
   *
   * See [prompt validation](https://docs.anthropic.com/en/api/prompt-validation) and our guide to [prompt design](https://docs.anthropic.com/en/docs/intro-to-prompting) for more details.
   * Min Length: 1.
   */
  prompt: string;
  /**
   * The maximum number of tokens to generate before stopping.
   *
   * Note that our models may stop _before_ reaching this maximum. This parameter only specifies the absolute maximum number of tokens to generate.
   * Minimum: 1.
   */
  max_tokens_to_sample: number;
  /**
   * Sequences that will cause the model to stop generating.
   *
   * Our models stop on `"\n\nHuman:"`, and may include additional built-in stop sequences in the future. By providing the stop_sequences parameter, you may include additional strings that will cause the model to stop generating.
   */
  stop_sequences?: string[];
  /**
   * Amount of randomness injected into the response.
   *
   * Defaults to `1.0`. Ranges from `0.0` to `1.0`. Use `temperature` closer to `0.0` for analytical / multiple choice, and closer to `1.0` for creative and generative tasks.
   *
   * Note that even with `temperature` of `0.0`, the results will not be fully deterministic.
   * Maximum: 1.
   */
  temperature?: number;
  /**
   * Use nucleus sampling.
   *
   * In nucleus sampling, we compute the cumulative distribution over all the options for each subsequent token in decreasing probability order and cut it off once it reaches a particular probability specified by `top_p`. You should either alter `temperature` or `top_p`, but not both.
   *
   * Recommended for advanced use cases only. You usually only need to use `temperature`.
   * Maximum: 1.
   */
  top_p?: number;
  /**
   * Only sample from the top K options for each subsequent token.
   *
   * Used to remove "long tail" low probability responses. [Learn more technical details here](https://towardsdatascience.com/how-to-sample-from-language-models-682bceb97277).
   *
   * Recommended for advanced use cases only. You usually only need to use `temperature`.
   */
  top_k?: number;
  /**
   * An object describing metadata about the request.
   */
  metadata?: Metadata;
  /**
   * Whether to incrementally stream the response using server-sent events.
   *
   * See [streaming](https://docs.anthropic.com/en/api/streaming) for details.
   */
  stream?: boolean;
};
