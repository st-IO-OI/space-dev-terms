#!/bin/bash

# 変更したファイルをステージング
git add .

# コミットメッセージを引数で指定、なければデフォルトメッセージ
if [ -z "$1" ]; then
  COMMIT_MSG="Update site files"
else
  COMMIT_MSG="$1"
fi

# コミット
git commit -m "$COMMIT_MSG"

# mainブランチへプッシュ
git push origin main
