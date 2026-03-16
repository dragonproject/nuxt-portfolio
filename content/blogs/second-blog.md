---
title: "Tailwind CSS で実現する洗練されたタイポグラフィ"
date: "2024-03-18"
image: "/images/pic2.jpg"
excerpt: "デザインの良し悪しを決定づけるタイポグラフィ。Tailwind CSS の Typography プラグインを使って、洗練された記事画面を作る方法を紹介します。"
---

## デザインにおける文字の重要性
デザインにおいて最も重要な要素の一つが「文字」です。適切なフォントサイズ、行間、余白を設定することで、ユーザーの読解体験は劇的に向上します。

### @tailwindcss/typography の活用
`prose` クラスを付与するだけで、Markdown コンテンツに美しいスタイルを適用できます。

> [!TIP]
> `prose-zinc` や `prose-invert`（ダークモード用）を組み合わせることで、サイトのテーマに合わせた細かな調整が可能です。

## カスタマイズの例
独自のカラーパレットを適用する場合は、`tailwind.config.js` で `typography` セクションを拡張します。

```javascript
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            // ...
          },
        },
      },
    },
  },
}
```

美しい文字を通じて、あなたのメッセージをより正確に伝えましょう。