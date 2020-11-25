import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import { AiOutlineUser } from 'react-icons/ai'
import { RiSendPlane2Line } from 'react-icons/ri'
import Select from "react-select";
import { BsPencil } from 'react-icons/bs';
import { FaRegEnvelope, FaSoundcloud } from 'react-icons/fa';
import SweetAlert from 'react-bootstrap-sweetalert'
import { connect } from "react-redux";
import { communityModel } from '../../model/communityModel';
const countries = [

    {
        value: 'AF',
        label: 'Afghanistan'
    },
    {
        value: 'AX',
        label: 'Åland Islands'
    },
    {
        value: 'AL',
        label: 'Albania'
    },
    {
        value: 'DZ',
        label: 'Algeria'
    },
    {
        value: 'AD',
        label: 'Andorra'
    },
    {
        value: 'AO',
        label: 'Angola'
    },
    {
        value: 'AI',
        label: 'Anguilla'
    },
    {
        value: 'AQ',
        label: 'Antarctica'
    },
    {
        value: 'AG',
        label: 'Antigua & Barbuda'
    },
    {
        value: 'AR',
        label: 'Argentina'
    },
    {
        value: 'AM',
        label: 'Armenia'
    },
    {
        value: 'AW',
        label: 'Aruba'
    },
    {
        value: 'AC',
        label: 'Ascension Island'
    },
    {
        value: 'AU',
        label: 'Australia'
    },
    {
        value: 'AT',
        label: 'Austria'
    },
    {
        value: 'AZ',
        label: 'Azerbaijan'
    },
    {
        value: 'BS',
        label: 'Bahamas'
    },
    {
        value: 'BH',
        label: 'Bahrain'
    },
    {
        value: 'BD',
        label: 'Bangladesh'
    },
    {
        value: 'BB',
        label: 'Barbados'
    },
    {
        value: 'BY',
        label: 'Belarus'
    },
    {
        value: 'BE',
        label: 'Belgium'
    },
    {
        value: 'BZ',
        label: 'Belize'
    },
    {
        value: 'BJ',
        label: 'Benin'
    },
    {
        value: 'BM',
        label: 'Bermuda'
    },
    {
        value: 'BT',
        label: 'Bhutan'
    },
    {
        value: 'BO',
        label: 'Bolivia'
    },
    {
        value: 'BA',
        label: 'Bosnia & Herzegovina'
    },
    {
        value: 'BW',
        label: 'Botswana'
    },
    {
        value: 'BV',
        label: 'Bouvet Island'
    },
    {
        value: 'BR',
        label: 'Brazil'
    },
    {
        value: 'IO',
        label: 'British Indian Ocean Territory'
    },
    {
        value: 'VG',
        label: 'British Virgin Islands'
    },
    {
        value: 'BN',
        label: 'Brunei'
    },
    {
        value: 'BG',
        label: 'Bulgaria'
    },
    {
        value: 'BF',
        label: 'Burkina Faso'
    },
    {
        value: 'BI',
        label: 'Burundi'
    },
    {
        value: 'KH',
        label: 'Cambodia'
    },
    {
        value: 'CH',
        label: 'Cameroon'
    },
    {
        value: 'CA',
        label: 'Canada'
    },
    {
        value: 'CV',
        label: 'Cape Verde'
    },
    {
        value: 'BQ',
        label: 'Caribbean Netherlands'
    },
    {
        value: 'KY',
        label: 'Cayman Islands'
    },
    {
        value: 'CF',
        label: 'Central African Republic'
    },
    {
        value: 'TD',
        label: 'Chad'
    },
    {
        value: 'CL',
        label: 'Chile'
    },
    {
        value: 'CN',
        label: 'China'
    },
    {
        value: 'CO',
        label: 'Colombia'
    },
    {
        value: 'KM',
        label: 'Comoros'
    },
    {
        value: 'CG',
        label: 'Congo - Brazzaville'
    },
    {
        value: 'CD',
        label: 'Congo - Kinshasa'
    },
    {
        value: 'CK',
        label: 'Cook Islands'
    },
    {
        value: 'CR',
        label: 'Costa Rica'
    },
    {
        value: 'CI',
        label: 'Côte d’Ivoire'
    },
    {
        value: 'HR',
        label: 'Croatia'
    },
    {
        value: 'CW',
        label: 'Curaçao'
    },
    {
        value: 'CY',
        label: 'Cyprus'
    },
    {
        value: 'CZ',
        label: 'Czechia'
    },
    {
        value: 'DK',
        label: 'Denmark'
    },
    {
        value: 'DJ',
        label: 'Djibouti'
    },
    {
        value: 'DM',
        label: 'Dominica'
    },
    {
        value: 'DO',
        label: 'Dominican Republic'
    },
    {
        value: 'EC',
        label: 'Ecuador'
    },
    {
        value: 'EG',
        label: 'Egypt'
    },
    {
        value: 'SV',
        label: 'El Salvador'
    },
    {
        value: 'GQ',
        label: 'Equatorial Guinea'
    },
    {
        value: 'ER',
        label: 'Eritrea'
    },
    {
        value: 'EE',
        label: 'Estonia'
    },
    {
        value: 'SZ',
        label: 'Eswatini'
    },
    {
        value: 'ET',
        label: 'Ethiopia'
    },
    {
        value: 'FK',
        label: 'Falkland Islands'
    },
    {
        value: 'FO',
        label: 'Faroe Islands'
    },
    {
        value: 'FJ',
        label: 'Fiji'
    },
    {
        value: 'FI',
        label: 'Finland'
    },
    {
        value: 'FR',
        label: 'France'
    },
    {
        value: 'GF',
        label: 'French Guiana'
    },
    {
        value: 'PF',
        label: 'French Polynesia'
    },
    {
        value: 'TF',
        label: 'French Southern Territories'
    },
    {
        value: 'GA',
        label: 'Gabon'
    },
    {
        value: 'GM',
        label: 'Gambia'
    },
    {
        value: 'GE',
        label: 'Georgia'
    },
    {
        value: 'DE',
        label: 'Germany'
    },
    {
        value: 'GH',
        label: 'Ghana'
    },
    {
        value: 'GI',
        label: 'Gibraltar'
    },
    {
        value: 'GR',
        label: 'Greece'
    },
    {
        value: 'GL',
        label: 'Greenland'
    },
    {
        value: 'GD',
        label: 'Grenada'
    },
    {
        value: 'GP',
        label: 'Guadeloupe'
    },
    {
        value: 'GU',
        label: 'Guam'
    },
    {
        value: 'GT',
        label: 'Guatemala'
    },
    {
        value: 'GG',
        label: 'Guernsey'
    },
    {
        value: 'GN',
        label: 'Guinea'
    },
    {
        value: 'GW',
        label: 'Guinea-Bissau'
    },
    {
        value: 'GY',
        label: 'Guyana'
    },
    {
        value: 'HT',
        label: 'Haiti'
    },
    {
        value: 'HN',
        label: 'Honduras'
    },
    {
        value: 'HK',
        label: 'Hong Kong SAR China'
    },
    {
        value: 'HU',
        label: 'Hungary'
    },
    {
        value: 'IS',
        label: 'Iceland'
    },
    {
        value: 'IN',
        label: 'India'
    },
    {
        value: 'ID',
        label: 'Indonesia'
    },
    {
        value: 'IR',
        label: 'Iran'
    },
    {
        value: 'IQ',
        label: 'Iraq'
    },
    {
        value: 'IE',
        label: 'Ireland'
    },
    {
        value: 'IM',
        label: 'Isle of Man'
    },
    {
        value: 'IL',
        label: 'Israel'
    },
    {
        value: 'IT',
        label: 'Italy'
    },
    {
        value: 'JM',
        label: 'Jamaica'
    },
    {
        value: 'JP',
        label: 'Japan'
    },
    {
        value: 'JE',
        label: 'Jersey'
    },
    {
        value: 'JO',
        label: 'Jordan'
    },
    {
        value: 'KZ',
        label: 'Kazakhstan'
    },
    {
        value: 'KE',
        label: 'Kenya'
    },
    {
        value: 'KI',
        label: 'Kiribati'
    },
    {
        value: 'XK',
        label: 'Kosovo'
    },
    {
        value: 'KW',
        label: 'Kuwait'
    },
    {
        value: 'KG',
        label: 'Kyrgyzstan'
    },
    {
        value: 'LA',
        label: 'Laos'
    },
    {
        value: 'LV',
        label: 'Latvia'
    },
    {
        value: 'LB',
        label: 'Lebanon'
    },
    {
        value: 'LS',
        label: 'Lesotho'
    },
    {
        value: 'LR',
        label: 'Liberia'
    },
    {
        value: 'LY',
        label: 'Libya'
    },
    {
        value: 'LI',
        label: 'Liechtenstein'
    },
    {
        value: 'LT',
        label: 'Lithuania'
    },
    {
        value: 'LU',
        label: 'Luxembourg'
    },
    {
        value: 'MO',
        label: 'Macao SAR China'
    },
    {
        value: 'MG',
        label: 'Madagascar'
    },
    {
        value: 'MW',
        label: 'Malawi'
    },
    {
        value: 'MY',
        label: 'Malaysia'
    },
    {
        value: 'MV',
        label: 'Maldives'
    },
    {
        value: 'ML',
        label: 'Mali'
    },
    {
        value: 'MT',
        label: 'Malta'
    },
    {
        value: 'MQ',
        label: 'Martinique'
    },
    {
        value: 'MR',
        label: 'Mauritania'
    },
    {
        value: 'MU',
        label: 'Mauritius'
    },
    {
        value: 'YT',
        label: 'Mayotte'
    },
    {
        value: 'MX',
        label: 'Mexico'
    },
    {
        value: 'MD',
        label: 'Moldova'
    },
    {
        value: 'MC',
        label: 'Monaco'
    },
    {
        value: 'MN',
        label: 'Mongolia'
    },
    {
        value: 'ME',
        label: 'Montenegro'
    },
    {
        value: 'MS',
        label: 'Montserrat'
    },
    {
        value: 'MA',
        label: 'Morocco'
    },
    {
        value: 'MZ',
        label: 'Mozambique'
    },
    {
        value: 'MM',
        label: 'Myanmar (Burma)'
    },
    {
        value: 'NA',
        label: 'Namibia'
    },
    {
        value: 'NR',
        label: 'Nauru'
    },
    {
        value: 'NP',
        label: 'Nepal'
    },
    {
        value: 'NL',
        label: 'Netherlands'
    },
    {
        value: 'NC',
        label: 'New Caledonia'
    },
    {
        value: 'NZ',
        label: 'New Zealand'
    },
    {
        value: 'NI',
        label: 'Nicaragua'
    },
    {
        value: 'NE',
        label: 'Niger'
    },
    {
        value: 'NG',
        label: 'Nigeria'
    },
    {
        value: 'NU',
        label: 'Niue'
    },
    {
        value: 'MK',
        label: 'North Macedonia'
    },
    {
        value: 'NO',
        label: 'Norway'
    },
    {
        value: 'OM',
        label: 'Oman'
    },
    {
        value: 'PK',
        label: 'Pakistan'
    },
    {
        value: 'PS',
        label: 'Palestinian Territories'
    },
    {
        value: 'PA',
        label: 'Panama'
    },
    {
        value: 'PG',
        label: 'Papua New Guinea'
    },
    {
        value: 'PY',
        label: 'Paraguay'
    },
    {
        value: 'PE',
        label: 'Peru'
    },
    {
        value: 'PH',
        label: 'Philippines'
    },
    {
        value: 'PN',
        label: 'Pitcairn Islands'
    },
    {
        value: 'PL',
        label: 'Poland'
    },
    {
        value: 'PT',
        label: 'Portugal'
    },
    {
        value: 'PR',
        label: 'Puerto Rico'
    },
    {
        value: 'QA',
        label: 'Qatar'
    },
    {
        value: 'RE',
        label: 'Réunion'
    },
    {
        value: 'RO',
        label: 'Romania'
    },
    {
        value: 'RU',
        label: 'Russia'
    },
    {
        value: 'RW',
        label: 'Rwanda'
    },
    {
        value: 'WS',
        label: 'Samoa'
    },
    {
        value: 'SM',
        label: 'San Marino'
    },
    {
        value: 'ST',
        label: 'São Tomé & Príncipe'
    },
    {
        value: 'SA',
        label: 'Saudi Arabia'
    },
    {
        value: 'SN',
        label: 'Senegal'
    },
    {
        value: 'RS',
        label: 'Serbia'
    },
    {
        value: 'SC',
        label: 'Seychelles'
    },
    {
        value: 'SL',
        label: 'Sierra Leone'
    },
    {
        value: 'SG',
        label: 'Singapore'
    },
    {
        value: 'SX',
        label: 'Sint Maarten'
    },
    {
        value: 'SK',
        label: 'Slovakia'
    },
    {
        value: 'SI',
        label: 'Slovenia'
    },
    {
        value: 'SB',
        label: 'Solomon Islands'
    },
    {
        value: 'SO',
        label: 'Somalia'
    },
    {
        value: 'ZA',
        label: 'South Africa'
    },
    {
        value: 'GS',
        label: 'South Georgia & South Sandwich Islands'
    },
    {
        value: 'KR',
        label: 'South Korea'
    },
    {
        value: 'SS',
        label: 'South Sudan'
    },
    {
        value: 'ES',
        label: 'Spain'
    },
    {
        value: 'LK',
        label: 'Sri Lanka'
    },
    {
        value: 'BL',
        label: 'St. Barthélemy'
    },
    {
        value: 'SH',
        label: 'St. Helena'
    },
    {
        value: 'KN',
        label: 'St. Kitts & Nevis'
    },
    {
        value: 'LC',
        label: 'St. Lucia'
    },
    {
        value: 'MF',
        label: 'St. Martin'
    },
    {
        value: 'PM',
        label: 'St. Pierre & Miquelon'
    },
    {
        value: 'VC',
        label: 'St. Vincent & Grenadines'
    },
    {
        value: 'SR',
        label: 'Suriname'
    },
    {
        value: 'SJ',
        label: 'Svalbard & Jan Mayen'
    },
    {
        value: 'SE',
        label: 'Sweden'
    },
    {
        value: 'CH',
        label: 'Switzerland'
    },
    {
        value: 'TW',
        label: 'Taiwan'
    },
    {
        value: 'TJ',
        label: 'Tajikistan'
    },
    {
        value: 'TZ',
        label: 'Tanzania'
    },
    {
        value: 'TH',
        label: 'Thailand'
    },
    {
        value: 'TL',
        label: 'Timor-Leste'
    },
    {
        value: 'TG',
        label: 'Togo'
    },
    {
        value: 'TK',
        label: 'Tokelau'
    },
    {
        value: 'TO',
        label: 'Tonga'
    },
    {
        value: 'TT',
        label: 'Trinidad & Tobago'
    },
    {
        value: 'TA',
        label: 'Tristan da Cunha'
    },
    {
        value: 'TN',
        label: 'Tunisia'
    },
    {
        value: 'TR',
        label: 'Turkey'
    },
    {
        value: 'TM',
        label: 'Turkmenistan'
    },
    {
        value: 'TC',
        label: 'Turks & Caicos Islands'
    },
    {
        value: 'TV',
        label: 'Tuvalu'
    },
    {
        value: 'UG',
        label: 'Uganda'
    },
    {
        value: 'UA',
        label: 'Ukraine'
    },
    {
        value: 'AE',
        label: 'United Arab Emirates'
    },
    {
        value: 'UK',
        label: 'United Kingdom'
    },
    {
        value: 'US',
        label: 'United States'
    },
    {
        value: 'UY',
        label: 'Uruguay'
    },
    {
        value: 'UZ',
        label: 'Uzbekistan'
    },
    {
        value: 'VU',
        label: 'Vanuatu'
    },
    {
        value: 'VA',
        label: 'Vatican City'
    },
    {
        value: 'VE',
        label: 'Venezuela'
    },
    {
        value: 'VN',
        label: 'Vietnam'
    },
    {
        value: 'WF',
        label: 'Wallis & Futuna'
    },
    {
        value: 'EH',
        label: 'Western Sahara'
    },
    {
        value: 'YE',
        label: 'Yemen'
    },
    {
        value: 'ZM',
        label: 'Zambia'
    },
    {
        value: 'ZW',
        label: 'Zimbabwe'
    },
]
const cities = [
    {
        value: 0,
        label: 'Select a City'
    },
    {
        value: 1,
        label: 'New York'
    },
    {
        value: 2,
        label: 'Los Angeles'
    },
    {
        value: 3,
        label: 'Chicago'
    },
    {
        value: 4,
        label: 'Phoenix'
    },
    {
        value: 5,
        label: 'Washington'
    },
    {
        value: 6,
        label: 'Boston'
    },
    {
        value: 7,
        label: 'Philadelphia'
    },
    {
        value: 8,
        label: 'Baltimore'
    },
    {
        value: 9,
        label: 'Seattle'
    },
    {
        value: 10,
        label: 'San Francisco'
    },
];

const states = [

    {
        value: 1,
        label: 'California'
    },
    {
        value: 2,
        label: 'Florida'
    },
    {
        value: 3,
        label: 'Texas'
    },
    {
        value: 4,
        label: 'Hawaii'
    },
    {
        value: 5,
        label: 'Arizona'
    },
    {
        value: 6,
        label: 'Michigan'
    },
    {
        value: 7,
        label: 'New Jersey'
    },
    {
        value: 8,
        label: 'Georgia'
    },
    {
        value: 9,
        label: 'South Carolina'
    },
    {
        value: 10,
        label: 'Montana'
    },
];
const shortby = [
    {
        value: 0,
        label: 'Short by'
    },
    {
        value: 1,
        label: 'Short by default'
    },
    {
        value: 2,
        label: 'High Rated'
    },
    {
        value: 3,
        label: 'Most Reviewed'
    },
    {
        value: 4,
        label: 'Popular Listing'
    },
    {
        value: 5,
        label: 'Newest Listing'
    },
    {
        value: 6,
        label: 'Older Listing'
    },
    {
        value: 7,
        label: 'Price: low to high'
    },
    {
        value: 8,
        label: 'Price: high to low'
    },
    {
        value: 9,
        label: 'Price: high to low'
    },
    {
        value: 10,
        label: 'Random listing'
    }
]
class NewCommunity extends Component {

    constructor(props) {
        super(props);
        this.handleCommunity = this.handleCommunity.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAbout = this.onChangeAbout.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);
        this.state = {
            name: "",
            title: "",
            about: "",
            category: "",
            country: { label: "select a country", value: '' },
            region: { label: "select a state", value: '' },
            place: " ",
            Socialmedia: "",
            accessmodifier: "",
            loading: false,
            title: 'Our Office',
            img: require('../../assets/images/img27.jpg'),
            desc: 'Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Praesent eros turpis, commodo vel justo at',
            address: 'USA 27TH Brooklyn NY',
            phoneNum: '+7(111)123456789',
            email: 'contact@dirto.com',
            opendays: 'Monday To Friday',
            opendaytime: '9am - 7pm',
            closeday: 'Saturday To Sunday'

        };

    }

  
    onChangeName(e) {
        this.setState({
            name: e.target.value.toLocaleLowerCase().replace(/\s/g, ''),
        });

    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase()),
        });
    }
    onChangeAbout(e) {
        this.setState({
            about: e.target.value.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase()),
        });


    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value,
        });

    }
  

    onChangePlace(e) {
        this.setState({
            place: e.target.value,
        });
    }

    onChangeCountry = country => {
        this.setState({ country });

    };


  

    getAlert = (alerttype, title) => (
        <SweetAlert
            type={alerttype}
            title={title}
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}>
            {this.props.message}
        </SweetAlert>
    );

    handleCommunity(e) {
        e.preventDefault();
        this.setState({
            loading: true
        });

        communityModel.community_name = this.state.name;
        communityModel.community_title = this.state.title;
        communityModel.community_about = this.state.about;
        communityModel.community_category = this.state.category;
        communityModel.community_country = this.state.country.value;
        communityModel.community_place = this.state.place;
        communityModel.community_admin = this.props.userdetails ? this.props.userdetails.id: alert('user not find');

        console.log(communityModel);

        /* this.props.dispatch(createcommunity(communityModel)).then(() => {
 
             if (this.props.isCreated) {
                 this.setState({
                     alert: this.getAlert('success', ' successfull created')
                 })
             }
             else {
                 this.setState({
                     alert: this.getAlert('warning', 'creating community Failed')
                 })
             }
 
         }).catch(() => {
             this.setState({
                 loading: false, alert: this.getAlert('warning', ' creating community Failed')
             });
 
         });
 
   */

    }

    onConfirm = () => {
        this.setState({
            loading: false, alert: null
        });


    }



    callThis = (e) => {
        this.setState({ category: e.target.value }, () => { console.log(this.state.category) });
    }
    render() {
        console.log(this.props.userdetails);
        return (
            <main className="List-map-view2">
                {/* Header */}
                <GeneralHeader />

                <section className="blog-grid margin-top-190px  padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="faq-forum">
                                    <div className="billing-form-item">
                                        <div className="billing-title-wrap">
                                            <h3 className="widget-title">Create Community</h3>

                                            <div className="title-shape margin-top-10px"></div>
                                        </div>

                                        <div className="billing-content">
                                            <div className="contact-form-action">
                                                <form method="post" onSubmit={this.handleCommunity}>
                                                    <div className="input-box">
                                                        <label className="label-text">Community Name</label>
                                                        <div className="form-group">
                                                            <span className="form-icon"><AiOutlineUser /></span>
                                                            <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.onChangeName} required="required" maxLength="20" placeholder="Community Name(max30)" />
                                                        </div>
                                                    </div>

                                                    <div className="input-box">
                                                        <label className="label-text">Community Title</label>
                                                        <div className="form-group">
                                                            <span className="form-icon"><AiOutlineUser /></span>
                                                            <input className="form-control" type="text" maxLength="50" name="title" value={this.state.title} onChange={this.onChangeTitle} required="required" placeholder="Community Title(max50)" />
                                                        </div>
                                                    </div>


                                                    <div className="input-box">
                                                        <label className="label-text">About Community</label>
                                                        <div className="form-group">
                                                            <span className="form-icon"><BsPencil /></span>
                                                            <textarea className="message-control form-control" maxLength="150" name="about" value={this.state.about} onChange={this.onChangeAbout} required="required" placeholder="About Community(max150) "></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="input-box">
                                                        <label className="label-text">Categories</label>
                                                        <div className="form-group">
                                                            <span className="form-icon"><FaRegEnvelope /></span>
                                                            <Select
                                                                value={this.selectedShortby}
                                                                onChange={this.handleChangeshortby}
                                                                placeholder="Short by"
                                                                options={shortby}
                                                            />  </div>
                                                    </div>
                                                    <div className="billing-form-item">
                                                        <div className="billing-title-wrap">
                                                            <h3 className="widget-title pb-0">
                                                                Location

                                                            </h3>
                                                            <div className="title-shape margin-top-10px"></div>
                                                        </div>
                                                        <div className="billing-content">
                                                            <div className="contact-form-action">

                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <label className="label-text">Country</label>
                                                                        <div className="form-group">
                                                                            <Select
                                                                                value={this.state.country}
                                                                                onChange={this.onChangeCountry}
                                                                                placeholder="Select a Country"
                                                                                options={countries}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                        <div className="input-box">
                                                                            <label className="label-text">State</label>
                                                                            <div className="form-group">
                                                                                <Select
                                                                                    value={this.state.region}
                                                                                    onChange={this.handleChangeState}
                                                                                    placeholder="Select a State"
                                                                                    options={states}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                        <div className="input-box">
                                                                            <label className="label-text">City or places</label>
                                                                            <div className="form-group">
                                                                                <input className="form-control" type="text" name="place" value={this.state.place} onChange={this.onChangePlace} required="required" placeholder="City or place name" />

                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="btn-box">
                                                        <button type="submit" className="theme-btn border-0">
                                                            <i><RiSendPlane2Line /></i> Create Community
                                    </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4">
                                <div className="billing-form-item">
                                    <div className="billing-title-wrap">
                                        <h3 className="widget-title pb-0">
                                            {this.state.title}
                                        </h3>
                                        <div className="title-shape margin-top-10px"></div>
                                    </div>
                                    <div className="billing-content">
                                        <div className="our-office-content">
                                            <img src={this.state.img} alt="group-img" className="w-100 radius-round" />
                                            <div className="section-heading mt-4 mb-4">
                                                <p className="sec__desc font-size-15 line-height-24">
                                                    {this.state.desc}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="billing-title-wrap pt-0">
                                        <h3 className="widget-title pb-0">Working Hours</h3>
                                        <div className="title-shape margin-top-10px"></div>
                                    </div>
                                    <div className="billing-content">
                                        <ul className="list-items">
                                            <li className="d-flex align-items-center justify-content-between color-text-2">
                                                <strong className="font-weight-medium">{this.state.opendays}</strong><strong className="font-weight-medium color-text-3">{this.state.opendaytime}</strong>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between color-text-2">
                                                <strong className="font-weight-medium">{this.state.closeday}</strong><strong className="color-text">Closed</strong>
                                            </li>
                                        </ul>
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
    const { userdetails } = state.auth;
    const { message } = state.message;
    const { category } = state.common;

    return {
        message, category,  userdetails
    };
}
export default connect(mapStateToProps)(NewCommunity);