## Usage with Next.js
          
Add this to next.config.js:
    
```ts
modularizeImports: {
    // ...
    "@tamagui-icons/icon-tabler": {
        transform: "@tamagui-icons/icon-tabler/dist/esm/icons/{{kebabCase member}}",
        skipDefaultConversion: true,
    },
},
```

Make sure to re-install dependencies and re-build after cloning.
        