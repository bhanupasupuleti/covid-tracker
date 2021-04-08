import React from 'react';
import { connect } from 'react-redux';

import CardsContainer from '../components/utility/CardsContainer';
import {globalData} from '../reducer/global/actions'

class Global extends React.Component{
    componentDidMount(){
        this.props.globalData()
    }
    render(){
        const stats=this.props.stats
        return(
            <div className="Global">
                <CardsContainer stats={stats}/>
            </div>
        )
    }
}
const mapStateToPros=state=>{
    return {
        stats:state.globalData.stats
    }
}

export default connect(mapStateToPros,{globalData})(Global)