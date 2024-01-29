import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { getApi } from "../../service/axiosInterceptors";
const HomeSection4 = () => {
  const [lang, setLang] = useState("mr");
  const [data, setData] = useState({
    title: {
      marathi: "सतत विचारले जाणारे प्रश्न ",
      english: "Frequently Asked Questions",
    },
    ques: {
      marathi: "प्रश्न:",
      english: "Q:",
    },
    ans: {
      marathi: "उत्तर",
      english: "Ans",
    },
    questions: [],
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const updateLocalStorage = (newLang) => {
    localStorage.setItem("lang", newLang);
  };
  
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    const newLang = queryParams.get("lang") || storedLang || "mr";
    setLang(newLang);
    updateLocalStorage(newLang);
  }, [location.search]);

  const fetchData = async () => {
    await getApi("/faq")
      .then((res) => {
        setData((prev) => ({
          ...prev,
          questions: res.data.data,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  
 
  return (
    <>
      <div>
        <section>
          <div className="container block-faq pb-3 pt-2">
            <Accordion defaultActiveKey="0" flush>
              <div className="about-head text-center pb-2">
                {lang === "mr" ? data.title.marathi : data.title.english}
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
              {data.questions.map((item, index) => (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>
                    {lang === "mr" ? data.ques.marathi : data.ques.english}
                    {lang === "mr"
                      ? item.marathi.question
                      : item.english.question}
                  </Accordion.Header>
                  <Accordion.Body>
                    {lang === "mr" ? data.ans.marathi : data.ans.english}-
                    {lang === "mr" ? item.marathi.answer : item.english.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
{/* 
            <div className="process__accordions p-0 m-0" >
              <div className="about-head text-center pb-2">
                <div
                  id="about-text"
                  style={{
                    display: "inline-block",
                    position: "relative", // Add this line
                  }}
                >
                  {lang === "mr" ? data.title.marathi : data.title.english}
                  <div
                    className="underline"
                    style={{
                      position: "absolute",
                      bottom: "-5px",
                      left: "0",
                      width: "100%",
                      height: "5px",
                      background: "linear-gradient(to right, green, yellow)",
                      opacity: "1",
                    }}
                  />
                </div>
              </div>
              <ul className="accordions__list p-0 m-0 mt-3">
                {data.questions.map((item, index) => (
                  <li
                    eventKey={index} key={index}
                    className="accordions__item "
                    onClick={() => handleAccordionClick(index)}
                  >
                    <button
                      className="accordions__control"
                      aria-expanded={index === openIndex ? 'true' : 'false'}
                    >
                      
                      <span className="accordions__title">  {lang === "mr" ? data.ques.marathi : data.ques.english}
                        {lang === "mr"
                          ? item.marathi.question
                          : item.english.question}</span>
                      <span className="accordions__icon"></span>
                    </button>
                    <div
                      className="accordions__content text  pb-0"
                      aria-hidden={index === openIndex ? 'false' : 'true'}
                      style={
                        index === openIndex
                          ? { maxHeight: '1000px' } // You can set a maximum height or use a dynamic value
                          : null
                      }
                    >
                      <p style={{fontSize:"18px" ,fontWeight:"400"}}>
                        {lang === "mr" ? item.marathi.answer : item.english.answer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeSection4;
