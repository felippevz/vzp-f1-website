async function fetchF1Teams() {
    const container = document.getElementById('f1-cards-container');


    try {


        // Requisição única para o TheSportsDB
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?id=4370');

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        const teams = data.teams;

        // Limpa o indicador de carregamento
        container.innerHTML = '';

        // Se por algum motivo a API não trouxer times
        if (!teams) {
            container.innerHTML = '<p>Nenhuma equipe encontrada.</p>';
            return;
        }

        // Renderiza os cards
        teams.forEach(team => {
            const card = document.createElement('div');
            card.className = 'f1-card';

            // Garante um link alternativo caso a equipe não tenha site cadastrado na API
            const siteUrl = team.strWebsite ? `https://${team.strWebsite}` : '#';

            card.innerHTML = `
                <div class="logo-container">
                    <img src="${team.strBadge}" alt="Logo ${team.strTeam}" class="team-logo" onerror="this.src='https://placehold.co/150x100?text=F1'">
                </div>
                <h2 class="team-name">${team.strTeam}</h2>
                <p class="team-info">
                    <strong>Sede:</strong> ${team.strStadiumLocation || 'Não informada'}<br>
                    <strong>Fundação:</strong> ${team.intFormedYear || 'N/A'}
                </p>
                <a href="${siteUrl}" target="_blank" rel="noopener noreferrer" class="team-link">
                    Visitar Website
                </a>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        container.innerHTML = '<p style="color: #e10600; text-align: center;">Erro ao carregar as equipes. Tente novamente.</p>';
    }
}

// Executa a função
fetchF1Teams();