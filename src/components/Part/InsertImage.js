import React, { useState } from 'react';

import {
  Row,
  Input,
} from 'reactstrap';

import {
  MdEdit,
  MdDelete
} from 'react-icons/md';

import {
  AiOutlinePlus
} from 'react-icons/ai';

const InsertImage = ({ name, ...restProps }) => {

  const [mainImg, setMainImg] = useState(""); // 파일 base64
  
  const handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setMainImg(base64.toString()); // 파일 base64 상태 업데이트
      }
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
    } 
  }

  const handleDeleteFile = () => {
    setMainImg("");
  }

  return ( 
    <div style={{ padding: "10px" }}>
                    
    <Row style={{ margin: "0px" }}>
      {mainImg ? 
      <img style={{width:"200px"}}src={mainImg}></img>: 
      <label for={name}>
        <div style={{width:"200px", height:"200px", border:"1px dashed #b4b4b4"}}>
          <AiOutlinePlus size={'60%'} style={{color:"#b4b4b4", margin:"20%"}}/>
        </div>
        <Input type="file" accept='image/jpg,impge/png,image/jpeg,image/gif'  name={name} id={name} onChange={handleChangeFile} style={{ display: "none" }} />
      </label>
      }
    </Row>
    { mainImg && 
    <Row style={{ margin: "0px" }}>
    <label for={name}>
        <MdEdit className="can-click" size={20} style={{ margin: "5px" }} />
      </label>
      <Input type="file" accept='image/jpg,impge/png,image/jpeg,image/gif'  name={name} id={name} onChange={handleChangeFile} style={{ display: "none" }} />
      <div>
      <MdDelete className="can-click" size={20} style={{ margin: "5px" }} onClick={handleDeleteFile} />
      </div>
    </Row>
    }
  </div>
  );
};


export default InsertImage;
