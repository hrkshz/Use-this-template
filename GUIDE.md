# このポートフォリオが表示されるまで（学習ガイド）

この資料は、Reactが初めての人向けです。  
読む順番どおりに読めば「なぜ画面が出るのか」が理解できる構成にしています。

---

## 0. 先に全体像をつかむ

最初に「どのファイルが何をしているか」を地図として見ます。  
ここが分かると、`import`を読んだときに迷いにくくなります。

### 0-1. フォルダ/ファイル構造（何が書いてあるかを1つで把握）

```text
portfolio-template/
├── index.html                 … HTMLの土台。<div id="root"></div> と /src/main.tsx を読む<script>を書く
├── package.json               … 依存ライブラリ一覧 + dev/build など実行コマンド設定
├── package-lock.json          … インストールした依存バージョン固定情報
├── vite.config.ts             … Viteの開発サーバー/ビルド設定
├── tsconfig.json              … TypeScript設定（共通）
├── tsconfig.app.json          … TypeScript設定（アプリ側）
├── tsconfig.node.json         … TypeScript設定（Node側）
├── eslint.config.js           … Lint（コード品質チェック）ルール
├── README.md                  … プロジェクト全体の使い方/概要
├── GUIDE.md                   … 今読んでいる学習用ガイド
├── public/                    … そのまま配信する静的ファイル
├── src/
│   ├── main.tsx               … Reactの起点。rootを取得して<App />を表示
│   ├── App.tsx                … 画面全体の並び順/状態/useEffect処理
│   ├── index.css              … サイト全体共通スタイル（テーマ変数、レイアウト）
│   ├── data/
│   │   └── profile.ts         … 名前/経歴/制作物/連絡先など表示データ本体
│   ├── components/
│   │   ├── Navbar.tsx         … 上部ナビ表示ロジック
│   │   ├── Navbar.module.css  … Navbar専用スタイル
│   │   ├── Hero.tsx           … ヒーローセクション表示ロジック
│   │   ├── Hero.module.css    … Hero専用スタイル
│   │   ├── About.tsx          … Aboutセクション表示ロジック
│   │   ├── About.module.css   … About専用スタイル
│   │   ├── Skills.tsx         … Skillsセクション表示ロジック
│   │   ├── Skills.module.css  … Skills専用スタイル
│   │   ├── Projects.tsx       … Projectsセクション表示ロジック
│   │   ├── Projects.module.css… Projects専用スタイル
│   │   ├── Contact.tsx        … Contactセクション表示ロジック
│   │   ├── Contact.module.css … Contact専用スタイル
│   │   ├── Footer.tsx         … フッター表示ロジック
│   │   ├── Footer.module.css  … Footer専用スタイル
│   │   └── ScrollToTop.tsx    … ページ上部へ戻るボタンの表示ロジック
│   └── assets/                … 画像などの素材
├── dist/                      … ビルド成果物
└── node_modules/              … 依存パッケージ本体
```

### 0-2. 表示までの流れ（最短）

```text
index.html（rootの箱を用意）
  ↓
main.tsx（rootに<App />を表示）
  ↓
App.tsx（componentsを順に描画）
  ↓
components（profile.tsのデータを表示）
```

---

## 1. 実行順で理解する（ここが本編）

この章では、重要3ファイル（`index.html` / `src/main.tsx` / `src/App.tsx`）だけを逐行解説します。  
それ以外は情報量が増えすぎないよう、要点解説にしています。

## 1-1. `index.html`

### このファイルで実際にやっていること
ブラウザが最初にこのHTMLを読み、`root`という空の場所と、`main.tsx`を読む指示を確認します。

### 何が書いてあるか
- `<div id="root"></div>`: Reactの表示先
- `<script type="module" src="/src/main.tsx"></script>`: `main.tsx`を実行

```html
[1] <body>
[2]   <div id="root"></div>
[3]   <script type="module" src="/src/main.tsx"></script>
[4] </body>
```

### 解説（この部分は1行ずつ読む）
1. `[1] <body>`  
   ページ本体の開始です。
2. `[2] <div id="root"></div>`  
   Reactの画面を差し込む空の箱を定義します。
3. `[3] <script type="module" src="/src/main.tsx"></script>`  
   `main.tsx`を読み込み、React起動処理を開始します。
4. `[4] </body>`  
   ページ本体の終了です。

`[2]`の`id="root"`を、`main.tsx`の`getElementById('root')`が取得して接続します。

ここで言う「rootの箱」とは、`<div id="root"></div>`そのものです。  
Reactはこの箱の中に画面（`App`の内容）を入れて表示します。

`<head>`は今回は詳細を省略していますが、最低限次の2つだけ覚えれば十分です。  
- `<title>`: ブラウザタブに表示されるページ名  
- `<meta name="viewport"...>`: スマホ表示の拡大率や横幅の基準

### よくある勘違い
- `index.html` に画面内容を直接書くのがReactでは普通、と思いがち  
  → 実際の画面は主に`App.tsx`側で作ります。

---

## 1-2. `src/main.tsx`（最重要）

### このファイルで実際にやっていること
`root`を取得して、`App`をその中へ表示します。

### 何が書いてあるか

```tsx
[1] import { StrictMode } from 'react'
[2] import { createRoot } from 'react-dom/client'
[3] import './index.css'
[4] import App from './App.tsx'
[5]
[6] createRoot(document.getElementById('root')!).render(
[7]   <StrictMode>
[8]     <App />
[9]   </StrictMode>,
[10] )
```

### 解説（1行で読む部分 / 塊で読む部分）
1. `[1]`  
   **何が起きるか:** `StrictMode`という機能を使えるように読み込みます。  
   **なぜ書くか:** 開発中にミスへ早く気づくためです。
2. `[2]`  
   **何が起きるか:** `createRoot`という関数を使えるように読み込みます。  
   **なぜ書くか:** あとで「どの箱（`id=\"root\"`）に画面を入れるか」を指定するためです。
3. `[3]`
   **何が起きるか:** `index.css`が読み込まれます。
   **なぜ書くか:** 画面表示と同時に全体スタイルを効かせるためです。
   **補足:** CSSはここで1回読み込めばアプリ全体に適用されます。各コンポーネントで再度読み込む必要はありません。
4. `[4]`  
   **何が起きるか:** `App`コンポーネントを使えるように読み込みます。  
   **なぜ書くか:** 最初に表示する画面の中心が`App`だからです（`function App() { ... }`の中に画面ロジックがまとまっている）。
### `createRoot(document.getElementById('root')!).render(...)` を分解

1. `document.getElementById('root')`  
   ブラウザの機能で、`id="root"`の要素を探す。
2. `!`  
   TypeScriptに「ここは`null`じゃない前提で扱ってOK」と伝える記号。
3. `createRoot(...)`  
   見つけた要素をReactの表示先として使う準備をする関数。
4. `.render(...)`  
   その表示先に、実際の中身（`<App />`など）を表示する。

補足:
- `createRoot`はクラスではなく関数
- `getElementById`は`createRoot`の機能ではなく`document`の機能
- `render`は`createRoot(...)`の戻り値に対して呼ぶ

### 図解（rootに差し込むイメージ）

```text
index.html
  <div id="root"></div>   ← 最初は空

main.tsx
  render(<App />)

結果
  <div id="root">Appの中身が表示される</div>
```

### よくある勘違い
- 「`App`はどこにあるの？」  
  → `src/App.tsx`にあります。
- `root`という名前のファイルが必要だと思う  
  → ファイルではなく、HTML要素の`id`名です。

---

## 1-3. `src/App.tsx`

### このファイルで実際にやっていること
`Navbar`や`Hero`などを並べ、スクロール状態やテーマ状態に応じて表示を変えます。

### 10行前後で区切って読む（意味の切れ目ベース）

### ブロック1: import群（1〜9行）

```tsx
[1] import { useEffect, useRef, useState } from 'react';
[2] import Navbar from './components/Navbar';
[3] import Hero from './components/Hero';
[4] import About from './components/About';
[5] import Skills from './components/Skills';
[6] import Projects from './components/Projects';
[7] import Contact from './components/Contact';
[8] import Footer from './components/Footer';
[9] import ScrollToTop from './components/ScrollToTop';
```

ここは1行ずつ読むべきです。
理由: `import`は「このファイルで何を使うか」を宣言しており、画面に出る部品や機能がここで確定するためです。

1. `[1] import { useEffect, useRef, useState } from 'react';`
   React本体から3つの機能を読み込む。
   - `useState`: 画面で変わる値（状態）を持つ
   - `useEffect`: 値が変わった後に処理を実行する
   - `useRef`: 再レンダーしても保持したい値を持つ
2. `[2] import Navbar from './components/Navbar';`
   上部メニュー用のファイルを読み込む。`return`の中に`<Navbar />`と書くと、画面の上にメニューが出る。
3. `[3] import Hero from './components/Hero';`
   先頭の自己紹介エリア用ファイルを読み込む。`<Hero />`と書くと、最初に見える紹介エリアが出る。
4. `[4] import About from './components/About';`
   経歴説明エリア用ファイルを読み込む。`<About />`と書くと、経歴セクションが出る。
5. `[5] import Skills from './components/Skills';`
   スキル一覧エリア用ファイルを読み込む。`<Skills />`と書くと、スキルセクションが出る。
6. `[6] import Projects from './components/Projects';`
   制作物一覧エリア用ファイルを読み込む。`<Projects />`と書くと、制作物セクションが出る。
7. `[7] import Contact from './components/Contact';`
   連絡先エリア用ファイルを読み込む。`<Contact />`と書くと、連絡先セクションが出る。
8. `[8] import Footer from './components/Footer';`
   最下部エリア用ファイルを読み込む。`<Footer />`と書くと、ページの一番下にフッターが出る。
9. `[9] import ScrollToTop from './components/ScrollToTop';`
   「上へ戻る」ボタン用ファイルを読み込む。`<ScrollToTop />`と書くと、条件に応じて右下にボタンが出る。

補足: 全体共通スタイル（`index.css`）は`main.tsx`で読み込み済みのため、`App.tsx`では読み込み不要です。

### ブロック2: 固定値とstate初期化（11〜20行）

```tsx
[11] const sectionIds = ['hero', 'about', 'projects', 'skills', 'contact'];
[13] function App() {
[15]   const [scrollY, setScrollY] = useState(0);
[16]   const [scrollProgress, setScrollProgress] = useState(0);
[17]   const [activeSection, setActiveSection] = useState('hero');
[18]   const [theme, setTheme] = useState<'light' | 'dark'>(() => {
[19]     return (localStorage.getItem('theme') as 'light' | 'dark') ?? 'light';
[20]   });
[21]   const visibleSections = useRef(new Map<string, number>());
```

ここは1行ずつ読むべきです。  
理由: 「どんな状態を持つか」を最初に決めるブロックで、この後の動きがここで決まるためです。

先に背景:
- このページはスクロールすると、今見ているセクションに合わせてナビの強調表示を切り替えます。
- そのために「どのセクションを監視するか」の一覧（`sectionIds`）が必要です。
- つまり`sectionIds`は、後ろの監視処理（IntersectionObserver）に渡すための準備です。

1. `[11] const sectionIds = ['hero', 'about', 'projects', 'skills', 'contact'];`
   監視対象セクションIDの一覧を作る。
   目的: 後で`IntersectionObserver`に「どの要素を監視するか」を渡すため。

2. `[13] function App() {`
   `App`関数コンポーネントの定義開始。ここから`App`の中身（状態定義・effect・return）を書いていく。
   目的: ここから下が`App`の処理範囲だと示すため。

3. `[14] const [scrollY, setScrollY] = useState(0);`
   現在のスクロール位置を保存する状態を作る（初期値0）。
   目的: スクロールに応じたUI変化に使うため。

4. `[15] const [scrollProgress, setScrollProgress] = useState(0);`
   ページ読了率（%）を保存する状態を作る（初期値0）。
   目的: 進捗バーの幅計算に使うため。

5. `[16] const [activeSection, setActiveSection] = useState('hero');`
   現在アクティブなセクション名を保存する状態を作る（初期値`hero`）。
   目的: ナビの「今いる位置」の強調表示に使うため。

6. `[17] const [theme, setTheme] = useState<'light' | 'dark'>(() => {`
   テーマ状態を作る。初期値は固定文字ではなく関数で決める。
   目的: 保存済みテーマを起動時に読み込むため。

7. `[18] return (localStorage.getItem('theme') as 'light' | 'dark') ?? 'light';`
   `localStorage`からテーマを取得し、なければ`light`を返す。
   目的: 前回選んだテーマを復元し、未設定なら安全にライトテーマで開始するため。

8. `[19] });`
   `theme`初期化関数を閉じる。
   目的: `[17]-[18]`の初期化定義を完了するため。

9. `[20] const visibleSections = useRef(new Map<string, number>());`
   セクションごとの可視率を保存する`Map`を`useRef`で作る。
   目的: 再レンダーのたびに消えない入れ物として保持するため。

補足（分解）:
- `[18]` の `?? 'light'` は「値が`null`なら`light`を使う」という意味。
- `useRef(new Map(...))` は「更新しても即再描画はしないが、値は保持したい」時に使う。

### ブロック3: テーマ反映effect（22〜25行）

```tsx
[22]   useEffect(() => {
[23]     document.documentElement.setAttribute('data-theme', theme);
[24]     localStorage.setItem('theme', theme);
[25]   }, [theme]);
```

何をしているか:
- `theme`が変わった時だけ実行
- HTML属性`data-theme`を更新
- 同じ値を`localStorage`にも保存

ここは塊で読むべき:
- 3行で「反映 + 永続化」の1処理だから

`useEffect`の説明（ここが大事）:
- `useEffect`は「画面を出した後に実行する処理」を書くための仕組み
- `}, [theme])` の `[theme]` は実行条件
- 今回は「`theme`が変わった時だけ実行する」という設定

分解して読む:
1. `[22] useEffect(() => {`
   テーマ更新後に動かす処理ブロックを開始する。
2. `[23] document.documentElement.setAttribute('data-theme', theme);`
   HTML全体に`data-theme="light"`または`data-theme="dark"`を付ける。
   これをCSS側が読んで、色テーマを切り替える。
3. `[24] localStorage.setItem('theme', theme);`
   今のテーマをブラウザ保存領域に保存する。
   ページを再読み込みしても同じテーマを復元できる。
4. `[25] }, [theme]);`
   処理ブロックを閉じて、実行条件を`theme`に限定する。
   `theme`が変わらない限り、この処理は再実行しない。

### ブロック4: スクロール追跡effect（27〜36行）

```tsx
[27]   useEffect(() => {
[28]     const handleScroll = () => {
[29]       setScrollY(window.scrollY);
[30]       const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
[31]       setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
[32]     };
[34]     window.addEventListener('scroll', handleScroll);
[35]     return () => window.removeEventListener('scroll', handleScroll);
[36]   }, []);
```

何をしているか:
- スクロール時に`scrollY`と`scrollProgress`を更新
- コンポーネント終了時にイベント解除

ここは塊で読むべき:
- 「スクロール時に値更新」+「最後に解除」のセット処理だから

`useEffect`の説明（このブロック版）:
- `useEffect(..., [])` の `[]` は「初回表示時に1回だけ設定する」という意味
- 今回は初回にスクロール監視を設定し、終了時に解除するために使っている

分解して読む:
1. `[27] useEffect(() => {`
   スクロール監視をセットアップする処理ブロックを開始する。
2. `[28] const handleScroll = () => {`
   スクロールされたときに呼ばれる関数を定義する。
3. `[29] setScrollY(window.scrollY);`
   現在のスクロール位置（px）を`scrollY`へ保存する。
4. `[30] const totalHeight = document.documentElement.scrollHeight - window.innerHeight;`
   ページ全体で「実際にスクロール可能な高さ」を計算する。
5. `[31] setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);`
   スクロール率を0〜100%で計算して保存する。
   `totalHeight > 0` は0で割るのを防ぐための安全策。
6. `[32] };`
   スクロール時関数の定義を閉じる。
7. `[34] window.addEventListener('scroll', handleScroll);`
   ブラウザに「スクロール時はhandleScrollを実行して」と登録する。
8. `[35] return () => window.removeEventListener('scroll', handleScroll);`
   後始末処理。`App`が終了するときに監視を解除する。
   解除しないと不要な監視が残って不具合の原因になる。
9. `[36] }, []);`
   処理ブロックを閉じる。`[]`なので初回だけ登録し、以後は再登録しない。

### ブロック5: IntersectionObserver準備（38〜57行）

```tsx
[38]   useEffect(() => {
[39]     const observer = new IntersectionObserver(
[40]       (entries) => {
[41]         entries.forEach((entry) => {
[42]           visibleSections.current.set(entry.target.id, entry.intersectionRatio);
[43]         });
[44]         let maxRatio = 0;
[45]         let maxId = 'hero';
[46]         visibleSections.current.forEach((ratio, id) => {
[47]           if (ratio > maxRatio) {
[48]             maxRatio = ratio;
[49]             maxId = id;
[50]           }
[51]         });
[52]         if (maxRatio > 0) {
[53]           setActiveSection(maxId);
[54]         }
[55]       },
[56]       { threshold: [0, 0.25, 0.5, 0.75, 1] }
[57]     );
```

何をしているか:
- 各セクションの見えている割合を記録
- 一番見えているセクションを`activeSection`に反映

ここは塊で読むべき:
- 目的が「今見えているセクションを1つ決める」にまとまっているため

`IntersectionObserver`の説明:
- 画面内に「どの要素がどれくらい見えているか」をブラウザが教えてくれる仕組み
- 今回は、`hero/about/projects/skills/contact`のうち一番見えているものを選ぶために使う

分解して読む:
1. `[38] useEffect(() => {`
   セクション監視のセットアップ処理を開始する。
2. `[39] const observer = new IntersectionObserver(`
   監視オブジェクトを作る。
3. `[40] (entries) => {`
   見え方が変わったときに呼ばれる処理を定義する（`entries`に監視結果が入る）。
4. `[41] entries.forEach((entry) => {`
   変化した各要素について順番に処理する。
5. `[42] visibleSections.current.set(entry.target.id, entry.intersectionRatio);`
   `id`ごとの可視率（0〜1）を`Map`へ保存する。
6. `[44] let maxRatio = 0;`
   現時点での最大可視率を入れる変数を初期化する。
7. `[45] let maxId = 'hero';`
   最大可視率だったセクションIDを入れる変数を初期化する。
8. `[46] visibleSections.current.forEach((ratio, id) => {`
   保存済み可視率をすべて見て、最大値を探す。
9. `[47]-[50] if (ratio > maxRatio) { ... }`
   今の値が最大値を超えていたら、`maxRatio`と`maxId`を更新する。
10. `[52]-[54] if (maxRatio > 0) { setActiveSection(maxId); }`
   1つ以上見えている場合だけ、現在セクションを更新する。
11. `[56] { threshold: [0, 0.25, 0.5, 0.75, 1] }`
   通知タイミングを設定する。
   例: 25%見えた時、50%見えた時などでコールバックが呼ばれる。
12. `[57] );`
   `IntersectionObserver`作成を閉じる。

なぜこの処理が必要か:
- スクロール中に「今どこを読んでいるか」を自動判定するため
- 判定結果を`Navbar`へ渡し、該当メニューを強調表示するため

### ブロック6: observer適用と後始末（59〜65行）

```tsx
[59]     sectionIds.forEach((id) => {
[60]       const el = document.getElementById(id);
[61]       if (el) observer.observe(el);
[62]     });
[64]     return () => observer.disconnect();
[65]   }, []);
```

何をしているか:
- `sectionIds`にある要素を順に監視対象へ登録
- 終了時に監視を解除

ここは塊で読むべき:
- 「監視対象を登録する」+「最後に解除する」のセット処理だから

分解して読む:
1. `[59] sectionIds.forEach((id) => {`
   `sectionIds`配列に入っているIDを1つずつ取り出して処理する。
2. `[60] const el = document.getElementById(id);`
   そのIDを持つ実際のHTML要素を探す。
3. `[61] if (el) observer.observe(el);`
   要素が見つかったときだけ監視対象として登録する。
   これで、その要素の見え方が変わると`IntersectionObserver`のコールバックが動く。
4. `[62] });`
   `forEach`処理を閉じる。
5. `[64] return () => observer.disconnect();`
   後始末処理。`App`が終わるときに監視をすべて解除する。
   解除しないと不要な監視が残り、メモリや動作の問題につながる。
6. `[65] }, []);`
   `useEffect`を閉じる。`[]`なので初回に1回だけ登録・解除セットを準備する。

なぜ必要か:
- ブロック5で「監視の仕組み」は作ったが、対象要素を登録しないと何も監視されないため
- 逆に終了時に解除しないと、ページ移動後も監視が残る可能性があるため

### ブロック7: テーマ切り替え関数（67〜69行）

```tsx
[67]   const handleThemeToggle = () => {
[68]     setTheme(t => t === 'dark' ? 'light' : 'dark');
[69]   };
```

何をしているか:
- ボタンが押された時に`theme`を反転

分解:
- `t => ...` は「今の値`t`を受け取って次の値を返す関数」

ここは塊で読むべき:
- 3行で「切り替え関数を定義する」1処理だから

分解して読む:
1. `[67] const handleThemeToggle = () => {`
   テーマ切り替え専用の関数を作る。
   目的: クリック時の処理を1つの名前で呼べるようにするため。
2. `[68] setTheme(t => t === 'dark' ? 'light' : 'dark');`
   現在の`theme`を見て、次の`theme`を決めて更新する。
   - 今が`dark`なら`light`
   - 今が`light`なら`dark`
3. `[69] };`
   関数定義を閉じる。

なぜこの書き方にするか:
- `setTheme('dark')`のように固定値を入れると毎回同じ値になる
- 今回は「現在値から反転」したいので、`t => ...`（関数型更新）を使う

### ブロック8: JSXを返す（72〜89行）

```tsx
[71]   return (
[72]     <div className="app-container">
[73]       <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
[74]       <Navbar scrollY={scrollY} theme={theme} onThemeToggle={handleThemeToggle} activeSection={activeSection} />
[75]       <main>
[76]         <Hero />
[77]         <About />
[78]         <Projects />
[79]         <Skills />
[80]         <Contact />
[81]       </main>
[82]       <Footer />
[83]       <ScrollToTop visible={scrollY > window.innerHeight} />
[84]     </div>
[85]   );
[86] }
[88] export default App;
```

何をしているか:
- 進捗バー、`Navbar`、各セクション、`Footer`、`ScrollToTop`を順番に表示
- 最後に`App`を`export`して他ファイルから使えるようにする

分解:
- `[75]` は`Navbar`へ4つの値/関数を渡している
- `[84]` は「1画面分以上スクロールしたら」トップへ戻るボタンを表示する条件

ここは塊で読むべき:
- これは「最終的にどんな画面を出すか」をまとめて返すブロックだから

分解して読む:
1. `[71] return (`
   ここからブラウザへ返す画面レイアウトを書き始める。
2. `[72] <div className="app-container">`
   画面全体を包む外側コンテナを開始する。
3. `[73] <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />`
   進捗バーを表示する。`scrollProgress`の値に応じてバー幅が変わる。
4. `[74] <Navbar scrollY={scrollY} theme={theme} onThemeToggle={handleThemeToggle} activeSection={activeSection} />`
   上部ナビを表示し、必要な値を渡す。
   - `scrollY`: 今のスクロール位置
   - `theme`: 現在テーマ
   - `onThemeToggle`: テーマ切り替え関数
   - `activeSection`: 今見えているセクション
5. `[75] <main>`
   ページ本文エリアの開始。
6. `[76]-[80] <Hero /> ... <Contact />`
   各セクションを上から順に配置する。
   表示順はこの並び順で決まる。
   ナビバーのリンク順（経歴→プロジェクト→スキル・資格→基本情報）と一致させている。
7. `[81] </main>`
   本文エリアを閉じる。
8. `[82] <Footer />`
   フッターを表示する。
9. `[83] <ScrollToTop visible={scrollY > window.innerHeight} />`
   右下の「上へ戻る」ボタンを表示する。
   `scrollY > window.innerHeight` のときだけ表示される。
10. `[84] </div>`
    外側コンテナを閉じる。
11. `[85] );`
    `return`を閉じる。
12. `[86] }`
    `App`関数を閉じる。
13. `[88] export default App;`
    この`App`を他ファイル（`main.tsx`など）から使えるように公開する。

なぜこの順番が大事か:
- JSXは上から下へ読んだ順で画面に並びやすい
- つまり`Hero`を上、`Contact`を下にしたいなら、この並びで書く

### よくある勘違い
- `App.tsx`に全文章を書くべきと思う  
  → 実データは`src/data/profile.ts`に分離する設計です。

---

## 1-4. 各コンポーネント（`src/components/*.tsx`）

### このファイル群で実際にやっていること
`profile.ts`の値を読み取り、見出し・文章・カードとして画面に出します。

※ここを逐行解説しない理由: ファイル数が多く情報過多になりやすいため、まず役割とデータ受け渡しだけを押さえる方が理解しやすいです。

### 主な部品
- `Navbar.tsx`: 上部メニュー
- `Hero.tsx`: 最初の自己紹介エリア
- `About.tsx`: 経歴
- `Skills.tsx`: スキル・資格
- `Projects.tsx`: 制作物
- `Contact.tsx`: 基本情報
- `Footer.tsx`: 下部エリア
- `ScrollToTop.tsx`: ページ上部に戻るボタン

最初に1つだけ読むなら`Hero.tsx`がおすすめです（構造がシンプルで、`profile.ts`のデータ表示の流れを追いやすい）。

### よくある勘違い
- コンポーネント名とファイル名を別にしてよいと思う  
  → 学習段階では一致させる方が追いやすいです。

---

## 1-5. `src/data/profile.ts`

### このファイルで実際にやっていること
表示する文字、リンク、配列データ（経歴・制作物など）を1か所に置いています。

※ここを逐行解説しない理由: 値の一覧を1行ずつ追うより、どの項目をどこで編集すれば画面が変わるかを先に覚える方が実用的だからです。

### 何が書いてあるか
- 名前、肩書き、紹介文
- 経歴データ（配列）
- スキル、資格
- 制作物情報
- 連絡先

### よくある勘違い
- 表示文を各コンポーネントへ直接書き散らす  
  → まずは`profile.ts`に集約すると管理しやすいです。

---

## 2. CSSはどう分かれている？（どこを触れば何が変わるか）

- `src/index.css`  
ページ全体に効く設定（背景色、文字色、テーマ変数）を変更すると全体が変わる
- `*.module.css`  
そのコンポーネントだけに効く見た目（余白、フォントサイズ、配置）を変更できる

例:

```text
Hero.tsx        ← 構造・表示ロジック
Hero.module.css ← Hero専用の見た目
```

---

## 3. 最初の編集体験（5分）

1. `src/data/profile.ts`を開く
2. `name` を1つ変更
3. 保存する
4. ブラウザを確認し、表示が変わることを確認

ここで体験してほしいことは1つです。  
`profile.ts`の文字を変えると、対応する画面の文字がすぐ変わります。

慣れてきたら、`tagline` や `subtitle` など他の短い文言でも同じように確認できます。

---

## 4. つまずきやすいポイント集

- 保存したのに画面が変わらない  
  → まず保存できているか確認。開発サーバー再起動も試す。
- `Cannot find module` が出る  
  → `import`パスのスペルを確認（`./`と`../`）。
- 画面が真っ白になった  
  → `index.html`の`id="root"`と`main.tsx`の`getElementById('root')`が一致しているか確認。
- 型エラーが出る  
  → `profile.ts`の項目名や値の型が既存形式と一致しているか確認。

---

## 5. 使用ライブラリ（1行版）

- React: 画面を部品化して管理しやすくする
- TypeScript: 入力ミスや型ミスを早めに検知する
- Vite: 開発サーバーの起動とビルドを高速化する
- Framer Motion: アニメーション実装を簡単にする
- Lucide React: アイコンを軽量に利用する
- CSS Modules: コンポーネントごとに安全にCSSを分離する

---

## 6. 面接Q&A（短縮版）

**Q. このサイトはどう表示されますか？**  
A. `index.html`の`root`を起点に、`main.tsx`が`App`を描画し、`App.tsx`が各コンポーネントを並べて表示します。

**Q. 文章データはどこで管理していますか？**  
A. `src/data/profile.ts`に集約し、各コンポーネントから読み込んでいます。

**Q. ダークモードはどう切り替えていますか？**  
A. `App.tsx`で`theme`状態を管理し、`data-theme`属性を変更してCSS変数を切り替えています。

---

## 7. 最後に（この順で読めばOK）

1. `index.html`
2. `src/main.tsx`
3. `src/App.tsx`
4. `src/components/*`
5. `src/data/profile.ts`

この順に追うと、「どこから始まり、どこで内容を変えるか」が迷いにくくなります。

補足: 本編（セクション1）はコードの実行順で解説しましたが、自学では `src/data/profile.ts`（データ構造）を `src/components/*` より先に読んでも理解しやすいです。
