import React, {Component} from 'react';
import WidgetAuthorTwo from "./widgets/WidgetAuthorTwo";
import WidgetCategory from "./widgets/WidgetCategory";
import WidgetTags from "./widgets/WidgetTags";
import WidgetSubscribe from "./widgets/WidgetSubscribe";
import WidgetFollow from "./widgets/WidgetFollow";
import { connect } from "react-redux";
import WidgetPopularPost from "./widgets/WidgetPopularPost";
import SocialProfile from '../other/account/SocialProfile';
import { fetchCategory, fetchCommunityList } from '../../services/action/common';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class CommunitySidebar extends Component {

    constructor(props){
        super(props)
        this.state={
            img: require('../../assets/images/testi-img2.jpg'),
            name: 'Mark Williamson',
            designation: 'Senior Web Developer',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorem illo laborum magni, maxime omnis quam quod totam voluptatem voluptatibus?',
            communitydetails:{},
            title: "All Category Lists",
            communitylist: []
        }
    }
    componentDidMount()
    {  
        this.setState({
            communitydetails: this.props.communitydetails[0],
            
        })

       
    }
    componentWillReceiveProps() {
    
        this.setState({
            communitydetails: this.props.communitydetails[0]
        })
        let obj = {
            'category': this.props.categoryid
        };

        this.props.dispatch(fetchCommunityList(obj)).then(() => {
            this.setState({
                
                communitylist: this.props.communitylist
            })
        });
    }

    
    render() {

        console.log(this.props.category);
        return (
            <>
                <div className="sidebar section-bg">
                <div className="sidebar-widget">
                    <div className="author-bio margin-bottom-20px">
                        <div className="d-flex align-items-center">
                            <img src={this.state.img} alt="author" />
                            <div className="author-inner-bio">
                                <h4 className="author__title font-weight-bold pb-0 mb-1">
                                r/{ this.state.communitydetails && this.state.communitydetails.communityName} 
                                </h4>
                                <p className="author__meta">
                                    {this.state.designation}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section-heading">
                        <p className="sec__desc font-size-15 line-height-24">
                        {this.state.communitydetails && this.state.communitydetails.about}
                        </p>
                    </div>
                    <div className="section-block-2 margin-top-30px"></div>
                </div>
                   {/* related community */}
                   <div className="sidebar-widget">
                    <h3 className="widget-title">
                        Related community
                    </h3>
                    <div className="title-shape"></div>
                    <div className="cat-list padding-top-30px">
                        <ul className="list-items">
                        
                            {this.state.communitylist && this.state.communitylist.length === 0 ?
                                (
                                    <li className="mb-2 pb-2" >
                                        <Link  to="#" className="d-flex justify-content-between align-items-center before-none">
                                            there is no related community
                                         </Link>

                                    </li>
                                ) : this.state.communitylist.map((com, i) => {
                                    return (
                                        <li className="mb-2 pb-2" key={i}>
                                           <div className="author-bio margin-bottom-0px">
                                            <div className="d-flex align-items-center">
                                                <img src={this.state.img} alt="author" />
                                                <div className="author-inner-bio">
                                                    <p>
                                                    <Link to={`/r/${com.communityName}`}>{'r/' + com.communityName}</Link>
                                              </p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
                    <WidgetTags />
                    <WidgetPopularPost />
                    <WidgetSubscribe />
                    <WidgetFollow />
                </div>
            </>
        );
    }
}


function mapStateToProps(state) {
    const { communitydetails, communitylist } = state.community;
    const { message } = state.message;
    const { category } = state.common;

    return {
        communitydetails,category, communitylist,
        message
    };
}
export default connect(mapStateToProps)(CommunitySidebar);