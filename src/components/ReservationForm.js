import styled from "styled-components";

import LabeledElement from "./basic/LabeledElement";
import Input from "./basic/Input";
import Dropdown from "./basic/Dropdown";
import { Button } from "./basic/Button";
import { useState } from "react";

const Container = styled.div`
  max-width: 50%;
`;

export default function ReservationForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  return (
    <Container>
      <form>
        <LabeledElement label="Name" for="reservation-name" required>
          <Input
            type="text"
            id="reservation-name"
            value={name}
            onChange={setName}
          />
        </LabeledElement>
        <LabeledElement label="Date" for="reservation-date" required>
          <Input
            type="date"
            id="reservation-date"
            value={date}
            onChange={setDate}
          />
        </LabeledElement>
        <LabeledElement label="Time" for="reservation-time" required>
          <Dropdown id="reservation-time" value={time} onChange={setTime}>
            <option>6:00PM</option>
            <option>7:00PM</option>
            <option>8:00PM</option>
            <option>9:00PM</option>
          </Dropdown>
        </LabeledElement>
        <LabeledElement label="Number of Guests" for="guests" required>
          <Input
            type="number"
            id="guests"
            placeholder="1"
            min="1"
            max="10"
            value={guests}
            onChange={setGuests}
          />
        </LabeledElement>
        <LabeledElement label="Occasion" for="occasion">
          <Dropdown id="occasion" value={occasion} onChange={setOccasion}>
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </Dropdown>
        </LabeledElement>
        <Button margin="0 auto">Submit</Button>
      </form>
    </Container>
  );
}
