<script setup lang="ts">
import LoadingModal from "@/shared/components/LoadingModal.vue";
import { useRoute, useRouter } from "vue-router";
import useClient from "../composables/useClient";

import { watch } from "vue";

const route = useRoute();
const router = useRouter()

const { client, isLoading, isError, clientMutation, updateClient, isUpdatingSuccess, isUpdating } = useClient(+route.params.id);

// const updateClient = async (client: Client): Promise<Client> => {
//   //const { id, ...rest } = client; //Sacar id para que no pueda ser modificado
//   const { data } = await clientsApi.patch<Client>(
//     `/clients/${client.id}`,
//     client
//   );
//   const queries = queryClient
//     .getQueryCache()
//     .findAll(["clients?page="], { exact: false });
//     console.log(queries);
//   //queries.forEach(query => query.reset())
//   //queries.forEach((query) => query.fetch());
//   return data;
// };

watch(clientMutation.isSuccess, () => {
  setTimeout(() => {
    clientMutation.reset();
  }, 2000);
});

watch(isError, () => {
   if (isError.value)
   router.replace("/clients")
});

</script>

<template>
  <div class="wrapper">
    <h1>Cliente</h1>
    <div class="alert">
    <h4 v-if="isUpdating" class="transition">Guardando...</h4>
    <h4 v-if="isUpdatingSuccess" class="transition">Guardado</h4>
  </div>
    <LoadingModal v-if="isLoading" />

    <div v-if="client">
      <form @submit.prevent="updateClient(client!)">
        <input
          type="text"
          placeholder="Nombre del Cliente"
          v-model="client.name"
        />
        <br />
        <input type="text" placeholder="Dirección" v-model="client.address" />
        <br />
        <button type="submit" :disabled="isUpdating">
          Guardar
        </button>
      </form>
      <code> {{ client }} </code>
    </div>
  </div>
</template>

<style scoped>
input {
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
}

button {
  margin-bottom: 10px;
}

.transition{
   transition: all 5s;
}

h1{
  text-align: center;
}

.alert{
  color: red;
  margin-bottom: 1em;
  height: 20px;
}
</style>
