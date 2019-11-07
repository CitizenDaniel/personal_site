---
layout: blog
title: none
summary: none
date: '2001-01-01T12:00:00+01:00'
dateModified: '2001-01-01T12:00:00+01:00'
thumbnail: /blogImages/20180409.png
---


#### gatsby-remark-images
asdf```jsx
<img
  src="/static/20180409-cc8c83772885665d168373b6dc1c9bf7-2f183.png"
  srcset="
    /static/20180409-cc8c83772885665d168373b6dc1c9bf7-67829.png 125w,
    /static/20180409-cc8c83772885665d168373b6dc1c9bf7-5c59f.png 250w,
    /static/20180409-cc8c83772885665d168373b6dc1c9bf7-2f183.png 500w,
    /static/20180409-cc8c83772885665d168373b6dc1c9bf7-c93e8.png 750w,
    /static/20180409-cc8c83772885665d168373b6dc1c9bf7-4e628.png 1000w,
    /static/20180409-cc8c83772885665d168373b6dc1c9bf7-9260f.png 1463w"
 sizes="(max-width: 500px) 100vw, 500px"
/>
```

#### gatsby-remark-relative-images
前述のgatsby-remark-imagesは、画像リンクが相対パスでないと機能しない。NetlifyCMSでアップした画像は必ず絶対パスになってしまうため、画像が最適化されない。この問題を解消するため、このプラグインを使ってあらかじめ絶対パスを相対パスに書き換える。

## 所感
- コストがかからない
- サーバ性能を気にしなくてよい
- すべてが速い
- はじめからグローバルを前提とした設計である

など、多くの点に強い魅力を感じました。

ドキュメントサイトや、サーバサイドにそれほど複雑な機能を必要としないコーポレートサイトなどには適した手法だと思います。

なにより、`git push` だけで世界中のCDNに静的ファイルが配置でき、開発者に優しくてよいです。そのうえ、今回のようにCMSを入れれば、ユーザに優しいGUIを使ってコンテンツを更新することもできます。

JAM Stack、今後、日本でも採用が増えていくと思います。

## 参考
* [Gatsbyの使い方](https://www.gatsbyjs.org/tutorial/)
* [NetlifyでCI/CD環境を構築する方法](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/)
* [Netlify CMSのGatsbyへの実装方法](https://www.netlifycms.org/docs/add-to-your-site/)
* [AWS Lambdaで静的サイトにメール送信フォームを作る簡単な方法](https://blog.craftz.dog/aws-lambda%E3%81%A7%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E3%83%A1%E3%83%BC%E3%83%AB%E9%80%81%E4%BF%A1%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%82%92%E4%BD%9C%E3%82%8B%E7%B0%A1%E5%8D%98%E3%81%AA%E6%96%B9%E6%B3%95-de8cba5e50a5)
