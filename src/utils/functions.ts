import { add, multiply, random, subtract, transpose } from 'mathjs'
import { activationFnMap, fives, fours, others } from './consts'
import { ActivationFn, Layer } from './types'

export const train = (
  activationFn: ActivationFn,
  epochs: number,
  learningRate: number,
  hiddenLayerSize: number,
): ((canvas: Layer) => Layer) => {
  let inputToHiddenLayerWeights: number[] = random([20, hiddenLayerSize], 0, 1)
  let hiddenToOutputLayerWeights: number[] = random([hiddenLayerSize, 3], 0, 1)

  const learningFunction = (
    activationFn: ActivationFn,
    inputLayer: Layer,
    expectedOutput: Layer,
    learningRate: number,
  ) => {
    const [fn, fnPrime] = activationFnMap[activationFn]
    let outputLayer = [[0, 0, 0]]

    const hiddenLayer = multiply(inputLayer, inputToHiddenLayerWeights).map(x =>
      (x as number[]).map(y => fn(y)),
    ) as Layer

    outputLayer = multiply(hiddenLayer, hiddenToOutputLayerWeights).map(x =>
      (x as number[]).map(y => fn(y)),
    ) as Layer

    const outputLayerError = subtract(expectedOutput, outputLayer)

    const outputLayerDelta = multiply(
      multiply(
        outputLayerError.flat(),
        fnPrime(outputLayer.flat()),
      ) as number[],
      learningRate,
    ) as number[]

    const hiddenLayerError = [
      multiply(hiddenToOutputLayerWeights, outputLayerDelta),
    ] as Layer

    const hiddenLayerDelta = [
      multiply(
        multiply(hiddenLayerError.flat(), fnPrime(hiddenLayer.flat())),
        learningRate,
      ),
    ] as number[]

    hiddenToOutputLayerWeights = add(
      hiddenToOutputLayerWeights,
      multiply(transpose(hiddenLayer), [outputLayerDelta]),
    ) as number[]

    inputToHiddenLayerWeights = add(
      inputToHiddenLayerWeights,
      multiply(transpose(inputLayer), hiddenLayerDelta),
    ) as number[]
  }

  for (let i = 0; i < epochs; i++) {
    for (const four of fours)
      learningFunction(activationFn, four, [[1, 0, 0]], learningRate)

    for (const five of fives)
      learningFunction(activationFn, five, [[0, 1, 0]], learningRate)

    for (const other of others)
      learningFunction(activationFn, other, [[0, 0, 1]], learningRate)
  }

  const test = (canvas: Layer) => {
    const [fn] = activationFnMap[activationFn]

    const inputLayer = [canvas.flat()]

    const hiddenLayer = (
      multiply(inputLayer, inputToHiddenLayerWeights) as Layer
    ).map(x => x.map(y => fn(y)))

    console.table(hiddenLayer)

    const outputLayer = (
      multiply(hiddenLayer, hiddenToOutputLayerWeights) as Layer
    ).map(x => x.map(y => fn(y)))

    return outputLayer
  }

  return test
}

export const answer = ([[four, five, other]]: Layer) => {
  if (four > five && four > other) return 'Four'
  if (five > four && five > other) return 'Five'
  return 'Other'
}
