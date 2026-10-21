# Minimalux OS ⚡

> *A Zen-inspired, ultra-lightweight operating system designed for low-cost ARM hardware. Zero bloat, maximum performance, absolute control.*

---

## 🎯 Filosofia del Progetto

**Minimalux** nasce da una premessa semplice: la tecnologia moderna è ingiustificatamente pesante. I sistemi operativi odierni sprecano gigabyte di RAM e cicli di CPU per interfacce grafiche ridondanti e servizi in background invisibili ma avidi di risorse.

Minimalux ribalta questo paradigma. Progettato specificamente per trasformare economiche TV box basate su SoC **RK3566** (circa 60€ di hardware) in workstation SOHO d'emergenza e server domestici efficienti 24/7, Minimalux offre un'esperienza utente "stile elettrodomestico" ma con la flessibilità di un sistema Linux completo.

### 🚀 I Pilastri di Minimalux:
* **Efficienza Estrema:** un'impronta di memoria stimata sotto i 300 MB per l'intero sistema operativo (OS + Interfaccia grafica), lasciando oltre il 93% della RAM libera per i container e le applicazioni.
* **Interfaccia Zero-Bloat:** niente Electron o framework pesanti. Un frontend interamente basato su Vanilla HTML/CSS/JS guidato dal motore grafico ultraleggero **WPE WebKit** su Wayland.
* **UX a Prova di Zen:** niente fronzoli tradizionali o finestre piene di pulsanti inutili. Finestre riscalabili gestite interamente da scorciatoie da tastiera/telecomando e indicatori a LED di stato hardware.
* **Utilità Pratica:** supporto nativo per la stampa, connettività Bluetooth e architettura modulare per integrarsi con server locali come Home Assistant.

---

## 🛠️ Stack Tecnologico
* **Base OS:** Armbian Minimal (Linux Kernel ottimizzato)
* **Graphics & Compositor:** Wayland + WPE WebKit (Kiosk mode)
* **UI/UX:** HTML5, CSS3, Vanilla JavaScript, SVG dinamici
* **Backend Bridge:** Python per la comunicazione con il kernel, le metriche di sistema in tempo reale e tutto il resto

---

## 📂 Struttura del Repository
* `/ui` - Interfaccia grafica minimalista (HTML/CSS/JS)
* `/os` - Personalizzazioni Armbian, script di sistema e maintask
* `/docs` - Guide, schemi e documentazione del progetto

---

*Segui lo sviluppo del progetto sul canale YouTube [Capirci Qualcosa](https://www.youtube.com/@CapirciQualcosa) e sul [gruppo Telegram ufficiale](https://t.me/GruppoCapirciQualcosa)!*