import { Vortex } from 'react-loader-spinner';
import styled from '@emotion/styled';

const Loader = () => {
  return (
    <WrapLoad>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </WrapLoad>
  );
};
export default Loader;

const WrapLoad = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
