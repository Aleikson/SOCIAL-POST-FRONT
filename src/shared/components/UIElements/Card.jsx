import styled from 'styled-components';

const CardContainer = styled.div`
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 1rem;
  overflow: hidden;
  background: white;
`;

const Card = (props) => {
  return (
    <CardContainer className={`card ${props.className}`} style={props.style}>
      {props.children}
    </CardContainer>
  );
};

export default Card;
