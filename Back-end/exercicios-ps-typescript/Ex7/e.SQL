-- e) Liste o nome, o estoque mínimo e o estoque atual de todos os produtos, cujo estoque atual está abaixo do estoque mínimo (Dica: Use "HAVING").
SELECT P.Nome, P.EstoqueMinimo, IFNULL(SUM(T.Quantidade), 0) AS EstoqueAtual
FROM CMU.Produto AS P
LEFT JOIN CMU.Transacao AS T
ON P.IdProduto = T.IdProduto
GROUP BY P.Nome, P.EstoqueMinimo
HAVING P.EstoqueMinimo > EstoqueAtual;

-- INSIRA SEU SQL AQUI ⬆⬆⬆
