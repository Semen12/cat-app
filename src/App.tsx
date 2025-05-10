import React, { useEffect, useState, useCallback } from 'react';
import styles from './App.module.scss';
import Controls from './components/Controls/Controls';
import CatImage from './components/CatImage/CatImage';

const App: React.FC = () => {
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const fetchCat = useCallback(async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    setImageUrl(data[0].url);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (enabled && autoRefresh) {
      timer = setInterval(fetchCat, 5000);
    }
    return () => clearInterval(timer);
  }, [autoRefresh, enabled, fetchCat]);

  return (
    <div className={styles.container}>
      <Controls
        enabled={enabled}
        autoRefresh={autoRefresh}
        onToggleEnabled={() => setEnabled((prev) => !prev)}
        onToggleAutoRefresh={() => setAutoRefresh((prev) => !prev)}
        onGetCat={fetchCat}
      />
      <CatImage imageUrl={imageUrl} />
    </div>
  );
};

export default App;
