import { ActivationFn, Matrix } from './types'

// 6 4's
export const fours: Matrix[] = [
  [
    [1, 0, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
  ],
  [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
  ],
  [
    [0, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
  ],
  [
    [0, 1, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [1, 1, 1, 0],
    [0, 0, 1, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ],
].map(layer => [layer.flat()])

// 6 5's
export const fives: Matrix[] = [
  [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  [
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 1, 1, 0],
  ],
  [
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [1, 1, 0, 0],
  ],
  [
    [0, 1, 1, 1],
    [0, 1, 0, 0],
    [0, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 1, 1, 1],
  ],
  [
    [0, 1, 1, 1],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 1, 0],
  ],
].map(layer => [layer.flat()])

// 1 blank
// 1 full
// 4 0's
// 3 1's
// 2 2's
// 2 3's
// 4 6's
// 3 7's
// 2 8's
// 4 9's
export const unrecognizeds: Matrix[] = [
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 0, 1, 0],
  ],
  [
    [0, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [1, 1, 1, 1],
  ],
  [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
  ],
  [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  [
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  [
    [1, 1, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  [
    [0, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  [
    [0, 1, 0, 0],
    [0, 1, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 0],
  ],
  [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
  [
    [1, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
  ],
  [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
  ],
  [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
  ],
  [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  [
    [0, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 1, 0],
    [0, 0, 1, 0],
  ],
].map(layer => [layer.flat()])
