import "./banner.css"
import BannerImg from "../../assets/images/banner_img.png"
const Banner = () => {
  return (
    <>
  <section id="banner">
            <div class="container">
                <div class="banner__wrapper">
                    <div class="banner__content">
                        <h1>Building stellar websites for early startups</h1>
                        <p class="paragraph paragraph--alter">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt.
                        </p>
                        <div class="banner__btn">
                            <a href="#">View our work</a>
                            <a href="#">View Pricing<i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                    <div class="branner__img">
                        <picture>
                            <img src={BannerImg} alt=""/>
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner