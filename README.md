# ポートフォリオテンプレート

このリポジトリは、ポートフォリオを素早く作るためのたたき台です。  
主に `src/data/profile.ts` を編集して、自分の情報に差し替えて使います。

- 使い方: この `README.md`
- 仕組みの学習: [`GUIDE.md`](./GUIDE.md)

## 1. このテンプレートの目的

- 最短で「動くポートフォリオ」を作る
- 初心者でも編集ポイントが分かる構成にする
- 必要に応じて自由に改変して自分用に仕上げる

## 2. 対象読者

- Node.js や Git がまだ不慣れな人
- React でのポートフォリオ作成が初めての人
- とりあえず形にしてから中身を育てたい人

## 3. 前提条件（まずここを確認）

必要なもの:

- Node.js `20.19.0` 以上
- npm `10` 以上（推奨）
- Git
- エディタ（例: VS Code）

確認コマンド（WSL2 のターミナルで実行）:

```bash
node -v
npm -v
git --version
```

目安:

- `node -v` が `v20.19.0` 以上
- `npm -v` が `10.x.x` 以上

推奨実行環境（このREADMEの標準）:

- Windows + WSL2（Ubuntu）+ VS Code
- 以降のコマンドは WSL2 の Linux ターミナルで実行する前提

補足:

- macOS / Linux でも同じコマンドで実行可能
- Windows PowerShell はコマンド差異が出るため、このREADMEでは非推奨

Docker（任意）:

- ローカルに Node 環境を入れたくない場合のみ使用

## 4. 最短セットアップ（推奨）

### 方法A: GitHub `Use this template`（推奨）

1. GitHubでこのテンプレートを開く
2. `Use this template` を押す
3. 自分の新規リポジトリを作成
4. 作成したリポジトリをローカルに clone

```bash
git clone <YOUR_REPO_URL> my-portfolio
cd my-portfolio
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開きます。

### 方法B: 直接 clone（必要な場合のみ）

```bash
git clone <TEMPLATE_REPO_URL> my-portfolio
cd my-portfolio
npm install
npm run dev
```

## 5. ローカル起動とよくあるエラー

起動手順:

```bash
npm install
npm run dev
```

### よくあるエラー

`npm install` で失敗する:

- Node/npm のバージョンを再確認
- 一度 `node_modules` と `package-lock.json` を削除して再実行

`Port 5173 is already in use`:

- 既に別プロセスが使用中です
- 先に起動している開発サーバーを停止するか、別ポートで起動

ブラウザが更新されない:

- 保存できているか確認
- `npm run dev` が動作中か確認
- ページをハードリロード（`Ctrl + Shift + R` / `Cmd + Shift + R`）

## 6. 最小編集フロー（まずはここだけ）

1. `src/data/profile.ts` を開く
2. 次の値を自分の情報に置換
3. 保存してブラウザ表示を確認

最初に置換する項目:

- `name`
- `nameReading`
- `navName`
- `location`
- `email`
- `github`
- `subtitle`
- `tagline`
- `projects` の `github` / `demo`

編集例:

```ts
name: '山田 太郎',
email: 'taro@example.com',
github: 'taro-github-id',
```

## 7. 提出前チェックリスト

提出・公開前に確認:

- サンプル文言が残っていない
- メールアドレスやGitHub IDが自分のものになっている
- `projects` のリンク先が有効
- 不要なダミー制作物を削除済み
- `npm run build` が成功する
- 表示崩れがない（PCとスマホ幅）

テンプレ由来の置換漏れチェック例:

```bash
rg "山田 太郎|Yamada|example@gmail.com|yourname|your-demo-url|TEMPLATE_REPO_URL" .
```

## 8. 提出時に迷わないための運用メモ

- 提出用は `Use this template` で作った自分のリポジトリを使う
- 自分の `README` タイトル・説明文に更新する
- 不要な開発メモや下書きを残さない

## 9. デプロイ手順（Vercel）

1. GitHubに push
2. Vercelにログイン
3. `New Project` で対象リポジトリを選択
4. `Deploy`

ビルドコマンドは通常そのままで動作します。

## 10. FAQ（初心者向け）

Q. どのファイルを触ればよい？  
A. まずは `src/data/profile.ts` だけでOKです。

Q. セクションの順番を変えたい  
A. `src/App.tsx` の `<main>` 内の並び順を変更します。

Q. 色を変えたい  
A. `src/index.css` のCSS変数を変更します。

Q. 一部セクションを消したい  
A. `src/App.tsx` で該当コンポーネントを外します。

## 参考: よく使うコマンド

```bash
npm run dev     # 開発サーバー
npm run build   # 本番ビルド
npm run preview # ビルド結果を確認
npm run lint    # 静的チェック
```

## 技術スタック

- React 19 + TypeScript
- Vite
- Framer Motion
- Lucide React
- CSS Modules
