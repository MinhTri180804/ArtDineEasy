import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../utils/constant';
import storeDetailsApi from '../../Api/StoreDetails/storeDetailsApi';

const useQueryStore = (id: string | number) => {
  id = id.toString();
  const key = [QUERY_KEY.STORE, id];
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const res = await storeDetailsApi.get(id);
      return res.data;
    },
  });
};

export default useQueryStore;
