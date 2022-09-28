import { useContext, useState } from 'react'
import { CanvasContext } from '../context/CanvasContext'
import { learn, test } from '../utils/functions'
import Canvas from './Canvas'
import {
  CanvasContainer,
  Container,
  Header,
  MainContainer,
  OptionsContainer,
  Selects,
} from './Home.styles'

const Home: React.FC = () => {
  const { canvas } = useContext(CanvasContext)

  const [epochs, setEpochs] = useState(1000)
  const [learningRate, setLearningRate] = useState(0.4)
  const [hiddenNeurons, setHiddenNeurons] = useState(16)
  const [error, setError] = useState(10)
  const [activation, setActivation] = useState('sigmoid')

  return (
    <Container>
      <Header>
        <h1>Artificial Neural Network</h1>
      </Header>
      <MainContainer>
        <CanvasContainer>
          <Canvas />
        </CanvasContainer>
        <OptionsContainer>
          <Selects>
            <label htmlFor="activation">Activation:</label>
            <select
              name="activation"
              id="activation"
              onChange={e => setActivation(e.target.value)}
            >
              <option value="sig">Sigmoid</option>
              <option value="tan">Tangencial</option>
            </select>
          </Selects>
          <div>
            <label htmlFor="epochs">Epochs:</label>
            <input
              type="number"
              defaultValue={'1000'}
              onChange={e => setEpochs(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="learningRate">Learning Rate:</label>
            <input
              type="number"
              defaultValue={'0.4'}
              onChange={e => setLearningRate(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="hiddenNeurons">Hidden Neurons:</label>
            <input
              type="number"
              defaultValue={'16'}
              onChange={e => setHiddenNeurons(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="error">Error:</label>
            <input
              type="number"
              name="error"
              id="error"
              defaultValue={'10'}
              onChange={e => setError(parseInt(e.target.value))}
            />
          </div>
          <div>
            {/* by some celestial force sometimes this click break the app */}
            <button
              onClick={() => {
                learn(activation, epochs, learningRate, hiddenNeurons)
              }}
            >
              learn
            </button>
            <button
              onClick={() => {
                test(canvas)
              }}
            >
              test
            </button>
          </div>
        </OptionsContainer>
      </MainContainer>
    </Container>
  )
}

export default Home
