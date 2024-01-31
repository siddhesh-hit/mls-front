import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

const Slider = ({ data = [], field, keyId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % 8);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + 8) % 8);
  };

  const updateSlider = () => {
    const sliderContent = document.querySelector(`.slider-content${keyId}`);
    const reviewCardMedia = document.querySelector(
      `.review-card-media${keyId}`
    );

    if (sliderContent && reviewCardMedia) {
      const cardWidth = reviewCardMedia.offsetWidth + 20;
      sliderContent.style.transform = `translateX(${
        -currentIndex * cardWidth
      }px)`;
    } else {
      // console.error("Slider content or review card media not found");
    }
  };

  useEffect(() => {
    updateSlider();
  }, [currentIndex]);

  return (
    <Container fluid className="mt-4 mb-4">
      <Row>
        <div className="head-mediascroll mb-3 " style={{ paddingLeft: "90px" }}>
          {field}
        </div>
        <div className="slider-section mt-0">
          <div className="slider-container-media" style={{ width: "87%" }}>
            <div className={`slider-content slider-content${keyId}`}>
              {data && data.length > 0 ? (
                <>
                  {data.map((item, index) => (
                    <div
                      className={`review-card-media review-card-media${keyId}`}
                      key={index}
                    >
                      <div className="flex-profile">
                        <img
                          src={item.image}
                          alt="img"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="news-headline mt-0 p-0">
                        {item.date}
                        <div style={{ fontSize: "14px" }}>{item.data}</div>
                      </div>
                    </div>
                  ))}{" "}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="text-end " style={{ paddingRight: "100px" }}>
          <i
            className="fa fa-arrow-left  m-2 button-scroll p-1"
            onClick={prevSlide}
          ></i>
          <i
            className="fa fa-arrow-right m-2 button-scroll p-1"
            onClick={nextSlide}
          ></i>
        </div>
      </Row>
    </Container>
  );
};

export default Slider;
