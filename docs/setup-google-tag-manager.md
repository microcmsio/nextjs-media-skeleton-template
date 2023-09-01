# Google Tag Manager の設定

タグ管理用に Google Tag Manager（GTM）を利用します。
本テンプレート内では Google Analytics の管理のみを行なっています。

メディアを運営する場合、様々なタグを埋め込むことが想定されるため、GTM を導入しておくと後々便利かと思います。

## 新しいアカウントとコンテナを作成する

手順については公式ヘルプをご参照ください。
https://support.google.com/tagmanager/answer/6103696?hl=ja

コンテナのインストールはすでにテンプレート内で実装済みなので不要です。

## タグを追加する

Google Analytics のタグを追加します。

「Google アナリティクス: GA4 設定」というタグを選択し、追加します。
設定項目は次のとおりです。（開かれていない部分は特に変更なしです）
測定 ID 部分には Google Analytics から取得できる「G-xxxxxxxxxxxx」という ID を入力してください。

![gtm-setting-01](/assets/gtm-setting-01.png)

トリガーについては「Initialization - All Pages」を選択してください。

タグの追加が完了したら、画面右上にある「公開」ボタンからタグを公開しましょう。

![gtm-setting-02](/assets/gtm-setting-02.png)

サイトを Vercel 等のサーバーにホスティングした後、実際にサイトにアクセスしてみて、Google Analytics での計測が正常に動作していれば成功となります。
