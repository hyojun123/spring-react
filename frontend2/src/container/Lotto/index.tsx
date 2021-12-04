import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {BallSpan1, BallSpan2, BallSpan3, BallSpan4, BallSpan5, Box, Text} from "./styled";
import social from "../../helper/social.json";
import TextField from "@material-ui/core/TextField";
// import Button from "../../components/Button";
import Notice from "../../components/Notice";
import { Button } from "react-bootstrap";

const Lotto: React.FC = () => {
  const [intro] = useState("로또 추천 페이지입니다.");
  const [notice] = useState<Notice>({
    content: "",
    type: "SUCCESS",
  });
  const [visible] = useState(false);
  const [isLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const checkValidPhoneNumber = (e:string) => {
    if(e.replace(/[^0-9]/g, "").length > 11) {
      alert("올바르지 않은 전화번호입니다");
      return;
    }
    const value = e.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-");

    setPhoneNumber(value);
  };

  return (
    <>
      <Box id="contacts">
        <Notice visible={visible} content={notice.content} type={notice.type} />
        <Container fluid>
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={"4"} className="px-3 px-md-5">
              <Text>{intro}</Text>
            </Col>
            <Col lg={"8"} className="px-3 px-md-5">
              <Row>
                <Col lg={"12"}>
                  전화번호를 입력하시면 로또 당첨번호를 추천받을 수 있습니다.
                </Col>
              </Row>
              <Row>
                <Col lg={"12"}>
                  <TextField
                    style={{ margin: "15px 0" }}
                    fullWidth
                    id="phoneNumber"
                    name="phoneNumber"
                    label="전화번호 *"
                    value={phoneNumber}
                    onChange={(e) => checkValidPhoneNumber(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={"12"}>
                  <BallSpan1>1</BallSpan1>
                  <BallSpan2>1</BallSpan2>
                  <BallSpan3>1</BallSpan3>
                  <BallSpan4>1</BallSpan4>
                  <BallSpan5>1</BallSpan5>
                  <BallSpan4>1</BallSpan4>
                </Col>
              </Row>
              <Row>
                <Col lg={"12"}>
                  <Button
                    style={{"width":"100%"}}
                    onClick={() => {
                      alert(123);
                    }}
                  >당첨번호받기</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <div
            style={{
              height: 0.5,
              margin: "150px 0 35px 0",
              backgroundColor: "#DFE1E6",
            }}
          />
          <div className="d-flex align-items-center justify-content-center">
            {social.social.map((i) => (
              <h2 className="mx-3" key={i.class}>
                <a href={i.link} target="_blank" rel="noreferrer">
                  <i
                    style={{ color: "#505F79", fontSize: 20 }}
                    className={i.class}
                  />
                </a>
              </h2>
            ))}
          </div>
        </Container>
      </Box>
    </>
  );
};

export default Lotto;
