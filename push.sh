#!/bin/sh
MY_DIR="$(echo $(cd $(dirname $0); pwd))"
set -e

grab_commit_msg() {
	CMT_MSG=$(git log -1 --pretty=%B)
}

prepare_output() {
	npm install && npm run build
	mkdir "${MY_DIR}/prod"
	ls -la
}

setup_git() {
	if [[ -z "${GH_TOKEN}" ]]; then
		echo "Github token not defined."
		exit 1
	fi
	# git config --global user.email "rht1369@gmail.com"
	# git config --global user.name "Reza Teshnizi"
}

cleanup() {
	if [ -d "${MY_DIR}/prod" ]; then
		echo "Reza --> Cleaning up."
		rm -rf "${MY_DIR}/prod"
	fi
}

prepare_prod() {
	git clone https://rteshnizi:${GH_TOKEN}@github.com/rteshnizi/rteshnizi.github.io.git "${MY_DIR}/prod"
	cd "${MY_DIR}/prod"
	ls -la
	find ./ -mindepth 1 ! -regex '^.\/\.git\(\/.*\)?' -delete # CSpell: ignore - mindepth
	cp -v -r "${MY_DIR}/build/"* ./
}

commit_website_files() {
	git status
	git add . -A -f
	CMT_DATE_TIME=$(date +"%Y-%m-%d %T")
	git commit --message "Auto build-push[$CMT_DATE_TIME] --> $CMT_MSG"
}

upload_files() {
	echo "Reza --> Committed the crimes, now pushing with force!"
	git push origin master --force
}

echo "Reza --> Grabbing commit message."
grab_commit_msg
echo "Reza --> Preparing the output and cleaning dev files."
cleanup
prepare_output
echo "Reza --> Setting up Git user and add prod remote."
setup_git
echo "Reza --> Prepare prod folder."
prepare_prod
echo "Reza --> Adding the changes."
(commit_website_files && upload_files) || cleanup
echo "Reza --> Deployed."
