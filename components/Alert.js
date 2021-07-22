import {Alert} from 'react-bootstrap'
import {useState} from "react";

export const AlertComponent = ({ show, variant, title, desc }) => {
  const [showIt, setShow] = useState(show);

  if (showIt) {
    return (
      <Alert variant={variant ? variant : 'primary'} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{title}</Alert.Heading>
        <p>{desc}</p>
      </Alert>
    );
  } else return ('')
}
