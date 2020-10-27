# nexus-web-plugin-template

[general information about Blue Brain Nexus Fusion plugins](https://bluebrainnexus.io/docs/fusion/plugins.html)

## Build plugin
```
 npm install
 npm run build
```

## Deploy plugin

1. Get source code for [Nexus Fusion](https://github.com/BlueBrain/nexus-web)

2. Copy dist/superplugin.bundle.js to Nexus Fusion plugin folder plugins/super-plugin/superplugin.bundle.js

3. edit plugins/manifest.json
```
{
    "super-plugin": {
      "modulePath": "super-plugin/superplugin.bundle.js",
      "name": "Super Plugin",
      "description": "",
      "version": "",
      "tags": [],
      "author": "",
      "license": "",
      "mapping": {}
    }
}
```

4. Build Nexus Fusion with superplugin
```
yarn build
```

5. Build new Docker image
``` 
docker build . -t nexus-web-with-superplugin
```
