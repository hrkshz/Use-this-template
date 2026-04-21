# ポートフォリオテンプレート

このリポジトリは、React + TypeScript + Vite で作られたポートフォリオ用フロントエンドのたたき台です。
主に `src/data/profile.ts` を編集して、自分の情報に差し替えて使います。
ローカル開発やビルドには Node.js / npm を使いますが、アプリの実体は React 製の静的フロントエンドです。

- デモを見る: https://use-this-template.vercel.app/
- 完成イメージを先に確認できます。
- 使い方: この `README.md`
- profile.ts の編集: [`EDITING.md`](./EDITING.md)
- 仕組みの学習: [`GUIDE.md`](./GUIDE.md)

---

## 目次

1. [このテンプレートの目的](#1-このテンプレートの目的)
2. [対象読者](#2-対象読者)
3. [前提条件（まずここを確認）](#3-前提条件まずここを確認)
4. [最短セットアップ（ローカル確認を先に行う）](#4-最短セットアップローカル確認を先に行う)
5. [テンプレ利用時の最終チェック](#5-テンプレ利用時の最終チェック)
6. [ローカル起動とよくあるエラー](#6-ローカル起動とよくあるエラー)
7. [提出前チェックリスト](#7-提出前チェックリスト)
8. [デプロイ手順（Vercel）](#8-デプロイ手順vercel)
9. [AI活用について](#ai活用について)
10. [FAQ（初心者向け）](#9-faq初心者向け)
11. [参考: よく使うコマンド](#参考-よく使うコマンド)
12. [技術スタック](#技術スタック)

---

## 1. このテンプレートの目的

- 最短で「動くポートフォリオ」を作る
- 初心者でも編集ポイントが分かる構成にする
- 必要に応じて自由に改変して自分用に仕上げる

## 2. 対象読者

- React でのポートフォリオ作成が初めての人
- Node.js や Git がまだ不慣れな人
- とりあえず形にしてから中身を育てたい人

## 3. 前提条件（まずここを確認）

このテンプレートをローカルで編集・確認するために必要なもの:

- Node.js `20.19.0` 以上（推奨: 最新の LTS バージョン）
- npm `10` 以上（推奨）
- Git
- エディタ（例: VS Code）

補足:

- このテンプレートの実体は `React + TypeScript + Vite` のフロントエンドです
- サイト自体はビルド後に静的ファイルとして配信できます
- ただし、ローカルでの起動やビルドには Node.js / npm が必要です

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
- 技術スタックの概要は末尾の「技術スタック」も参照してください

## 4. 最短セットアップ（ローカル確認を先に行う）

このREADMEでは、次の順序を推奨します。

1. ローカルで起動して編集する
2. 動作確認する
3. 問題なければGitHubへ push する

### 4-0. どこで作業するか

このREADMEの標準フローは、`Windows + WSL2 + VS Code` です。
「Windowsで適当にVS Codeを開く」のではなく、`WSL側のフォルダをVS Codeで開く` 前提で進めてください。

流れ:

1. Windowsで WSL2（Ubuntu など）を起動する
2. WSL のターミナルで作業したい場所へ移動する
3. その場所で `code .` を実行して、WSL 側フォルダを VS Code で開く
4. 以降のコマンドは、VS Code 内のターミナル、または WSL ターミナルで実行する

例:

```bash
wsl
# Windows から WSL を起動する場合
cd ~/work
pwd
code .
```

補足:

- `code .` は「今いるフォルダをVS Codeで開く」という意味です
- VS Code の左下に `WSL` と出ていれば、WSL 側で開けています
- 以降の `npm install` や `npm run dev` は、PowerShell ではなく WSL 側ターミナルで実行してください

### コマンドが不安な人へ（先に読む）

- `cd` が必要な理由: ポートフォリオを作成したい任意の場所へ移動するためです。移動しないと、今いる場所にプロジェクトが作成されます。
- `pwd` の役割: 今いる場所（現在地）を確認するためのコマンドです。
- `git clone` の意味: GitHub上のプロジェクトを、自分のPCに丸ごとコピーする操作です。
- この手順で使うコマンドの多くは確認・コピー・起動です。  
  ただし、`4-4` の `rm -rf .git` だけは Git 履歴を削除する操作なので、説明を読んで現在地を確認してから実行してください。
- 不安な場合は、1行ずつ実行して `pwd` の表示を毎回確認してください。

### 4-1. ローカルにテンプレートを取得して起動

```bash
cd <作業したい親フォルダ>
# 例:
# cd ~/work
# cd ~/projects
pwd
# ここで移動先（親フォルダ）が意図した場所か確認
git clone https://github.com/hrkshz/Use-this-template.git my-portfolio
# ↑ GitHub上のテンプレートを手元にコピー
#    https://github.com/hrkshz/Use-this-template.git はコピー元URL
#    my-portfolio はローカルに作られるフォルダ名（好きな名前に変更可）
cd my-portfolio
pwd
# ここでプロジェクトフォルダに入れているか確認
ls
# フォルダ内のファイル一覧を確認（package.json, src/ などがあればOK）
npm install
# React / Vite の開発環境に必要な依存関係をインストールする
# VS Code 上の TypeScript エラー解消にも必要
# 例: 'vite/client' の型定義ファイルが見つかりません
# これは依存関係が未インストールだと起こりうる
npm run dev
# Vite の開発サーバーを起動してブラウザで確認する
# ターミナルに以下のような表示が出る:
#   ➜  Local:   http://localhost:5173/
# この「Local:」の横に表示されたURLをブラウザで開く
# ポートが使用中の場合は 5174, 5175... と別の番号になるので、
# 必ずターミナルに表示されたURLを使うこと
# 終了するときは Ctrl + C
```

コマンドの意味（Linux/WSL2）:

- `cd <ディレクトリ>`: 指定したディレクトリへ移動
- `pwd`: 現在の作業ディレクトリを表示
- `ls`: 今いるフォルダの中身を一覧表示
- `git clone <URL> <フォルダ名>`: リモートリポジトリをローカルに複製
- `npm install`: React / Vite の開発に必要な依存関係をインストールする
- `npm run dev`: ブラウザで確認するために Vite の開発サーバーを起動する

期待結果:

- 1つ目の `pwd` で、作業したい親フォルダが表示される
- 2つ目の `pwd` で、末尾が `my-portfolio` のパスが表示される
- `ls` で `package.json`, `src/`, `index.html` などが表示される
- `npm run dev` 後、ターミナルに `➜  Local:   http://localhost:5173/` のようなURLが表示される
- そのURLをブラウザで開くと、ポートフォリオ画面が表示される（ポート番号は環境により異なる場合があります）

### 4-2. まず1か所だけ編集して表示確認

まずは小さく1か所だけ変えて、反映を確認します。

```ts
// src/data/profile.ts
name: '山田 太郎',
```

を次のように変えて保存します。

```ts
name: 'あなたの名前',
```

確認方法:

1. ブラウザで `npm run dev` 時にターミナルに表示されたURLを開いたままにする
2. `name` を保存する
3. 画面の名前表示が変われば成功

つまずいた場合:

- 学習ガイドの「3. 最初の編集体験（5分）」を参照
  [`GUIDE.md`](./GUIDE.md#3-最初の編集体験5分)

### 4-3. 自分の情報に書き換える

`src/data/profile.ts` を開き、各項目を自分の情報に書き換えます。
経歴・スキル・資格・制作物の追加・削除方法は、編集ガイドを参照してください。

→ [`EDITING.md`](./EDITING.md) — profile.ts 編集ガイド

### 4-4. 編集が終わったら自分のGitHubへアップ

前提条件:

- GitHubで、公開先にしたいリポジトリを先に作成しておく
- 公開したくない場合は、リポジトリ作成時または作成後に `Private` に設定する
- 外部に公開したい場合だけ `Public` を選ぶ

```bash
pwd
# いまの場所を確認（末尾が my-portfolio になっていればOK）
ls -a
# `.git`, `README.md`, `src` が見えていることを確認
rm -rf .git
# テンプレート元のGit履歴を削除する
# これにより、テンプレート作成者のコミット履歴が残らなくなる
# ※ .git はGitの管理情報フォルダ。ソースコードには影響しません
git init
# 自分用の新しいGit履歴を作り直す
git add .
# すべてのファイルを記録対象として選ぶ
git commit -m "Initial commit"
# 自分の最初のコミットとして記録する
# "Initial commit" はメッセージ（変更内容のメモ）。ここは自由に変更してOK
# 例: "ポートフォリオ初版"
git branch -M main
# ブランチ名を main にそろえる
git remote add origin <自分のリポジトリURL>
# 自分のGitHubリポジトリを接続先として登録
git push -u origin main
# GitHubへ送信（次回以降の送信先も覚える）
```

コマンドの意味（Linux/WSL2）:

- `pwd`: 現在の作業ディレクトリを表示
- `ls -a`: 隠しファイルを含めて、今いるフォルダの中身を表示
- `rm -rf .git`: テンプレート元のGit管理情報を削除（ソースコードはそのまま残る）
- `git init`: 新しいGitリポジトリを作成（自分の履歴をゼロから始める）
- `git add .`: すべてのファイルを「次に記録する対象」として選ぶ
- `git commit -m "<メッセージ>"`: 変更を記録し、メッセージで内容を短く残す
- `git branch -M main`: ブランチ名を `main` にそろえる
- `git remote add origin <URL>`: GitHubリポジトリを接続先として登録する
- `git push -u <リモート名> <ブランチ名>`: GitHubへ送信し、次回以降の送信先を覚えさせる

なぜ `rm -rf .git` をするのか:

- `git clone` でコピーすると、テンプレート作成者のコミット履歴も一緒にコピーされます
- そのまま push すると、自分のリポジトリにテンプレート作成者の履歴が残ります
- `rm -rf .git` → `git init` で履歴をリセットすることで、自分のコミットだけが残ります

補足:

- GitHubで先に空リポジトリを作っておくと、push がスムーズです
- `git push` 後にGitHubを開き、ファイル一覧が表示されれば反映完了です

## 5. テンプレ利用時の最終チェック

テンプレート作成者の痕跡を残したくない場合は、少なくとも次を確認してください。

- `rm -rf .git` → `git init` を実行し、テンプレート元のGit履歴を引き継がない
- `README.md` / `GUIDE.md` / `EDITING.md` を公開時に残すか、削除するか、自分用に書き換えるか決める
- `README.md` を残す場合は、テンプレート説明ではなく自分のプロジェクト説明に書き換える
- `package.json` の `"name": "portfolio-template"` を必要に応じて自分用の名前に変更する
- `src/data/profile.ts` のサンプル値（名前、メール、GitHub URL、デモURLなど）が残っていないことを確認する

## 6. ローカル起動とよくあるエラー

起動手順:

```bash
npm install
# React / Vite の開発環境に必要な依存関係をインストールする
# まだ node_modules が無い初回状態では、
# VS Code に 'vite/client' の型エラーが出ることがある
# その場合もまずは npm install を実行する
npm run dev
# ローカル確認用に Vite の開発サーバーを起動する
# ターミナルに表示された「Local:」横のURLをブラウザで開く
# 終了するときは Ctrl + C
```

コマンドの意味（Linux/WSL2）:

- `npm install`: React / Vite の開発環境に必要な依存関係をインストールする
- `npm run dev`: ローカルで確認するために Vite の開発サーバーを起動する

### よくあるエラー

`command not found` が出る:

- `node -v` / `npm -v` / `git --version` を実行して、どのコマンドが見つからないか確認
- WSL2 のターミナルで実行しているか確認（PowerShellではなく）

`remote origin already exists` が出る:

- `git remote set-url origin <自分のリポジトリURL>` を実行して接続先を更新

`npm install` で失敗する:

- Node/npm のバージョンを再確認
- `pwd` と `ls` でプロジェクトのルートにいるか確認
- VS Code を使っている場合は、WSL 側のフォルダを開いているか確認
- もう一度 `npm install` を実行
- それでも直らない場合は `node_modules` を削除して再実行
- `package-lock.json` の削除は最後の手段として行う

`'vite/client' の型定義ファイルが見つかりません` と VS Code に出る:

- 多くの場合、まだ `npm install` をしていないことが原因
- このプロジェクトは `tsconfig.app.json` で `vite/client` を参照しているため、依存関係が入っていないと VS Code が型定義を解決できない
- まず WSL 側ターミナルで `npm install` を実行
- その後も残る場合は、VS Code が WSL ではなく Windows 側の環境を見ていないか確認
- 必要なら VS Code を WSL で開き直し、`TypeScript: Restart TS Server` を実行

`Port 5173 is already in use`:

- 既に別プロセスが使用中です
- 先に起動している開発サーバーを停止するか、別ポートで起動

ブラウザが更新されない:

- 保存できているか確認
- `npm run dev` が動作中か確認
- ページをハードリロード（`Ctrl + Shift + R` / `Cmd + Shift + R`）

## 7. 提出前チェックリスト

提出・公開前に確認:

- `profile.ts` のサンプルデータが残っていない（`山田 太郎`, `taro@example.com`, `タスク管理アプリ`, `your-repo`, `your-demo-url` 等）
- メールアドレスやGitHub IDが自分のものになっている
- `projects` のリンク先が有効
- 不要なダミー制作物を削除済み
- テンプレ由来のドキュメントを整理済み:
  - `GUIDE.md`: 学習用ガイドのため、公開時は削除を検討
  - `EDITING.md`: 編集ガイドのため、公開時は削除を検討
  - `README.md`: テンプレートの使い方説明のため、完成後は自分のプロジェクト紹介に書き換え
- メール、住所、連絡先、外部リンクなどの個人情報を「公開してよい内容」にできている
- 公開したくない情報がある場合は、公開範囲を限定する方針（アクセス制限あり）に決めた
- 提出先の要件に合わせて、通常公開（Public）か限定公開かを決めた
- 公開前に「この内容を本当にアップしてよいか」を再確認した
- `npm run build` が成功する
- 表示崩れがない（PCとスマホ幅）

## 8. デプロイ手順（Vercel）

1. GitHubに push
2. Vercelにログイン
3. `New Project` で対象リポジトリを選択
4. `Deploy`
5. 公開範囲を設定する
   - 公開してよい場合: 通常公開のまま運用
   - 公開を制限したい場合: パスワード保護/アクセス制限機能を有効化
6. 別ブラウザ（または未ログイン状態）でアクセス確認
   - 制限あり設定の場合、想定どおりアクセス制限されることを確認

ビルドコマンドは通常そのままで動作します。

## AI活用について

個人で進めるときは、理解の補助、試行錯誤、エラー調査のためにAIを使って構いません。
例: `Claude Code`, `Codex`, `Antigravity` など。

使い方の目安:

- エラーメッセージをそのまま渡して原因候補を聞く
- `profile.ts` の書き方が合っているか確認する
- 「この項目を変えるとどこに表示されるか」を質問する

注意:

- AIの回答をそのまま信じず、実際のコード・エラーメッセージ・画面表示と照らし合わせて確認してください
- 特に削除系コマンドや設定変更は、意味を理解してから実行してください

## 9. FAQ（初心者向け）

Q. これは Node.js アプリ？  
A. いいえ。実体は `React + TypeScript + Vite` のフロントエンドです。Node.js は `npm install`、`npm run dev`、`npm run build` など、開発サーバーとビルドで使います。

Q. どのファイルを触ればよい？  
A. まずは `src/data/profile.ts` だけでOKです。

Q. セクションの順番を変えたい  
A. `src/App.tsx` の `<main>` 内の並び順を変更します。

Q. 色を変えたい  
A. `src/index.css` のCSS変数を変更します。

Q. 一部セクションを消したい  
A. `src/App.tsx` で該当コンポーネントを外します。

Q. VS Code に `'vite/client' の型定義ファイルが見つかりません` と出る  
A. まず `npm install` を実行してください。初回状態では依存関係が未インストールのため起こりえます。まだ直らない場合は、WSL 側フォルダを VS Code で開いているか確認し、必要なら TypeScript Server を再起動します。

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
