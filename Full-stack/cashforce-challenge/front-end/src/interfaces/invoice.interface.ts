export interface Invoice {
  buyers: {
    name: string;
  };
  cnpj: {
    cnpj: string;
  };
  emissionDate: string;
  orderNumber: string;
  orderStatusBuyer: string;
  providers: {
    name: string;
  };
  value: string;
}
