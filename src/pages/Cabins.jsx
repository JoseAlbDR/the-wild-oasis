import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://lvjjzbmjjiicloqggvli.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg"
        alt="cabin 1"
      />
    </Row>
  );
}

export default Cabins;
