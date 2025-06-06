//Inventário Alpha
let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];
  
  //Inventário Beta
  let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];

  console.log("Inventário Alpha:");
  console.table(inventarioAlpha);
  console.log(`Inventário Beta:`);
  console.table(inventarioBeta);


// 1. Removendo o último item da lista Alpha
let removeUltimoItemAlpha = inventarioAlpha.pop();
console.log(`\nInventário Alpha com último item removido:`);
console.table(inventarioAlpha);


//2. Removendo o último item da lista Beta
let removeUltimoItemBeta = inventarioBeta.pop();
console.log(`Inventário Beta com último item removido:`);
console.table(inventarioBeta);


//3. Adicionando novos itens no final da lista Alpha
inventarioAlpha.push(
    ["Moeada Antiga", "Terra", 5000],
    ["Fósseis", "Terra", 6200],
    ["Pedra de Ouro", "Terra", 9999],
);
console.log(`\nInventário Alpha com novos itens no final:`);
console.table(inventarioAlpha);


//4. Adicionando novos itens no final da lista Beta
inventarioBeta.push(
    ["Telescópio Espacial", "Kleper", 4560],
    ["Objeto não identificado", "Kleper", 3000],
);
console.log(`Inventário Beta com novos itens no final:`);
console.table(inventarioBeta);


//5. Movendo um item para o topo da lista Alpha
let itemMovido = inventarioAlpha[3];
inventarioAlpha.unshift(itemMovido);
let removeItem = inventarioAlpha.splice(4, 1);

console.log(`\nInventário Alpha com o item 'Minério dourado' no início:`);
console.table(inventarioAlpha);


//6. Movendo um item para o topo da lista Beta
let itemMovidoBeta = inventarioBeta[10];
inventarioBeta.unshift(itemMovidoBeta);
let removeItemBeta = inventarioBeta.splice(11, 1);

console.log(`Inventário Beta com o item 'Lanterna Estelar' no início:`);
console.table(inventarioBeta);


//7. Remove primeiro item da lista Alpha
let removePrimeiroItemAlpha = inventarioAlpha.shift();
console.log(`\nInventário Alpha com o primeiro item romovido:`);
console.table(inventarioAlpha);


//8. Remove primeiro item da lista Beta
let removePrimeiroItemBeta = inventarioBeta.shift();
console.log(`Inventário Beta com o primeiro item romovido:`);
console.table(inventarioBeta);


//12. Transformando lista em string
console.log(`\nInventário Beta (10 primeiros itens): ${inventarioBeta.slice(0, 10)}`);


//13. Gera nova lista com 5 primeiros itens da Beta
let novaLista = inventarioBeta.slice(0, 5);
console.log(`\n5 primeiros itens da lista Beta:`);
console.table(novaLista);


//14. Separa últimos 10 itens do Alpha
let novaListaAlpha = inventarioAlpha.slice(17, 27);
console.log(`\n10 últimos itens da lista Alpha:`);
console.table(novaListaAlpha);


//15. Substituindo item do Alpha
let substituiItemAlpha = inventarioAlpha.splice(5, 1, ["Novo Fóssil Estelar", "Lua", 92000]);
console.log('\nInventário Alpha com o item 5 substituído:')
console.table(inventarioAlpha);


//16. Removendo itens do Beta
let removerItemBeta = inventarioBeta.splice(11, 2);
console.log('\nInventário Beta com dois itens removidos substituído:')
console.table(inventarioBeta);


//17. Juntando os arrays
let inventarioUnificado =  inventarioAlpha.concat(inventarioBeta);
console.log(`\nInventários Unificados:`);
console.table(inventarioUnificado);


//18. Juntando parte dos itens de cada array
let cincoItensAlpha = inventarioAlpha.slice(0, 5);
let cincoItensBeta = inventarioBeta.slice(0, 5);

let inventariosJuntos = cincoItensAlpha.concat(cincoItensBeta);
console.log(`\nListas juntas:`);
console.table(inventariosJuntos);


//26. Invertendo ordem de itend Alpha
let quinzePrimeirosItens = inventarioAlpha.slice(0,15);
let itensInvertidos = quinzePrimeirosItens.reverse();
let outrosItens = inventarioAlpha.slice(15, 27);

let listaFinal = itensInvertidos.concat(outrosItens);
console.log("Alpha com 15 primeiros itens invertidos:")
console.table(listaFinal);