# Gnome Network

Personal website of Adelore Lessard — AWS Cloud Architect & Technical Leader.

## Quick Start

```bash
# Install dependencies (AUR helper required for xc)
paru -S xc-bin docker

# Start development server
xc dev
```

Open http://localhost:1313 to view the site. Changes will reload automatically.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [xc](https://xc.sh/) - Modern task runner (install via AUR, e.g., `paru -S xc-bin`)

## Commands

| Command | Description |
|---------|-------------|
| `xc dev` | Start Hugo dev server at http://localhost:1313 |
| `xc build` | Production build to `public/` directory |
| `xc clean` | Remove build artifacts |

## Tech Stack

- [Hugo](https://gohugo.io/) (Standard)
- shell theme — terminal-inspired design
- [GitHub Pages](https://pages.github.com/) for hosting

## Development

The development server runs inside a Docker container with Hugo. The project directory is mounted into the container for live reload.

To shell into the container for debugging:
```bash
docker run -it --rm -p 1313:1313 -v "$(pwd):/src" klakegg/hugo:busybox sh
```

## Deployment

Automatic. On push to `main`, GitHub Actions builds the site and deploys to GitHub Pages.

- **Repository**: github.com/anomalyco/gnome-network-web
- **Live site**: https://gnome.network
- **DNS**: Managed via CNAME records

## License

MIT — See individual theme and content files for specific licenses.

## Tasks

### dev

Start Hugo dev server with live reload.

```bash
docker run --rm -p 1313:1313 -v "$(pwd):/src" klakegg/hugo:busybox server -D --bind 0.0.0.0
```

### build

Production build.

```bash
docker run --rm -v "$(pwd):/src" klakegg/hugo:busybox --gc --minify --cleanDestinationDir
```

### clean

Remove build artifacts.

```bash
sudo rm -rf public
```

Note: The `public` directory may be owned by root if built via Docker. Use `sudo` if normal `rm` fails.