import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import AddLocation from "../../components/addlisting/AddLocation";
import AddFullDetails from "../../components/addlisting/AddFullDetails";
import PhotoUploader from "../../components/addlisting/PhotoUploader";
import Amenities from "../../components/addlisting/Amenities";
import OpeningHours from "../../components/addlisting/OpeningHours";
import AddPrice from "../../components/addlisting/AddPrice";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { BsPencilSquare, BsQuestion, BsPencil } from 'react-icons/bs'
import { AiOutlineTags } from 'react-icons/ai'
import Select from "react-select";
import { fetchAmenties, fetchCategory } from '../../services/action/common';


    
class AddListing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'General Information',
            selectedCatOp: null,
            breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
            catid: {label:'',value:null},
            category:[],
            amenties:[]
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchCategory()).then(()=>
        {
            this.setState({
                category:this.props.category
            })
        });
    }

    getAmenties = (catid) => {
        alert(catid)
     
    }


    handleChangeCat = async (catid)  => {
        this.setState({ catid });
        await this.props.dispatch(fetchAmenties(catid.value));

    }

    render() {
        const {  category} = this.state;
        const categories=category && category.length ?  category.map(cat => {
            return { value: `${cat.id}`, label: `${cat.name}` };
        }) : [{
            value: 0,
            label: 'no category feched'
        }];

        return (
            <main className="add-listing">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Add Listing" MenuPgTitle="Listings" img={this.state.breadcrumbimg} />

                {/* Add Listing */}
                <section className="add-listing-area padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 mx-auto">
                                <div className="billing-form-item">
                                    <div className="billing-title-wrap">
                                        <h3 className="widget-title pb-0">{this.state.title}</h3>
                                        <div className="title-shape margin-top-10px"></div>
                                    </div>
                                    <div className="billing-content">
                                        <div className="contact-form-action">
                                            <form method="post">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="input-box">
                                                            <label className="label-text">Listing Title</label>
                                                            <div className="form-group">
                                                                <span className="la form-icon">
                                                                    <BsPencilSquare />
                                                                </span>
                                                                <input className="form-control" type="text" name="name" placeholder="Enter your listing title" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-box">
                                                            <label className="label-text d-flex align-items-center ">Keywords
                                                <i className="la tip ml-1" data-toggle="tooltip" data-placement="top" title="Maximum of 15 keywords related with your business">
                                                                    <BsQuestion />
                                                                </i>
                                                            </label>
                                                            <div className="form-group">
                                                                <span className="la form-icon">
                                                                    <AiOutlineTags />
                                                                </span>
                                                                <input className="form-control" type="text" name="name" placeholder="Keywords should be separated by commas" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="input-box">
                                                            <label className="label-text">Description</label>
                                                            <div className="form-group">
                                                                <span className="la form-icon">
                                                                    <BsPencil />
                                                                </span>
                                                                <textarea className="message-control form-control" name="message" placeholder="Write your listing description"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="input-box">
                                                            <label className="label-text">Category</label>
                                                            <div className="form-group mb-0">
                                                                <Select
                                                                    value={this.state.catid}
                                                                    onChange={this.handleChangeCat}
                                                                    placeholder="Select a Category"
                                                                    options={categories}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <AddLocation />

                                <AddFullDetails />

                                <PhotoUploader />

                                <Amenities/>

                                <OpeningHours />

                                <AddPrice />

                                <div className="billing-form-item p-0 border-0 mb-0 shadow-none">
                                    <div className="billing-content p-0">
                                        <div className="custom-checkbox d-block mr-0">
                                            <input type="checkbox" id="privacy" />
                                            <label htmlFor="privacy">I Agree to Dirto's <Link to="#" className="color-text">Privacy Policy</Link></label>
                                        </div>
                                        <div className="custom-checkbox d-block mr-0">
                                            <input type="checkbox" id="terms" />
                                            <label htmlFor="terms">I Agree to Dirto's <Link to="#" className="color-text">Terms of Services</Link>
                                            </label>
                                        </div>
                                        <div className="btn-box mt-4">
                                            <button type="submit" className="theme-btn border-0">submit listing</button>
                                        </div>
                                    </div>
                                </div>
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
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    const { amenties, category } = state.common;
    return {
        isLoggedIn, category, amenties,
        message
    };
}
export default connect(mapStateToProps)(AddListing);