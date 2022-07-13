# ExtensionImageReplacer
 Extensão de navegador para substituir imagens.
 Testado em Firefox e Google Chrome.

Arquivos básicos necessários para a extensão:
 - Arquivo manifest.json
 - [jQuery v3.6.0](https://jquery.com/download/)
 - Código Javascript com a função de susbstituir imagens.
 
 No arquivo manifest ficam as informações da extensão: Nome, ícone, Versão e os scripts que fazem parte.
 Foi criado o arquivo replacer.js onde tem a função que substitui imagens, a função foi encontrada na internet e modificada para se adequar ao teste.
 
 É necessário fazer upload de imagens em um repositório WEB. Recomendo o [https://freeimage.host].
 Depois de fazer o upload, substituir as URLs retornadas pelo respositório no replacer.js
 
 # Firefox
 Para instalar uma extensão no Firefox pode ser utilizado o ambiente de testes do Firefox digitando na barra de endereços [about:debugging#/runtime/this-firefox] e clicando no botão **Load Temporary Add-On**.
 O arquivo carregado pode ser o .zip dos arquivos básicos citados acima. O Firefox irá carregar o script temporariamente até fechar o navegador.
 Para manter a extensão carregada, é preciso gerar um arquivo .xpi usando o gerenciador de extensões do Firefox.
 [Central do Desenvolvimento de Extensões Firefox](https://addons.mozilla.org/pt-BR/developers/addon/submit/distribution)
 Clicar em Submeter extensão e marcar **Faça você mesmo** (Assim não aparece na loja de extensões).
 Selecionar o arquivo .zip com os arquivos da extensão e enviar.
 O firefox irá retornar um e-mail quando for precessado a extensão e enviará um Link com o arquivo .xpi para download.
 Para instalar a extensâo .xpi basta acessar as Extensões em [about:addons], clicar no botão da engrenagem e clicar em **Install Add-on from file** selecionando o arquivo .xpi.
 
 # Google Chrome
 No Chrome basta acessar a aba de extensões [chrome://extensions] e marcar o **Modo do desenvolvedor**.
 Clicando no botão **Carregar sem compactação** basta seleciona a pasta onde estão os arquivos da extensão e abrir.
