import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import { connect } from "react-redux";
import BlogSidebar from "../../components/sidebars/BlogSidebar";
import BlogDetailContent from "../../components/blogs/BlogDetailContent";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import { FetchpostComment, fetcPostDetail } from '../../services/action/post';
import ListingDetailsComments from '../../components/contact/ListingDetailsComments';
import BlogCommentFields from '../../components/blogs/BlogCommentFields';
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaQuoteRight } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from "react-router-dom";
import BlogTags from '../../components/blogs/BlogTags';

class BlogDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            postdetail: null,
            comments: [],
            message: '',
            loading: false,
            upvoted: false,
            downvoted: false,
            cupvote: 'upvote',
            cdownvote: 'downvote',
            breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
            votes: 42,
            img: require('../../assets/images/video-img.jpg'),
            author: 'David Wise',
            authorImg: require('../../assets/images/testi-img7.jpg'),
            date: '12 Fab, 2020',
            meta: 'Tips & Tricks',
            metaLink: '#',
            likes: '480',
            title: 'How to Improve Your Customer Service Experience',
            desc1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed',
        
        }
    }


    componentDidMount() {

        this.postdetail();

    }

    postdetail = () => {
        this.setState({ loading: true })
        let obj = { canonicalurl: this.props.match.params.url }
        this.props.dispatch(fetcPostDetail(obj)).then(() => {
            if (this.props.postsdetail.length > 0) {
                this.setState({
                    postdetail: this.props.postsdetail[0]
                })
                this.fetchcomment(this.props.postsdetail[0].post_id);
            }
            else {
                this.props.history.push("/error");
                window.location.reload();
            }
        })
    }

    fetchcomment = (postid) => {
        this.props.dispatch(FetchpostComment(postid)).then(() => {
            if (this.props.postsdetail.length > 0) {
                this.setState({ comments: this.props.postcomment })
            }
        })
    }


    upvote = async (postid) => {
        const obj = { 'post_id': postid, 'upvote_by': this.props.userdetails.id };
        await this.postdetail();


    }

    downvote = async (postid) => {
        const obj = { 'post_id': postid, 'downvote_by': this.props.userdetails.id };
        await this.postdetail();


    }


    postComment = (event) => {
        event.preventDefault();
        let obj = {
            comment_by: this.props.userdetails.id, textcomment: event.target.comment.value.trim(),
            post_id: this.state.postdetail.post_id
        }
        event.target.reset();
        this.props.dispatch(this.postComment(obj)).then(() => {
            this.fetchcomment(this.props.postsdetail[0].post_id);

        })

    }
  
    render() {
        return (
            <main className="List-map-view2">
                {/* Header */}
                <GeneralHeader />

            

                <section className="blog-single-area padding-top-140px padding-bottom-70px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
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
                            </div>
                            <div className="col-lg-4">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

                </main>
        );
    }
}


function mapStateToProps(state) {
    const { postsdetail, postcomment } = state.post;
    const { userdetails } = state.auth;

    return {
        postsdetail, userdetails, postcomment
       
    };
}
export default connect(mapStateToProps)(BlogDetail);