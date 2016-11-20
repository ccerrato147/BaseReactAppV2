import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, fromJS, List } from 'immutable';
import DateInput from './DateInput';
import moment from 'moment';
import { setField, setFormData } from '../../actions/Actions';
import TextInput from '../common/TextInput';

class ApproverFirm extends Component {
    constructor(props) {
        super(props);
    }
    handleClick(selected){
        //set state
        const approveInput = this.props.approveInput,
              dateInput = this.props.dateInput,
              today = moment().toISOString();
        let dataJson = {};
        dataJson[approveInput] = selected;
        dataJson[dateInput] = today;
        const dataMap = Map(dataJson);
        this.props.setFormData(this.props.form, dataMap);
    }
    render() {
        let { className, id, label, stringDate, form, dateInput, approveInput, user, aprobador, aprobado } = this.props;
        let defaultClasses = 'Firm-container ';
        let classes = defaultClasses.concat(className);
        let today = moment();
        let handleApprove = this.handleClick.bind(this, 'si');
        let handleReject = this.handleClick.bind(this, 'no');
        return (
            <div className={classes}>
                <span className='Firm-label'>{label}</span>
                <span className='Firm-label'><u>{aprobador}</u></span>
                <DateInput className='' 
                    label='Fecha:' 
                    stringDate={today} 
                    input=''
                    form=''
                    disabled={true} />
                { (aprobado !== undefined && aprobado !== null) ?
                    ( (aprobado === 'si') ?
                        <span className='Firm-approvedImages'>aprobado</span>
                        :
                        <span className='Firm-approvedImages'>Rechazado</span>
                    )
                    :
                    ( (aprobador === user) &&
                        <div className='mui-container'>
                            <button className="mui-btn mui-btn--primary" onClick={handleApprove}>Aprobar</button>
                            <button className="mui-btn mui-btn--primary" onClick={handleReject}>Rechazar</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default connect(null, { setField, setFormData })(ApproverFirm);