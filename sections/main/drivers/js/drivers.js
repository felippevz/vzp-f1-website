import THEMES from "../../../../mock/teamsThemes.js";
import DRIVERS from "../../../../mock/drivers.js";

function applyTheme(key, cardElement) {
    const t = THEMES[key] || THEMES["Cadillac Formula 1 Team"];
    const vars = {
        '--t-bg': t.bg, 
        '--t-border': t.border, 
        '--t-num': t.num,
        '--t-accent': t.accent, 
        '--t-badge-bg': t.badgeBg, 
        '--t-badge-text': t.badgeText,
        '--t-name': t.name, 
        '--t-team': t.team, 
        '--t-label': t.label, 
        '--t-value': t.value
    };
    Object.entries(vars).forEach(([k, v]) => cardElement.style.setProperty(k, v));
    
    // Opcional: Se você tiver um elemento global para o nome da equipe, mantenha a linha abaixo.
    // Como são múltiplos cards, o ideal é atualizar o texto dentro de cada card.
    const teamNameEl = document.getElementById('cardTeamName');
    if (teamNameEl) teamNameEl.textContent = key;
}

async function fetchF1Drivers() {
    const container = document.getElementById('f1-drivers-container');

    try {

        const drivers = Object.values(DRIVERS);

        container.innerHTML = '';

        for (const driver of drivers) {
            try {
                
                const teamName = driver.team;
                const imgCutout = driver.cutout || 'https://placehold.co/150x100?text=F1';

                // 3º: CRIA O ELEMENTO DO CARD
                const card = document.createElement('div');
                card.className = 'driver-card';

                // 4º: APLICA O TEMA PASSANDO O ELEMENTO QUE ACABOU DE CRIAR
                applyTheme(teamName, card);

                if(teamName === "Stake F1 Team Kick Sauber") {
                    teamName = "Audi";
                }

                card.innerHTML = `
                    <div class="card">
                        <div class="card-number"># ${driver.permanentNumber || 'N/A'}</div>

                        <div class="card-photo">
                            <img src="${imgCutout}" alt="Piloto ${driver.id}" onerror="this.src='https://placehold.co/150x100?text=F1'" />
                        </div>

                        <div class="card-info">
                            <div class="driver-number-badge"># ${driver.permanentNumber || 'N/A'}</div>
                            <p class="driver-name">${driver.givenName + ' ' + driver.familyName}</p>
                            <p class="driver-team">${teamName}</p>
                            <div class="divider"></div>
                            <div class="driver-details">
                                <div class="detail-row">
                                    <i class="ti ti-flag" aria-hidden="true"></i>
                                    <span><span class="detail-label">Nac.</span> <span class="detail-value">${driver.nationality || 'N/A'}</span></span>
                                </div>
                                <div class="detail-row">
                                    <i class="ti ti-calendar" aria-hidden="true"></i>
                                    <span><span class="detail-label">Nascimento</span> <span class="detail-value">${driver.dateOfBirth || 'N/A'}</span></span>
                                </div>
                                <div class="detail-row">
                                    <i class="ti ti-trophy" aria-hidden="true"></i>
                                    <span><span class="detail-label">Código</span> <span class="detail-value">${driver.code || 'N/A'}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                container.appendChild(card);
            } catch (innerError) {
                console.error(`Erro ao buscar detalhes do piloto ${driver.id}:`, innerError);
            }
        }

    } catch (error) {
        console.error("Erro ao buscar dados gerais:", error);
        container.innerHTML = '<p style="color: #e10600; text-align: center;">Erro ao carregar os pilotos. Tente novamente.</p>';
    }
}

fetchF1Drivers();