import { createRouter, createWebHistory } from "vue-router";
import InvoiceView from "../views/InvoiceView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      redirect: "invoices",
    },
    {
      path: "/invoices",
      name: "invoice",
      component: InvoiceView,
    },
  ],
});

export default router;
