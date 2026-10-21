// =================================================================
// ⚙️ CONFIGURATORE DI SCORCIATOIE DI SISTEMA
// =================================================================
const KEY_CONFIG = {
    terminal: { code: 'KeyT', altKey: true, ctrlKey: false, metaKey: false },
    radialMenu: { code: 'Space', altKey: false, ctrlKey: false, metaKey: false },
    radialOnRightClick: true
};

// =================================================================
// 1. WINDOW MANAGER (Gestore Finestre Modulare)
// =================================================================
class WindowManager {
    constructor(id, title, width, height) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.isCreated = false;
        this.title = title;
        this.element = null;
        this.bodyElement = null;
        this.ledElement = null;
    }

    create(renderCallback) {
        if (this.isCreated) return;

        const win = document.createElement('div');
        win.id = `win-${this.id}`;
        win.className = 'window-frame hidden';
        win.style.width = `${this.width}px`;
        win.style.height = `${this.height}px`;
        
        win.style.left = `${(window.innerWidth - this.width) / 2}px`;
        win.style.top = `${(window.innerHeight - this.height) / 2}px`;

        win.innerHTML = `
            <div class="window-header" id="header-${this.id}">
                <span>${this.title.toUpperCase()}</span>
                <div class="window-led green" id="led-${this.id}" title="Stato Sistema: OK"></div>
            </div>
            <div class="window-body" id="body-${this.id}"></div>
        `;

        document.getElementById('window-layer').appendChild(win);
        this.element = win;
        this.bodyElement = document.getElementById(`body-${this.id}`);
        this.ledElement = document.getElementById(`led-${this.id}`);

        if (renderCallback) renderCallback(this.bodyElement);

        this.enableDrag(win, win.querySelector(`#header-${this.id}`));
        this.isCreated = true;
    }

    setLed(status) {
        if (!this.ledElement) return;
        this.ledElement.className = `window-led ${status}`;
    }

    enableDrag(win, header) {
        let isDragging = false;
        let startX, startY;

        header.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            isDragging = true;
            startX = e.clientX - win.offsetLeft;
            startY = e.clientY - win.offsetTop;
            win.style.zIndex = 150;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                win.style.left = `${e.clientX - startX}px`;
                win.style.top = `${e.clientY - startY}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }

    toggle() {
        if (!this.isCreated) return;
        this.element.classList.toggle('hidden');
        if (!this.element.classList.contains('hidden')) {
            this.element.style.zIndex = 150;
            if (window.termInstance) window.termInstance.focus();
        }
    }

    hide() {
        if (this.isCreated) {
            this.element.classList.add('hidden');
        }
    }

    isVisible() {
        return this.isCreated && !this.element.classList.contains('hidden');
    }
}

// =================================================================
// 2. INIZIALIZZAZIONE APPLICAZIONI (Terminale)
// =================================================================
const terminalWindow = new WindowManager('terminal', 'Minimalux Terminal', window.innerWidth * 0.8, window.innerHeight * 0.8);

function initAppEnvironment() {
    terminalWindow.create((container) => {
        window.termInstance = new Terminal({
            cursorBlink: true,
            theme: { background: 'transparent', foreground: '#f0f0f0' },
            fontSize: 14
        });
        window.termInstance.open(container);
        window.termInstance.writeln('\x1b[1;32mMinimalux OS Window Manager Initialized (LED & Resize Active)...\x1b[0m\r\n');
        window.termInstance.write('minimalux@rk3566:~$ ');

        // Esempio: Simuliamo un cambio di stato del LED dopo 3 secondi (es. diventa arancione/lavora)
        setTimeout(() => terminalWindow.setLed('orange'), 3000);
        setTimeout(() => terminalWindow.setLed('green'), 6000);
    });
}

// =================================================================
// 3. SVEGLIA ANIMATA & METRICHE DESKTOP
// =================================================================
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const minuteDeg = minutes * 6;
    const hourDeg = (hours % 12) * 30 + (minutes * 0.5);

    const hourHand = document.getElementById('hand-hour');
    const minuteHand = document.getElementById('hand-minute');

    if (hourHand && minuteHand) {
        hourHand.setAttribute('transform', `rotate(${hourDeg} 50 55)`);
        minuteHand.setAttribute('transform', `rotate(${minuteDeg} 50 55)`);
    }

    document.getElementById('clock-digital').innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

function updateMetrics() {
    const cpu = Math.floor(Math.random() * 20) + 8;
    document.getElementById('sys-cpu-text').textContent = `C:${cpu}%`;
    document.getElementById('sys-ram-text').textContent = `R:34%`;
    document.getElementById('disk-text').textContent = `DISK 18%`;
}

// =================================================================
// 4. DRAG & DROP DELLE ICONE SULLA DESKTOP
// =================================================================
function makeIconsDraggable() {
    document.querySelectorAll('.app-icon').forEach(icon => {
        let isDragging = false;
        let offsetX, offsetY;

        icon.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            isDragging = true;
            offsetX = e.clientX - icon.offsetLeft;
            offsetY = e.clientY - icon.offsetTop;
            icon.style.zIndex = 10;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                icon.style.left = `${e.clientX - offsetX}px`;
                icon.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener('mouseup', () => { isDragging = false; icon.style.zIndex = 1; });
    });
}

// =================================================================
// 5. MENU RADIALE & GESTIONE SHORTCUT (ESC / CTRL+ESC)
// =================================================================
const radialMenu = document.getElementById('radial-menu');
let lastMouseX = window.innerWidth / 2;
let lastMouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => { lastMouseX = e.clientX; lastMouseY = e.clientY; });

function toggleRadialMenu(x = lastMouseX, y = lastMouseY) {
    const isHidden = radialMenu.classList.contains('radial-hidden');
    if (isHidden) {
        radialMenu.style.left = `${x}px`;
        radialMenu.style.top = `${y}px`;
        radialMenu.classList.remove('radial-hidden');
    } else {
        radialMenu.classList.add('radial-hidden');
    }
}

document.querySelectorAll('.radial-item').forEach(item => {
    item.addEventListener('click', () => {
        const action = item.getAttribute('data-action');
        radialMenu.classList.add('radial-hidden');

        if (action === 'terminal') {
            terminalWindow.toggle();
        } else {
            alert(`Minimalux App: [${action.toUpperCase()}]`);
        }
    });
});

if (KEY_CONFIG.radialOnRightClick) {
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        toggleRadialMenu(e.clientX, e.clientY);
    });
}

// Gestore globale dei tasti (inclusi ESC e CTRL+ESC)
window.addEventListener('keydown', (e) => {
    // 1. Shortcut Terminale (Alt + T)
    if (e.code === KEY_CONFIG.terminal.code && e.altKey === KEY_CONFIG.terminal.altKey) {
        e.preventDefault();
        terminalWindow.toggle();
    }

    // 2. Shortcut Menu Radiale (Spazio)
    if (e.code === KEY_CONFIG.radialMenu.code && !e.altKey && !e.ctrlKey && !e.metaKey) {
        if (document.activeElement.closest('.window-frame')) return;
        e.preventDefault();
        toggleRadialMenu();
    }

    // 3. Gestione ESC e CTRL + ESC per le finestre attive
    if (e.code === 'Escape') {
        if (terminalWindow.isVisible()) {
            e.preventDefault();
            if (e.ctrlKey) {
                // CTRL + ESC: Termina il task forzatamente e chiude la finestra
                terminalWindow.setLed('red');
                setTimeout(() => terminalWindow.hide(), 400);
            } else {
                // ESC semplice: Chiude la finestra (lasciando eventuale background) o il task attivo
                terminalWindow.hide();
            }
        } else if (!radialMenu.classList.contains('radial-hidden')) {
            // Se il menu radiale è aperto, ESC lo chiude
            radialMenu.classList.add('radial-hidden');
        }
    }
});

// Avvio generale
initAppEnvironment();
makeIconsDraggable();
updateClock();
updateMetrics();

setInterval(updateClock, 1000);
setInterval(updateMetrics, 2000);