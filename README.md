# SARRAFO's CS:GO Config 🕹
by L1NDS0N "SARRAFO" FR4NÇ4

### Método de instalação automatizada
- [Primeiramente, clique aqui para baixar os arquivos de instalação](https://github.com/L1NDS0N/CS-GO/archive/master.zip), em seguida, extraia onde desejar.
- Execute o arquivo "Instalador de configuração", e insira o seu SteamID64.
  - Para encontrar seu SteamID64, consulte a página [SteamIdFinder](https://steamidfinder.com/), e busque pelo id do seu perfil Steam. Como no exemplo abaixo:
- ![Exemplificação do SteamIdFinder](https://lh3.googleusercontent.com/SZvxE6B2z1Cvr9pzOVp7LHW2TMv4gs71G4lvvcmAUqB-xhwXUpZ4GVsdv3Vit5iQwNgEFuqesKoySybH9JQv3OWtT-A8I73IlKkyB3otcyXReFK-QksLbXE-y5WCqSkSoNvQgYtedODy8hg5O-E_7dJMKXb2L8GOJcC4pebBQvvvsZ1oGEnUFta1GjudiSTnKGUDhQjbEmnkb8KAw3rpx1zvJ9Mf-3TM-fScHwqoEi2ISj9ImswyO9n3_RC3L2nLLpC8diHbb1LOM9zCKx69rZ_k-I4ulFN6ithVPZ36YbaG7ad7eQMu86BfJnLQOomYaNYwvC1yOaOd80Ia8UAw6Dlq0RiKU9nx85bbFDNpDburknvLUV5smh2EGMK-sZSOJRBhYaH4otkppvqTQNHTSOOgOpIJmPkeKD3D6PavbAkLu4YfLxxQAp91f4FyqyxAALur8pM76Aq5Cdfkzq5SQDnhiZzht48oJ32x5JiNvqG_u4cCTOfQb1H6zIDNOuuBQKoYsJiKyFBDQTAsrbSLKZFzJmEcNF_P-n_unZTipzVKai1yC8Y_ix2JhttDf7Ca5DqovKoFzSHUTOZp8BXY1HzxgglJHNcAcoQEhL7IUeIMOTkQ9HN_ChSnwOWmZF8Tl0zPuw0k5whhVNgKFQaDgQ0vsDEdo94OTpknmOpTpjVo8ZEWo7nt1AXsTCjUvaR9cCWNOe8p2clRqNG3hGYzOp99Hc1z9UfbQhbOlrdMaktoL4Caq35Sf2o=w957-h553-no)

- Este id pode ser encontrado em: 
- ![Exemplificação de Id no Perfil da Steam](https://lh3.googleusercontent.com/UlE5iutIf5SBopQQqJkMk_lPH-qPRlu6p5Hp3xvLCzmeG788lmejX6r-j2NIJkyglCYxmFbTU9CVUwneP37qiuOuoxbBN6Ij2DmKHw7FS3y6pptEDmy9yUe36yHzUCVD09tFwF4ym-knCktckA1qQwVYfcd2x9WPt9eutgLzk7QQOa48d3MmlP5p3e9uvvPR9iW8AV24PC6xU2BOrLmMYTWFcB__2qhTHXPPeS8vgih6yzQgN_1An_yHhkAK-AJ4D6hXBdONBf0xI4xnJ0k_kF0RTwi7RWrrx4-ZOdlbuqvWj6RNOb0fbw0UTehBA4EGMmrWtUOEFoa0bzvUv1Qfw4hIy9tIn16mC7g641Jkjx-1HpqddFbt0kFT3FJT7xLryJ-c-6bqseXamAUNMNLsn2m7WadWtNl8Oyk_KWifo-rZIndLsRGtz6qckfQDD1xXk2nPnGxSPs7ZOO14hCkh7_XWPmw9_-1PFVNpVSspJCYaEaZp4Ou5cdCLpSm9N-SQMaZ-TreCpAaVM-SHphbyYoOtrUtrpFiu1BQ5iGgYFhvwW3pE-AfCszCquXy77v3lfMFsTiRqDRsY6o5CSuF5Pi7zCmHej1DQMgNGejUsJVQ8ZvjxcUpJO0A68-xi8SBHfUx9c05lPKzzYd9uyylJ1vuPiz-axcmCSZPDwynsZkVNGLu7S9S67Ul_fcjdVvh3qesdzvZIq23pW5RgzWf3Y-kd9t4X4sLFfigisFRSG9KXqX52lPOogAM=w1365-h522-no)

### Método de instalação manual:

Baixe e extraia estes arquivos em: `...Steam\userdata\<seuSteamId64>\730\`

> O id de usuário (SteamId64) é uma numeração única para cada usuário, nas pastas de userdata pode haver várias pastas se você já tiver logado com mais de uma conta da steam no seu computador, senão, só haverá a sua.
> Exemplo de caminho com id de usuário: `C:\Program Files (x86)\Steam\userdata\1006795664\730\`

### Modo de uso:
> Inicialmente, deve-se aplicar os parâmetros de inicialização do CS:GO abaixo:

```
-novid 
-noforcemaccel 
-usenoforcedmparms 
-refresh 144 
-freq 144 
-high 
-nod3d9ex 
-threads 8 
-tickrate 128 
-nojoy 
-noaafonts 
-d3d9ex 
+fps_max 144 
+cl_interp 0 
+cl_interp_ratio 1 
+rate 128000 
+cl_updaterate 128 
+cl_cmdrate 128 
+mat_queue_mode 2 
+exec autoexec.cfg 
```
> para aplicar as opções de inicialização, vá até: Steam > Biblioteca > Counter-Strike: Global Offensive (botão direito) > Propriedades > Definir Opções de Inicialização...
> Depois de executados os passos acima, inicie o Counter-Strike, em seguida abra o console de desenvolvedor, execute o seguinte comando: 
``` 
exec autoexec
```
> Para executar automaticamente, o comando acima, abra o menu executar do windows, através do atalho `Windows + R` e execute: 
```
%CSGO%
```
> Como exemplificado na imagem abaixo:
- ![Executando variável de ambiente no windows executar](https://lh3.googleusercontent.com/lzvRvC7m-u8KYPmFWy46n8sYL5jgIWrmCsdih4bpQoyOV5v2GmWvR7eZ4FYbzwA1xq9hApM6KDqYCNB2AE7QZoTMhr3N7d1-shjmQahi3XBvXTXXRgvNHOwALzMKuhxjVH6DECYkOg=w398-h207-no)

## Features
Que há de novo?

- [x] Gráficos:
Para visualizar o fps, segure a tecla TAB, e lhe será exibido abaixo do gráfico de pontuações.

- [x] Bunnyhopping:
Para utilizar o Bunnyhop, verifique se ele está ativo no botão Mouse3 (scroll do mouse).
Ps.: O botão de bunnyhop pode facilmente ser ativado e desativado pressionando o botão do mouse3.
Para utilizar os pulos do bhop, utilize o scroll do mouse girando para cima e para baixo.

- [x] Jump Throw:
Para utilizar o jump throw é necessário ter um mouse com macros. Para efetuar o lançamento de granadas com jumpthrow, pressione o botão mouse5.

- [x] Smoke throw:
Para visualizar a crosshair fullsize para alinhamento e angulação de smokes, pressione a tecla v.

- [x] Voice record:
Para falar, segure a tecla Caps Lock.

- [x] Voice enable:
Para desabilitar o chat de voz dos companheiros de sala, basta pressionar a telca ".".

- [x] Voice scale:
A escala de voz, é o volume da voz dos seus companheiros de time. Para alterar a escala de som, bata utilizar a tecla "-".

- [x] Volume:
O Volume geral pode ser regulado através da tecla "+".

- [x] Crosshair colors:
Para alterar as cores da mira, basta usar o botão mouse4

- [x] Change hands:
Para mudar a visualização do POV de esquerdo para direito, basta pressionar a tecla alt.

- [x] Healthshot:
C4 e Medical Kit, ambos estão bindados na tecla 5.

- [x] Quit:
Para quitar do jogo basta pressionar a tecla "end".

- [x] Disconnect:
Para desconectar da sala, e voltar para o lounge, basta pressionar a tecla "home".

## Menu de compras automatizado:
> Para utilizar esta função você deverá pressionando a tecla "Insert" usar as teclas:
> - 1 2 3 4
> - Q W E
> - A S D
> - Z X C V

### Legendas:
- Insert + 1: Colete e capacete;
- Insert + 2: Colete;
- Insert + 3: Defuse;
- Insert + 4: Todas as granadas;
- Insert + Q: Comprar AWP;
- Insert + W: Comprar AK(TR), Comprar M4(CT);
- Insert + E: Comprar UMP;
- Insert + A: Comprar Eagle;
- Insert + S: Comprar CZ75/TEC9(TR), Comprar CZ75/Five-Seven(CT);
- Insert + D: Comprar p250;
- Insert + Z: Comprar granada HE;
- Insert + X: Comprar granada flashbang;
- Insert + C: Comprar granada smoke;
- Insert + V: Comprar granada molotov/incendiária;


#### Descrição de outras features:
Ao atirar a função r_cleardecals é ativada, isto é, os detalhes que sujam o mapa são limpos como manchas de sangue e tiros.
(Nem sempre apagar os detalhes podem ser vantajosos, por exemplo, em um round você poderá obter uma informação de localização do adversário, apenas ao ver se há uma mancha de sangue no local).

## Personal Settings
- Modelo do Mouse: GXT 148 - TRUST
- Sensibilidade do Windows: 4/11
- Aprimoramento de precisão do ponteiro: Desativado
- DPI do Mouse: 3200
- Polling Rate do Mouse: 1000Hz
### Video settings
- Proporção 4:3
- Resolução 1024x768
- Todas as configurações de video muito baixo
- Renderização multinuclear: ATIVADO
