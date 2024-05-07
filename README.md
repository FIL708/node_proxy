# Node Proxy Server

## Get started
Install dependecies `npm install`

Install [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) vscode extension

Create `default.json` config file in `./config` folder

```json
./config/default.json
{
    "API_KEY": "your_api_hey",
    "METEOR_URL": "https://api.nasa.gov/neo/rest/v1/",
    "ROVER_URL": "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/",
    "PORT": 4000,
}
```

Start development mode `npm run dev`

Go to `http://localhost:4000`

## Format & Lint
Format code `npm run format`

Eslint check `npm run lint`

## Useful links
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [NASA API](https://api.nasa.gov/)