import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";
import { BsListCheck, BsBookmark,BsFillAlarmFill, BsLink45Deg, BsPeopleCircle, BsPersonFill,BsFillExclamationCircleFill, BsFillBookmarkFill, BsThreeDotsVertical } from 'react-icons/bs'
import { FaCommentDots, FaEdit, FaGlobeAmericas, FaRegCalendar, FaRegEnvelope } from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'
import { FiPhone, FiEdit, FiRefreshCw } from 'react-icons/fi'
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlineYoutube, AiOutlineExclamationCircle, AiFillDelete } from 'react-icons/ai'
import Button from "../../components/common/Button";
import $ from 'jquery'
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import GenericHeader from '../../components/common/GenericHeader';
import UserSidebar from '../../components/sidebars/usersidebar';
import { Deletecomments, FetchUserpostComment, FetchUserSavedpost, UnSaveposts, userdetails } from '../../services/action/user';
import { fetchUserPost } from '../../services/action/post';
import { connect } from "react-redux";

import moment from 'moment';

class UserDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userdetail: null,
            message: '',
            loading: false,
            userImg: require('../../assets/images/team2.jpg'),
            userName: 'Mark Williamson',
            userbio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            address: '101 Parkview, New York',
            phoneNum: '+7(111)123456789',
            website: 'www.techydevs.com',
            img: require('../../assets/images/img31.jpg')

        }
    }
    componentDidMount() {
        this.fetchuserdetail();

        $(document).on('click', '.delete-account-info .delete-account, .card-item .card-content-wrap .delete-btn', function (e) {
            $('body').addclassName('modal-open').css({ paddingRight: '17px' });
            $(".account-delete-modal").addclassName('show')
            e.preventDefault();
        })
        $(document).on('click', '.account-delete-modal .modal-bg, .account-delete-modal .modal-dialog .btn-box .theme-btn', function (e) {
            $('body').removeclassName('modal-open').css({ paddingRight: '0' });
            $(".account-delete-modal").removeclassName('show')
            e.preventDefault();
        })
        $(document).on('click', '.user-edit-form .edit-form-btn, .user-edit-form .btn-box .theme-btn', function (e) {
            $(".user-edit-form .dropdown-menu, .user-edit-form .dropdown").toggleclassName('show');
            $(".user-edit-form .dropdown-menu").css({ position: 'absolute', transform: 'translate3d(0px, -733px, 0px)', top: '0', left: '0', willChange: 'transform' })
            e.preventDefault();
        });

    }



    fetchuserdetail = async () => {
        this.setState({ loading: true })
        let obj = { "userName": this.props.match.params.username }
        this.props.dispatch(userdetails(obj)).then(() => {
            if (this.props.udetails.length > 0) {
                this.setState({
                    userdetail: this.props.udetails[0]
                })

                this.props.dispatch(fetchUserPost(this.props.udetails[0].id))
                this.props.dispatch(FetchUserpostComment(this.props.udetails[0].id))
                this.props.dispatch(FetchUserSavedpost(this.props.udetails[0].id))
            }
            else {
                //this.props.history.push("/error");
                //window.location.reload();
            }
        })
    }

    UnsavePost=(saveid)=>{
        this.props.dispatch(UnSaveposts(saveid)).then(()=>{
            this.props.dispatch(FetchUserSavedpost(this.props.udetails && this.props.udetails[0].id))
  

        })

    }


    DeleteComment = (id) => {
        this.props.dispatch(Deletecomments(id)).then(() => {
            this.props.dispatch(FetchUserpostComment(this.props.udetails[0].id))

        })
    }
    render() {
        return (
            <main className="List-map-view2">
                {/* Header */}
                <GeneralHeader />

                <section className="dashboard-area padding-top-140px padding-bottom-90px">
                    <div className="container">
                        <Tabs>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="dashboard-nav d-flex justify-content-between align-items-center mb-4">
                                        <div className="author-bio margin-bottom-20px">
                                            <div className="d-flex align-items-center">
                                                <img src={this.state.userImg} alt="author" />
                                                <div className="author-inner-bio">
                                                    <h4 className="author__title font-weight-bold pb-0 mb-1">
                                                        <h5>{this.state.userdetail && ('u/' + this.state.userdetail.userName)}</h5>
                                                    </h4>
                                                    <p className="author__meta">

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <TabList className="nav nav-tabs border-0" id="nav-tab">


                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsListCheck /></span> Posts
                                                </Link>
                                            </Tab>

                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsBookmark /></span>Comment
                                                </Link>
                                            </Tab>
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsBookmark /></span>Saved post
                                                </Link>
                                            </Tab>

                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><AiOutlineUser /></span> Edit
                                                </Link>
                                            </Tab>
                                            <div className="btn-box">
                                                <Link to="/add-listing" className="theme-btn"><span className="la"><AiOutlinePlusCircle /></span> create listing</Link>
                                            </div>
                                        </TabList>

                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="tab-content" id="nav-tabContent">
                                        <TabPanel>
                                            <section className="blog-grid margin-top-10px  padding-bottom-10px">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-8">
                                                            <div className="margin-top-0px">
                                                                <GenericHeader updatepostaftervote={this.fetchuserdetail} />
                                                            </div>

                                                        </div>
                                                        <div className="col-lg-4">
                                                            <UserSidebar />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="button-shared text-center">
                                                                <Button text="load more listing" url="#" className="border-0">
                                                                    <span><FiRefreshCw /></span>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </TabPanel>

                                        <TabPanel>
                                            <section className="blog-grid margin-top-10px  padding-bottom-10px">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-8">
                                                            <div className="margin-top-0px">
                                                                {this.props.userpostcomment.length > 0 && this.props.userpostcomment.map((post) => (

                                                                    <div className="central-meta item margin-top-10px ">

                                                                        <div className="dropdown">
                                                                            <a className="float-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><BsThreeDotsVertical />
                                                                            </a>

                                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a class="dropdown-item"><Link to={`/post/edit/${post.canonicalurl}`} ><FaEdit /> Edit </Link></a>
                                                                                <a class="dropdown-item" onClick={() => this.DeleteComment(post.comment_id)}> <AiFillDelete /> Delete</a>

                                                                            </div>

                                                                        </div>
                                                                        <div className="user-post">
                                                                            <div className="friend-info">
                                                                                <div className="row">

                                                                                    <div className="col-3">
                                                                                        <div className="row">

                                                                                            <div className="col">
                                                                                                <div className="span2">
                                                                                                    <img src={this.state.img} alt="" className="img-thumbnail" />
                                                                                                </div>
                                                                                            </div>

                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-9">

                                                                                        <div className="description">
                                                                                            <p>
                                                                                                <Link to={{ pathname: `/post/${post.canonicalurl}`, aboutProps: { postid: post.post_id } }} style={{ textDecoration: 'none', color: 'black' }} className="thumbnail self" >
                                                                                                    <b> {post.title}</b></Link>
                                                                                                <a title="" href="#"> {post.url.replace(/^https?\:\/\/www\./i, "").split('/')[0]}... <i className="fa fa-external-link" aria-hidden="true"></i></a> <span className="badge badge-secondary badge-pill">{post.flare_tag}</span>
                                                                                                <Link to={`/r/${post.com_name}`}><b> <i className="fa fa-users" aria-hidden="true"></i> r/{post.com_name}</b></Link>
                                                                                            </p>

                                                                                        </div>


                                                                                        <div className="coment-area">
                                                                                            <ul className="we-comet">

                                                                                                <li>


                                                                                                    <div className="we-comment">
                                                                                                        <div className="coment-head">
                                                                                                            <h5><a href="" title="">u/{this.props.udetails && this.props.udetails[0].userName}</a></h5>
                                                                                                            <FaCommentDots/> commented
                                                                                                            <span> <FaRegCalendar/> {moment(Number(post.comment_time)).fromNow()}</span><span>
                                                                                                                <div className="col-1"><a data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="fa fa-ellipsis-h"></i>
                                                                                                                </a>
                                                                                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                                                        <a className="dropdown-item" href="?sort=top"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a>
                                                                                                                        <a className="dropdown-item" onClick={() => this.DeleteComment(post.comment_id)}> <i className="fa fa-trash" aria-hidden="true"></i> Delete</a>


                                                                                                                    </div></div>
                                                                                                            </span>
                                                                                                            <i className="fa fa-reply"></i>
                                                                                                        </div>
                                                                                                        <p>{post.text}
                                                                                                        </p>
                                                                                                    </div>


                                                                                                </li>

                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )

                                                                )}
                                                            </div>

                                                        </div>
                                                        <div className="col-lg-4">
                                                            <UserSidebar />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="button-shared text-center">
                                                                <Button text="load more listing" url="#" className="border-0">
                                                                    <span><FiRefreshCw /></span>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                        </TabPanel>


                                        <TabPanel>
                                            <section className="blog-grid margin-top-10px  padding-bottom-10px">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-8">
                                                            <div className="margin-top-0px">
                                                                {this.props.savedposts && this.props.savedposts.length === 0 ?
                                                                    (<div className="central-meta item cardb margin-bottom-10px ">

                                                                        <div className="row center">
                                                                            <div className="widget">
                                                                                <div className="banermeta">
                                                                                    <center>there is not post  </center>
                                                                                    <Link to={`/r/${this.props.communityName && this.props.communityName.communityName}/submit`}>create post</Link>
                                                                                </div></div>
                                                                        </div></div>
                                                                    ) :
                                                                    this.props.savedposts.map((post, i) => (
                                                                        <div className="central-meta item cardb margin-bottom-10px" key={i}>
                                                                            <div className="dropdown">
                                                                                <a className="float-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><BsThreeDotsVertical />
                                                                                </a>

                                                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                     <a class="dropdown-item " onClick={() => this.UnsavePost(post.id)}><BsFillBookmarkFill /> Remove</a>

                                                                                </div>

                                                                            </div>
                                                                            <div className="row">

                                                                                <div className="col-3">
                                                                                    <div className="row">
                                                          
                                                                                        <div className="col">
                                                                                            <div className="span2">
                                                                                                <img src={this.state.img} alt="" className="img-thumbnail" />
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-9">
                                                                                    <div className="user-post">
                                                                                        <div>
                                                                                            <Link to={{ pathname: `/post/${post.canonicalurl}`, aboutProps: { postid: post.post_id } }} style={{ textDecoration: 'none', color: 'black' }} className="thumbnail self" >
                                                                                                <b> {post.title}</b></Link>
                                                                                            <a title="" href="#"> {post.url.replace(/^https?\:\/\/www\./i, "").split('/')[0]}... <BsLink45Deg /></a> <span className="badge badge-secondary badge-pill">{post.flare_tag}</span>

                                                                                            <p>
                                                                                                <Link to={`/r/${post.com_name}`}><b> <BsPeopleCircle /> r/{post.com_name}</b></Link> <button className="btn badge badge-primary badge-pill btn-xs" type="button">
                                                                                                    <span className="dislike" data-toggle="tooltip" title="join"></span> </button>Posted by <BsPersonFill /> <Link to={`/user/${post.username}`}> u/{post.username}</Link> <span><BsFillAlarmFill /> {moment(Number(post.post_time)).fromNow()}</span>
                                                                                            </p>

                                                                                        </div>



                                                                                    </div>
                                                                                </div>
                                                                                <hr></hr>
                                                                            </div>
                                                                            <div className="section-block-2 margin-top-30px"></div>
                                                                        </div>

                                                                    ))
                                                                }     </div>

                                                        </div>
                                                        <div className="col-lg-4">
                                                            <UserSidebar />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="button-shared text-center">
                                                                <Button text="load more listing" url="#" className="border-0">
                                                                    <span><FiRefreshCw /></span>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </TabPanel>

                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </section>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />


                {/* Modal */}
                <div className="modal-form text-center">
                    <div className="modal fade account-delete-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                        <div className="modal-bg"></div>
                        <div className="modal-dialog modal-sm" role="document">
                            <div className="modal-content p-4">
                                <div className="modal-top border-0 mb-4 p-0">
                                    <div className="alert-content">
                                        <span className="la warning-icon"><AiOutlineExclamationCircle /></span>
                                        <h4 className="modal-title mt-2 mb-1">Your account will be deleted permanently!</h4>
                                        <p className="modal-sub">Are you sure to proceed.</p>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <button type="button" className="theme-btn border-0 button-success mr-1" data-dismiss="modal">
                                        Cancel
                                    </button>
                                    <button type="button" className="theme-btn border-0 button-danger">
                                        delete!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>


        );
    }
}


function mapStateToProps(state) {
    const { udetails, userpostcomment, savedposts } = state.user;
    const { userdetails } = state.auth;
    return {
        udetails, userdetails, userpostcomment, savedposts

    };
}
export default connect(mapStateToProps)(UserDashboard);