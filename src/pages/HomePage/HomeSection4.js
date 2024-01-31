import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

import useLang from "../../utils/useLang";

import { getApi } from "../../service/axiosInterceptors";
import { home } from "../../constant";

const HomeSection4 = () => {
  const [data, setData] = useState([]);

  const { lang, checkLang } = useLang();

  useEffect(() => {
    const fetchData = async () => {
      await getApi("/faq")
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <section>
          <div className="container block-faq pb-3 pt-2">
            <Accordion defaultActiveKey="0" flush>
              <div className="about-head text-center pb-2">
                {home[checkLang].faq_title}
                <hr
                  className="button_less"
                  style={{
                    width: "25%",
                    border: "none",
                    height: "4px",
                    background: "linear-gradient(to right, green, yellow)",
                    opacity: "1",
                    marginTop: "0",
                    marginBottom: "15px",
                  }}
                />
              </div>
              {data.map((item, index) => (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>
                    <span
                      style={{
                        color: "GrayText",
                        fontWeight: "bold",
                      }}
                    >
                      {home[checkLang].ques}
                    </span>
                    {lang === "mr"
                      ? item.marathi.question
                      : item.english.question}
                  </Accordion.Header>
                  <Accordion.Body>
                    <span
                      style={{
                        color: "GrayText",
                        fontWeight: "bold",
                      }}
                    >
                      {home[checkLang].ans}
                    </span>
                    {lang === "mr" ? item.marathi.answer : item.english.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeSection4;
