import React from 'react';

import { i18n } from '../../translate/i18n';

class LossBox extends React.PureComponent<{ active: boolean, side: 'CT' | 'T' }>{
    render(){
        return <div className={`loss-box ${this.props.side} ${this.props.active ? 'active':''}`}></div>
    }
}

interface Props {
    side: 'left' | 'right',
    team: 'CT' | 'T',
    loss: number,
    equipment: number,
    money: number,
    show: boolean,
}

export default class Money extends React.PureComponent<Props> {

	render() {
		return (
			<div className={`moneybox ${this.props.side} ${this.props.team} ${this.props.show ? "show" : "hide"}`}>
                <div className="loss_container">
                    <LossBox side={this.props.team} active={(this.props.loss-1400)/500 >= 4} />
                    <LossBox side={this.props.team} active={(this.props.loss-1400)/500 >= 3} />
                    <LossBox side={this.props.team} active={(this.props.loss-1400)/500 >= 2} />
                    <LossBox side={this.props.team} active={(this.props.loss-1400)/500 >= 1} />
                </div>
                <div className="money_container">
                    <div className="title">{i18n.t('SideBoxes.lossBonus')}</div>
                    <div className="value">${this.props.loss}</div>
                </div>
                <div className="money_container">
                    <div className="title">{i18n.t('SideBoxes.teamMoney')}</div>
                    <div className="value">${this.props.money}</div>
                </div>
                <div className="money_container">
                    <div className="title">{i18n.t('SideBoxes.eqpValue')}</div>
                    <div className="value">${this.props.equipment}</div>
                </div>
            </div>
		);
	}

}
