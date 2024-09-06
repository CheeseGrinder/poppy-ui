#!/bin/bash

clear

rm -fr ./node_modules/
rm -fr ./packages/**/node_modules/
rm -fr ./*.tgz

npm install

npm -ws version minor --include-workspace-root --no-git-tag-version

# Get the new version
version=$(npm version --json | jq -r '.root')
echo ""
echo "new version: $version"
echo ""

echo "+--------------------------------+"
echo "|         Quality - Core         |"
echo "+--------------------------------+"
npx -w=@poppy-ui/core @biomejs/biome format
npx -w=@poppy-ui/core @biomejs/biome lint

echo "+--------------------------------+"
echo "|         Quality - Vue          |"
echo "+--------------------------------+"
npx -w=@poppy-ui/vue @biomejs/biome format
npx -w=@poppy-ui/vue @biomejs/biome lint

echo "+--------------------------------+"
echo "|          Build - Core          |"
echo "+--------------------------------+"
npm -w=@poppy-ui/core run build
npm -w=@poppy-ui/core link
npm -w=@poppy-ui/docs link


echo "+--------------------------------+"
echo "|          Build - Vue           |"
echo "+--------------------------------+"
npm -w=@poppy-ui/vue install -S -E @poppy-ui/core@$version
npm -w=@poppy-ui/vue install -S -E -D @poppy-ui/docs@$version

npm -w=@poppy-ui/vue version