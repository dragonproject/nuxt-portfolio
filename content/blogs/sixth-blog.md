---
title: "GitHub Actions で実現する自動デプロイワークフロー"
date: "2024-03-01"
image: "/images/pic6.jpg"
excerpt: "手動デプロイからの解放。GitHub Actions を設定して、プッシュするだけで Vercel や Netlify に自動反映される環境を整えましょう。"
---

## CI/CD の導入メリット
継続的インテグレーション（CI）と継続的デプロイ（CD）を導入することで、開発サイクルを高速化し、人為的ミスを削減できます。

### 基本的なワークフローファイルの構造
`.github/workflows/deploy.yml` に以下のような設定を記述します。

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm run build
```

## 自動化がもたらす心の平穏
一度設定してしまえば、あとはコードを書いてプッシュするだけ。デプロイのたびに緊張する必要はもうありません。