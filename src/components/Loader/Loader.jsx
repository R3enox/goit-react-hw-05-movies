import { TailSpin } from 'react-loader-spinner';
import { StyledLoader } from './StyledLoader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledLoader>
  );
};

export default Loader;
