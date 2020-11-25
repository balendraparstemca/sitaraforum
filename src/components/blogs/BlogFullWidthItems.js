import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import { connect } from "react-redux";
import moment from 'moment';
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { postUpvote, postDownvote, savePost, reportPost, fetchCommunityPost } from '../../services/action/post';
import { DeletePosts } from '../../services/action/user';
import SweetAlert from 'react-bootstrap-sweetalert'
import { BsFillAlarmFill, BsFillBookmarkFill, BsFillExclamationCircleFill, BsPeopleCircle, BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

class BlogFullWidthItems extends Component {


    constructor(props) {
        super(props);
        this.onChangeReport = this.onChangeReport.bind(this);
        this.state = {
            isloading: false,
            community: '',
            reporttext: "",
            img: require('../../assets/images/img31.jpg'),
            items: [
                {
                    img: require('../../assets/images/img31.jpg'),
                    title: '50 Greatest Event Places inThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text  United Kingdom There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                    titleLink: '/blog-single',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                    date: '25 Dec, 2020',
                    meta: 'Tips & Tricks',
                    metaLink: '#',
                    author: 'David Wise',
                    authorImg: require('../../assets/images/testi-img7.jpg'),
                    readmore: 'Read More',
                    readmoreLink: '/blog-single',
                    likes: '340'
                },
                {
                    img: require('../../assets/images/img32.jpg'),
                    title: 'Top 10 Best Clothing Shops In Sydney',
                    titleLink: '/blog-single',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                    date: '25 Dec, 2020',
                    meta: 'Tips & Tricks',
                    metaLink: '#',
                    author: 'David Wise',
                    authorImg: require('../../assets/images/testi-img7.jpg'),
                    readmore: 'Read More',
                    readmoreLink: '/blog-single',
                    likes: '340'
                },
                {
                    img: require('../../assets/images/img30.jpg'),
                    title: 'Top 15 Greatest Hotels In United States',
                    titleLink: '/blog-single',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                    date: '27 Dec, 2020',
                    meta: 'Tips & Tricks',
                    metaLink: '#',
                    author: 'David Wise',
                    authorImg: require('../../assets/images/testi-img7.jpg'),
                    readmore: 'Read More',
                    readmoreLink: '/blog-single',
                    likes: '492'
                },
                {
                    img: require('../../assets/images/img31.jpg'),
                    title: '50 Greatest Event Places In United Kingdom',
                    titleLink: '/blog-single',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                    date: '27 Dec, 2020',
                    meta: 'Tips & Tricks',
                    metaLink: '#',
                    author: 'David Wise',
                    authorImg: require('../../assets/images/testi-img7.jpg'),
                    readmore: 'Read More',
                    readmoreLink: '/blog-single',
                    likes: '589'
                },
                {
                    img: require('../../assets/images/img32.jpg'),
                    title: 'Top 10 Best Clothing Shops In Sydney',
                    titleLink: '/blog-single',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
                    date: '27 Dec, 2020',
                    meta: 'Tips & Tricks',
                    metaLink: '#',
                    author: 'David Wise',
                    authorImg: require('../../assets/images/testi-img7.jpg'),
                    readmore: 'Read More',
                    readmoreLink: '/blog-single',
                    likes: '134'
                }
            ]
        }

    }


    onChangeReport(e) {

        this.setState({
            reporttext: e.target.value
        });

        alert(this.state.reporttext)
    }

    upvote = async (postid) => {
        const obj = { 'post_id': postid, 'upvote_by': this.props.userdetails.id };
        await this.props.dispatch(postUpvote(obj));
        this.props.updatepostaftervote();
    }

    downvote = async (postid) => {
        const obj = { 'post_id': postid, 'downvote_by': this.props.userdetails.id };
        await this.props.dispatch(postDownvote(obj));
        this.props.updatepostaftervote();
    }

    deleteAlert = (postid) => (
        <SweetAlert
            warning
            showCancel
            confirmBtnText="Yes, delete it!"
            confirmBtnBsStyle="danger"
            title="Are you sure?"
            onConfirm={() => this.onDelete(postid)}
            onCancel={this.onCancel}
            focusCancelBtn
        >
            You will not be able to recover all data related to this post!
        </SweetAlert>
    )

    getAlert = (postid) => (
        <SweetAlert
            custom
            showCancel
            confirmBtnText="Report"
            placeHolder="Write something"
            onCancel={this.onCancel}
            btnSize="sm"
            onConfirm={() => this.onReport(postid)}
            type={'controlled'}
            dependencies={[this.state.reporttext]}
        >
            {(renderProps) => (
                <div className="central-meta">
                    <div className="new-postbox">
                        <figure>
                            <img src="/assets/images/resources/admin2.jpg" alt="" />
                        </figure>
                        <div className="newpst-input">
                            <form>
                                <textarea
                                    type={'text'}
                                    rows="4"
                                    ref={renderProps.setAutoFocusInputRef}
                                    className="form-control"
                                    value={this.state.firstName}
                                    onKeyDown={renderProps.onEnterKeyDownConfirm}
                                    onChange={(e) => this.setState({ reporttext: e.target.value })}
                                    placeholder={'write something'}
                                ></textarea>

                            </form>
                        </div>
                    </div>
                </div>
            )}
        </SweetAlert>
    );

    onReport = (postid) => {
        const obj = {
            post_id: postid,
            report_by: this.props.userdetails.id,
            reason: this.state.reporttext
        }
        console.log(obj);
        this.props.dispatch(reportPost(obj));
        this.setState({ alert: null })

    }

    report = (postid) => {
        this.setState({ alert: this.getAlert(postid) })
    }



    DeletePost = (postid) => {
        this.setState({ alert: this.deleteAlert(postid) })

    }

    onDelete(postid) {
        this.props.dispatch(DeletePosts(postid)).then(() => {
            this.props.updatepostaftervote();
        });
        this.setState({ alert: null });
    }

    savePost = (postid) => {
        const obj = {
            post_id: postid,
            saved_by: this.props.userdetails.id,
        }
        console.log(obj);
        this.props.dispatch(savePost(obj));
    }


    onCancel = () => {
        this.setState({
            alert: null
        });
    }
    render() {
        return (
            <>
                {  this.props.posts && this.props.posts.length === 0 ?
                    (<div className="central-meta item cardb">

                        <div className="row center">
                            <div className="widget">
                                <div className="banermeta">
                                    <center>there is not post  </center>
                                    <Link to={`/r/${this.props.communityName && this.props.communityName.communityName}/submit`}>create post</Link>
                                </div></div>
                        </div></div>
                    ) :

                    this.props.posts.map((item, i) => {
                        return (
                            <div className="card-item blog-card" key={i}>
                                <div className="dropdown">
                                    <a className="float-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><BsThreeDotsVertical />
                                    </a>

                             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item"><Link to={`/post/edit/${item.canonicalurl}`} ><FaEdit/> Edit </Link></a>
                                <a class="dropdown-item" onClick={() => this.DeletePost(item.post_id)}> <AiFillDelete/> Delete</a>
                                <a class="dropdown-item" onClick={() => this.report(item.post_id)}><BsFillExclamationCircleFill/> Report</a>
                                <a class="dropdown-item " onClick={() => this.savePost(item.post_id)}><BsFillBookmarkFill/> save</a>

                            </div>

                                </div>

                                <div className="row">
                                    <div className="col-1">
                                        <p className="upvote" onClick={() => this.upvote(2)}>  <span className="la"><b><FaArrowAltCircleUp /></b></span> </p><p>{item.vote}</p><p className="downvote" onClick={() => this.downvote(2)}> <span className="la"><b><FaArrowAltCircleDown /></b></span> </p>

                                    </div>
                                    <div className="col-11">

                                        <Link to={`/post/${item.canonicalurl}`} className="card-image-wrap">

                                            <div className="card-image">
                                                <img src={this.state.img} alt="Blog Full Width" className="card__img" />
                                            </div>
                                        </Link>
                                        <ul className="post-author d-flex align-items-center justify-content-between mt-3">
                                            <li>
                                                <Link to={`/user/${item.username}`}>  <img src={this.state.img} alt="Author" />
                                                    <span className="by__text"> By</span>
                                                    <span> {item.username}</span></Link>
                                            </li>
                                            <li>

                                            </li>
                                        </ul>
                                        <div className="card-content pl-0 pr-0">
                                            <div>
                                                <Link to={{ pathname: `/post/${item.canonicalurl}`, aboutProps: { postid: item.post_id } }} style={{ textDecoration: 'none', color: 'black' }} className="thumbnail self" >
                                                    <b> {item.title}</b></Link>
                                                <a title="" href="#"> {item.url.replace(/^https?\:\/\/www\./i, "").split('/')[0]}... <i className="fa fa-external-link" aria-hidden="true"></i></a> <span className="badge badge-secondary badge-pill">{item.flare_tag}</span>

                                                <p>
                                                    <Link to={`/r/${item.com_name}`}><b> <BsPeopleCircle /> r/{item.com_name}</b></Link> <BsFillAlarmFill /> <span>{moment(Number(item.post_time)).fromNow()}</span>
                                                </p>

                                            </div>

                                            <p className="card-sub mt-3">
                                                {item.description}<Badge variant="danger">Danger</Badge>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </>
        );
    }
}
function mapStateToProps(state) {
    const { posts, isFetched } = state.post;
    const { userdetails } = state.auth;
    const { postsdetail, postcomment, upvoted, downvoted, removevoted } = state.post;


    return {
        posts,
        isFetched, postsdetail, postcomment, upvoted, downvoted, removevoted, userdetails
    };
}
export default connect(mapStateToProps)(BlogFullWidthItems);



