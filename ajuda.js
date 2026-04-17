/**
 * ⚡ ELETRICISTA POWER — Sistema de FAQ Offline
 * ajuda.js — versão 1.0
 * Gerado automaticamente com base na análise completa do app.
 *
 * COMO INTEGRAR NO HTML:
 * 1. Adicione antes de </body>:
 *    <script src="ajuda.js"></script>
 * 2. O chat aparece automaticamente como botão flutuante ⚡
 * 3. Nenhuma lógica existente do app é afetada.
 */

(function () {
  'use strict';

  const CFG = {
    whatsapp: '5581992266571',
    whatsappMsg: 'Olá! Tenho uma dúvida sobre o Eletricista Power.',
    whatsappDesconto: 'quero um cupom de desconto',
    videoTutorial: 'https://youtube.com/shorts/8C30DQ-oa6s?si=_MirUe1BoarmPgNK',
    paginaVendas: 'https://eletricistapro.com.br/',
    horarioInicio: 8,
    horarioFim: 18,
    sabadoInicio: 8,
    sabadoFim: 12,
    domFolga: true,
  };

  const FAQ = [
    {
      id: 'top1',
      top5: true,
      tags: ['calcular', 'orçamento', 'como fazer', 'criar', 'novo', 'orcamento'],
      pergunta: 'Como criar um orçamento?',
      categoria: 'orcamento',
      resposta: `Para criar um orçamento:
1️⃣ Toque em <b>⚡ Orçamento</b> no menu inferior.
2️⃣ Preencha os dados do cliente (nome, endereço, telefone).
3️⃣ Selecione o <b>tipo de serviço</b> elétrico.
4️⃣ Busque e adicione os <b>serviços</b> (ex: tomada, chuveiro).
5️⃣ Adicione os <b>materiais</b> se necessário.
6️⃣ Toque em <b>CALCULAR AGORA →</b>.`,
      links: [{ label: '▶ Ver tutorial em vídeo', url: CFG.videoTutorial }],
    },
    {
      id: 'top2',
      top5: true,
      tags: ['pdf', 'compartilhar', 'enviar', 'gerar', 'exportar'],
      pergunta: 'Como gerar e enviar o PDF do orçamento?',
      categoria: 'pdf',
      resposta: `Após calcular o orçamento:
1️⃣ Toque no botão <b>↗ PDF</b> (laranja).
2️⃣ O PDF é gerado automaticamente.
3️⃣ Uma janela de compartilhamento abre — você pode enviar por <b>WhatsApp, e-mail</b> ou salvar no celular.

💡 <b>Dica:</b> Adicione seu logo em <b>⚙️ Ajustes → Perfil → Logotipo</b> para um PDF mais profissional!`,
      links: [{ label: '▶ Ver tutorial em vídeo', url: CFG.videoTutorial }],
    },
    {
      id: 'top3',
      top5: true,
      tags: ['serviço', 'adicionar', 'buscar', 'tomada', 'instalar', 'servico'],
      pergunta: 'Como adicionar um serviço ao orçamento?',
      categoria: 'orcamento',
      resposta: `No bloco <b>🔧 Serviços Elétricos</b>:
1️⃣ Digite o nome do serviço no campo de busca (ex: "tomada", "chuveiro").
2️⃣ Toque no botão <b>⚙</b> ao lado do serviço desejado.
3️⃣ Configure os detalhes (tipo, amperagem, cabo, etc.).
4️⃣ Toque em <b>✓ Adicionar serviço + materiais</b>.

Os materiais vinculados são adicionados automaticamente! 🎯`,
      links: [],
    },
    {
      id: 'top4',
      top5: true,
      tags: ['agenda', 'agendar', 'visita', 'cliente', 'data'],
      pergunta: 'Como agendar uma visita técnica?',
      categoria: 'agenda',
      resposta: `Na aba <b>📅 Agenda</b>:
1️⃣ Toque em <b>+ Nova visita</b>.
2️⃣ Preencha: cliente, endereço, data, hora e tipo.
3️⃣ Toque em <b>SALVAR</b>.

✅ Para marcar como concluída, toque no botão <b>✓</b> ao lado da visita.
🗑 Para remover, toque no <b>×</b>.`,
      links: [],
    },
    {
      id: 'top5',
      top5: true,
      tags: ['garantia', 'prazo', 'vencer', 'alerta', 'vencida'],
      pergunta: 'Como funcionam as garantias dos serviços?',
      categoria: 'agenda',
      resposta: `O app controla automaticamente as garantias:
🟢 <b>OK</b> — mais de 15 dias restantes.
🟠 <b>Atenção</b> — vence em até 15 dias.
🔴 <b>Vencida</b> — prazo expirado.

Para ver todas, acesse <b>📅 Agenda → 🛡️ Garantias</b>.

O prazo de garantia é configurado em cada orçamento no campo <b>"Garantia (D)"</b> (padrão: 90 dias).`,
      links: [],
    },
    {
      id: 'orc1',
      tags: ['material', 'fornecimento', 'quem compra', 'cliente compra', 'eletricista fornece'],
      pergunta: 'Quem fornece o material — eu ou o cliente?',
      categoria: 'orcamento',
      resposta: `Na tela de resultados do orçamento, você escolhe o modo de fornecimento:

✅ <b>Eletricista fornece</b> — materiais inclusos no total.
🛒 <b>Cliente compra</b> — lista exibida, valor excluído do total.
➖ <b>Não incluir</b> — somente mão de obra.

Isso muda automaticamente o valor total e o PDF!`,
      links: [],
    },
    {
      id: 'orc2',
      tags: ['desconto', 'acrescimo', 'porcentagem', 'abatimento'],
      pergunta: 'Como aplicar desconto ou acréscimo?',
      categoria: 'orcamento',
      resposta: `No bloco <b>🧮 Custos Operacionais</b>:
• <b>Desconto %</b> — insira a porcentagem (ex: 10 para 10%).
• <b>Acréscimo R$</b> — insira o valor adicional em reais.

O botão <b>CALCULAR AGORA</b> atualiza conforme você digita. 💡`,
      links: [],
    },
    {
      id: 'orc3',
      tags: ['km', 'distancia', 'deslocamento', 'logistica', 'quilometro'],
      pergunta: 'Como calcular o custo de deslocamento (km)?',
      categoria: 'orcamento',
      resposta: `No bloco <b>🧮 Custos Operacionais</b>, preencha o campo <b>🗺 Km Total</b>.

O app calcula automaticamente o custo de logística com base na distância (R$ 0,45/km padrão).

O valor aparece separado no resumo e no PDF. 🚗`,
      links: [],
    },
    {
      id: 'orc4',
      tags: ['horas', 'tempo', 'mão de obra hora', 'custo hora'],
      pergunta: 'Como calcular por horas trabalhadas?',
      categoria: 'orcamento',
      resposta: `No bloco <b>🧮 Custos Operacionais</b>:
1️⃣ Preencha o campo <b>⏱ Horas</b>.
2️⃣ Configure o custo por hora em <b>⚙️ Ajustes → Negócio → Custo por hora (R$)</b>.

O app multiplica automaticamente e soma ao total. ⏱`,
      links: [],
    },
    {
      id: 'orc5',
      tags: ['mensagem', 'proposta', 'whatsapp', 'texto', 'copiar', 'sinal', 'cobrança'],
      pergunta: 'Como usar as mensagens prontas do orçamento?',
      categoria: 'orcamento',
      resposta: `Na tela de resultados, role para baixo até <b>Mensagens Prontas</b>:

1️⃣ <b>Proposta</b> — texto completo do orçamento.
2️⃣ <b>Cobrança de Sinal</b> — mensagem para pedir o adiantamento com Pix.
3️⃣ <b>Conclusão do Serviço</b> — confirmação com saldo restante e garantia.

Toque em <b>📋 COPIAR TEXTO</b> e cole no WhatsApp! ✅`,
      links: [],
    },
    {
      id: 'orc6',
      tags: ['editar', 'voltar', 'alterar', 'modificar', 'resultado'],
      pergunta: 'Como editar um orçamento depois de calcular?',
      categoria: 'orcamento',
      resposta: `Na tela de resultados, toque em <b>✏️ Editar</b>.

Você volta para o formulário com todos os dados preenchidos para ajustar. Após editar, toque em <b>CALCULAR AGORA</b> novamente. ✏️`,
      links: [],
    },
    {
      id: 'orc7',
      tags: ['nome serviço', 'renomear', 'editar nome', 'mudar nome'],
      pergunta: 'Posso renomear um serviço ou material no orçamento?',
      categoria: 'orcamento',
      resposta: `Sim! Toque diretamente no <b>nome do serviço</b> (texto em laranja) ou no <b>nome do material</b> (texto em verde) para editar inline.

Digite o novo nome e pressione <b>Enter</b> ou toque fora para salvar. ✏️`,
      links: [],
    },
    {
      id: 'orc8',
      tags: ['quantidade', 'qtd', 'mais de um', 'qtde'],
      pergunta: 'Como mudar a quantidade de um serviço ou material?',
      categoria: 'orcamento',
      resposta: `Em cada serviço ou material adicionado, use os botões <b>−</b> e <b>+</b> ao lado da quantidade.

💡 Quando você muda a quantidade de um serviço, os materiais vinculados a ele são atualizados automaticamente!`,
      links: [],
    },
    {
      id: 'orc9',
      tags: ['configurar serviço', 'configurador', 'reconfigurar', 'opcoes'],
      pergunta: 'O que é o configurador de serviços (botão ⚙)?',
      categoria: 'orcamento',
      resposta: `O <b>⚙ Configurador</b> é um assistente inteligente que aparece ao adicionar certos serviços (tomada, interruptor, chuveiro, etc.).

Ele permite definir:
• Tipo de instalação (embutir/sobrepor)
• Amperagem, bitola do cabo, metros
• Se inclui caixa, conduíte, disjuntor

Os materiais necessários são calculados e adicionados automaticamente ao orçamento! 🎯`,
      links: [],
    },
    {
      id: 'cat1',
      tags: ['catálogo', 'catalogo', 'personalizar', 'adicionar serviço', 'meu serviço', 'preço personalizado'],
      pergunta: 'Como personalizar o catálogo de serviços e materiais?',
      categoria: 'catalogo',
      resposta: `Acesse <b>⚙️ Ajustes → 📋 Catálogo</b>:

🔧 <b>Serviços</b> — edite preços, renomeie ou adicione novos.
📦 <b>Materiais</b> — mesmas opções.

Para adicionar um item novo: preencha o campo no topo (nome + valor) e toque em <b>+</b>.
Para editar um valor existente: toque no preço e altere direto. Salva automaticamente! ✅`,
      links: [],
    },
    {
      id: 'cat2',
      tags: ['preço', 'valor', 'tabela', 'mudar preço', 'alterar preço'],
      pergunta: 'Como alterar o preço de um serviço no catálogo?',
      categoria: 'catalogo',
      resposta: `Em <b>⚙️ Ajustes → Catálogo</b>:
1️⃣ Encontre o serviço (use a busca no topo).
2️⃣ Toque no valor (ex: <b>R$ 150</b>).
3️⃣ Digite o novo valor.
4️⃣ Pressione <b>Enter</b> — salvo automaticamente! 💾`,
      links: [],
    },
    {
      id: 'ag1',
      tags: ['cliente', 'cadastrar', 'novo cliente', 'base de clientes'],
      pergunta: 'Como cadastrar um novo cliente?',
      categoria: 'agenda',
      resposta: `Na aba <b>📅 Agenda → 👥 Clientes</b>:
1️⃣ Toque em <b>+ Novo cliente</b>.
2️⃣ Preencha: nome, telefone, endereço, bairro.
3️⃣ Toque em <b>SALVAR</b>.

Os clientes cadastrados aparecem como sugestão automática quando você preenche o campo "Nome do Cliente" no orçamento! 🔍`,
      links: [],
    },
    {
      id: 'ag2',
      tags: ['relatorio', 'relatório', 'faturamento', 'mensal', 'ganhos', 'mês'],
      pergunta: 'Como ver o relatório de faturamento mensal?',
      categoria: 'agenda',
      resposta: `Acesse <b>📅 Agenda → 📊 Relatório</b>:
1️⃣ Selecione o <b>mês</b> e o <b>ano</b>.
2️⃣ Toque no botão <b>📊</b>.

Você verá: faturamento total, quantidade de orçamentos, ticket médio e gastos com materiais.

O gráfico de barras mostra o faturamento anual mês a mês! 📊`,
      links: [],
    },
    {
      id: 'ag3',
      tags: ['notificacao', 'notificação', 'alerta', 'lembrete', 'garantia vencendo'],
      pergunta: 'Como ativar alertas de garantia?',
      categoria: 'agenda',
      resposta: `Em <b>📅 Agenda → 🛡️ Garantias</b>:
Toque no botão <b>🔔 Ativar alertas de garantia</b>.

O app pedirá permissão para notificações. Após aceitar, você receberá alertas quando uma garantia estiver próxima de vencer (7 dias) ou já vencida. ✅`,
      links: [],
    },
    {
      id: 'hist1',
      tags: ['historico', 'histórico', 'orçamento antigo', 'buscar', 'consultar'],
      pergunta: 'Como consultar orçamentos anteriores?',
      categoria: 'historico',
      resposta: `Toque na aba <b>🕐 Histórico</b> no menu inferior.

Você verá os últimos 20 orçamentos com:
• Nome do cliente
• Valor total
• Data
• Status da garantia (🟢 OK / 🟠 Atenção / 🔴 Vencida)

Toque em qualquer orçamento para <b>recarregá-lo</b> no formulário! 🔄`,
      links: [],
    },
    {
      id: 'hist2',
      tags: ['limpar historico', 'apagar', 'deletar', 'zerar'],
      pergunta: 'Como limpar o histórico de orçamentos?',
      categoria: 'historico',
      resposta: `Na aba <b>🕐 Histórico</b>, toque no botão <b>🗑 Limpar</b> (canto superior direito).

⚠️ <b>Atenção:</b> Esta ação apaga todos os orçamentos salvos e não pode ser desfeita. Faça um backup antes em <b>⚙️ Ajustes → ☁️ Backup</b>.`,
      links: [],
    },
    {
      id: 'cfg1',
      tags: ['logo', 'logotipo', 'foto', 'imagem', 'adicionar logo'],
      pergunta: 'Como adicionar meu logo ao app?',
      categoria: 'configuracoes',
      resposta: `Em <b>⚙️ Ajustes → 👤 Perfil → Logotipo</b>:
1️⃣ Toque em <b>🖼️ Escolher Logo</b>.
2️⃣ Selecione a imagem da galeria (máx. 2MB).
3️⃣ Ajuste o enquadramento e zoom.
4️⃣ Escolha a moldura (quadrada ou redonda).
5️⃣ Toque em <b>✓ Confirmar</b>.

Seu logo aparece no <b>cabeçalho</b> do app e em todos os <b>PDFs</b>! 🏆`,
      links: [],
    },
    {
      id: 'cfg2',
      tags: ['pix', 'chave pix', 'pagamento', 'sinal'],
      pergunta: 'Como configurar minha chave Pix?',
      categoria: 'configuracoes',
      resposta: `Em <b>⚙️ Ajustes → 👤 Perfil → Chave PIX</b>:
Digite sua chave (CPF, CNPJ, e-mail ou telefone).
Toque em <b>✓ Salvar Alterações</b>.

A chave Pix aparece automaticamente na mensagem de <b>Cobrança de Sinal</b>! 💠`,
      links: [],
    },
    {
      id: 'cfg3',
      tags: ['sinal', 'porcentagem sinal', 'entrada', 'adiantamento'],
      pergunta: 'Como configurar o percentual de sinal (entrada)?',
      categoria: 'configuracoes',
      resposta: `Em <b>⚙️ Ajustes → 💼 Negócio → Sinal (%)</b>:
Defina a porcentagem padrão (ex: 30 para 30%).

O valor do sinal é calculado automaticamente em todos os orçamentos e aparece no PDF e na mensagem de cobrança. 💰`,
      links: [],
    },
    {
      id: 'cfg4',
      tags: ['dark mode', 'modo escuro', 'tema escuro', 'aparencia', 'aparência'],
      pergunta: 'Como ativar o modo escuro?',
      categoria: 'configuracoes',
      resposta: `Em <b>⚙️ Ajustes → 💼 Negócio → Aparência</b>:
Toque no toggle <b>🌙 Modo Escuro</b> para ativar/desativar.

Salvo automaticamente! 🌙`,
      links: [],
    },
    {
      id: 'cfg5',
      tags: ['backup', 'exportar dados', 'restaurar', 'salvar dados'],
      pergunta: 'Como fazer backup dos meus dados?',
      categoria: 'configuracoes',
      resposta: `Em <b>⚙️ Ajustes → ☁️ Backup</b>:
• <b>⬇️ Baixar Backup</b> — salva um arquivo .json com todos seus dados.
• <b>⬆️ Restaurar</b> — importa um backup salvo anteriormente.

💡 Faça backup antes de trocar de celular ou limpar o histórico! ☁️`,
      links: [],
    },
    {
      id: 'cfg6',
      tags: ['instagram', 'redes sociais', 'perfil', 'link'],
      pergunta: 'Como adicionar meu Instagram ao PDF?',
      categoria: 'configuracoes',
      resposta: `Em <b>⚙️ Ajustes → 👤 Perfil → Instagram</b>:
Digite seu @ (sem o @, apenas o usuário).
Salve e o Instagram aparecerá no rodapé do PDF com um botão clicável <b>SEGUIR ↗</b>! 📸`,
      links: [],
    },
    {
      id: 'cfg7',
      tags: ['validade', 'prazo orçamento', 'dias validade'],
      pergunta: 'Como configurar a validade dos orçamentos?',
      categoria: 'configuracoes',
      resposta: `Em <b>⚙️ Ajustes → 💼 Negócio → Validade (d)</b>:
Digite o número de dias (ex: 15 para 15 dias).

Aparece no rodapé do PDF: <i>"Validade deste orçamento: 15 dias"</i>. 📋`,
      links: [],
    },
    {
      id: 'pdf1',
      tags: ['pdf não funciona', 'erro pdf', 'não gera', 'pdf travou'],
      pergunta: 'O PDF não está sendo gerado, o que faço?',
      categoria: 'pdf',
      resposta: `Se o PDF não gerar, tente:
1️⃣ Verifique sua conexão com a internet (necessária na primeira vez).
2️⃣ Feche e reabra o app no navegador.
3️⃣ Se o problema persistir, toque em <b>↗ PDF</b> novamente — às vezes a geração leva alguns segundos.

💡 Em iOS, o arquivo é compartilhado diretamente. Em Android/PC, é feito o download automático.`,
      links: [{ label: '▶ Ver tutorial em vídeo', url: CFG.videoTutorial }],
    },
    {
      id: 'pdf2',
      tags: ['numero orçamento', 'número', 'sequência', 'numerar'],
      pergunta: 'Como funciona a numeração dos orçamentos no PDF?',
      categoria: 'pdf',
      resposta: `Os orçamentos são numerados automaticamente no formato <b>ANO-NÚMERO</b> (ex: 2025-0001).

A sequência reinicia todo ano. Você não precisa fazer nada — é automático! 🔢`,
      links: [],
    },
    {
      id: 'ger1',
      tags: ['instalar', 'pwa', 'tela inicial', 'adicionar', 'app celular'],
      pergunta: 'Como instalar o app no celular?',
      categoria: 'geral',
      resposta: `O Eletricista Power é um <b>PWA</b> (app web instalável):

📱 <b>iPhone/iPad:</b> Abra no Safari → toque em <b>Compartilhar (↑)</b> → <b>Adicionar à Tela de Início</b>.

🤖 <b>Android:</b> Abra no Chrome → toque no menu <b>⋮</b> → <b>Adicionar à tela inicial</b> ou <b>Instalar app</b>.

Após instalar, funciona offline como um app nativo! 📲`,
      links: [{ label: '▶ Ver tutorial em vídeo', url: CFG.videoTutorial }],
    },
    {
      id: 'ger2',
      tags: ['dados', 'perdi', 'apagou', 'sumiu', 'resetou'],
      pergunta: 'Meus dados sumiram, o que aconteceu?',
      categoria: 'geral',
      resposta: `Os dados ficam salvos no <b>armazenamento local</b> do navegador. Eles podem ser perdidos se:
• O cache do navegador foi limpo.
• O app foi aberto em um navegador diferente.
• O celular foi trocado sem backup.

💡 <b>Solução:</b> Faça backup regularmente em <b>⚙️ Ajustes → ☁️ Backup → ⬇️ Baixar Backup</b>.`,
      links: [],
    },
    {
      id: 'ger3',
      tags: ['preço', 'plano', 'pagar', 'assinar', 'quanto custa', 'value'],
      pergunta: 'Qual é o preço do Eletricista Power?',
      categoria: 'geral',
      resposta: `Acesse nossa página oficial para ver todos os planos e preços disponíveis! 🚀`,
      links: [{ label: '💳 Ver planos e preços', url: CFG.paginaVendas }],
      gatilhoVendas: true,
    },
  ];

  const STATE = {
    open: false,
    lang: detectLang(),
    contadorPerguntas: loadCounter(),
    avaliações: loadRatings(),
    perguntasPreco: 0,
    historicoBusca: [],
  };

  function detectLang() {
    const l = (navigator.language || 'pt').toLowerCase();
    return l.startsWith('pt') ? 'pt' : 'en';
  }

  function isHorarioComercial() {
    const now = new Date();
    const dia = now.getDay();
    const h = now.getHours();
    if (dia === 0) return false;
    if (dia === 6) return h >= CFG.sabadoInicio && h < CFG.sabadoFim;
    return h >= CFG.horarioInicio && h < CFG.horarioFim;
  }

  function getFallbackMsg(nome) {
    if (isHorarioComercial()) {
      return STATE.lang === 'pt'
        ? `Não encontrei uma resposta específica para "<b>${nome}</b>". Quer falar com a gente agora?`
        : `I couldn't find a specific answer for "<b>${nome}</b>". Would you like to chat with us?`;
    } else {
      return STATE.lang === 'pt'
        ? `Não encontrei uma resposta para "<b>${nome}</b>". Nosso horário é seg-sex 08h-18h e sáb 08h-12h. Deixe sua dúvida pelo WhatsApp!`
        : `I couldn't find an answer for "<b>${nome}</b>". Our hours are Mon-Fri 8am-6pm. Leave your question on WhatsApp!`;
    }
  }

  function loadCounter() {
    try { return JSON.parse(localStorage.getItem('_ep_faq_counter') || '{}'); } catch { return {}; }
  }
  function saveCounter() {
    try { localStorage.setItem('_ep_faq_counter', JSON.stringify(STATE.contadorPerguntas)); } catch {}
  }
  function trackQuestion(id) {
    STATE.contadorPerguntas[id] = (STATE.contadorPerguntas[id] || 0) + 1;
    saveCounter();
  }

  function loadRatings() {
    try { return JSON.parse(localStorage.getItem('_ep_faq_ratings') || '{}'); } catch { return {}; }
  }
  function saveRating(id, val) {
    STATE.avaliações[id] = val;
    try { localStorage.setItem('_ep_faq_ratings', JSON.stringify(STATE.avaliações)); } catch {}
  }

  function normalize(str) {
    return str.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9 ]/g, '');
  }

  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({length: m + 1}, (_, i) => Array.from({length: n + 1}, (_, j) => i === 0 ? j : j === 0 ? i : 0));
    for (let i = 1; i <= m; i++)
      for (let j = 1; j <= n; j++)
        dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    return dp[m][n];
  }

  const TEMAS_EXTERNOS = [
    'receita', 'imposto', 'futebol', 'clima', 'tempo', 'noticia', 'politica',
    'receita federal', 'bolo', 'comida', 'viagem', 'hotel', 'passagem',
    'medicina', 'saude', 'doença', 'remedio', 'juridico', 'advogado',
    'recipe', 'weather', 'news', 'travel', 'medicine', 'health',
  ];

  function isForaDoContexto(q) {
    const nq = normalize(q);
    return TEMAS_EXTERNOS.some(t => nq.includes(t));
  }

  function search(query) {
    if (!query || query.trim().length < 2) return [];
    const nq = normalize(query);
    const words = nq.split(' ').filter(w => w.length > 2);
    const scored = FAQ.map(item => {
      const allText = normalize(item.pergunta + ' ' + item.tags.join(' ') + ' ' + item.resposta);
      let score = 0;
      words.forEach(word => {
        if (allText.includes(word)) score += 10;
        else {
          const allWords = allText.split(' ');
          const minDist = Math.min(...allWords.map(w => levenshtein(word, w.substring(0, word.length + 2))));
          if (minDist <= 2) score += (3 - minDist) * 3;
        }
      });
      if (normalize(item.pergunta).includes(nq)) score += 20;
      return { item, score };
    }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);
    return scored.slice(0, 5).map(x => x.item);
  }

  const T = {
    pt: {
      title: '⚡ Ajuda Rápida',
      subtitle: 'Como posso te ajudar?',
      placeholder: 'Digite sua dúvida...',
      top5label: '❓ Dúvidas mais comuns:',
      noResult: 'Só consigo ajudar com dúvidas sobre o app 😊',
      helpful: 'Essa resposta foi útil?',
      yes: '👍 Sim',
      no: '👎 Não',
      thanks: '✅ Obrigado pelo feedback!',
      whatsapp: '💬 Falar no WhatsApp',
      whatsappOff: '📝 Deixar dúvida no WhatsApp',
      video: '▶ Ver tutorial',
      vendas: '🎁 Ver planos',
      discountMsg: '🎁 Temos um desconto especial para você!<br>Fale com nosso consultor e diga: <b>"quero um cupom de desconto"</b>',
      discountBtn: '💬 Falar com consultor',
      back: '← Voltar',
      close: '✕',
    },
    en: {
      title: '⚡ Quick Help',
      subtitle: 'How can I help you?',
      placeholder: 'Type your question...',
      top5label: '❓ Most common questions:',
      noResult: 'I can only help with questions about the app 😊',
      helpful: 'Was this answer helpful?',
      yes: '👍 Yes',
      no: '👎 No',
      thanks: '✅ Thank you for your feedback!',
      whatsapp: '💬 Chat on WhatsApp',
      whatsappOff: '📝 Send question on WhatsApp',
      video: '▶ Watch tutorial',
      vendas: '🎁 View plans',
      discountMsg: '🎁 We have a special discount for you!<br>Talk to our consultant and say: <b>"I want a discount coupon"</b>',
      discountBtn: '💬 Talk to consultant',
      back: '← Back',
      close: '✕',
    }
  };
  const t = () => T[STATE.lang] || T.pt;

  function injectStyles() {
    const css = `
      #ep-faq-fab {
        position: fixed;
        bottom: calc(env(safe-area-inset-bottom, 0px) + 80px);
        right: 18px;
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: linear-gradient(135deg, #f97316, #ea580c);
        box-shadow: 0 4px 20px rgba(249,115,22,.45);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        z-index: 9990;
        transition: transform .2s, box-shadow .2s;
        animation: ep-fab-in .4s cubic-bezier(.16,1,.3,1) both;
      }
      #ep-faq-fab:hover { transform: scale(1.1); box-shadow: 0 6px 28px rgba(249,115,22,.6); }
      #ep-faq-fab:active { transform: scale(.95); }
      #ep-faq-badge {
        position: absolute;
        top: -3px; right: -3px;
        width: 16px; height: 16px;
        background: #22c55e;
        border-radius: 50%;
        border: 2px solid white;
        font-size: 8px;
        font-weight: 800;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
      }
      #ep-faq-panel {
        position: fixed;
        bottom: calc(env(safe-area-inset-bottom, 0px) + 144px);
        right: 14px;
        width: min(360px, calc(100vw - 28px));
        max-height: min(560px, 70dvh);
        background: var(--surface, #fff);
        border: 1px solid var(--border, #e2e8f0);
        border-radius: 22px;
        box-shadow: 0 16px 60px rgba(0,0,0,.22);
        z-index: 9989;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transform: scale(.92) translateY(20px);
        opacity: 0;
        pointer-events: none;
        transition: transform .28s cubic-bezier(.16,1,.3,1), opacity .22s;
      }
      #ep-faq-panel.ep-open {
        transform: scale(1) translateY(0);
        opacity: 1;
        pointer-events: all;
      }
      .ep-header {
        background: #0f172a;
        padding: 14px 16px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        position: relative;
        overflow: hidden;
      }
      .ep-header::after {
        content: '';
        position: absolute;
        bottom: 0; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, #f97316, transparent);
        opacity: .5;
      }
      .ep-header-info { display: flex; flex-direction: column; }
      .ep-header-title {
        font-size: 13px;
        font-weight: 800;
        color: #f1f5f9;
        font-family: sans-serif;
        letter-spacing: .04em;
      }
      .ep-header-sub {
        font-size: 10px;
        color: #64748b;
        margin-top: 1px;
        font-family: sans-serif;
      }
      .ep-close-btn {
        background: rgba(255,255,255,.08);
        border: 1px solid rgba(255,255,255,.1);
        color: #94a3b8;
        width: 28px; height: 28px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 13px;
        display: flex; align-items: center; justify-content: center;
        transition: background .15s;
        flex-shrink: 0;
      }
      .ep-close-btn:hover { background: rgba(255,255,255,.16); color: #f1f5f9; }
      .ep-search-wrap {
        padding: 12px 12px 8px;
        flex-shrink: 0;
        background: var(--surface, #fff);
      }
      .ep-search {
        width: 100%;
        padding: 9px 12px 9px 34px;
        border: 1.5px solid var(--border, #e2e8f0);
        border-radius: 10px;
        font-size: 13px;
        background: var(--input-bg, #f8fafc);
        color: var(--txt, #0f172a);
        outline: none;
        font-family: inherit;
        transition: border-color .2s;
        box-sizing: border-box;
      }
      .ep-search:focus { border-color: #f97316; }
      .ep-search::placeholder { color: var(--txt3, #94a3b8); }
      .ep-search-icon {
        position: absolute;
        left: 23px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
        pointer-events: none;
      }
      .ep-search-box { position: relative; }
      .ep-body {
        flex: 1;
        overflow-y: auto;
        padding: 0 12px 12px;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
      }
      .ep-body::-webkit-scrollbar { width: 4px; }
      .ep-body::-webkit-scrollbar-thumb { background: var(--border, #e2e8f0); border-radius: 2px; }
      .ep-section-label {
        font-size: 9px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .08em;
        color: var(--txt3, #94a3b8);
        margin: 6px 0 8px;
      }
      .ep-chip {
        display: block;
        width: 100%;
        text-align: left;
        background: var(--surface2, #f8fafc);
        border: 1px solid var(--border, #e2e8f0);
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 12px;
        font-weight: 600;
        color: var(--txt, #0f172a);
        cursor: pointer;
        margin-bottom: 6px;
        transition: border-color .15s, background .15s;
        font-family: inherit;
        line-height: 1.4;
      }
      .ep-chip:hover { border-color: #f97316; background: rgba(249,115,22,.05); color: #f97316; }
      .ep-answer-wrap { animation: ep-slide-in .25s cubic-bezier(.16,1,.3,1); }
      .ep-answer-q {
        font-size: 12px;
        font-weight: 800;
        color: var(--txt, #0f172a);
        margin-bottom: 10px;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--border, #e2e8f0);
        font-family: inherit;
        line-height: 1.4;
      }
      .ep-answer-body {
        font-size: 12px;
        color: var(--txt2, #475569);
        line-height: 1.7;
        margin-bottom: 12px;
        font-family: inherit;
      }
      .ep-link-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 9px 12px;
        border-radius: 9px;
        font-size: 11px;
        font-weight: 700;
        text-decoration: none;
        margin-bottom: 6px;
        transition: opacity .15s;
        font-family: inherit;
      }
      .ep-link-btn:hover { opacity: .85; }
      .ep-link-video { background: rgba(249,115,22,.1); color: #f97316; border: 1px solid rgba(249,115,22,.2); }
      .ep-link-wa { background: rgba(34,197,94,.1); color: #16a34a; border: 1px solid rgba(34,197,94,.2); }
      .ep-link-vendas { background: rgba(37,99,235,.1); color: #2563eb; border: 1px solid rgba(37,99,235,.2); }
      .ep-rating {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        background: var(--surface2, #f8fafc);
        border-radius: 10px;
        margin-top: 8px;
        border: 1px solid var(--border, #e2e8f0);
      }
      .ep-rating-label { font-size: 11px; color: var(--txt3, #94a3b8); flex: 1; font-family: inherit; }
      .ep-rating-btn {
        background: none;
        border: 1px solid var(--border, #e2e8f0);
        border-radius: 7px;
        padding: 4px 10px;
        font-size: 13px;
        cursor: pointer;
        transition: background .15s;
      }
      .ep-rating-btn:hover { background: var(--border, #e2e8f0); }
      .ep-back-btn {
        background: none;
        border: none;
        color: var(--txt3, #94a3b8);
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        padding: 0 0 8px;
        display: flex;
        align-items: center;
        gap: 4px;
        font-family: inherit;
        transition: color .15s;
      }
      .ep-back-btn:hover { color: var(--txt, #0f172a); }
      .ep-fallback {
        background: rgba(249,115,22,.06);
        border: 1px solid rgba(249,115,22,.2);
        border-radius: 12px;
        padding: 14px;
        margin-top: 8px;
        font-size: 12px;
        color: var(--txt2, #475569);
        line-height: 1.6;
        font-family: inherit;
      }
      .ep-discount-box {
        background: linear-gradient(135deg, rgba(34,197,94,.1), rgba(37,99,235,.08));
        border: 1px solid rgba(34,197,94,.25);
        border-radius: 12px;
        padding: 14px;
        margin-top: 10px;
        font-size: 12px;
        color: var(--txt, #0f172a);
        line-height: 1.6;
        font-family: inherit;
        animation: ep-slide-in .3s ease;
      }
      .ep-horario-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 9px;
        font-weight: 700;
        padding: 2px 8px;
        border-radius: 99px;
        margin-bottom: 8px;
      }
      .ep-online { background: rgba(34,197,94,.12); color: #16a34a; }
      .ep-offline { background: rgba(249,115,22,.12); color: #f97316; }
      @keyframes ep-fab-in { from { transform: scale(0) rotate(-90deg); opacity: 0; } to { transform: scale(1) rotate(0); opacity: 1; } }
      @keyframes ep-slide-in { from { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    `;
    const el = document.createElement('style');
    el.textContent = css;
    document.head.appendChild(el);
  }

  function buildHTML() {
    const fab = document.createElement('button');
    fab.id = 'ep-faq-fab';
    fab.title = 'Ajuda';
    fab.innerHTML = '⚡<span id="ep-faq-badge">?</span>';
    fab.addEventListener('click', togglePanel);
    document.body.appendChild(fab);

    const panel = document.createElement('div');
    panel.id = 'ep-faq-panel';
    panel.innerHTML = `
      <div class="ep-header">
        <div class="ep-header-info">
          <div class="ep-header-title" id="ep-title">${t().title}</div>
          <div class="ep-header-sub" id="ep-subtitle">${t().subtitle}</div>
        </div>
        <button class="ep-close-btn" id="ep-close">${t().close}</button>
      </div>
      <div class="ep-search-wrap">
        <div class="ep-search-box">
          <span class="ep-search-icon">🔍</span>
          <input class="ep-search" id="ep-search" placeholder="${t().placeholder}" autocomplete="off" spellcheck="false">
        </div>
      </div>
      <div class="ep-body" id="ep-body"></div>
    `;
    document.body.appendChild(panel);

    document.getElementById('ep-close').addEventListener('click', togglePanel);
    document.getElementById('ep-search').addEventListener('input', onSearch);

    renderHome();
  }

  function renderHome() {
    const body = document.getElementById('ep-body');
    const top5 = FAQ.filter(f => f.top5);
    const online = isHorarioComercial();
    body.innerHTML = `
      <div class="ep-horario-badge ${online ? 'ep-online' : 'ep-offline'}">
        ${online ? '🟢 Online agora' : '🟠 Fora do horário'}
      </div>
      <div class="ep-section-label">${t().top5label}</div>
      ${top5.map(f => `<button class="ep-chip" data-id="${f.id}">${f.pergunta}</button>`).join('')}
    `;
    body.querySelectorAll('.ep-chip').forEach(btn => {
      btn.addEventListener('click', () => renderAnswer(btn.dataset.id));
    });
  }

  function renderAnswer(id, fromSearch) {
    const item = FAQ.find(f => f.id === id);
    if (!item) return;
    trackQuestion(id);

    if (item.gatilhoVendas) STATE.perguntasPreco++;

    const body = document.getElementById('ep-body');
    const waLink = `https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(CFG.whatsappMsg)}`;
    const waLabel = isHorarioComercial() ? t().whatsapp : t().whatsappOff;

    const linksHtml = (item.links || []).map(l => {
      const cls = l.url.includes('youtube') ? 'ep-link-video' : 'ep-link-vendas';
      const icon = l.url.includes('youtube') ? '▶' : '🔗';
      return `<a href="${l.url}" target="_blank" rel="noopener" class="ep-link-btn ${cls}">${icon} ${l.label}</a>`;
    }).join('');

    const alreadyRated = STATE.avaliações[id];
    const ratingHtml = alreadyRated
      ? `<div class="ep-rating"><span class="ep-rating-label">${t().thanks}</span></div>`
      : `<div class="ep-rating">
          <span class="ep-rating-label">${t().helpful}</span>
          <button class="ep-rating-btn" data-id="${id}" data-val="1">${t().yes}</button>
          <button class="ep-rating-btn" data-id="${id}" data-val="0">${t().no}</button>
        </div>`;

    const discountHtml = STATE.perguntasPreco >= 2
      ? `<div class="ep-discount-box">
          ${t().discountMsg}
          <br><br>
          <a href="https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(CFG.whatsappDesconto)}" target="_blank" class="ep-link-btn ep-link-wa" style="margin-top:4px">${t().discountBtn}</a>
        </div>` : '';

    body.innerHTML = `
      <button class="ep-back-btn" id="ep-back">${t().back}</button>
      <div class="ep-answer-wrap">
        <div class="ep-answer-q">${item.pergunta}</div>
        <div class="ep-answer-body">${item.resposta}</div>
        ${linksHtml}
        <a href="${waLink}" target="_blank" rel="noopener" class="ep-link-btn ep-link-wa">💬 ${waLabel}</a>
        ${ratingHtml}
        ${discountHtml}
      </div>
    `;

    document.getElementById('ep-back').addEventListener('click', () => {
      const q = document.getElementById('ep-search').value;
      if (q && q.length > 1) renderResults(q);
      else renderHome();
    });

    body.querySelectorAll('.ep-rating-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        saveRating(btn.dataset.id, parseInt(btn.dataset.val));
        renderAnswer(id, fromSearch);
      });
    });
  }

  function renderResults(query) {
    const body = document.getElementById('ep-body');

    if (isForaDoContexto(query)) {
      body.innerHTML = `
        <div class="ep-fallback">
          ${t().noResult}
          <br><br>
          <a href="https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(CFG.whatsappMsg)}" target="_blank" class="ep-link-btn ep-link-wa">💬 ${t().whatsapp}</a>
        </div>`;
      return;
    }

    const results = search(query);

    if (!results.length) {
      const waLink = `https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent('Oi! Tenho uma dúvida: ' + query)}`;
      body.innerHTML = `
        <div class="ep-fallback">
          ${getFallbackMsg(query)}
          <br><br>
          <a href="${waLink}" target="_blank" class="ep-link-btn ep-link-wa">💬 ${isHorarioComercial() ? t().whatsapp : t().whatsappOff}</a>
          <a href="${CFG.videoTutorial}" target="_blank" class="ep-link-btn ep-link-video">▶ ${t().video}</a>
        </div>`;
      return;
    }

    body.innerHTML = `
      <div class="ep-section-label">${results.length} resultado(s):</div>
      ${results.map(f => `<button class="ep-chip" data-id="${f.id}">${f.pergunta}</button>`).join('')}
    `;

    body.querySelectorAll('.ep-chip').forEach(btn => {
      btn.addEventListener('click', () => renderAnswer(btn.dataset.id, true));
    });
  }

  let _searchTimer = null;
  function onSearch(e) {
    const q = e.target.value.trim();
    clearTimeout(_searchTimer);
    if (!q || q.length < 2) { renderHome(); return; }
    _searchTimer = setTimeout(() => renderResults(q), 260);
  }

  function togglePanel() {
    STATE.open = !STATE.open;
    const panel = document.getElementById('ep-faq-panel');
    const fab = document.getElementById('ep-faq-fab');
    if (STATE.open) {
      panel.classList.add('ep-open');
      fab.innerHTML = '✕<span id="ep-faq-badge" style="background:#f97316">⚡</span>';
      document.getElementById('ep-search')?.focus();
    } else {
      panel.classList.remove('ep-open');
      fab.innerHTML = '⚡<span id="ep-faq-badge">?</span>';
      document.getElementById('ep-search').value = '';
      renderHome();
    }
  }

  function init() {
    injectStyles();
    buildHTML();
    document.addEventListener('click', function(e) {
      if (STATE.open &&
          !e.target.closest('#ep-faq-panel') &&
          !e.target.closest('#ep-faq-fab')) {
        togglePanel();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
