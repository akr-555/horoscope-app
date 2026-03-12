const SIGNS = [
  { name: '牡羊座',  emoji: '🐏' },
  { name: '牡牛座',  emoji: '🐂' },
  { name: '双子座',  emoji: '👯' },
  { name: '蟹座',    emoji: '🦀' },
  { name: '獅子座',  emoji: '🦁' },
  { name: '乙女座',  emoji: '🌸' },
  { name: '天秤座',  emoji: '⚖️' },
  { name: '蠍座',    emoji: '🦂' },
  { name: '射手座',  emoji: '🏹' },
  { name: '山羊座',  emoji: '🐐' },
  { name: '水瓶座',  emoji: '🫧' },
  { name: '魚座',    emoji: '🐠' },
];

const MESSAGES = {
  overall: [
    'キラキラとした運気があなたを包んでいます。積極的に動くと吉！',
    'ゆったりとした流れの一日。自分のペースを大切にしてね💖',
    'ハプニングがチャンスに変わる予感✨ 柔軟さがカギになるよ。',
    '自分の気持ちに素直になると、道がひらけてくるはず！',
    'ちょっと立ち止まって周りを見渡してみて。大切なものが見えてくるかも🌷',
    '努力の積み重ねが花開く日🌸 自信を持って前に進もう！',
    '人とのつながりが幸運を呼び込む日💫 積極的に話しかけてみて。',
    '内なる声に耳を傾けて。ひとりの時間があなたをリチャージしてくれる🌙',
  ],
  love: [
    '相手の気持ちを受け取る準備ができています💕 素直な言葉が心を動かすよ。',
    '深い会話があなたの関係をもっと豊かにする日✨ じっくり話してみて。',
    'ときめきの予感がいっぱい🎀 日常の小さな幸せに目を向けると新たな気づきが。',
    '関係をもっと深めるなら今がチャンス！勇気を出して一歩踏み出してね💖',
    'ひとり時間を楽しむことで、本当に求めているものが見えてくる🌸',
    '笑顔がご縁を引き寄せる日🌟 明るく過ごすことで素敵な出会いがあるかも！',
    '思いやりの気持ちを大切に💕 小さな気遣いが大きな信頼につながるよ。',
    'パートナーとの時間を大切に🌷 何気ない瞬間がかけがえのない思い出になる。',
  ],
  work: [
    'アイデアがどんどん湧き出る日✨ 思い切ってシェアしてみよう！',
    '丁寧に取り組むことが成功への近道🌟 細かいところまでこだわってみて。',
    'チームワークで大きな力が生まれる日💪 周りと協力して進もう！',
    '計画通りにいかなくても大丈夫💖 柔軟な対応が好結果を呼ぶよ。',
    '集中力MAX💫 難しい課題にチャレンジするなら今がベストタイミング！',
    '新しいスキルにトライする絶好のチャンス🎀 失敗を恐れずGO！',
    'コミュニケーションを大切に💕 ひとこと確認するだけでトラブル回避できるよ。',
    '積み上げてきた実績がついに認められる兆し🌸 自信を持って！',
  ],
  money: [
    '計画的にお金を使うと後で余裕が生まれるよ💰 賢く管理しよう！',
    '衝動買いには要注意🌷 本当に必要か一呼吸おいて考えてみて。',
    '小さな節約の積み重ねが力になる日✨ 固定費の見直しもおすすめ。',
    '予想外の臨時収入の暗示💫 感謝の気持ちを忘れずに！',
    '今日は貯蓄優先がベスト🍀 安定を大切にする判断が吉だよ。',
    'お金の流れを整理するのに良いタイミング💖 家計の見直しを始めてみて！',
    '誰かへの贈り物や食事への出費は巡り巡って返ってくる✨ 気前よくいこう。',
    '収入アップのヒントが身近に転がってる🌟 アンテナを張っておいてね！',
  ],
};

const LUCKY_COLORS = [
  'ローズピンク🌸', 'ラベンダー💜', 'スカイブルー💙', 'ミントグリーン🌿',
  'コーラルピンク🌺', 'ゴールド✨', 'ホワイト🤍', 'ベビーピンク🎀',
  'パールホワイト🌙', 'シルバー💫', 'ライラック💐', 'パウダーブルー🦋',
];

const LUCKY_NUMBERS = [3, 5, 7, 8, 11, 12, 15, 21, 24, 33, 7, 9];

// シードベースの疑似ランダム（日付＋星座で当日固定）
function seededRand(seed) {
  let s = seed;
  return function () {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function getDailySeed(signIndex) {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate() + signIndex * 997;
}

function pickRandom(arr, rand) {
  return arr[Math.floor(rand() * arr.length)];
}

function starsHTML(count) {
  const filled = '⭐'.repeat(count);
  const empty  = '🌑'.repeat(5 - count);  // 空星の代わりに暗い丸
  return filled + empty;
}

function getStarCount(rand) {
  const r = rand();
  if (r < 0.08) return 2;
  if (r < 0.25) return 3;
  if (r < 0.65) return 4;
  return 5;
}

function formatDate(d) {
  const week = ['日', '月', '火', '水', '木', '金', '土'];
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日（${week[d.getDay()]}）`;
}

// 日付表示
document.getElementById('today-date').textContent = formatDate(new Date());

// 星座ボタン生成
const grid = document.getElementById('sign-grid');
SIGNS.forEach((sign, i) => {
  const btn = document.createElement('button');
  btn.className = 'sign-btn';
  btn.dataset.index = i;
  btn.innerHTML = `<span class="btn-emoji">${sign.emoji}</span><span class="btn-name">${sign.name}</span>`;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sign-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showResult(i);
  });
  grid.appendChild(btn);
});

function showResult(index) {
  const sign = SIGNS[index];
  const rand = seededRand(getDailySeed(index));

  document.getElementById('result-emoji').textContent = sign.emoji;
  document.getElementById('result-sign-name').textContent = sign.name;

  const categories = [
    { stars: 'stars-overall', text: 'text-overall', key: 'overall' },
    { stars: 'stars-love',    text: 'text-love',    key: 'love' },
    { stars: 'stars-work',    text: 'text-work',    key: 'work' },
    { stars: 'stars-money',   text: 'text-money',   key: 'money' },
  ];

  categories.forEach(({ stars, text, key }) => {
    document.getElementById(stars).textContent = starsHTML(getStarCount(rand));
    document.getElementById(text).textContent = pickRandom(MESSAGES[key], rand);
  });

  document.getElementById('lucky-color').textContent = pickRandom(LUCKY_COLORS, rand);
  document.getElementById('lucky-number').textContent = pickRandom(LUCKY_NUMBERS, rand);

  const result = document.getElementById('result');
  result.hidden = false;
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
