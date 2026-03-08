// =====================================================================
//  ポートフォリオ設定ファイル
//  表示内容はすべてここで管理する
// =====================================================================

// ----- 型定義 -----

/** 1=基礎, 2=実務, 3=得意 */
type Level = 1 | 2 | 3;

interface Skill {
    name: string;
    level: Level;
}

interface Certification {
    name: string;
    /** 取得年月（例: "2024.10"） */
    date: string;
    /** true で強調表示 */
    highlight?: boolean;
}

interface Career {
    company?: string;
    role: string;
    desc: string;
    project?: string;
    tasks?: string[];
    achievements?: string[];
    tech?: string;
}

interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    /** 空欄 '' でボタン非表示 */
    github: string;
    /** 空欄 '' でボタン非表示 */
    demo: string;
    time: string;
    /** true で大カード表示 */
    featured?: boolean;
    /** 以下3つを書くとケーススタディ表示 */
    challenge?: string;
    approach?: string;
    result?: string;
}


export const profile = {

    // ----- 基本情報 -----
    name: '山田 太郎',
    nameReading: 'やまだ たろう',
    navName: 'Yamada',
    location: '東京都渋谷区',
    email: 'taro@example.com',
    github: '',

    // ----- トップページ -----
    greeting: 'こんにちは、',
    subtitle: '未経験からWebエンジニアを目指して学習中です。',
    tagline: 'Webエンジニア志望',

    // ----- 経歴 -----
    narrative: '前職では営業として3年間法人向け提案を行い、その後プログラミングを学び始めました。',

    careers: [
        {
            role: 'フロントエンドエンジニア',
            desc: 'ECサイトのフロントエンド刷新を担当。',
            project: 'ECサイトリニューアル',
            tasks: [
                'コンポーネント設計・実装',
                'パフォーマンス改善',
            ],
            achievements: [
                'ページ表示速度を40%改善',
                'コードレビュー体制を導入',
            ],
            tech: 'React, TypeScript, Figma',
        },
        {
            role: '営業',
            desc: '法人向けITソリューションの提案営業を担当。',
            project: '中小企業向けDX推進パッケージ販売',
            tasks: [
                '新規顧客へのヒアリング・課題整理・提案書作成',
                '既存顧客への定期フォロー・アップセル提案',
                '展示会・セミナーでのリード獲得と商談化',
            ],
            achievements: [
                '年間売上目標120%達成（チーム内1位）',
                '新規顧客10社獲得、うち3社は年間契約に発展',
                '提案テンプレートを整備し、チーム全体の商談準備時間を30%短縮',
            ],
            tech: 'Salesforce, Excel, PowerPoint',
        },
    ] as Career[],

    // ----- スキル・資格 -----
    // level: 1=基礎, 2=実務, 3=得意
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

    // highlight: true で強調表示
    certifications: [
        { name: '基本情報技術者', date: '2024.10', highlight: true },
        { name: 'TOEIC 700点', date: '2023.06' },
    ] as Certification[],

    // ----- 制作物 -----
    projects: [
        {
            title: 'タスク管理アプリ',
            description: 'チームのタスク管理を効率化するWebアプリ。',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
            tags: ['React', 'TypeScript'],
            github: 'https://github.com/yourname/your-repo',
            demo: 'https://your-demo-url.vercel.app',
            time: '50h',
            featured: true,
            challenge: 'チーム内のタスク管理が属人化していた。',
            approach: 'ドラッグ&ドロップで直感的に操作できるUIを設計。',
            result: 'チーム内で実際に運用を開始。',
        },
    ] as Project[],
};


export type { Level, Skill, Certification, Career, Project };
