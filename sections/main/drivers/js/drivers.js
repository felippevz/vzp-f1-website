const TEAMS = {
  "Aston Martin Aramco Formula One Team": {
    bg: "#0e1c16", 
    border: "#1f3d2c", 
    num: "rgba(255,255,255,0.045)",
    accent: "#00a86b", 
    badgeBg: "#00594f", 
    badgeText: "#a8ffd6",
    name: "#f0f4f2", 
    team: "#6abf8c", 
    label: "#4d7a60", 
    value: "#c5ddd0",
    swatch: "#00a86b"
  },
  "Oracle Red Bull Racing": {
    bg: "#090d2e", 
    border: "#1a2050", 
    num: "rgba(255,255,255,0.04)",
    accent: "#3061c8", 
    badgeBg: "#1a2e6e", 
    badgeText: "#8eaaff",
    name: "#eef1ff", 
    team: "#7090e0", 
    label: "#3a4a80", 
    value: "#b8ccff",
    swatch: "#3b6fd4"
  },
  "Scuderia Ferrari HP": {
    bg: "#1c0a08", 
    border: "#3d1510", 
    num: "rgba(255,255,255,0.04)",
    accent: "#dc2b17", 
    badgeBg: "#6b120a", 
    badgeText: "#ffaa99",
    name: "#fff0ee", 
    team: "#d96050", 
    label: "#7a2a20", 
    value: "#ffd0c8",
    swatch: "#dc2b17"
  },
  "Mercedes": {
    bg: "#071a18", 
    border: "#0f3530", 
    num: "rgba(255,255,255,0.04)",
    accent: "#00d2be", 
    badgeBg: "#004d47", 
    badgeText: "#80ffe8",
    name: "#eefffe", 
    team: "#50c8be", 
    label: "#1a5e58", 
    value: "#b0f0ea",
    swatch: "#00d2be"
  },
  "McLaren": {
    bg: "#1c0e00", 
    border: "#3d2000", 
    num: "rgba(255,255,255,0.04)",
    accent: "#ff8000", 
    badgeBg: "#6b3000", 
    badgeText: "#ffcc80",
    name: "#fff8f0", 
    team: "#e08040", 
    label: "#7a3800", 
    value: "#ffd8a8",
    swatch: "#ff8000"
  },
  "BWT Alpine Formula One Team": {
    bg: "#050d1f", 
    border: "#0f1e40", 
    num: "rgba(255,255,255,0.04)",
    accent: "#0090ff", 
    badgeBg: "#002a6b", 
    badgeText: "#80c8ff",
    name: "#eef5ff", 
    team: "#5090d8", 
    label: "#1a3a6e", 
    value: "#b0d8ff",
    swatch: "#0090ff"
  },
  "Williams Racing": {
    bg: "#050f1c", 
    border: "#0e2240", 
    num: "rgba(255,255,255,0.04)",
    accent: "#1868db", 
    badgeBg: "#0c2a62", 
    badgeText: "#7ab0ff",
    name: "#eef3ff", 
    team: "#4878d0", 
    label: "#163060", 
    value: "#aacaff",
    swatch: "#1868db"
  },
  "MoneyGram Haas F1 Team": {
    bg: "#1a1a1a", 
    border: "#3a3a3a", 
    num: "rgba(255,255,255,0.04)",
    accent: "#e8002d", 
    badgeBg: "#4a0010", 
    badgeText: "#ff8888",
    name: "#f5f5f5", 
    team: "#cc4455", 
    label: "#555555", 
    value: "#dddddd",
    swatch: "#e8002d"
  },
  "Visa Cash App Racing Bulls Formula One Team": {
    bg: "#0a0f1a", 
    border: "#1a2540", 
    num: "rgba(255,255,255,0.04)",
    accent: "#1e41c8", 
    badgeBg: "#0e1e5a", 
    badgeText: "#90b0ff",
    name: "#eef0ff", 
    team: "#6080cc", 
    label: "#2a3a70", 
    value: "#b8caff",
    swatch: "#1e41c8"
  },
  "Stake F1 Team Kick Sauber": {
    bg: "#181818", 
    border: "#383838", 
    num: "rgba(255,255,255,0.045)",
    accent: "#bb0a14", 
    badgeBg: "#4a0008", 
    badgeText: "#ffaaaa",
    name: "#f0f0f0", 
    team: "#b0b0b0", 
    label: "#606060", 
    value: "#e0e0e0",
    swatch: "#bb0a14"
  },
  "Cadillac Formula 1 Team": {
    bg: "#0e0e0e", 
    border: "#2a2a2a", 
    num: "rgba(255,255,255,0.04)",
    accent: "#cccccc", 
    badgeBg: "#2a2a2a", 
    badgeText: "#eeeeee",
    name: "#ffffff", 
    team: "#aaaaaa", 
    label: "#555555", 
    value: "#dddddd",
    swatch: "#cccccc"
  }
};

function applyTheme(key, cardElement) { // Adicionado cardElement aqui para funcionar dinamicamente
    const t = TEAMS[key] || TEAMS["Audi"]; // Garante um fallback caso o nome da equipe venha ligeiramente diferente
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
        const response = await fetch('https://api.jolpi.ca/ergast/f1/2026/drivers/');

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        const drivers = data.MRData.DriverTable.Drivers;

        container.innerHTML = '';

        if (!drivers || drivers.length === 0) {
            container.innerHTML = '<p>Nenhum piloto encontrado.</p>';
            return;
        }

        let counter = 0;

        for (const driver of drivers) {
            try {
                if (driver.givenName === "Jak") continue;

                counter++;

                // 1º: FAZ O FETCH DOS DADOS DO PILOTO PRIMEIRO
                const responseData = await fetch(`https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=${encodeURIComponent(driver.givenName + '_' + driver.familyName)}`);
                const driverData = await responseData.json();

                // 2º: VALIDA SE A API RETORNOU O PILOTO CORRETAMENTE (Evita erros de "undefined")
                const hasPlayerData = driverData.player && driverData.player[0];
                const teamName = hasPlayerData ? driverData.player[0].strTeam : "Audi";
                const imgCutout = hasPlayerData && driverData.player[0].strCutout ? driverData.player[0].strCutout : 'https://placehold.co/150x100?text=F1';

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
                            <img src="${imgCutout}" alt="Piloto ${driver.driverId}" onerror="this.src='https://placehold.co/150x100?text=F1'" />
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
                console.error(`Erro ao buscar detalhes do piloto ${driver.driverId}:`, innerError);
            }
        }

    } catch (error) {
        console.error("Erro ao buscar dados gerais:", error);
        container.innerHTML = '<p style="color: #e10600; text-align: center;">Erro ao carregar os pilotos. Tente novamente.</p>';
    }
}

fetchF1Drivers();