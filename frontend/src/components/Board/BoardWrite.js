import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import axios from "axios";

function BoardWrite(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const { history } = props;

  const write = () => {
    const params = {title:title, writer:writer, content:content}

    axios.post('/api/board', params)
        .then(res => {
          alert('글 작성이 성공했습니다.');
          history.push('/admin/board');
        })
        .catch(err => {
          alert('글 작성에 실패했습니다');
        })
  }

  return(
    <div>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>이름을 입력하세요</Form.Label>
          <Form.Control onChange={(e) => setWriter(e.target.value)} type="text" placeholder="이름" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>제목을 입력하세요</Form.Label>
          <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="제목" />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>내용</Form.Label>
          <Form.Control onChange={(e) => setContent(e.target.value)} as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button onClick={write} variant="primary">글 작성</Button>
    </div>
  )
}

export default BoardWrite;