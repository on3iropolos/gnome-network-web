# Gnome Network — Project Agent Guide

## Project

Personal website of Adelore Lessard — AWS Cloud Architect & Technical Leader.

- **Repository**: github.com/anomalyco/gnome-network-web
- **Live URL**: https://gnome.network
- **License**: MIT

## Tech Stack

- **Static Site Generator**: Hugo (Standard Edition)
- **Theme**: shell — terminal-inspired design
- **Hosting**: GitHub Pages
- **Container**: klakegg/hugo:busybox

## Configuration

| File | Purpose |
|------|----------|
| `config.yaml` | Hugo configuration |
| `Dockerfile` | Local dev container |
| `.github/workflows/hugo.yaml` | CI/CD pipeline |

## Docker

```dockerfile
FROM klakegg/hugo:busybox

WORKDIR /src
EXPOSE 1313

CMD ["server", "-D", "--bind", "0.0.0.0"]
```

### Commands

| Command | Description |
|---------|-------------|
| `xc dev` | Start Hugo dev server at http://localhost:1313 |
| `xc build` | Production build to `public/` directory |
| `xc clean` | Remove build artifacts |

## Standards

### Git

- **Branch naming**: `feature/description`, `fix/description`, `docs/description`
- **Commit messages**: Imperative mood, first line under 72 characters
  - Example: `Add feature X` not `Added feature X` or `Adding feature X`
- **No force push** to main/master

### Hugo

- **Hugo Version**: Pinned in CI workflow (`.github/workflows/hugo.yaml`)
- **Extended features**: Not required — using Standard Edition
- **Build flags**: `--gc --minify --cleanDestinationDir`
- **Base URL**: Configured in `config.yaml`, overridden in CI

### Docker

- Use `klakegg/hugo:busybox` (Standard Hugo, minimal image)
- Mount project directory to `/src`
- Expose port 1313

### CI/CD

- Runs on push to `main` and pull requests
- Uses standard Hugo (not extended) in GitHub Actions
- Deploys to GitHub Pages on main branch push

### Code Style

- **HTML/CSS**: Follow theme conventions (minimal, terminal-inspired)
- **Markdown**: GitHub Flavored Markdown
- **No custom assets** — theme provides all stylesheets

### Decision Principles

- **Prefer minimum requirements**: Always choose the smallest/simplest solution that meets actual needs
- **Verify before adding**: Don't assume extended features are needed — check the codebase first
  - Example: We use Hugo Standard (busybox) because the theme uses plain CSS, not SCSS/PostCSS
- **Remove unused code**: Delete empty boilerplate files (like `.gitmodules`)
- **Match CI to local**: Docker image should match what's used in CI workflow

## Development

The development server runs inside a Docker container. Mount the project directory for live reload.

```bash
# Shell into container for debugging
docker run -it --rm -p 1313:1313 -v "$(pwd):/src" klakegg/hugo:busybox sh
```