import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 
const content = [
    {
        image:require("../../images/product/item1.jpg"),
        name:"Product title",
        price:"192",
        oldPrice:"232"
    },
    {
        image:require("../../images/product/item2.jpg"),
        name:"Product title",
        price:"192",
        oldPrice:"232"
    },
    {
        image:require("../../images/product/item3.jpg"),
        name:"Product title",
        price:"192",
        oldPrice:"232"
    },
    {
        image:require("../../images/product/item4.jpg"),
        name:"Product title",
        price:"192",
        oldPrice:"232"
    },
	{
        image:require("../../images/product/item3.jpg"),
        name:"Product title",
        price:"192",
        oldPrice:"232"
    },
    {
        image:require("../../images/product/item4.jpg"),
        name:"Product title",
        price:"192",
        oldPrice:"232"
    },
]

class ProductSlider extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					initialSlide: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1
				  }
				}
			  ]
        };
        return (
            <>
                <Slider {...settings} className="img-carousel-content primary btn-style-1">
                    {content.map((item, id) => (
                        <div className="item">
                            <div className="item-box">
                                <div className="item-img">
                                    <img src={item.image} alt=""/>
                                    <div className="item-info-in">
                                        <ul>
                                            <li><Link to="/shop-cart"><i className="ti-shopping-cart"></i></Link></li>
                                            <li><Link to="#"><i className="ti-eye"></i></Link></li>
                                            <li><Link to="#"><i className="ti-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="item-info text-center text-black p-a10">
                                    <h6 className="item-title text-uppercase font-weight-500"><Link to="/shop-product-details.html">{item.name}</Link></h6>
                                    <ul className="item-review">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star-half-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                    </ul>
                                    <h4 className="item-price">	
                                        <del>{item.oldPrice}</del> 
                                        <span className="text-primary">{item.price}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default ProductSlider;