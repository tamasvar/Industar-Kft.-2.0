import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
//import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class BlogSlider1 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 600,
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
        const imgEffect   = this.props.imgEffect || ""
        const blogPostCls = this.props.blogPostCls || "blog-grid blog-rounded blog-effect1 post-style-3"

        return (
            <>
                <Slider {...settings} className="blog-carousel btn-style-1">
                    {this.props.data.map((item, id) => (
                        <div className="item">
                            <div class={`blog-post ${blogPostCls}`}>
                                <div class={`dlab-post-media dlab-img-effect ${imgEffect}`}> <Link to="#"><img src={item.image} alt="" /></Link> </div>
                                <div className="dlab-post-info">
                                    <div className="dlab-post-meta">
                                        <ul>
                                            <li className="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
                                            <li className="post-author"> By <Link to="#">{item.author}</Link> </li>
                                        </ul>
                                    </div>
                                    <div className="dlab-post-title">
                                        <h4 className="post-title"><Link to="/blog-single">{item.title}</Link></h4>
                                    </div>
                                    {!this.props.noDes && 
                                        (<div className="dlab-post-text">
                                            <p>{item.description}</p>
                                        </div>)
                                    }
                                    <div className="dlab-post-readmore">
                                        <Link to="/blog-single" title="READ MORE" rel="bookmark" className="site-button btnhover14">READ MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default BlogSlider1;