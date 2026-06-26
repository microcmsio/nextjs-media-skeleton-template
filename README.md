# メディアのスケルトンテンプレート

microCMS 公式の企業メディア向けテンプレートです。
下記の機能があります。

- 記事ランキングの自動生成（GitHub Actions の cron を利用）
- サイトマップ自動生成
- 記事のピックアップ機能
- 広告の挿入機能
- Google Tag Manager
- もっと見る機能
- タグ、カテゴリー機能

## 動作環境

Node.js 24 以上

# 動作させるのに必要な作業

複数サービスと連携して動作させる必要があるため、各種登録作業が多いですがお付き合いください。

## microCMS の設定

[microCMS の設定](https://github.com/microcmsio/nextjs-media-skeleton-template/blob/main/docs/setup-microcms.md)をご覧下さい。

## Google Analytics の設定

[Google Analytics の設定](https://github.com/microcmsio/nextjs-media-skeleton-template/blob/main/docs/setup-google-analytics.md)をご覧下さい。

## Google Tag Manager の設定

[Google Tag Manager の設定](https://github.com/microcmsio/nextjs-media-skeleton-template/blob/main/docs/setup-google-tag-manager.md)をご覧下さい。

## Google Cloud Platform の設定

[Google Cloud Platform の設定](https://github.com/microcmsio/nextjs-media-skeleton-template/blob/main/docs/setup-google-cloud-platform.md)をご覧下さい。

## 環境変数の設定

ルート直下に`.env.local`ファイルを作成し、下記の情報を入力してください。

```
NEXT_PUBLIC_MICROCMS_GET_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN=xxxxxxxx
BASE_URL=xxxxxxxx
NEXT_PUBLIC_GTM_ID=GTM-xxxxxxxx
```

`NEXT_PUBLIC_MICROCMS_GET_API_KEY`  
microCMS 管理画面の「サービス設定 > API キー」から確認することができます。
記事一覧ページの「もっと見る」ボタン押下時にクライアントサイドからデータ取得を行うする必要があるため、`NEXT_PUBLIC_`をつけています。
メソッドは GET に限定している前提です。

`NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN`  
microCMS 管理画面の URL（ https://xxxxxxxx.microcms.io ）の xxxxxxxx の部分です。

`BASE_URL`
デプロイ先の URL です。プロトコルから記載してください。

例）  
開発環境 → http://localhost:3000  
本番環境 → https://xxxxxxxx.vercel.app/ など

`NEXT_PUBLIC_GTM_ID`
Google Tag Manager の ID

## GitHub の Repository secrets の設定

記事ランキングの自動生成するために、GitHub Actions にて下記の処理を行います。

- Google Analytics からのデータ取得
- API 経由で microCMS のコンテンツ更新

その際に外部公開してはならない値を扱うため、GitHub の Repository secrets に下記の値を登録します。

`GA_PROPERTY_ID`  
Google Analytis のプロパティ ID

`GOOGLE_SERVICE_ACCOUNT_KEY`  
Google Cloud Platform のサービスアカウントキー（長い JSON をそのまま登録）

```
{"type": "service_account", /* 省略... */,"universe_domain": "googleapis.com"}
```

`MICROCMS_PATCH_API_KEY`
microCMS 管理画面の「サービス設定 > API キー」から確認することができます。
メソッドは PATCH に限定してください。（GET 用のキーとは別で用意する）

`MICROCMS_SERVICE_DOMAIN`
microCMS 管理画面の URL（https://xxxxxxxx.microcms.io）の xxxxxxxx の部分です。

## 開発の仕方

1. パッケージのインストール

```bash
npm install
```

2. 開発環境の起動

```bash
npm run dev
```

3. 開発環境へのアクセス  
   [http://localhost:3000](http://localhost:3000)にアクセス

## GitHub Actions の cron について

本テンプレートでは記事ランキングの自動更新のために GitHub Actions の cron を利用しています。
Google Analytics や Google Cloud Platform などの各設定が完了しないと正常に動作しないため、cron 処理が行われるたびにエラーが発生してしまう可能性があります。

エラーが気になる場合は、`.github/workflows/ranking.yml`の下記コードをコメントアウトしてください。

```yml
schedule:
  - cron: '0 0 * * *'
```

## Google Adsense について

本テンプレートでは Google Adsense にも対応しています。
（広告掲載には審査が必要です。デフォルトでは該当コードをコメントアウトしてあります。）

オンにしたい場合は`app/layout.tsx`内のスクリプト読み込み部分と、`app/_components/Ad/index.tsx`内のコメントアウトを解除してください。
その際には、`data-ad-client`などの値は Adsense から取得してきた値に適宜変更してください。

## Node.js のバージョンについて

このテンプレートは **Node.js 24 以上**を前提としています。

Node.js では定期的にセキュリティアップデートが提供されています。  
安全にご利用いただくため、Node.js を利用する際は
**利用中のメジャーバージョン（例: 24.x）の最新パッチバージョンを使用することを推奨します。**

最新のセキュリティ情報については、以下をご参照ください。
https://nodejs.org/ja/blog/vulnerability/

## このテンプレートに含まれる `.npmrc` について

このテンプレートには、npm の `min-release-age` と `registry` 設定を有効にするための `.npmrc` ファイルが含まれています。

```ini
min-release-age=7
registry=https://npm.flatt.tech
```

`min-release-age` はサプライチェーン攻撃対策の一環として設定しているもので、公開から7日未満の npm パッケージバージョンをインストール対象から除外します。これにより、悪意のあるパッケージや改ざんされたパッケージが公開直後に利用されるリスクを軽減できます。

`registry` はレジストリを [Takumi Guard](https://flatt.tech/takumi/features/guard)（GMO Flatt Security が提供する npm セキュリティプロキシ）に向けるもので、`npm install` 時にパッケージを既知の脅威データベースと照合し、悪意のあるパッケージのインストールをブロックします。トークンなしの匿名利用で有効になり、追加の設定は不要です。この設定はローカルだけでなく、GitHub Actions や Dependabot による依存更新にも適用されます。

プロジェクトの要件や運用方針に応じて、これらの値を変更したり、設定を削除したりすることも可能です。
