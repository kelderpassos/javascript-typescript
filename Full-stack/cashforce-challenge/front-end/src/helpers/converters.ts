export const convertCurrency = (value: string) =>
  Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

export const convertDate = (date: string): String => {
  const createDate = new Date(date);

  let month = "" + (createDate.getMonth() + 1);
  let day = "" + createDate.getDate();
  const year = createDate.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};

export const convertStatus = (digit: string) => {
  const statusList = [
    "Pendente de confirmação",
    "Pedido confirmado",
    "Não reconhece o pedido",
    "Mercadoria não recebida",
    "Recebida com avaria",
    "Devolvida",
    "Recebida com devolução parcial",
    "Recebida e confirmada",
    "Pagamento Autorizado",
  ];

  return statusList[Number(digit)];
};
