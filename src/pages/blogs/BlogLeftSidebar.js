import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import BlogSidebar from "../../components/sidebars/BlogSidebar";
import BlogTwoColumns from "../../components/blogs/BlogTwoColumns";
import Pagination from "../../components/blogs/Pagination";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import WidgetSearchTwo from '../../components/sidebars/widgets/WidgetSearchTwo';
import WidgetCategory from '../../components/sidebars/widgets/WidgetCategory';
import WidgetSubscribe from '../../components/sidebars/widgets/WidgetSubscribe';
import WidgetPopularPost from '../../components/sidebars/widgets/WidgetPopularPost';
import CommunityList from '../../components/blogs/communityList';
import CommunityListNear from '../../components/blogs/communitylistNear';

class BlogLeftSidebar extends Component {

    constructor(props)
    {
        super(props)
    }
    state = {
        breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
    }
    render() {
        console.log(this.props.match.params)
        return (
            <main className="blog-left-sidebar-page">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Blog Left Sidebar" MenuPgTitle="Blog" img={this.state.breadcrumbimg} />

                <section className="blog-left-sidebar padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="sidebar section-bg">
                                    <WidgetSearchTwo />
                                    <WidgetCategory />
                                    <WidgetSubscribe />
                                   
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <CommunityList categoryLink={this.props.match.params.categoryid}/>
                            </div>

                            <div className="col-lg-4">
                                <CommunityListNear/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                               
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer*/}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

export default BlogLeftSidebar;