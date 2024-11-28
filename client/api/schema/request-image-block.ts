/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { Base64ImageSource } from './base-64-image-source.js';
/**
 * Representation of the 'RequestImageBlock' schema.
 */
export type RequestImageBlock = {
  type: 'image';
  source: { type: 'base64' } & Base64ImageSource;
};
