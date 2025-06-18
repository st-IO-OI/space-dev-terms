#!/bin/bash

# デプロイスクリプト for Docusaurus
# 使用前にこのスクリプトに実行権限を与えてください：chmod +x deploy.sh

echo "🚀 Docusaurus サイトのデプロイを開始します..."

# 1. 作業内容をGitにコミット（任意）
echo "📦 Gitに変更をコミット中..."
git add .
git commit -m "更新: サイトコンテンツの変更"
git push origin main

# 2. サイトをビルド
echo "🔧 ビルドを開始します..."
npm run build

# 3. デプロイ
echo "🌍 GitHub Pages にデプロイします..."
npm run deploy

echo "✅ 完了！サイトが最新状態に更新されました。"
