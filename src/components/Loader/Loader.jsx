import { TailSpin } from 'react-loader-spinner';

import s from './Loader.module.scss';

function Loader() {
  return (
    <div className={s.loader}>
      <TailSpin height="100" width="100" color="grey" ariaLabel="loading" />
    </div>
  );
}

export default Loader;
