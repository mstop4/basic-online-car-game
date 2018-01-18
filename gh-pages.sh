git add .
git status
git commit -m "$1"
git push origin HEAD
git subtree push --prefix dist/client origin gh-pages