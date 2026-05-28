import TEAMS from "../../../../mock/teams.js";

async function fetchF1Teams() {
    const container = document.getElementById('f1-cards-container');

    try {

        container.innerHTML = '';

        const teams = Object.entries(TEAMS);

        teams.forEach(([teamName, team]) => {
            const card = document.createElement('div');
            card.className = 'f1-card';

            const siteUrl = team.website || '#';

            card.innerHTML = `
        <div class="logo-container">
            <img 
                src="${team.badge}" 
                alt="Logo ${teamName}" 
                class="team-logo"
                onerror="this.src='https://placehold.co/150x100?text=F1'"
            >
        </div>

        <h2 class="team-name">${teamName}</h2>

        <p class="team-info">
            <strong>Sede:</strong> ${team.location || 'Não informada'}<br>
            <strong>Fundação:</strong> ${team.formedYear || 'N/A'}
        </p>

        <a 
            href="${siteUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="team-link"
        >
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

fetchF1Teams();