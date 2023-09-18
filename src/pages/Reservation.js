import { Heading1 } from "../components/Headings";
import { Card } from "../components/basic/Card";
import ReservationForm from "../components/ReservationForm";

export default function Reservation() {
  return (
    <Card>
      <Heading1>Make a Reservation</Heading1>
      <ReservationForm />
    </Card>
  );
}
