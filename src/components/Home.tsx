import styled from '@emotion/styled'
import { useContext, useRef, useState } from 'react'
import { canvasContext } from '../context/CanvasContext'
import { answer, train } from '../utils/functions'
import { ActivationFn, Matrix } from '../utils/types'
import Canvas from './Canvas'

const Home: React.FC = () => {
  const { canvas } = useContext(canvasContext)

  const [epochs, setEpochs] = useState(1000)
  const [hiddenNeurons, setHiddenNeurons] = useState(16)
  const [learningRate, setLearningRate] = useState(0.5)
  const [error, setError] = useState(0.1)
  const [fn, setFn] = useState<ActivationFn>('Sigmoid')

  const [tested, setTested] = useState(false)
  const [testFn, setTestFn] = useState<(layer: Matrix) => Matrix>()
  const [[[four, five, unrecognized]], setResult] = useState<Matrix>([
    [0, 0, 0],
  ])

  const [resultAnswer, resultError] = answer(
    [[four, five, unrecognized]],
    error,
  )

  const handleTrain = () => {
    const test = train(fn, epochs, learningRate, hiddenNeurons, error)
    setTestFn(() => test)
  }

  const handleTest = () => {
    if (testFn) {
      setTested(true)
      const result = testFn(canvas)
      setResult(result)
    }
  }

  return (
    <App>
      <Header>
        <Title>Artificial Neural Network</Title>
      </Header>
      <MainContainer>
        <CanvasContainer>
          <Canvas />
        </CanvasContainer>
        <Form>
          <FormControl>
            <Label htmlFor="activation">Activation Function:</Label>
            <Select
              id="activation"
              onChange={e => setFn(e.target.value as ActivationFn)}
            >
              <option value="Sigmoid">Sigmoid</option>
              <option value="Tanh">Hyperbolic Tangent</option>
            </Select>
          </FormControl>
          <FormControl>
            <Label htmlFor="epochs">Epochs:</Label>
            <Input
              type="number"
              value={epochs}
              onChange={e => setEpochs(parseInt(e.target.value))}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="hiddenNeurons">Hidden Neurons:</Label>
            <Input
              type="number"
              value={hiddenNeurons}
              onChange={e => setHiddenNeurons(parseInt(e.target.value))}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="learningRate">Learning Rate:</Label>
            <Input
              type="number"
              value={learningRate}
              step={0.01}
              min={0}
              max={1}
              onChange={e => setLearningRate(parseFloat(e.target.value))}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="error">Error Threshold:</Label>
            <Input
              type="number"
              value={error}
              step={0.01}
              min={0}
              max={1}
              onChange={e => setError(parseFloat(e.target.value))}
            />
          </FormControl>
          <FormControl>
            <Buttons>
              <Button onClick={handleTrain}>
                {testFn ? 'Re-Train' : 'Train'}
              </Button>
              {testFn !== undefined && (
                <Button onClick={handleTest}>Test</Button>
              )}
            </Buttons>
          </FormControl>
        </Form>
        <OutputContainer>
          {tested ? (
            <>
              <OutputTitle>Output</OutputTitle>
              <Output area="four">
                <OutputTitle>4</OutputTitle>
                <OutputValue>{four.toFixed(8)}</OutputValue>
              </Output>
              <Output area="five">
                <OutputTitle>5</OutputTitle>
                <OutputValue>{five.toFixed(8)}</OutputValue>
              </Output>
              <Output area="unrecognized">
                <OutputTitle>Unrecognized</OutputTitle>
                <OutputValue>{unrecognized.toFixed(8)}</OutputValue>
              </Output>
              <Output area="answer">
                <OutputTitle>Answer is: {resultAnswer}</OutputTitle>
              </Output>
              <Output area="error">
                <OutputTitle>Error: {resultError.toFixed(8)}</OutputTitle>
              </Output>
            </>
          ) : (
            <OutputTitle>Output will be shown here after testing</OutputTitle>
          )}
        </OutputContainer>
      </MainContainer>
    </App>
  )
}

export default Home

const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
`

const Header = styled.header`
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-top: 0.25rem;
`

const Title = styled.h1`
  font-size: 1.5rem;
`

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'canvas form'
    'result result';
  padding: 0rem 4rem;

  border: 2px solid #ffffff;
  border-radius: 0.5rem;
  background-color: var(--bg-secondary);
`

const CanvasContainer = styled.div`
  grid-area: canvas;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
`

const Form = styled.div`
  grid-area: form;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  padding: 2rem 2rem 0;
`

const FormControl = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  justify-content: center;
  & > * {
    flex: 1;
    align-items: stretch;
  }
`

const Label = styled.label`
  margin-left: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: bold;
  line-height: 2;
`

const Input = styled.input`
  margin: 0.25rem;
  padding: 0.75rem;
  border-radius: 0.25rem;
  border: none;
  background-color: var(--color-input);
  color: var(--text-primary);

  font-family: inherit;
  font-size: 1rem;
  text-align: center;

  &:focus {
    outline: none;
  }
`

const Select = Input.withComponent('select')

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Button = styled.button`
  margin: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  border: none;
  background-color: var(--color-button);
  color: white;

  font-family: inherit;
  font-size: 1.25rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background-color: var(--color-button-hover);

    transition: 0.1s ease-in-out;

    transform: scale(1.125);
  }
`

const OutputContainer = styled.div`
  grid-area: result;
  flex: 1;
  align-self: stretch;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'title title title'
    'four five unrecognized'
    'answer answer error';
  padding: 1rem;
  gap: 0.5rem;
`

const Output = styled.div<{ area: string }>`
  grid-area: ${props => props.area};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  padding: 1rem;
  border: 2px solid #ffffff;
  border-radius: 0.25rem;
`

const OutputTitle = styled.h2`
  place-self: center;
  grid-area: title;
  font-size: 1.25rem;
  font-weight: bold;
`

const OutputValue = styled.h2`
  flex: 1;
  padding: 0.25rem;
  border: 2px solid var(--color-border);
  font-size: 1rem;
  font-weight: bold;
`
