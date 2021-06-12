import React from "react";
import Test from '../components/test';
import MainLayout from '../components/MainLayout';
import {Card,Col,Row,Image} from 'antd';
import photo from "../assets/photos/me.jpg"
import 'antd/dist/antd.css';
import data from "../assets/students.json";
const TestView = () => {
  return (
 <MainLayout>
<Card>


{
  data.map((student)=>{
return(
  <Card.Grid style={{background:'whiteSmoke', height:'200px',border:'5px', width:'350px',margin:'20px'}}>
<h1 style={{textAlign:'center'}}>KIST-UNIVERISTY</h1>

<Row>
<Col span="9" style={{height:'100px'}}>
<Image src={student.photo} alt="studentPic" style={{width:'100%',height:'100px',borderRadius:'50%'}}/>
</Col>

<Col span="15" style={{ height:'100px', padding:'5px'}}>
<h3>{student.name}</h3>
<h4> {student.phone}</h4>
<h4>{student.email}</h4>
  </Col>

</Row>

</Card.Grid>
)
  })
}

</Card>





 </MainLayout>
    );
};

export default TestView;
