<template>
  <div class="tableContainer">
    <table>
      <thead>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(invoice, i) in invoices" v-bind:key="i" class="list">
          <td>{{ invoice.orderNumber }}</td>
          <td>{{ invoice.buyers.name }}</td>
          <td>{{ invoice.providers.name }}</td>
          <td>{{ convertDate(invoice.emissionDate) }}</td>
          <td class="value">{{ convertCurrency(invoice.value) }}</td>
          <td :class="`color-${invoice.orderStatusBuyer}`">
            {{ convertStatus(invoice.orderStatusBuyer) }}
          </td>
          <td>
            <button class="providerButton">Dados do cedente</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useInvoiceStore } from "@/stores/invoices";
import {
  convertDate,
  convertCurrency,
  convertStatus,
} from "@/helpers/converters";

export default defineComponent({
  setup() {
    const store = useInvoiceStore();

    onMounted(() => {
      store.fetchInvoices();
    });

    const { invoices } = storeToRefs(store);

    return {
      invoices,
      convertDate,
      convertCurrency,
      convertStatus,
    };
  },
});
</script>
<style scoped>
.tableContainer {
  height: 100vh;
}

table {
  border-collapse: separate;
  border-spacing: 0 1rem;
  text-align: center;
  width: 100%;
}
th {
  color: #a1a8b8;
  font-size: 0.75rem;
  font-weight: 700;
  padding-bottom: 1rem;
  width: 120px;
}

tr {
  border: 1px solid #dfe2eb;
  border-radius: 6px;
  padding: 1rem;
}

td {
  color: #4d5566;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 1rem 0;
  margin-bottom: 1rem;
}

.list {
  box-shadow: 1px 1px 1px 1px #dfe2eb;
  border-radius: 0.5rem;
}

.value {
  color: #00ad8c;
}

.color-0 {
  color: #f4a508;
}

.color-7 {
  color: #00ad8c;
}

.providerButton {
  margin-right: 1rem;
  width: 165px;
  height: 32px;

  border: 1px solid #cad3ff;
  border-radius: 24px;

  color: #727d94;
  background-color: #ffff;
  opacity: 10;
}

.providerButton {
  margin-right: 1rem;
  width: 165px;
  height: 32px;

  border: 1px solid #cad3ff;
  border-radius: 24px;

  color: #727d94;
  background-color: #ffff;
  opacity: 10;
}

.providerButton:hover {
  cursor: pointer;
  background-color: #dfe2eb;
  transition: background-color 0.1s;
}
</style>
