// =====================================================================
//  ポートフォリオ設定ファイル
//  このファイルの内容を自分の情報に書き換えるだけでポートフォリオが完成します
//  コンポーネント（Hero.tsx, About.tsx など）を直接編集する必要はありません
// =====================================================================

// ----- 型定義（変更不要） -----

/** 習熟度: 1=基礎, 2=実務, 3=得意 */
type Level = 1 | 2 | 3;

interface Skill {
    name: string;
    level: Level;
}

interface Certification {
    name: string;
    /** 取得年月（例: "2024.10"）。未取得なら "取得予定" など */
    date: string;
    /** true にすると強調表示される（難関資格など） */
    highlight?: boolean;
}

interface Career {
    type: 'engineer' | 'general';
    /** 会社名（非公開なら "企業（非公開）" など） */
    company: string;
    /** 職種（例: "フロントエンドエンジニア"） */
    role: string;
    /** プロジェクト名（任意） */
    project?: string;
    /** 業務内容の概要（1-2文） */
    desc: string;
    /** 担当業務の箇条書き（任意） */
    tasks?: string[];
    /** 実績・成果の箇条書き（任意） */
    achievements?: string[];
    /** 使用技術（任意） */
    tech?: string;
}

interface Project {
    title: string;
    description: string;
    /** 画像URL（Unsplash等の外部URL、または /images/xxx.webp のようなローカルパス） */
    image: string;
    /** 技術タグ */
    tags: string[];
    /** GitHubリポジトリURL（空欄ならボタン非表示） */
    github: string;
    /** デモサイトURL（空欄ならボタン非表示） */
    demo: string;
    /** 制作時間（例: "100h", "開発中"） */
    time: string;
    /** true にすると大きいカードで表示される（メインの制作物に） */
    featured?: boolean;
    /** 課題（任意。書くとケーススタディ表示になる） */
    challenge?: string;
    /** アプローチ（任意） */
    approach?: string;
    /** 成果（任意） */
    result?: string;
}


// =====================================================================
//  ここから下を自分の情報に書き換えてください
// =====================================================================

export const profile = {

    // ------------------------------------------------------------------
    //  基本情報
    //  → トップページ、ナビ、フッター、基本情報セクションに反映されます
    // ------------------------------------------------------------------

    /** あなたの名前（漢字） */
    name: '山田 太郎',

    /** ふりがな */
    nameReading: 'やまだ たろう',

    /** ナビバーに表示する短い名前（姓だけなど） */
    navName: 'Yamada',

    /** 住所（市区町村まででOK） */
    location: '東京都渋谷区',

    /** メールアドレス */
    email: 'example@gmail.com',

    /** GitHubユーザー名（空欄 '' にするとグレーアウトされます） */
    github: '',


    // ------------------------------------------------------------------
    //  Hero（トップページ）
    //  → ページを開いて最初に見えるエリア
    // ------------------------------------------------------------------

    /** 挨拶（そのままでもOK） */
    greeting: 'こんにちは、',

    /** 自己紹介（1-2文で簡潔に。何をしてきて、今何をしている人か） */
    subtitle: 'ここに自己紹介文を書いてください。例: Webエンジニアを目指して勉強中です。',

    /** ステータスバッジ（志望職種など短いフレーズ） */
    tagline: 'Webエンジニア志望',


    // ------------------------------------------------------------------
    //  経歴セクション
    // ------------------------------------------------------------------

    /** 経歴の概要（2-3文で、どういうキャリアを歩んできたかを簡潔に） */
    narrative: 'ここにキャリアの概要を書いてください。例: 前職では営業として3年間働き、その後プログラミングを学び始めました。',

    /**
     * エンジニア系の経歴（詳細カードで表示される）
     * 経験がなければ空配列 [] にしてください
     */
    engineerCareers: [
        {
            type: 'engineer' as const,
            company: '会社名',
            role: 'フロントエンドエンジニア',
            project: 'ECサイトリニューアル',
            desc: 'ここにプロジェクトの概要を書く。',
            tasks: [
                '担当業務1',
                '担当業務2',
            ],
            achievements: [
                '実績1',
                '実績2',
            ],
            tech: 'React, TypeScript',
        },
    ] as Career[],

    /**
     * エンジニア以外の経歴（コンパクトカードで表示される）
     * なければ空配列 [] にしてください
     */
    generalCareers: [
        {
            type: 'general' as const,
            company: '企業（非公開）',
            role: '営業',
            desc: '法人営業として新規開拓を担当。',
        },
    ] as Career[],


    // ------------------------------------------------------------------
    //  スキル・資格セクション
    // ------------------------------------------------------------------

    /**
     * スキルカテゴリ
     * level: 1=基礎（学習中）, 2=実務（使える）, 3=得意（自信あり）
     */
    skillCategories: [
        {
            title: 'フロントエンド',
            skills: [
                { name: 'HTML / CSS', level: 2 },
                { name: 'JavaScript', level: 2 },
                { name: 'React', level: 1 },
                { name: 'TypeScript', level: 1 },
            ] as Skill[],
        },
        {
            title: 'その他',
            skills: [
                { name: 'Git', level: 1 },
                { name: 'Linux', level: 1 },
            ] as Skill[],
        },
    ],

    /**
     * 保有資格
     * highlight: true にすると枠線が付いて目立つ
     */
    certifications: [
        { name: '基本情報技術者', date: '2024.10', highlight: true },
        { name: 'TOEIC 700点', date: '2023.06' },
    ] as Certification[],


    // ------------------------------------------------------------------
    //  制作物セクション
    // ------------------------------------------------------------------

    /**
     * 制作物一覧
     * featured: true → 大きなカードで表示（メインの制作物に使う）
     * github / demo: 空欄 '' にするとボタンが非表示になる
     * challenge / approach / result: 書くとケーススタディ風の表示になる
     */
    projects: [
        {
            title: 'サンプルアプリ',
            description: 'ここにアプリの説明を1-2文で。',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
            tags: ['React', 'TypeScript'],
            github: 'https://github.com/yourname/your-repo',
            demo: 'https://your-demo-url.vercel.app',
            time: '50h',
            featured: true,
            challenge: '何を作ろうとしたか。',
            approach: 'どう作ったか。',
            result: '何ができたか。',
        },
    ] as Project[],
};


// ----- 型エクスポート（変更不要） -----
export type { Level, Skill, Certification, Career, Project };
