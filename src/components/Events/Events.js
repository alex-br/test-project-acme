import './Events.scss'
import Slider from "react-slick";

const Events = () => {

    // Slider settings
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className='events-container container'>
            <h4>Upcoming Events</h4>
            <p>This needs a great tagline, but I’ll fill it in later</p>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <div class="box">
                            <div class="ribbon">JAN<span class="date">28</span></div>
                                <h4>Insight Exchange Network</h4>
                                <p>Join us for this conference showcasing innovation.</p>
                                <button>Get More Insight</button>
                                <div className='location'>Chicago, IL</div>
                        </div>
                    </div>
                    <div>
                        <div class="box">
                            <div class="ribbon">JAN<span class="date">28</span></div>
                                <h4>Insight Exchange Network</h4>
                                <p>Join us for this conference showcasing innovation.</p>
                                <button>Get More Insight</button>
                                <div className='location'>Chicago, IL</div>
                        </div>
                    </div>
                    <div>
                        <div class="box">
                            <div class="ribbon">JAN<span class="date">28</span></div>
                                <h4>Insight Exchange Network</h4>
                                <p>Join us for this conference showcasing innovation.</p>
                                <button>Get More Insight</button>
                                <div className='location'>Chicago, IL</div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
    
}

export default Events;