import React from 'react';
import styles from './Controls.module.scss';

type Props = {
  enabled: boolean;
  autoRefresh: boolean;
  onToggleEnabled: () => void;
  onToggleAutoRefresh: () => void;
  onGetCat: () => void;
};

const Controls: React.FC<Props> = ({
  enabled,
  autoRefresh,
  onToggleEnabled,
  onToggleAutoRefresh,
  onGetCat
}) => {
  return (
    <div className={styles.controls}>
      <label>
        <input type="checkbox" checked={enabled} onChange={onToggleEnabled} />
        Enabled
      </label>

      <label>
        <input
          type="checkbox"
          checked={autoRefresh}
          onChange={onToggleAutoRefresh}
          disabled={!enabled}
        />
        Auto-refresh every 5 second
      </label>

      <button onClick={onGetCat} disabled={!enabled}>
        Get cat
      </button>
    </div>
  );
};

export default Controls;
