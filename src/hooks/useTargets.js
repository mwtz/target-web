import { useSelector } from 'react-redux';
import { selectTarget } from 'services/target/target';

const useTargets = () => {
  const { targets } = useSelector(selectTarget);

  return {
    targets,
  };
};

export default useTargets;
