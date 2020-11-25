import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";
import { BsListCheck, BsBookmark, BsPencil } from 'react-icons/bs'
import { FaRegEdit, FaRegTrashAlt, FaGlobeAmericas, FaRegEnvelope } from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'
import { FiPhone, FiEdit, FiRefreshCw } from 'react-icons/fi'
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlineYoutube, AiOutlineExclamationCircle } from 'react-icons/ai'
import Button from "../../components/common/Button";
import $ from 'jquery'
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import GenericHeader from '../../components/common/GenericHeader';
import BlogFullWidthItems from '../../components/blogs/BlogFullWidthItems';
import BlogSidebar from '../../components/sidebars/BlogSidebar';
import { connect } from "react-redux";
import { fetchRules } from '../../services/action/common';
import { fetchCommunityPost } from '../../services/action/post';
import { RiSendPlane2Line } from 'react-icons/ri'
import Select from "react-select";
import SweetAlert from 'react-bootstrap-sweetalert'
import { communitydetails, joinCommunity, leaveCommunity, approveCommunity, fetchcommunitymember } from "../../services/action/community";
import CommunitySidebar from '../../components/sidebars/communitysidebar';
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

class CommunityDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            communitydetail: null,
            message: '',
            loading: false,
            communitymember: [],
            joined: false,
            member: null,

            img: require('../../assets/images/testi-img2.jpg'),
            name: 'Mark Williamson',
            designation: 'Senior Web Developer',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorem illo laborum magni, maxime omnis quam quod totam voluptatem voluptatibus?',

            breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
            cards: [
                {
                    img: require('../../assets/images/img25.jpg'),
                    title: 'Favorite Place Food Bank',
                    subtitle: 'Bishop Avenue, New York',
                    editTxt: 'Edit',
                    editIcon: <FaRegEdit />,
                    deleteTxt: 'Delete',
                    deleteIcon: <FaRegTrashAlt />,
                    cardLink: '/listing-details'
                },
                {
                    img: require('../../assets/images/img26.jpg'),
                    title: 'Beach Blue Boardwalk',
                    subtitle: 'Bishop Avenue, New York',
                    editTxt: 'Edit',
                    editIcon: <FaRegEdit />,
                    deleteTxt: 'Delete',
                    deleteIcon: <FaRegTrashAlt />,
                    cardLink: '/listing-details'
                },
                {
                    img: require('../../assets/images/img27.jpg'),
                    title: 'Hotel Govendor',
                    subtitle: 'Bishop Avenue, New York',
                    editTxt: 'Edit',
                    editIcon: <FaRegEdit />,
                    deleteTxt: 'Delete',
                    deleteIcon: <FaRegTrashAlt />,
                    cardLink: '/listing-details'
                },
                {
                    img: require('../../assets/images/img28.jpg'),
                    title: 'Favorite Place Food Bank',
                    subtitle: 'Bishop Avenue, New York',
                    editTxt: 'Edit',
                    editIcon: <FaRegEdit />,
                    deleteTxt: 'Delete',
                    deleteIcon: <FaRegTrashAlt />,
                    cardLink: '/listing-details'
                },
                {
                    img: require('../../assets/images/img29.jpg'),
                    title: 'Beach Blue Boardwalk',
                    subtitle: 'Bishop Avenue, New York',
                    editTxt: 'Edit',
                    editIcon: <FaRegEdit />,
                    deleteTxt: 'Delete',
                    deleteIcon: <FaRegTrashAlt />,
                    cardLink: '/listing-details'
                },
                {
                    img: require('../../assets/images/img30.jpg'),
                    title: 'Hotel Govendor',
                    subtitle: 'Bishop Avenue, New York',
                    editTxt: 'Edit',
                    editIcon: <FaRegEdit />,
                    deleteTxt: 'Delete',
                    deleteIcon: <FaRegTrashAlt />,
                    cardLink: '/listing-details'
                }
            ],
            userImg: require('../../assets/images/team2.jpg'),
            userName: 'Mark Williamson',
            userbio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            address: '101 Parkview, New York',
            phoneNum: '+7(111)123456789',
            website: 'www.techydevs.com',
        }


    }

    componentDidMount() {

        this.fetchcommunityDeatil()
        $(document).on('click', '.delete-account-info .delete-account, .card-item .card-content-wrap .delete-btn', function (e) {
            $('body').addClass('modal-open').css({ paddingRight: '17px' });
            $(".account-delete-modal").addClass('show')
            e.preventDefault();
        })
        $(document).on('click', '.account-delete-modal .modal-bg, .account-delete-modal .modal-dialog .btn-box .theme-btn', function (e) {
            $('body').removeClass('modal-open').css({ paddingRight: '0' });
            $(".account-delete-modal").removeClass('show')
            e.preventDefault();
        })
        $(document).on('click', '.user-edit-form .edit-form-btn, .user-edit-form .btn-box .theme-btn', function (e) {
            $(".user-edit-form .dropdown-menu, .user-edit-form .dropdown").toggleClass('show');
            $(".user-edit-form .dropdown-menu").css({ position: 'absolute', transform: 'translate3d(0px, -733px, 0px)', top: '0', left: '0', willChange: 'transform' })
            e.preventDefault();
        });
    }

    joinCommunity = async (comid, userid) => {
        const obj = {
            com_id: comid,
            added_by: userid,
            userid: userid
        }
        this.props.dispatch(joinCommunity(obj)).then(() => {
            this.fetchcommunitymember();

        })
    }

    leaveCommunity = async (comid, userid) => {
        const obj = {
            com_id: comid,
            userid: userid
        }
        this.props.dispatch(leaveCommunity(obj)).then(() => {
            this.fetchcommunitymember();
        })


    }

    approveCommunity = async (comid, userid, member) => {
        const obj = {
            memberid: member,
            com_id: comid,
            userid: userid
        }
        this.props.dispatch(approveCommunity(obj)).then(() => {
            this.fetchcommunitymember();
        })


    }



    fetchcommunityDeatil = async () => {
        this.setState({ loading: true })
        let obj = { "communityName": this.props.match.params.communityurl }
        this.props.dispatch(communitydetails(obj)).then(() => {
            if (this.props.communitydetails.length > 0) {
                this.setState({
                    communitydetail: this.props.communitydetails[0]
                })
                this.fetchcommunitypost(this.props.communitydetails[0].com_id);
                this.props.dispatch(fetchRules(this.props.communitydetails[0].com_id))
                this.fetchcommunitymember();

            }
            else {
            this.props.history.push("/error");
            window.location.reload();
            }
        })
    }

    fetchcommunitymember = () => {
        let obj = { "communityId": this.props.communitydetails.length > 0 && this.props.communitydetails[0].com_id }
        this.props.dispatch(fetchcommunitymember(obj)).then(() => {
            if (this.props.communitymember.length > 0) {

                this.setState({
                    communitymember: this.props.communitymember, member: this.props.communitymember.length
                })

            }
            else {

            }
        })
    }

    fetchcommunitypost = async (comid) => {
        await this.props.dispatch(fetchCommunityPost(comid))

    }

    render() {
        const user = this.props.userdetails && this.props.userdetails;
    
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
                                                <img src={this.state.img} alt="author" />
                                                <div className="author-inner-bio">
                                                    <h4 className="author__title font-weight-bold pb-0 mb-1">
                                                    {this.state.communitydetail && ('r/' + this.state.communitydetail.communityName)}
                                                    </h4>
                                                    <p className="author__meta">
                                                    {this.state.communitydetail && (this.state.communitydetail.admin == user.id ? 'Group Admin' : '')}
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
                                                    <span className="la"><AiOutlineUser /></span> Edit
                                                </Link>
                                            </Tab>
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsBookmark /></span>Member
                                                </Link>
                                            </Tab>
                                            <div className="btn-box">
                                                <Link to="/submit" className="theme-btn"><span className="la"><AiOutlinePlusCircle /></span> create post</Link>
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
                                                                <GenericHeader updatepostaftervote={this.fetchcommunityDeatil} />
                                                            </div>
                                                         
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <CommunitySidebar  categoryid={this.state.communitydetail && this.state.communitydetail.category}/>
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
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="user-profile-action">
                                                        <div className="user-pro-img mb-4">
                                                            <img src={this.state.userImg} alt="user" />
                                                            <div className="dropdown">
                                                                <button
                                                                    className="theme-btn edit-btn dropdown-toggle border-0 after-none"
                                                                    type="button" id="editImageMenu"
                                                                    data-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false">
                                                                    <i className="la la-photo"></i> Edit
                                                                </button>
                                                                <div className="dropdown-menu"
                                                                    aria-labelledby="editImageMenu">
                                                                    <div className="upload-btn-box">
                                                                        <form>
                                                                            <input type="file" name="files[]" id="filer_input" multiple="multiple" />
                                                                            <button className="theme-btn border-0 w-100 button-success" type="submit" value="submit">
                                                                                Save changes
                                                                            </button>
                                                                        </form>
                                                                    </div>
                                                                    <div className="btn-box mt-3">
                                                                        <button className="theme-btn border-0 w-100">Remove
                                                                        Photo
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
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
                                                


                                                <div className="delete-account-info">
                                                    <div className="billing-form-item">
                                                        <div className="billing-title-wrap">
                                                            <h3 className="widget-title pb-0 color-text">Delete Account</h3>
                                                            <div className="title-shape margin-top-10px"></div>
                                                        </div>
                                                        <div className="delete-info-content p-4">
                                                            <p className="mb-3">
                                                                <span className="text-warning">Warning:</span> Once you delete your account, there is no going back. Please be certain.
                                                                </p>
                                                            <Button text="delete my account" url="#" className="delete-account border-0" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </TabPanel>
                                    <TabPanel>
                                        <div className="row">
                                            {this.state.cards.map((item, i) => {
                                                return (
                                                    <div key={i} className="col-lg-4 column-td-6">
                                                        <div className="card-item">
                                                            <Link to={item.cardLink} className="card-image-wrap">
                                                                <div className="card-image">
                                                                    <img src={item.img} className="card__img" alt="Card" />
                                                                </div>
                                                            </Link>
                                                            <div className="card-content-wrap">
                                                                <div className="card-content">
                                                                    <Link to={item.cardLink}>
                                                                        <h4 className="card-title mt-0">{item.title}</h4>
                                                                        <p className="card-sub">{item.subtitle}</p>
                                                                    </Link>
                                                                </div>
                                                                <div className="rating-row">
                                                                    <div className="edit-info-box">
                                                                        <button type="button" className="theme-btn delete-btn border-0" data-toggle="modal" data-target=".product-delete-modal">
                                                                            <span className="la">{item.deleteIcon}</span> {item.deleteTxt}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </TabPanel>
                                </div>
                            </div>
                            </div>
                        </Tabs>
                    </div>
                </section>

                {/* Newsletter */ }
        <NewsLetter />

        {/* Footer */ }
                <Footer />

                <ScrollTopBtn />


        {/* Modal */ }
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


            </main >


        );
    }
}

function mapStateToProps(state) {
    const { communitydetails, communitymember } = state.community;
    const { userdetails } = state.auth;
    const { message } = state.message;

    return {
        communitydetails, userdetails, communitymember,
        message
    };
}
export default connect(mapStateToProps)(CommunityDashboard);
