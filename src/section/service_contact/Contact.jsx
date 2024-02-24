import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div class="container">
          <div class="contact_wrapper">
            <div class="contact_content">
              <div class="contactContent_heading">
                <h2 class="heading">Hubungi Kami</h2>
              </div>
              <div class="contentItem_wrapper">
                <div class="content_item">
                  <div class="item_details">
                    <i class="fa-solid fa-phone"></i>
                    <div class="number">
                      <p class="paragraph">call</p>
                      <a href="tel:01813933245" class="paragraph">
                        01813933245
                      </a>
                    </div>
                  </div>
                  <a href="#" class="common_btn">
                    call now
                  </a>
                </div>
                <div class="content_item">
                  <div class="item_details">
                    <i class="fa-solid fa-envelope"></i>
                    <div class="number">
                      <p class="paragraph">email</p>
                      <a href="tel:01813933245" class="paragraph">
                        aminulwebdev@gmail.com
                      </a>
                    </div>
                  </div>
                  <a href="#" class="common_btn">
                    email now
                  </a>
                </div>
              </div>
            </div>
            <div class="awards">
              <h2 class="heading">Penghargaan</h2>
              <div class="awards_item">
                <img src="./images/awards_one.png" alt="" />
                <img src="./images/awards_two.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
