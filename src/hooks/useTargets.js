import { useSelector } from 'react-redux';
import { selectTarget, useGetTargetsQuery } from 'services/target/target';

const useTargets = () => {
  useGetTargetsQuery();
  const { targets } = useSelector(selectTarget);
  return {
    targets,
  };
};

export default useTargets;
