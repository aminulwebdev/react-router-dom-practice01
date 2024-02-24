import "./adventures.css";

const Adventures = () => {
  return (
    <>
      <section id="adventures">
        <div class="container">
          <div class="adventures_wrapper">
            <div class="adventures_content">
              <h3 class="sub_heading">Feel The Excitement </h3>
              <h2 class="heading">Join Us And Embark On New Adventures</h2>
              <p class="paragraph">
                Dolor sit amet consectetur adipiscing elits eiusmod tempor
                incididunts laboreyse dolore mag aliqua. Quis ipsum supendise
                ultrices gravid. Risus commodo viverra sed ipsum maecenas.
              </p>
              <div class="adventures_option">
                <div class="adventures_item">
                  <div class="item_icon">
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <p class="paragraph">
                    Unde omnis iste natus error sit voluptatem dolore
                  </p>
                </div>
                <div class="adventures_item">
                  <div class="item_icon">
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <p class="paragraph">
                    Eaque ipsa quae ab illo inventore veritatis quasi que
                  </p>
                </div>
                <div class="adventures_item">
                  <div class="item_icon">
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <p class="paragraph">
                    Accusantium dolore que laudantium totamrem periam
                  </p>
                </div>
              </div>

              <a href="#" class="common_btn">
                Discover More
              </a>
            </div>
            <div class="adventures_img">
              <div class="adventuresImg_item">
                <img src="./images/adventures_imgOne.jpg" alt="" />
              </div>
              <div class="adventuresImg_item">
                <img src="./images/banner.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Adventures;
