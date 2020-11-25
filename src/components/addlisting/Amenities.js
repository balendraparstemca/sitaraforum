import React, {Component} from 'react';
import { connect } from "react-redux";
class Amenities extends Component {
    state = {
        items: []
    }

   
    render() {
        const {  amenties } = this.props;
        const items=amenties && amenties.length ?  amenties.map(item => {
            return { id: `${item.amenties_id}`, title: `${item.amenties_name}` };
        }) : [{
            id: 0,
            title: 'no amenties feched'
        }];
        return (
            <>
                <div className="billing-form-item">
                    <div className="billing-title-wrap">
                        <h3 className="widget-title pb-0">Amenities</h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">

                        {items.map(item => {
                            return (
                                <div className="custom-checkbox" key={item.id}>
                                    <input type="checkbox" id={'chb'+item.id} />
                                    <label htmlFor={'chb'+item.id}> {item.title}</label>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </>
        );
    }
}


function mapStateToProps(state) {
    const { amenties } = state.common;
    return {
      amenties,
       
    };
}
export default connect(mapStateToProps)(Amenities);