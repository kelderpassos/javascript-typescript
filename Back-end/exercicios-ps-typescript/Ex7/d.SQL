-- d) Liste o nome e o estoque de todos os produtos, no dia 31/12/2022 (Dica: Use "LEFT JOIN").
SELECT P.Nome, IFNULL(SUM(T.Quantidade), 0) AS Estoque
FROM CMU.Produto AS P
LEFT JOIN CMU.Transacao AS T
ON P.IdProduto = T.IdProduto
AND T.Data < '2023-01-01'
GROUP BY P.Nome;

-- INSIRA SEU SQL AQUI ⬆⬆⬆

