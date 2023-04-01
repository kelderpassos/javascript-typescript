<template>
  <div class="container">
    <div>
      <aside class="sidebarContainer">
        <img src="@/assets/logo.png" alt="cashforce's logo" />
        <div class="handshakeContainer">
          <img src="@/assets/handshake.svg" alt="image of a handshake" />
          <p>Notas Fiscais</p>
        </div>
      </aside>
    </div>
    <main class="mainContainer">
      <div>
        <header>
          <section class="invoiceHeader">
            <img src="@/assets/hands.svg" alt="image of a handshake" />
            <h3>Notas Fiscais</h3>
          </section>
          <p>Visualize as notas fiscais que você tem</p>
        </header>
        <div class="tableContainer">
          <InvoiceTable invoices="invoices.value" />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InvoiceTable from "@/components/InvoiceTable.vue";

export default defineComponent({
  name: "InvoiceView",
  components: { InvoiceTable },
});
</script>

<style scoped>
.container {
  display: flex;
}

.sidebarContainer {
  display: flex;
  flex-direction: column;
  justify-content: start;

  background-color: #fbfdfe;

  height: 100vh;
  width: 25rem;

  border-radius: 0.93rem 0px 0px 0.93rem;
  box-shadow: 4px 4px #e1e5ec80;
}

.sidebarContainer > img {
  width: 12rem;
  margin: 1.5rem;
}

.handshakeContainer {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4rem;
  width: 12rem;

  border-left: 0.35rem solid #00ad8c;
  border-start-start-radius: 0.25rem;
}

.handshakeContainer p {
  color: #00ad8c;

  font-size: 14px;
  font-weight: 500;
  line-height: 18.23px;

  margin-left: 1.2rem;
}

.handshakeContainer > img {
  height: 14.0625px;
  width: 24px;
  margin-top: 0.1rem;
}

.mainContainer {
  height: 100vh;
  padding: 4rem;
  background-color: #ffff;
}

header {
  height: 5rem;
}

.invoiceHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
}

.invoiceHeader > img {
  margin-right: 10px;
  width: 2rem;
}

.invoiceHeader h3 {
  display: flex;
  flex-direction: row;
  align-items: center;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;

  width: 182px;
  height: 28px;
  color: #021b51;
}

.mainContainer p {
  color: #727d94;
  margin-top: 0.875rem;
}
</style>
