import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../utils/constant';
import categoryOfStoreApi from '../../Api/CategoryOfStore';

const keys = [QUERY_KEY.CATEGORY_OF_STORE];

const useQueryCategoryOfStore = () => {
  return useQuery({
    queryKey: keys,
    queryFn: async () => {
      const res = await categoryOfStoreApi.getAll();
      return res.data;
    },
  });
};

export default useQueryCategoryOfStore;
