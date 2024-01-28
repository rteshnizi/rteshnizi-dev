#!/bin/sh
set -e

grab_commit_msg() {
	CMT_MSG=$(git log -1 --pretty=%B)
}

prepare_output() {
	npm install && npm run build
	mkdir prod
	ls -la
}

setup_git() {
	git config --global user.email "rht1369@gmail.com"
	git config --global user.name "Reza Teshnizi"
}

prepare_prod() {
	git clone https://${GH_TOKEN}@github.com/rteshnizi/rteshnizi.github.io.git prod
	cd prod
	ls -la
	find ./ -mindepth 1 ! -regex '^.\/\.git\(\/.*\)?' -delete # CSpell: ignore - mindepth
	cp -v -r ../build/* ./
}

commit_website_files() {
	git status
	git add . -A -f
	CMT_DATE_TIME=$(date +"%Y-%m-%d %T")
	git commit --message "Auto build-push[$CMT_DATE_TIME] --> $CMT_MSG"
}

upload_files() {
	git push origin master --force
}

echo "Reza --> Grabbing commit message"
grab_commit_msg
echo "Reza --> Preparing the output and cleaning dev files"
prepare_output
# echo "Reza --> Setting up Git user and add prod remote"
# setup_git
echo "Reza --> Prepare prod folder"
prepare_prod
echo "Reza --> Adding the changes"
commit_website_files
echo "Reza --> Committed the crimes, Now pushing with force!"
upload_files
echo "Reza --> Deployed"
