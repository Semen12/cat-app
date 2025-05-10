import React from 'react';
import styles from './CatImage.module.scss';

type Props = {
  imageUrl: string;
};

const CatImage: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div className={styles.wrapper}>
      {imageUrl && <img src={imageUrl} alt="A cat" />}
    </div>
  );
};

export default CatImage;
