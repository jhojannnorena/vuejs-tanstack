import clientsApi from "../../api/clients-api";
import type { Client } from "../interfaces/client";
import { useQuery } from "@tanstack/vue-query";
import { useClientsStore } from "../../store/clients";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const getClients = async (page: number): Promise<Client[]> => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(true), 1500);
  });

  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
  return data;
};

const useClients = () => {
  const store = useClientsStore();
  const { currentPage, clients, totalPages } = storeToRefs(store);

  const { isLoading, data } = useQuery(["clients?page=", currentPage], () =>
    getClients(currentPage.value)
  );

  watch(
    data,
    (clients) => {
      if (clients) store.setClients(clients);
    },
    { immediate: true }
  );

  return {
    //Propiedades
    isLoading,
    clients: clients,
    currentPage,
    totalPages,

    //Metodos
    getPage(page: number) {
      store.setPage(page);
    },

    
    // Es igual a lo anterior
    //getPage: store.setPage
  };
};

export default useClients;
