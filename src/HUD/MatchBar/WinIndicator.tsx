import React from 'react';
import { Team } from 'csgogsi';
import { i18n } from '../../translate/i18n';

export default class WinAnnouncement extends React.Component<{ team: Team | null, show: boolean }> {
    render() {
        const { team, show } = this.props;
        if(!team) return null;
        return <div className={`win_text ${show ? 'show' : ''} ${team.orientation} ${team.side}`}>
                {i18n.t('MatchBar.winnerTeam')}
            </div>   
    }
}
