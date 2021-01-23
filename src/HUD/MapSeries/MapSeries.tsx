import React from "react";
import * as I from "csgogsi-socket";
import { Match, Veto } from '../../api/interfaces';
import TeamLogo from "../MatchBar/TeamLogo";
import "./mapseries.scss";
import { i18n } from '../../translate/i18n';

interface IProps {
    match: Match | null;
    teams: I.Team[];
    isFreezetime: boolean;
    map: I.Map
}

interface IVetoProps {
    veto: Veto;
    teams: I.Team[];
    active: boolean;
}

class VetoEntry extends React.Component<IVetoProps> {
    render(){
        const { veto, teams, active } = this.props;
        return <div className={`veto_container ${active ? 'active' : ''}`}>
            <div className="veto_map_name">
                {veto.mapName}
            </div>
            <div className="veto_picker">
                <TeamLogo team={teams.filter(team => team.id === veto.teamId)[0]} />
            </div>
            <div className="veto_winner">
                <TeamLogo team={teams.filter(team => team.id === veto.winner)[0]} />
            </div>
            <div className="veto_score">
                {Object.values((veto.score || ['-','-'])).sort().join(":")}
            </div>
            <div className='active_container'>
                <div className='active'>{i18n.t('MapSeries.playing')}</div>
            </div>
        </div>
    }
}

export default class MapSeries extends React.Component<IProps> {

    render() {
        const { match, teams, isFreezetime, map } = this.props;
        if (!match || !match.vetos.length) return null;
        return (
            <div className={`map_series_container ${isFreezetime ? 'show': 'hide'}`}>
                <div className="title_bar">
                    <div className="picked">{i18n.t('MapSeries.picked')}</div>
                    <div className="winner">{i18n.t('MapSeries.winner')}</div>
                    <div className="score">{i18n.t('MapSeries.score')}</div>
                </div>
                {match.vetos.filter(veto => veto.type !== "ban").map(veto => {
                    if(!veto.mapName) return null;
                    return <VetoEntry veto={veto} teams={teams} active={map.name.includes(veto.mapName)}/>
                })}
            </div>
        );
    }
}
