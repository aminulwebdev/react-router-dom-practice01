import "./counter.css"

const Counter = () => {
    return (
        <>
             <section id="counter">
        <div class="container">
            <div class="container_wrapper">
                <div class="counter_item">
                    <span>10<span>+</span></span>
                    <h6 class="paragraph">Sports Activities</h6>
                </div>
                <div class="counter_item">
                    <span>3<span>K+</span></span>
                    <h6 class="paragraph">Registered Enthusiasts</h6>
                </div>
                <div class="counter_item">
                    <span>15<span>+</span></span>
                    <h6 class="paragraph">Years Of Experience</h6>
                </div>
                <div class="counter_item">
                    <span>9.5<span></span></span>
                    <h6 class="paragraph">Average Rating</h6>
                </div>
            </div>
        </div>
    </section> 
        </>
    );
};

export default Counter;