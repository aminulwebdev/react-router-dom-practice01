import "./work.css"
import number from "../../assets/images/work_img.png"
const Work = () => {
  return (
    <>
 <section id="work">
            <div class="container">
                <div class="work__wrapper">
                    <div class="work__content">
                        <h2 class="section__heading">How we work</h2>
                        <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor.</p>
                        <a href="#">Get in touch with us<i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div class="work__main">
                        <div class="work__item">
                            <div class="work__img">
                                <picture>
                                    <img src={number} alt=""/>
                                </picture>
                            </div>
                            <h3>Strategy</h3>
                            <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                            </p>
                        </div>
                        <div class="work__item">
                            <div class="work__img">
                                <picture>
                                <img src={number} alt=""/>
                                </picture>
                            </div>
                            <h3>Strategy</h3>
                            <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                            </p>
                        </div>
                        <div class="work__item">
                            <div class="work__img">
                                <picture>
                                <img src={number} alt=""/>
                                </picture>
                            </div>
                            <h3>Strategy</h3>
                            <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                            </p>
                        </div>
                        <div class="work__item">
                            <div class="work__img">
                                <picture>
                                <img src={number} alt=""/>
                                </picture>
                            </div>
                            <h3>Strategy</h3>
                            <p class="paragraph">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Work