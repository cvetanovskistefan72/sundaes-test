import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";

import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import AlertMessage from "../common/AlertMessage";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false)
  useEffect(() => {
     axios
       .get(`http://localhost:3030/${optionType}`)
       .then((resp) => setItems(resp.data))
       .catch((err) => setError(true));
       //Add optionType dependency
  }, []);

  if(error) return <AlertMessage variant="danger" text="Error has occured" />;

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption
  const optionItems = items.map((item)=><ItemComponent key={item.name} name={item.name} imagePath={item.imageaPath} />)
  return <Row>{optionItems}</Row>;
};

export default Options;
