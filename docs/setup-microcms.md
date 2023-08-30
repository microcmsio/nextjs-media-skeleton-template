# microCMSの設定

microCMSのAPI設定に関してはテンプレートから自動生成されるので、そのままお使いいただければ問題ありません。
APIキーに関しては、現状ではテンプレートの中に含むことができないため、手動で設定いただく必要があります。

今回はコンテンツ取得用のキーと記事ランキング更新用のキーの2つを用意します。

## GETキーを用意
デフォルトで生成されているキーがあると思うので、そちらをそのまま利用してもOKです。
本テンプレートでは一覧ページの実装の都合上、公開キーとして扱います。

下記のように設定しましょう。

![get-api-key](https://github.com/microcmsio/nextjs-media-skeleton-template/assets/4659294/493e79b6-aa11-4c34-8bc8-a8d21c7fddb0)

## PATCHキーを用意
記事ランキング自動更新用に利用します。
記事ランキングの自動更新が不要な場合はPATCHキーも不要となります。

下記のように設定しましょう。

![patch-api-key](https://github.com/microcmsio/nextjs-media-skeleton-template/assets/4659294/2f350bae-63e7-403d-bef5-954cd6718513)

## 各APIのコンテンツを用意
各APIのコンテンツを作成しましょう。
特に「ランキングAPI」に関してはコンテンツがないと、記事ランキングの更新時にエラーになります。

そのため事前にいくつか記事コンテンツを作成しておき、ランキングのコンテンツを一度手動で公開状態にしておきましょう。

![ranking-content](https://github.com/microcmsio/nextjs-media-skeleton-template/assets/4659294/82282a62-a374-45e2-9e59-f2d983a1f870)
