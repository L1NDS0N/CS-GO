import React from "react";
import { PhaseRaw } from "csgogsi-socket";
import { i18n } from '../../translate/i18n';

interface IProps {
    phase: PhaseRaw | null
}

export default class Pause extends React.Component<IProps> {
    render() {
        const { phase } = this.props;
        return (
            <div id={`pause`} className={phase && phase.phase === "paused" ? 'show' : ''}>
                {i18n.t('PauseTimeout.pause')}
            </div>
        );
    }
}
