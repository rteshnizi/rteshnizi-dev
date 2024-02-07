#!/bin/sh
SCRIPT_DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROD_DIR="${SCRIPT_DIR}/prod"
set -e

grab_commit_msg() {
	CMT_MSG=$(git -C "$SCRIPT_DIR" log -1 --pretty=%B)
}

prepare_output() {
	npm install --prefix "$SCRIPT_DIR"
	npm run build --prefix "$SCRIPT_DIR"
	mkdir "$PROD_DIR"
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
	if [ -d "${PROD_DIR}" ]; then
		echo "Reza --> Cleaning up."
		rm -rf "${SCRIPT_DIR}/prod"
	fi
}

prepare_prod() {
	git clone https://rteshnizi:${GH_TOKEN}@github.com/rteshnizi/rteshnizi.github.io.git "${PROD_DIR}"
	ls -la "${PROD_DIR}"
	find "${PROD_DIR}/" -mindepth 1 ! -regex '^.\/\.git\(\/.*\)?' -delete # CSpell: ignore - mindepth
	cp -v -r "${SCRIPT_DIR}"/build/* "${PROD_DIR}"
}

commit_website_files() {
	git status -C "$SCRIPT_DIR"
	git add . -A -f -C "$SCRIPT_DIR"
	CMT_DATE_TIME=$(date +"%Y-%m-%d %T")
	git commit --message "Auto build-push[$CMT_DATE_TIME] --> $CMT_MSG" -C "$SCRIPT_DIR"
}

upload_files() {
	echo "Reza --> Committed the crimes, now pushing with force!"
	git push origin master --force -C "$SCRIPT_DIR"
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
