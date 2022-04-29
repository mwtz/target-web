import { useSelector } from 'react-redux';

import { selectTopic, useGetTopicsQuery } from 'services/topics/topics';

const useTopics = () => {
  useGetTopicsQuery();

  const { topics } = useSelector(selectTopic);

  return {
    topics,
  };
};

export default useTopics;
