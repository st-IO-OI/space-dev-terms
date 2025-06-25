git add .

if [ -z "$1" ]; then
  COMMIT_MSG="Update site files"
else
  COMMIT_MSG="$1"
fi

git commit -m "$COMMIT_MSG"
git push origin main
