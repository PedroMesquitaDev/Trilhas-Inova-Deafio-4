local();

// função passar pagina
function redirecionarPara(paginaHtml) {
  window.location.href = paginaHtml;
}

function local() {
  const cidade = localStorage.getItem("nomeCidade");
  if (!cidade) {
    alert("Você pulou uma etapa");
    return
  }

  const nomes = document.querySelectorAll(".nome-cidade");
  nomes.forEach(nome => {
    nome.textContent = cidade;
  });
}

// função para tirar nome de duas classes e mover para outras
// id que adiciona, os 2 que remove e o texto
function alterarDiv(id, id2, id3, textAlt) {
  document.getElementById(id).classList.add(textAlt);
  document.getElementById(id2).classList.remove(textAlt);
  document.getElementById(id3).classList.remove(textAlt);
}

// função para tirar nome de uma classes e mover para outras duas
// id que remove, os 2 que adiciona e o texto
function alterarDivR(id, id2, id3, textAlt) {
  document.getElementById(id).classList.remove(textAlt);
  document.getElementById(id2).classList.add(textAlt);
  document.getElementById(id3).classList.add(textAlt);
}

// colocando os cartões dentro da div no html
// usar mesma logica nos cartões seguintes 


// Saúde
//posto de saude
const postosDeSaude = [
  {
    nome: "Posto de Saúde João Paulo II",
    horario: "07h às 17h, de segunda a sexta",
    documentos: "RG e Cartão SUS",
    telefone: "(99) 90000-000",
    endereco: "Rua das Flores, nº 100 - Centro"
  },
  {
    nome: "Posto de Saúde Santa Ana",
    horario: "07h às 17h, de segunda a sexta",
    documentos: "RG e Cartão SUS",
    telefone: "(99) 91111-111",
    endereco: "Rua do Limoeiro, nº 32 - Goiás"
  }
];

const container = document.getElementById("PostosMenu");

postosDeSaude.forEach(posto => {
  container.innerHTML += `
      <div class="cartao">
        <h3>${posto.nome}</h3>
        <p><i class="fas fa-calendar-alt"></i><strong> Horário:</strong> ${posto.horario}</p>
        <p><i class="fas fa-id-card"></i><strong> Documentos:</strong> ${posto.documentos}</p>
        <p><i class="fas fa-phone"></i><strong> Telefone:</strong> ${posto.telefone}</p>
        <p><i class="fas fa-map-marker-alt"></i><strong> Endereço:</strong> ${posto.endereco}</p>
        <div class="acoes">
          <button class="btn-secundario">Ver em Detalhes</button>
          <button class="btn-primario">Ver no Mapa</button>
        </div>
      </div>
    `;
});


// Upas
const upas = [
  {
    nome: "UPA Cidade Operária",
    horario: "24h por dia, todo dia",
    documentos: "Nenhum é necessário",
    telefone: "(99) 98000-000",
    endereco: "Rua dos Golfos, nº 82 - Centro"
  },
  {
    nome: "UPA São João",
    horario: "24h por dia, todo dia",
    documentos: "Nenhum é necessário",
    telefone: "(99) 91111-111",
    endereco: "Rua Santa, nº 32 - Goiás"
  },
  {
    nome: "UPA São João",
    horario: "24h por dia, todo dia",
    documentos: "Nenhum é necessário",
    telefone: "(99) 91111-111",
    endereco: "Rua Santa, nº 32 - Goiás"
  },
  {
    nome: "UPA São João",
    horario: "24h por dia, todo dia",
    documentos: "Nenhum é necessário",
    telefone: "(99) 91111-111",
    endereco: "Rua Santa, nº 32 - Goiás"
  },
  {
    nome: "UPA São João",
    horario: "24h por dia, todo dia",
    documentos: "Nenhum é necessário",
    telefone: "(99) 91111-111",
    endereco: "Rua Santa, nº 32 - Goiás"
  },
  {
    nome: "UPA São João",
    horario: "24h por dia, todo dia",
    documentos: "Nenhum é necessário",
    telefone: "(99) 91111-111",
    endereco: "Rua Santa, nº 32 - Goiás"
  },
  {
    nome: "UPA São João",
    horario: "24h por dia, todo dia",
    documentos: "Nenhum é necessário",
    telefone: "(99) 91111-111",
    endereco: "Rua Santa, nº 32 - Goiás"
  }
];

const containerUPA = document.getElementById("UPAsMenu");

upas.forEach(upa => {
  containerUPA.innerHTML += `
    <div class="cartao">
      <h3>${upa.nome}</h3>
      <p><i class="fas fa-calendar-alt"></i><strong> Horário:</strong> ${upa.horario}</p>
      <p><i class="fas fa-id-card"></i><strong> Documentos:</strong> ${upa.documentos}</p>
      <p><i class="fas fa-phone"></i><strong> Telefone:</strong> ${upa.telefone}</p>
      <p><i class="fas fa-map-marker-alt"></i><strong> Endereço:</strong> ${upa.endereco}</p>
      <div class="acoes">
        <button class="btn-secundario">Ver em Detalhes</button>
        <button class="btn-primario">Ver no Mapa</button>
      </div>
    </div>
  `;
});

// campanhas
const campanhas = [
  {
    titulo: "Vacinação Contra Gripe (Influenza)",
    horario: "Sem dados",
    periodo: "Sem dados",
    documentos: "RG, Cartão SUS e Comprovante de Residência",
    locais: "Postos de saúde municipais"
  },
  {
    titulo: "Vacinação Infantil Contra Poliomielite",
    horario: "Sem dados",
    periodo: "10 a 20 de maio",
    documentos: "Cartão de Vacinação da Criança e RG do responsável",
    locais: "UBS da Cohama, Anjo da Guarda e Vinhais"
  }
];

const containerCampanhas = document.getElementById("CampanhasMenu");

campanhas.forEach(campanha => {
  containerCampanhas.innerHTML += `
    <div class="cartao">
      <h3>${campanha.titulo}</h3>
      <p><i class="fas fa-calendar-alt"></i><strong> Horário:</strong> ${campanha.horario}</p>
      <p><i class="fas fa-clock"></i><strong> Período:</strong> ${campanha.periodo}</p>
      <p><i class="fas fa-id-card"></i><strong> Documentos:</strong> ${campanha.documentos}</p>
      <p><i class="fas fa-map-marker-alt"></i><strong> Locais:</strong> ${campanha.locais}</p>
      <div class="acoes">
        <button class="btn-secundario">Ver em Detalhes</button>
      </div>
    </div>
  `;
});




// Educação
// matriculas




