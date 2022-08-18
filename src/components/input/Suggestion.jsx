import 'flag-icons/css/flag-icons.css'
import styled from 'styled-components';
import { globals } from '../../styles';

export default function Suggestion({ selectSuggestion, city }) {
  const flagString = `fi fi-${city.country.toLowerCase()}`

  return (
    <Wrapper onClick={() => selectSuggestion(city)}>
      <Text>
        <span className={flagString}></span>  {city.name}{city.state && `, ${city.state}`}
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  border-radius: 3rem;
  border: 2px solid #000;
  background-color: ${globals.secondaryColor};
  padding: 0.5rem 1.5rem;
  margin: 1rem;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  color: #000;
`;
