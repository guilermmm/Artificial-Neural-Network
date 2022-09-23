import math, { add, divide, MathNumericType, multiply, subtract } from 'mathjs'

export const ann = () => {
  // ann with backpropagation that returns if the input is a number in range [1, 3]
  const nonlin = (
    x: number | math.MathArray | math.Matrix | MathNumericType,
    deriv = false,
  ) => {
    if (deriv === true) {
      return multiply(x, subtract(1, x))
    }
    return divide(1, add(1, Math.exp(-x)))
  }

  const input = [0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0]

  const output = [1, 0, 0]

  let inputToHiddenLayerWheights = new Array(20)
    .fill(0)
    .map(() => new Array(16).fill(0).map(() => Math.random()))

  let hiddenToOutputLayerWheights = new Array(16)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => Math.random()))

  const hiddenLayer = multiply(input, inputToHiddenLayerWheights).map(x =>
    nonlin(x),
  ) as number[][]
  // console.log(hiddenLayer)

  const outputLayer = multiply(hiddenLayer, hiddenToOutputLayerWheights).map(
    x => nonlin(x),
  ) as number[][]
  // console.log(outputLayer)

  const outputLayerError = subtract(output, outputLayer)
  // console.log(outputLayerError)

  const outputLayerDelta = multiply(outputLayerError, nonlin(outputLayer, true))
  // console.log(outputLayerDelta)

  const hiddenLayerError = multiply(
    hiddenToOutputLayerWheights,
    outputLayerDelta,
  )
  // console.log(hiddenLayerError)

  const hiddenLayerDelta = multiply(
    hiddenLayerError,
    nonlin(hiddenLayer, true),
  ) as number[]
  console.log(hiddenLayerDelta)

  const a = hiddenLayerDelta.map(x => [x])

  const b = multiply(a, input)

  console.log(b)

  // hiddenToOutputLayerWheights = add(
  //   hiddenToOutputLayerWheights,
  //   multiply(hiddenLayer, outputLayerDelta) as number[][],
  // )
  // console.log(hiddenToOutputLayerWheights)

  // inputToHiddenLayerWheights = add(
  //   inputToHiddenLayerWheights,
  //   multiply(input, hiddenLayerDelta) as number[][],
  // )
  // console.log(inputToHiddenLayerWheights)

  return outputLayer
}
