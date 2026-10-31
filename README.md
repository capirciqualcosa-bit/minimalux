# Minimalux OS ⚡

> *A Zen-inspired, ultra-lightweight operating system designed for low-cost ARM hardware. Zero bloat, maximum performance, absolute control.*

---

## 🎯 Project Philosophy

**Minimalux** stems from a simple premise: modern technology is unjustifiably heavy. Today's operating systems waste gigabytes of RAM and CPU cycles on redundant graphical interfaces and invisible yet resource-hungry background services.

Minimalux flips this paradigm. Specifically designed to transform inexpensive TV boxes powered by **RK3566** SoCs (roughly €60 of hardware) into emergency SOHO workstations and efficient 24/7 home servers, Minimalux delivers an "appliance-style" user experience with the flexibility of a full Linux system.

### 🚀 The Pillars of Minimalux:
* **Extreme Efficiency:** An estimated memory footprint under 300 MB for the entire operating system (OS + Graphical Interface), leaving over 93% of RAM free for containers and applications.
* **Zero-Bloat Interface:** No Electron or heavy frameworks. A frontend built entirely on Vanilla HTML/CSS/JS powered by the ultra-lightweight **WPE WebKit** engine on Wayland.
* **Zen-Inspired UX:** No traditional clutter or windows filled with useless buttons. Resizable windows managed entirely via keyboard/remote control shortcuts and hardware status LED indicators.
* **Practical Utility:** Native support for printing, Bluetooth connectivity, and modular architecture to integrate with local servers like Home Assistant.

---

## 🛠️ Technology Stack
* **Base OS:** Armbian Minimal (Optimized Linux Kernel)
* **Graphics & Compositor:** Wayland + WPE WebKit (Kiosk mode)
* **UI/UX:** HTML5, CSS3, Vanilla JavaScript, Dynamic SVGs
* **Backend Bridge:** Python for kernel communication, real-time system metrics, and everything else

---

## 📂 Repository Structure
* `/ui` - Minimalist graphical interface (HTML/CSS/JS)
* `/os` - Armbian customizations, system scripts, and main tasks
* `/dtb` - Custom Device Tree sources (`.dts`) and compiled binaries (`.dtb`) for hardware compatibility
* `/docs` - Guides, schemios, and project documentation

---

*Follow the project's development on the YouTube channel [Capirci Qualcosa](https://www.youtube.com/@CapirciQualcosa) and the [official Telegram group](https://t.me/GruppoCapirciQualcosa)!*