# Daiji Katou

自分の人生の経歴や経験を「宇宙」と捉えたポートフォリオサイトを作成しました。や当サイトは Next.js で構築していることから。Next.js のトレンド記事一覧を取得する RSS 機能も実装しております。

![top](https://github.com/aauuxyxy/daiji-katou/assets/48760596/76d1b82a-90b4-46c9-87b3-4b4b4014dfc4)

## URL

当サイトは Vercel にデプロイしてあります。以下の URL から閲覧できます。

https://daiji-katou.vercel.app/

# 利用技術および主要なライブラリ

- ### Next.js 13.4.9
- ### React 18.2.0
- ### Tailwind CSS 3.3.2
- ### rss-parser 3.13.0
  取得した RSS フィードを JSON に変換するライブラリ

# 画面構成

当サイトは以下のコンテンツで構成されています。
|コンテンツ|詳細|
----|----
|About|私の経歴や各種 SNS や GitHub アカウント記載|
|Concept|当サイトのコンセプトを記載|
|Feed|Next.js に関する記事の RSS フィード一覧|

### About

上部に私の名前と GitHub/Zenn/Twitter のアカウントリンクを記載してあります。下部には現在勤務している会社や担当業務などを記載してあります。
上部の SNS アカウント風な作りにや、下部のブロック分けされたデザインにより親しみやすさや読みやすさを意識しています。

![about](https://github.com/aauuxyxy/daiji-katou/assets/48760596/16176857-5cea-43a2-b4da-1d96599b3a7c)

### Concept

当サイトのコンセプトを記載してあります。デザイン的な側面と技術的な側面からコンセプトを知ることができます。

![concept](https://github.com/aauuxyxy/daiji-katou/assets/48760596/5879ffcb-1a8f-4c70-ba39-357b4c507922)

### Feed

Next.js に関するトレンドの記事の一覧を取得しております。rss-perser により、Zenn の Next.js のトレンドトピックスから取得した RSS フィードを JSON に変換し、記事の一覧にしています。
また記事の描画方法は SSG(Static Site Generation)を用いることで高速な読み込みを意識しています。

![feed](https://github.com/aauuxyxy/daiji-katou/assets/48760596/669d9d91-eb95-462b-aa0f-2369b1468d24)

# Author

aauuxyxy - [GitHub](https://github.com/aauuxyxy)

dk@個人開発してみたい - [Zenn](https://zenn.dev/)

dk@個人開発してみたい - [Twitter](https://twitter.com/dktec968)
