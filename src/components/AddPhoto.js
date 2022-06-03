import React,{useState} from 'react'
import {Modal, Button,Form} from 'react-bootstrap'

const handlesubmit=(picture,container)=>{
container.push(picture)
console.log(container);
return(container)
}
function MyVerticallyCenteredModal(props) {
    const [newPic, setNewPic] = useState({src:"",width:"",height:""});
   
    return (
        <div >
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      
      >
      <div  style={{ backgroundImage:"url('https://i.pinimg.com/originals/5d/ee/a3/5deea33886ad210c34a616a357719045.jpg')",backgroundRepeat: "no-repeat"}}>
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Modal heading
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Form>
     <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Url</Form.Label>
     <Form.Control type="url" placeholder="Enter the picture's URL" onChange={(e)=>setNewPic({...newPic,src:e.target.value})}/>
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>width</Form.Label>
   <Form.Control type="text" placeholder="Enter the picture's width" onChange={(e)=>setNewPic({...newPic,width:e.target.value})}/>
 </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>height</Form.Label>
   <Form.Control type="text" placeholder="Enter the picture's height" onChange={(e)=>setNewPic({...newPic,height:e.target.value})}/>
 </Form.Group>

     </Form>
    </Modal.Body>
    <Modal.Footer style={{display:"flex",justifyContent:"center",margin:"50px"}}>
      <Button variant="warning" onClick={()=>{handlesubmit(newPic,props.photos);props.onHide()}}>Add</Button>
    </Modal.Footer>

      </div>
      </Modal>
      </div>
    );
  }
const AddPhoto = ({photos}) => {
    const [modalShow, setModalShow] = useState(false);
    
  return (
      
    <div>
    <div style={{display:"flex",justifyContent:"center",margin:"50px"}}>
    <Button variant="outline-warning" onClick={() => setModalShow(true)} style={{fontWeight:'bold', padding:'5px 20px',fontSize:'24px'}} >
    +
  </Button>
    </div>
  

  <MyVerticallyCenteredModal photos={photos}
    show={modalShow}
    onHide={() => setModalShow(false)}
  />
    </div>
  )
}

export default AddPhoto