import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
//import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content=[
    {
        image:require("../../images/portfolio/mining/image_1.jpg"),
        icon:"flaticon-robot-arm",
        title:"Mining Engineering",
        description:'It is a long established fact that a reader will be distracted by the readable content of a page.'
    },
    {
        image:require("../../images/portfolio/mining/image_2.jpg"),
        icon:"flaticon-factory-1",
        title:"Exploration Management",
        description:'It is a long established fact that a reader will be distracted by the readable content of a page.'
    },
    {
        image:require("../../images/portfolio/mining/image_3.jpg"),
        icon:"flaticon-fuel-station",
        title:"Engineering Services",
        description:'It is a long established fact that a reader will be distracted by the readable content of a page.'
    },
    {
        image:require("../../images/portfolio/mining/image_4.jpg"),
        icon:"flaticon-fuel-truck",
        title:"Maintenance & Repair",
        description:'It is a long established fact that a reader will be distracted by the readable content of a page.'
    },
	{
        image:require("../../images/portfolio/mining/image_1.jpg"),
        icon:"flaticon-robot-arm",
        title:"Mining Engineering",
        description:'It is a long established fact that a reader will be distracted by the readable content of a page.'
    },
    {
        image:require("../../images/portfolio/mining/image_2.jpg"),
        icon:"flaticon-factory-1",
        title:"Exploration Management",
        description:'It is a long established fact that a reader will be distracted by the readable content of a page.'
    },
    {
        image:require("../../images/portfolio/mining/image_3.jpg"),
        icon:"flaticon-fuel-station",
        title:"Engineering Services",
        description:'It is a long established fact that a reader will be distracted by the readable content of a page.'
    },
    {
        image:require("../../images/portfolio/mining/image_4.jpg"),
        icon:"flaticon-fuel-truck",
        title:"Maintenance & Repair",
        description:'It is a long established fact that a reader will be distracted by the readable content of a page.'
    },
]


class ServicesSlider4 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
			arrows:false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
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
            <>
                <Slider {...settings} className="img-carousel service-box-4-area  m-b30">
                    {content.map((item, id) => (
                        <div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                            <div className="service-box-4 text-center">
                                <div className="service-images m-b15">
                                    <img src={item.image} alt=""/>
                                    <i class={item.icon}></i>
                                </div>
                                <div className="service-content">
                                    <h6 className="title"><Link to="/services-details">{item.title}</Link></h6>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default ServicesSlider4;
