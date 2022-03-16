import { MDBInput, MDBBtn } from "mdb-react-ui-kit"

export default function Hoot({value, onChange, save}) {
    return (
        <div style={{ width: "26rem", margin: "auto"}}>
             <MDBInput value={value} onChange={onChange} textarea rows={3} label="Hoot a message" icon="user"/>

             <MDBBtn  onClick={save} color="primary">hoot</MDBBtn>


             
        </div> 
    )
}