import { MDBInput, MDBBtn } from "mdb-react-ui-kit"

export default function Hoot() {
    return (
        <div style={{ width: "26rem", margin: "auto"}}>
             <MDBInput type="textarea" label="Hoot a message" icon="user"/>
             <MDBBtn color="primary">hoot</MDBBtn>
        </div> 
    )
}