import styled from 'styled-components'
import arrow from './arrow.png'
import { globals } from '../../styles'

export default function WindIndicator({ speed, direction }) {

    return (
        <Container>
            <SpeedContainer>
                <SpeedText>{calcWindSpeed(Math.round(speed * 10) / 10)}</SpeedText>
            </SpeedContainer>
            <Icon src={arrow} alt="wind_direction" rotate={direction} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    margin: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
`

const SpeedContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

const SpeedText = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    border-radius: 50%;
    background-color: ${globals.primaryColor};
    color: ${globals.secondaryColor};
    line-height: 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
    text-align: center;
`

const Icon = styled.img`
    width: 100%;
    height: 100%;
    transform: rotate(${props => props.rotate - 180}deg);
    color: grey;
`

const calcWindSpeed = (speed) => {
    if (speed < 0.6) return 0
    if (speed < 1.6) return 1
    if (speed < 3.4) return 2
    if (speed < 5.5) return 3
    if (speed < 8.0) return 4
    if (speed < 10.8) return 5
    if (speed < 13.9) return 6
    if (speed < 17.2) return 7
    if (speed < 20.8) return 8
    if (speed < 24.5) return 9
    if (speed < 28.5) return 10
    if (speed < 32.7) return 11
    return 12
}
