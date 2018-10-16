/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

function readContext<T>(
  context: ReactContext<T>,
  observedBits: void | number | boolean,
): T {
  return context._currentValue;
}

export const Dispatcher = {
  readContext,
};
