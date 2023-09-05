# Google Cloud Platform の設定

本テンプレートでは記事ランキングの自動作成を行う際に、Google Analytics Data API 経由で GA4 の PV データを活用します。

そのために Google Cloud Platform（GCP）のアカウントが必要です。
お持ちでない方は、まずは GCP のアカウントを用意してください。

## プロジェクトの作成

今回作成するメディア用のプロジェクトを用意します。
プロジェクト名は好きに設定してください。

![gcp-setting-01](/assets/gcp-setting-01.png)

## 認証情報の作成

「API とサービス > 有効な API とサービス」から Google Analytics Data API を見つけ、有効化しましょう。

そして、「認証情報を作成」ボタンをクリックします。

![gcp-setting-02](/assets/gcp-setting-02.png)

認証情報としてサービスアカウントを作成します。次のように進めていきます。

![gcp-setting-03](/assets/gcp-setting-03.png)

![gcp-setting-04](/assets/gcp-setting-04.png)

以上でサービスアカウントが作成されます。

次に、サービスアカウントキーを JSON 形式でダウンロードします。

![gcp-setting-05](/assets/gcp-setting-05.png)

以上で GCP 側の準備は完了です。

今度は Google Analytics に移動し、「設定 > プロパティのアクセス管理 > ユーザーを追加」から先ほど作成したサービスアカウントのメールアドレスを追加します。

![gcp-setting-06](/assets/gcp-setting-06.png)

これにより、サービスアカウントの認証を使って自身の Google Analytics のデータを読み取ることができるようになります。

本テンプレートでは、`.github/actions/ranking/index.js`にて、GitHub Actions 経由で Google Analytics のデータを取得しています。

その際に GitHub の Repository secrets を用いるので、[README](../README.md) の案内に沿って Analytics と GCP の値を登録しましょう。
