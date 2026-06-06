# Download Pipeline

The public download site builds RuntimeX binaries from the private source repo and publishes them under `/downloads/`.

## Source of truth

- Private app repo: `garzuu/runtimex`
- Public site repo: `garzuu/runtimex.garzuu.com`

## Published files

The workflow publishes these stable filenames:

- `/downloads/RuntimeX-macos.dmg`
- `/downloads/RuntimeX-macos.dmg.sha256`
- `/downloads/RuntimeX-windows.exe`
- `/downloads/RuntimeX-windows.exe.sha256`

## Workflow

Run the GitHub Actions workflow in this repo:

- `.github/workflows/build-downloads.yml`

It needs one repository secret:

- `RUNTIMEX_SOURCE_TOKEN`

That token must have read access to the private `garzuu/runtimex` repository.

## What users get

Users download from the same domain:

- `https://runtimex.garzuu.com/downloads/RuntimeX-macos.dmg`
- `https://runtimex.garzuu.com/downloads/RuntimeX-windows.exe`

No GitHub release page is involved in the user flow.
