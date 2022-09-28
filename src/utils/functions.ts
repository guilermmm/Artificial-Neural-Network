import {
  add,
  divide,
  MathArray,
  MathNumericType,
  Matrix,
  multiply,
  random,
  subtract,
  transpose,
} from 'mathjs'
import {
  eight,
  five,
  four,
  nine,
  one,
  seven,
  six,
  three,
  two,
  zero,
} from './types'

let inputToHiddenLayerWeights: number[]
let hiddenToOutputLayerWeights: number[]

const nonlin = (x: MathArray | Matrix | MathNumericType, deriv = false) => {
  return deriv ? multiply(x, subtract(1, x)) : divide(1, add(1, Math.exp(-x)))
}

// didnt like this code
export const castToNumber = (input: boolean[][]) => {
  const transposed = transpose(input.map(x => x.map(y => (y ? 1 : 0))))

  const array = new Array(0)
  array.push(transposed.join().split(','))
  const output = array.map(x => x.map((y: string) => (y === '1' ? 1 : 0)))

  // console.table(output)
  return output
}

export const test = (canvasInput: boolean[][]) => {
  const input = castToNumber(canvasInput)
  console.table(input)
  const hiddenLayer = multiply(input, inputToHiddenLayerWeights).map(x =>
    (x as number[]).map(y => nonlin(y)),
  ) as number[][]

  const outputLayer = multiply(hiddenLayer, hiddenToOutputLayerWeights).map(x =>
    (x as number[]).map(y => nonlin(y)),
  ) as number[][]

  console.table(outputLayer)
}

export const learn = (
  activation: string,
  epochs: number,
  learningRate: number,
  hiddenLayerSize: number,
) => {
  inputToHiddenLayerWeights = random([20, hiddenLayerSize], 0, 1)

  hiddenToOutputLayerWeights = random([hiddenLayerSize, 3], 0, 1)

  for (let i = 0; i < epochs; i++) {
    learningFunction(zero.a, [[0, 0, 1]], learningRate)
    learningFunction(one.a, [[0, 0, 1]], learningRate)
    learningFunction(two.a, [[0, 0, 1]], learningRate)
    learningFunction(three.a, [[0, 0, 1]], learningRate)
    learningFunction(six.a, [[0, 0, 1]], learningRate)
    learningFunction(seven.a, [[0, 0, 1]], learningRate)
    learningFunction(eight.a, [[0, 0, 1]], learningRate)
    learningFunction(nine.a, [[0, 0, 1]], learningRate)

    learningFunction(five.a, [[1, 0, 0]], learningRate)
    learningFunction(five.b, [[1, 0, 0]], learningRate)
    learningFunction(five.c, [[1, 0, 0]], learningRate)

    learningFunction(four.a, [[0, 1, 0]], learningRate)
    learningFunction(four.b, [[0, 1, 0]], learningRate)
    learningFunction(four.c, [[0, 1, 0]], learningRate)
    learningFunction(four.d, [[0, 1, 0]], learningRate)
    learningFunction(four.e, [[0, 1, 0]], learningRate)
  }
  console.log('done')
}

const learningFunction = (
  inputLayer: number[][],
  output: number[][],
  learningRate: number,
) => {
  let outputLayer = [[0, 0, 0]]

  // console.table(inputLayer)
  // console.table(inputToHiddenLayerWeights)
  // console.table(hiddenToOutputLayerWeights)

  const hiddenLayer = multiply(inputLayer, inputToHiddenLayerWeights).map(x =>
    (x as number[]).map(y => nonlin(y)),
  ) as number[][]
  // console.table(hiddenLayer)

  outputLayer = multiply(hiddenLayer, hiddenToOutputLayerWeights).map(x =>
    (x as number[]).map(y => nonlin(y)),
  ) as number[][]
  // console.table(outputLayer)

  const outputLayerError = subtract(output, outputLayer)
  // console.table(outputLayerError)

  const outputLayerDelta = multiply(
    multiply(
      outputLayerError.flat(),
      nonlin(outputLayer.flat(), true),
    ) as number[],
    learningRate,
  ) as number[]
  // console.table(outputLayerDelta)

  const hiddenLayerError = [
    multiply(hiddenToOutputLayerWeights, outputLayerDelta),
  ] as number[][]
  // console.table(hiddenLayerError)

  const hiddenLayerDelta = [
    multiply(
      multiply(hiddenLayerError.flat(), nonlin(hiddenLayer.flat(), true)),
      learningRate,
    ),
  ] as number[]
  // console.table(hiddenLayerDelta)

  // console.table(inputLayer)
  // console.table(inputToHiddenLayerWeights)
  // console.table(transpose(hiddenLayer))
  // console.table(hiddenToOutputLayerWeights)
  // console.table(transpose(outputLayer))

  // console.table(transpose(hiddenLayer))
  // console.table(outputLayerDelta)

  hiddenToOutputLayerWeights = add(
    hiddenToOutputLayerWeights,
    multiply(transpose(hiddenLayer), [outputLayerDelta]),
  ) as number[]
  // console.table(hiddenToOutputLayerWeights)
  // set hidden to output layer weights

  inputToHiddenLayerWeights = add(
    inputToHiddenLayerWeights,
    multiply(transpose(inputLayer), hiddenLayerDelta),
  ) as number[]
  // console.table(inputToHiddenLayerWeights)
  // set input to hidden layer weights

  // console.table(outputLayer)
}
