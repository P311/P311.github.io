build: 
	npm install
	npm run build
	rm -rf docs
	cp -rf ./dist/dreamcrafters/browser docs

format:
	npx prettier . --write

check_format:
	npx prettier . --check