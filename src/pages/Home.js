import styled from "styled-components";
import { Heading1, Heading2 } from "../components/Headings";
import { Card } from "../components/Card";
import { Paragraph } from "../components/Paragraph";

import GreekSalad from "../assets/images/greekSalad.jpg";
import { Button } from "../components/Button";
import { colors, locations } from "../constants";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;
`;

const ImageContainer = styled.div``;

export default function Home() {
  return (
    <Card>
      <Container>
        <TextContainer>
          <Heading1>Little Lemon</Heading1>
          <Heading2>Chicago</Heading2>
          <Paragraph>
            Picnic black beans Italian pepperoncini hearts of palm ginger carrot
            spiced juice butternut mix apples grains cherry bomb pepper
            lemongrass bento box ginger lemongrass agave green tea green bowl
            vegan pine nuts Thai kale caesar salad Italian linguine puttanesca
            arugula salad Caribbean red habanero entree a delicious meal ginger
            tofu cherry bomb green pepper green onions.
          </Paragraph>
          <Link to={locations.RESERVE}>
            <Button background={colors.lemonYellow} margin="32px 0 0 0">
              Reserve a Table
            </Button>
          </Link>
        </TextContainer>
        <ImageContainer>
          <img src={GreekSalad} alt="a greek salad" width={400} />
        </ImageContainer>
      </Container>
    </Card>
  );
}
