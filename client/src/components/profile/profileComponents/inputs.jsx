import React from "react";
import { 
    MDBInputGroup,
    MDBInputGroupText,
    MDBInputGroupElement,
} from 'mdb-react-ui-kit'


export default function inputs({title, value, isReadOnly, type, func, id, htmlFor}) {
  return (
    <MDBInputGroup className="mb-3 " size="lg">
      <MDBInputGroupText  htmlFor={htmlFor || null}  >{title}</MDBInputGroupText>
      <MDBInputGroupElement type={type || "text"} readOnly={isReadOnly || false} value={value} onChange={null || func} id={id || ''}  />
    </MDBInputGroup>
  );
}
