# Minimalux OS - Base System Specification

## Official Base Image

- **Distribution**: Armbian (Debian 13 Trixie Minimal)
- **Target Hardware**: RK3566 TV Box (Generic / Community Box Demo)
- **Kernel Version**: 6.18.57 (current)
- **Build Date**: 2026-10-20
- **Source Image File**: `Armbian_community_26.11.0-trunk.104_Rk3566-box-demo_trixie_current_6.18.57_minimal.img.xz`
- **Download Source**: [Armbian Official RK3566 Box Demo Page](https://www.armbian.com/rk3566-box-demo/)

## Verification Checksum (SHA256)

```text
67fdfe003989ee4354ba33cca6cb10412be4f49611746c8d35a29f82fc4c0490  Armbian_community_26.11.0-trunk.104_Rk3566-box-demo_trixie_current_6.18.57_minimal.img.xz
```

## Build & Modification Methodology
To ensure absolute transparency and build reproducibility, the Minimalux OS raw image file (.img) is never stored directly inside the Git repository.

Instead, the build workflow follows these steps:

Download the verified base image using the link and SHA256 checksum above.

Flash the base image to a MicroSD card using BalenaEtcher.

Perform initial hardware verification on the target TV Box.

Execute automated cleanup and hardening scripts located in scripts/system-diet.sh to produce the final Minimalux footprint.