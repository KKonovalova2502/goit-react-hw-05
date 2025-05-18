import { SyncLoader } from 'react-spinners';
import style from './Loader.module.css';

const Loader = () => (
  <div className={style.wrapper}>
    <SyncLoader color="#ffbb3c" />
  </div>
);

export default Loader;
