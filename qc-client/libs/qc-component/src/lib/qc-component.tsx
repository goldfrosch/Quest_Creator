import styles from './qc-component.module.css';

/* eslint-disable-next-line */
export interface QcComponentProps {}

export function QcComponent(props: QcComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to QcComponent!</h1>
    </div>
  );
}

export default QcComponent;
