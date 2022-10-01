import { add, multiply, random, subtract, transpose } from 'mathjs'
import { fives, fours, others } from './consts'
import { ActivationFn, Matrix } from './types'

const sigmoid = (x: number): number => 1 / (1 + Math.exp(-x))
const tanh = (x: number): number => Math.tanh(x)

const activationFnMap: Record<
  ActivationFn,
  [(x: number) => number, (x: number) => number]
> = {
  Sigmoid: [sigmoid, x => sigmoid(x) * (1 - sigmoid(x))],
  Tanh: [tanh, x => 1 - tanh(x) ** 2],
}

const map = (a: Matrix, fn: (x: number) => number) => a.map(n => n.map(fn))

const zip = (a: Matrix, b: Matrix, fn: (x: number, y: number) => number) =>
  a.map((row, i) => row.map((x, j) => fn(x, b[i][j])))

export const train = (
  activationFn: ActivationFn,
  epochs: number,
  learningRate: number,
  hiddenLayerSize: number,
): ((canvas: Matrix) => Matrix) => {
  console.log('Training...')

  let inputToHiddenLayerWeights: Matrix = random(
    [20, hiddenLayerSize],
    0,
    1,
  ) as any as Matrix
  let hiddenToOutputLayerWeights: Matrix = random(
    [hiddenLayerSize, 3],
    0,
    1,
  ) as any as Matrix

  const [fn, fnPrime] = activationFnMap[activationFn]

  const learningFunction = (inputLayer: Matrix, expectedOutput: Matrix) => {
    const hiddenLayer = map(
      multiply(inputLayer, inputToHiddenLayerWeights) as Matrix,
      fn,
    )

    const outputLayer = map(
      multiply(hiddenLayer, hiddenToOutputLayerWeights) as Matrix,
      fn,
    )

    const outputLayerError = subtract(expectedOutput, outputLayer)

    const outputLayerDelta = multiply(
      zip(outputLayerError, map(outputLayer, fnPrime), multiply),
      learningRate,
    ) as Matrix

    const hiddenLayerError = transpose(
      multiply(
        hiddenToOutputLayerWeights,
        transpose(outputLayerDelta),
      ) as Matrix,
    )

    const hiddenLayerDelta = multiply(
      zip(hiddenLayerError, map(hiddenLayer, fnPrime), multiply),
      learningRate,
    ) as Matrix

    hiddenToOutputLayerWeights = add(
      hiddenToOutputLayerWeights,
      multiply(transpose(hiddenLayer), outputLayerDelta),
    ) as Matrix

    inputToHiddenLayerWeights = add(
      inputToHiddenLayerWeights,
      multiply(transpose(inputLayer), hiddenLayerDelta),
    ) as Matrix
  }

  const test = (canvas: Matrix) => {
    const inputLayer = [canvas.flat()]

    const hiddenLayer = map(
      multiply(inputLayer, inputToHiddenLayerWeights) as Matrix,
      fn,
    )

    console.table(hiddenLayer)

    const outputLayer = map(
      multiply(hiddenLayer, hiddenToOutputLayerWeights) as Matrix,
      fn,
    )

    return outputLayer
  }

  for (let i = 0; i < epochs; i++) {
    for (const four of fours) learningFunction(four, [[1, 0, 0]])
    for (const five of fives) learningFunction(five, [[0, 1, 0]])
    for (const other of others) learningFunction(other, [[0, 0, 1]])
  }

  return test
}

export const answer = ([[four, five, other]]: Matrix) => {
  if (four > five && four > other) return 'Four'
  if (five > four && five > other) return 'Five'
  return 'Other'
}
