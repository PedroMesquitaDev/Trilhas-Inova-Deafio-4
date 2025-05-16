


// colocando os cartões dentro da div no html
// usar mesma logica nos cartões seguintes 
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