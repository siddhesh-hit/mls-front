import React, { useEffect, useState } from "react";
import { aboutUs } from "../../constant";
import useLang from "../../utils/useLang";
import { Container } from "react-bootstrap";
import { API } from "../../config";
import { getApi } from "../../service/axiosInterceptors";

const Gallery = ({ link = "gallery" }) => {
  const [gallery, setGallery] = useState([]);
  // const [textWidth, setTextWidth] = useState(0);

  const { checkLang } = useLang();

  let currentSlide = 0;
  const galleryItems = document.querySelectorAll(".gallery-item");

  function showSlide(index) {
    galleryItems.forEach((item, i) => {
      if (i === index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  }

  function nextSlide() {
    if (currentSlide < galleryItems.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  }
  showSlide(currentSlide);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getApi(link).then((res) => {
          setGallery(res.data.data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const textElement = document.getElementById("about-text");
  //   if (textElement) {
  //     setTextWidth(textElement.offsetWidth);
  //   }
  // }, [lang]);

  return (
    <section>
      <div className="photo-galleryhome text-center mt-2 ">
        <div className="section-head text-center mt-5">
          {aboutUs[checkLang].photoTitle}
        </div>
        <hr
          className="button_less mt-2"
          style={{
            width: "20%",
            border: "none",
            height: "3px",
            opacity: "1",
            background: "linear-gradient(to right, green, #FAD02C)",
          }}
        />
        <Container className="photo-video-container ">
          <div className="gallery-container">
            <div className="gallery ">
              {gallery.map((media, index) => (
                <div className="media mb-4" key={index}>
                  {media.mimetype.startsWith("image") && (
                    <img
                      src={`${API.baseUrl}${media.destination}/${media.filename}`}
                      alt={media.originalname}
                      style={{ width: "100%" }}
                    />
                  )}
                  {media.mimetype.startsWith("video") && (
                    <video controls>
                      <source
                        src={`${API.baseUrl}${media.destination}/${media.filename}`}
                        type={media.mimetype}
                      />
                    </video>
                  )}
                </div>
              ))}
            </div>
            <button
              className="prev"
              style={{ transform: "translateY(-500%" }}
              onClick={prevSlide}
            >
              <i className="fa fa-chevron-left"></i>
            </button>
            <button
              className="next"
              onClick={nextSlide}
              style={{ transform: "translateY(-500%" }}
            >
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Gallery;
