cd packages/core
npm run build
npm pack

cd ../docs
npm pack

cd ../vue
$core = $(ls ../core/poppy-ui-core*.tgz)
npm i ../core/$core
$core = $(ls ../docs/poppy-ui-docs*.tgz)
npm i -D ../docs/$docs

npm run build
npm pack

cd ../../tests/vue
$vue = $(ls ../../packages/vue/poppy-ui-vue*.tgz)
npm i ../../packages/vue/$vue

cd ../../

npm run -w test-vue dev
