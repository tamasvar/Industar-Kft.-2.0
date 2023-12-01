import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blog_content = [
    {
        image: require("../../images/blog/grid/pic1.jpg"),
        title:"Seven Doubts You Should",
        description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
        author:"Jack",
    },
    {
        image: require("../../images/blog/grid/pic2.jpg"),
        title:"Seven Doubts You Should",
        description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
        author:"Jack",
    },
    {
        image: require("../../images/blog/grid/pic3.jpg"),
        title:"Seven Doubts You Should",
        description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
        author:"Jack",
    },
    {
        image: require("../../images/blog/grid/pic1.jpg"),
        title:"Seven Doubts You Should",
        description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
        author:"Jack",
    },
    {
        image: require("../../images/blog/grid/pic2.jpg"),
        title:"Seven Doubts You Should",
        description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
        author:"Jack",
    },
    {
        image: require("../../images/blog/grid/pic3.jpg"),
        title:"Seven Doubts You Should",
        description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
        author:"Jack",
    },
]


class BlogSlider1 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
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
        return (
            <>
                <Slider {...settings} className="blog-post post-style-2">
                    {blog_content.map((item, id) => (
                        <div className="item">
                            <div className="blog-post post-style-2">
                                <div className="dlab-post-media dlab-img-effect zoom">
                                    <Link to="/blog-single"><img src={item.image} alt=""/></Link>
                                </div>
                                <div className="dlab-post-info">
                                    <div className="dlab-post-meta">
                                        <ul>
                                            <li className="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
                                            <li className="post-author"> By <Link to="/blog-single">{item.author}</Link> </li>
                                        </ul>
                                    </div>
                                    <div className="dlab-post-title">
                                        <h4 className="post-title"><Link to="/blog-single">{item.title}</Link></h4>
                                    </div>
                                    <div className="dlab-post-readmore">
                                        <Link to="/blog-single" title="READ MORE" rel="bookmark" className="site-button btnhover20">READ MORE</Link>
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