# website

[![Build and Deploy](https://github.com/thieleju/website/actions/workflows/deploy-gh-pages.yml/badge.svg)](https://github.com/thieleju/website/actions/workflows/deploy-gh-pages.yml)
[![pages-build-deployment](https://github.com/thieleju/website/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/thieleju/website/actions/workflows/pages/pages-build-deployment)
[![Docker Image CI](https://github.com/thieleju/website/actions/workflows/generate-docker-image.yml/badge.svg)](https://github.com/thieleju/website/actions/workflows/generate-docker-image.yml)
[![Create and publish a Docker image](https://github.com/thieleju/website/actions/workflows/publish-docker-image.yml/badge.svg?branch=release)](https://github.com/thieleju/website/actions/workflows/publish-docker-image.yml)

### Playing with GitHub Actions and GitHub Pages

After a commit on the main branch, a GitHub Action builds the site and pushes it to the `gh-pages` branch, from where it gets deployed to [website.node5.de](https://website.node5.de).

> Note: I configured cloudflare (DNS) to deny access to the website if you are not located in germany (VPN to germany bypasses this)
