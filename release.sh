rm -fr ./node_modules/
rm -fr ./packages/**/node_modules/

npm install

npm -ws version minor --include-workspace-root --no-git-tag-version

# Get the new version
version=$(npm version --json | jq -r '.root')

echo "new version: $version"

# npx -w @poppy-ui/core @biomejs/biome lint
# npx -w @poppy-ui/core @biomejs/biome format

# npx -w @poppy-ui/vue @biomejs/biome lint
# npx -w @poppy-ui/vue @biomejs/biome format

npm -w @poppy-ui/core run build
# npm -w @poppy-ui/core pack

echo "npm install -E @poppy-ui/core@$version -w=@poppy-ui/vue"
cd packages/vue
npm install -E @poppy-ui/core@$version -w=@poppy-ui/vue --verbose --prefer-online
# cd packages/vue
# npm install -w @poppy-ui/vue
# sleep 10s
# npm install -w @poppy-ui/vue -E @poppy-ui/core@$version
# npm -w @poppy-ui/vue install -E -D @poppy-ui/docs@$version
# npm -w @poppy-ui/vue install -E -D @poppy-ui/docs@$version

# npm -w @poppy-ui/vue run build