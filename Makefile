clean:
	rm -rf ./static/ecmascript-explained-2019

prod:
	mkdir -p ./static
	cd ./submodules/ecmascript-explained-2019 && make prod
	cp -r ./submodules/ecmascript-explained-2019/dist ./static/ecmascript-explained-2019
	yarn && yarn generate
