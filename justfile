@build:
    bun build src/index.ts > dist/index.js
    bun build cli.ts > cli.js
    chmod +x cli.js

@example:
    bun run example/index.ts

@check:
    bunx biome check --write src/ tools/ cli.ts biome.json package.json