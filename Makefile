build: 
	npm install
	npm run build
	rm -rf docs
	cp -rf ./dist/dreamcrafters/browser docs