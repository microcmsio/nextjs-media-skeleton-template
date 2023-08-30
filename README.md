# メディアのスケルトンテンプレート

![](public/img-cover.png)

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

Node.js 18 以上

# 動作させるのに必要な作業

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
microCMS 管理画面の URL（https://xxxxxxxx.microcms.io）の xxxxxxxx の部分です。

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
Google Cloud Platform のサービスアカウントキー

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
