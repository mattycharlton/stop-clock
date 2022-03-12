import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { Container, Digit, TimerWrapper } from './App.styled'
import Stack from '@mui/material/Stack'

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [isPaused, setIsPaused] = useState<boolean>(true)
  const [time, setTime] = useState<number>(0)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined

    if (isStarted && !isPaused) {
      interval = setInterval(() => {
        setTime((time) => time + 10)
      }, 10)
    }

    return () => clearInterval(interval)
  }, [isStarted, isPaused])

  const handleStartStop = () => {
    !isStarted && setIsStarted(true)
    setIsPaused(!isPaused)
  }

  const handleReset = () => {
    setIsStarted(false)
    setTime(0)
  }

  const getDigit = (ms: number, r: number) =>
    `0${Math.floor((time / ms) % r)}`.slice(-2)

  return (
    <Container>
      <TimerWrapper>
        <Digit>{`${getDigit(3.6e6, 60)}:${getDigit(60000, 60)}:${getDigit(
          1000,
          60,
        )}.${getDigit(10, 100)}`}</Digit>
      </TimerWrapper>
      <Stack
        spacing={2}
        justifyContent="center"
        direction="row"
        sx={{ padding: '3rem' }}
      >
        <Button
          onClick={handleStartStop}
          color={isPaused ? 'success' : 'error'}
          variant="contained"
          size="large"
        >
          {isPaused ? 'Start' : 'Stop'}
        </Button>
        <Button
          onClick={handleReset}
          color="primary"
          variant="outlined"
          size="large"
        >
          Reset
        </Button>
      </Stack>
    </Container>
  )
}

export default App
