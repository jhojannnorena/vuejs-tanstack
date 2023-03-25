<script setup lang="ts">
import LoadingModal from "@/shared/components/LoadingModal.vue";
import ClientList from "../components/ClientList.vue";
import PaginationNumbers from "../components/PaginationNumbers.vue";
import useClients from "../composables/useClients";

const { isLoading, clients, currentPage, totalPages, getPage } = useClients();
</script>

<template>
  <div class="wrapper">
    <h3>Listado de Clientes</h3>

    <!-- ! Client List -->
    <ClientList :clients="clients" />

    <!-- Pagination Numbers -->
    <PaginationNumbers
    v-if="clients.length > 0"
      :totalPages="totalPages"
      :currentPage="currentPage"
      @pageChanged="getPage"
    />

    <!-- Loading Modal -->
    <LoadingModal v-if="isLoading" />
  </div>
</template>

<style scoped>
h3{
  text-align: center;
  margin-bottom: 1em;
}
</style>
