import './Slide.css';
import Slider from "react-slick";
import Slide from "./Slide";

const SimpleSlider = () => {
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
          breakpoint: 860,
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
    const slides = [
      {
          title: 'Global Factor Investing Study',
          url: './assets/img/thumbnail_01.png',
          color: '#1450d2'
      },
      {
          title: '2019 Outlook',
          url: './assets/img/thumbnail_02.png',
          color: '#01a49c'
      },
      {
          title: 'Capital Market Assumptions',
          url: './assets/img/thumbnail_03.png',
          color: '#009bfa'
      }
    ]
    
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Slide 
            title={slides[0].title} 
            imgUrl={slides[0].url}
            color={slides[0].color} />
          </div>
          <div>
            <Slide 
                title={slides[1].title} 
                imgUrl={slides[1].url}
                color={slides[1].color} />
          </div>
          <div>
            <Slide 
                title={slides[2].title} 
                imgUrl={slides[2].url}
                color={slides[2].color} />
          </div>
        </Slider>
      </div>
    );
}
export default SimpleSlider;