import React, { Component } from 'react';
import ListingDetailsComments from "../contact/ListingDetailsComments";
import BlogCommentFields from "./BlogCommentFields";
import BlogBlockquote from "./BlogBlockquote";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaQuoteRight } from 'react-icons/fa'
import BlogTags from "./BlogTags";
import BlogShare from "./BlogShare";
import { BsThreeDotsVertical } from 'react-icons/bs';

class BlogDetailContent extends Component {

    state = {
        img: require('../../assets/images/video-img.jpg'),
        author: 'David Wise',
        authorImg: require('../../assets/images/testi-img7.jpg'),
        date: '12 Fab, 2020',
        meta: 'Tips & Tricks',
        metaLink: '#',
        likes: '480',
        title: 'How to Improve Your Customer Service Experience',
        desc1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed',
        desc2: 'Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.',
        desc3: 'when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed',
        desc4: 'Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price.',

        /* Blockquote */
        bgimg: require('../../assets/images/video-img.jpg'),
        quoteIcon: <FaQuoteRight />,
        desc: 'Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn\'t really do it, they just saw something. It seemed obvious to them after a while. That\'s because they were able to connect experiences they\'ve had and synthesize new things.',
        name: '- Steve Jobs',
        designation: 'Founder of Apple Inc.',

        /* desc Images */
        images: [
            {
                img: require('../../assets/images/img28.jpg')
            },
            {
                img: require('../../assets/images/img29.jpg')
            },
            {
                img: require('../../assets/images/img30.jpg')
            }
        ]
    }
    render() {
        return (
            <>
                <div className="card-item blog-card border-bottom-0">
                    <a className="float-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><BsThreeDotsVertical />
                    </a>
                    <div className="row">
                        <div className="col-1">
                            <p className="upvote" onClick={() => this.upvote(2)}>  <span className="la"><b><FaArrowAltCircleUp /></b></span> </p><p>{2}</p><p className="downvote" onClick={() => this.downvote(2)}> <span className="la"><b><FaArrowAltCircleDown /></b></span> </p>

                        </div>
                        <div className="col-11">
                           
                            <div>
                                <ul className="post-author d-flex align-items-center justify-content-between mb-3">
                                    <li>
                                        <img src={this.state.authorImg} alt="" />
                                        <span className="by__text">By</span>
                                        <span> {this.state.author},</span>
                                        <span>{this.state.date} - <Link to={this.state.metaLink} className="tag__text">{this.state.meta}</Link></span>
                                    </li>
                                   
                                </ul>
                                <h2 className="card-title font-size-26">
                                    {this.state.title}
                                </h2>
                                <p className="card-sub mt-3">
                                    {this.state.desc1}
                                </p>
                                
                            
                                <p className="card-sub mb-3">
                                    {this.state.desc4}
                                </p>
                             
                               
                                <div className="section-block margin-top-30px margin-bottom-30px"></div>
                                <div className="tag-items d-flex justify-content-between">

                                    <BlogTags />

                                 

                                </div>
                                <div className="section-block margin-top-30px margin-bottom-50px"></div>
                                <div className="comments-wrap">
                                    <h2 className="widget-title">5 Comments</h2>
                                    <div className="title-shape"></div>

                                    <ListingDetailsComments />

                                </div>
                                <div className="add-review-listing padding-top-50px">
                                    <h2 className="widget-title">Add a Comment</h2>
                                    <div className="title-shape"></div>
                                    <div className="section-heading padding-top-10px">
                                        <p className="sec__desc font-size-16">Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <div className="contact-form-action mt-3">
                                        <BlogCommentFields />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BlogDetailContent;