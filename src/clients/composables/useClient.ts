import { ref, watch, computed } from 'vue';
import type { Client } from "../interfaces/client";
import clientsApi from "@/api/clients-api";
import { useMutation, useQuery } from "@tanstack/vue-query";

const getClient = async (id: number): Promise<Client> => {
  const { data } = await clientsApi.get(`/clients/${id}`);
  return data;
};

const updateClient = async (client: Client): Promise<Client> => {
    const { data } = await clientsApi.patch<Client>(
      `/clients/${client.id}`,
      client
    );
    return data;
};

const useClient = (id: number) => {
  const client = ref<Client>();

  const clientMutation = useMutation(updateClient, {
    onSuccess(data) {
      console.log(data);
    },
  });
  

  const { isLoading, data, isError } = useQuery(["client", id], () => getClient(id), {
    retry: false
    //cacheTime: 0 //-  Para que siempre tenga que hacer una petición
  });

  watch(
    data,
    () => {
      if (data.value) {
        client.value = {... data.value};
      }
    },
    { immediate: true }
  );

  return {
    isLoading,
    client,
    isError,
    clientMutation,

    //Metodos
    updateClient: clientMutation.mutate,

    isUpdating: computed(() => clientMutation.isLoading.value),
    isUpdatingSuccess: computed(() => clientMutation.isSuccess.value),
    isErrorUpdating: computed(() => clientMutation.isError.value)
    
  };
};

export default useClient;
