import React, { useState } from "react";
import { Col, Container, Row, ProgressBar } from "react-bootstrap";
import { Box, Text } from "./styled";
import social from "../../helper/social.json";
import TextField from "@material-ui/core/TextField";
import Notice from "../../components/Notice";
import { Button } from "react-bootstrap";
import RecommendLotto from "../../components/Lotto/RecommendLotto";
import axios from "axios";

const Lotto: React.FC = () => {
  const [intro, setIntro] = useState("로또 추천 페이지");
  const [notice] = useState<Notice>({
    content: "",
    type: "SUCCESS",
  });
  const [visible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLotto, setIsLotto] = useState(false);
  const [lottoNumber, setLottoNumber] = useState([]);
  const [percent, setPercent] = useState<number>(0);

  const checkValidPhoneNumber = (e: string) => {
    if (e.replace(/[^0-9]/g, "").length > 11) {
      alert("올바르지 않은 전화번호입니다");
      return;
    }
    const value = e
      .replace(/[^0-9]/g, "")
      .replace(
        /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
        "$1-$2-$3"
      )
      .replace("--", "-");

    setPhoneNumber(value);
  };

  const getRecommendList = () => {
    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        setPercent(i);
      }, i * 50);
    }
    setTimeout(() => {
      axios("/api/lotto?number=" + phoneNumber).then((res) => {
        setLottoNumber(res.data);
        setIntro("이번주 로또 추천 번호");
        setIsLotto(true);
      });
    }, 1500);
  };

  return (
    <>
      <Box id="contacts">
        <Notice visible={visible} content={notice.content} type={notice.type} />
        <Container fluid>
          <Row className="d-flex align-items-center justify-content-center">
            {!isLotto ? (
              <>
                <Col lg={"4"} className="px-3 px-md-5">
                  <Text>로또 추천 페이지</Text>
                </Col>
                <Col lg={"8"} className="px-3 px-md-5">
                  <Row>
                    <Col lg={"12"}>
                      전화번호를 입력하시면 로또 당첨번호를 추천받을 수
                      있습니다.
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
                      <Button
                        style={{ width: "100%" }}
                        onClick={getRecommendList}
                      >
                        당첨번호받기
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </>
            ) : percent === 100 ? (
              <>
                <Col lg={"4"} className="px-3 px-md-5">
                  <Text>이번주 추천번호 입니다.</Text>
                </Col>
                <Col lg={"8"} className="px-3 px-md-5">
                  <RecommendLotto lottos={lottoNumber} />
                </Col>
              </>
            ) : (
              <>
                <Col lg={"4"} className="px-3 px-md-5">
                  <Text>당첨될 확률이 높은 번호를 추천받고 있습니다.</Text>
                </Col>
                <Col lg={"8"} className="px-3 px-md-5">
                  <ProgressBar now={percent} />
                </Col>
              </>
            )}
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
