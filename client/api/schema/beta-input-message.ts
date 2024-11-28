/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { BetaInputContentBlock } from './beta-input-content-block.js';
/**
 * Representation of the 'BetaInputMessage' schema.
 */
export type BetaInputMessage = {
  role: 'user' | 'assistant';
  content: string | BetaInputContentBlock[];
};
