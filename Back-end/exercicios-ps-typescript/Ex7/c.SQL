-- c) Liste as unidades de medida e a quantidade de produtos que existem para cada uma.
SELECT UnidadeMedida, COUNT(Nome) AS Produtos FROM CMU.Produto GROUP BY UnidadeMedida;



-- INSIRA SEU SQL AQUI ⬆⬆⬆