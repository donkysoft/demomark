# demomark
Javascript to mark a specific environment.

本番環境以外（テスト環境やステージング環境等）をブラウザで閲覧した際に、ぱっと見で本番環境との違いを付ける為のjsファイルです。

## 使い方

### demomark.js を読み込む
  <script src="demomark.js"></script>
読み込む位置はどこでもOK。

### demomark.js を必要に応じて編集する
- デフォルトでは、URL中の development. test. stage. staging. に反応します。
- environments に配列追加したり、表示位置変更したり出来ます。

## サンプル
サンプルの各HTMLの内容は全て同一です。
- [本番環境](sample/index.html）
- [テスト環境](sample/test.html)
- [ステージ環境](sample/stage.html)
