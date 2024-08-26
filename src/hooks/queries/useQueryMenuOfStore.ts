import { useQuery } from '@tanstack/react-query';
import menuOfStoreApi from '../../Api/MenuOfStore/menuOfStore';

const useQueryMenuOfStore = (storeId: string | number) => {
  const key = ['menuOfStore', storeId];
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const res = await menuOfStoreApi.getById(storeId);
      return res;
    },
  });
};

export default useQueryMenuOfStore;
