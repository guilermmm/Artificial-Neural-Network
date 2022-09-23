import {
  add,
  divide,
  dot,
  MathArray,
  MathNumericType,
  Matrix,
  multiply,
  random,
  subtract,
  transpose,
} from 'mathjs'

const nonlin = (x: MathArray | Matrix | MathNumericType, deriv = false) => {
  return deriv ? multiply(x, subtract(1, x)) : divide(1, add(1, Math.exp(-x)))
}

export const learn = (
  inputLayer: number[][],
  output: number[][],
  hiddenLayerSize: number,
) => {
  let inputToHiddenLayerWeights: number[] = random([20, 16], 0, 1)

  let hiddenToOutputLayerWeights = random([16, 3], 0, 1)

  let outputLayer = [[0, 0, 0]]

  // console.table(inputLayer)
  // console.table(inputToHiddenLayerWeights)
  // console.table(hiddenToOutputLayerWeights)

  for (let i = 0; i < 60000; i++) {
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
      outputLayerError.flat(),
      nonlin(outputLayer.flat(), true),
    ) as number[]
    // console.table(outputLayerDelta)

    const hiddenLayerError = [
      multiply(hiddenToOutputLayerWeights, outputLayerDelta),
    ] as number[][]
    // console.table(hiddenLayerError)

    const hiddenLayerDelta = [
      multiply(hiddenLayerError.flat(), nonlin(hiddenLayer.flat(), true)),
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

    inputToHiddenLayerWeights = add(
      inputToHiddenLayerWeights,
      multiply(transpose(inputLayer), hiddenLayerDelta),
    ) as number[]
    // console.table(inputToHiddenLayerWeights)
  }

  console.table(outputLayer)
}
