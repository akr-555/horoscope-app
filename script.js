const SIGNS = [
  { ja: '牡羊座', en: 'Aries',       icon: '♈' },
  { ja: '牡牛座', en: 'Taurus',      icon: '♉' },
  { ja: '双子座', en: 'Gemini',      icon: '♊' },
  { ja: '蟹座',   en: 'Cancer',      icon: '♋' },
  { ja: '獅子座', en: 'Leo',         icon: '♌' },
  { ja: '乙女座', en: 'Virgo',       icon: '♍' },
  { ja: '天秤座', en: 'Libra',       icon: '♎' },
  { ja: '蠍座',   en: 'Scorpio',     icon: '♏' },
  { ja: '射手座', en: 'Sagittarius', icon: '♐' },
  { ja: '山羊座', en: 'Capricorn',   icon: '♑' },
  { ja: '水瓶座', en: 'Aquarius',    icon: '♒' },
  { ja: '魚座',   en: 'Pisces',      icon: '♓' },
];

const MESSAGES = {
  ja: {
    overall: [
      '新しい流れがあなたの周りで動き始めています。直感を大切に行動すると吉。',
      '穏やかなエネルギーに包まれた一日。焦らず自分のペースを守りましょう。',
      '思いがけない出来事がチャンスに変わる日。柔軟に対応することが大切です。',
      '自分の気持ちに正直になることで、物事がスムーズに進みます。',
      '少し立ち止まって、周囲を見渡してみてください。大切なものが見えてきます。',
      '積み重ねてきた努力が実を結ぶ暗示。自信を持って前に進みましょう。',
      '人との縁が開運のカギ。積極的にコミュニケーションをとってみて。',
      '内なる声に耳を傾ける日。静かな環境で自分と向き合う時間を作りましょう。',
    ],
    love: [
      '相手の気持ちを受け取る準備ができています。素直な言葉が心を動かします。',
      '深い対話があなたの関係をより豊かにします。言葉を選んで伝えましょう。',
      'ときめきの予感。日常の小さな幸せに目を向けると新たな気づきがあります。',
      '関係をより深めるなら今がタイミング。一歩踏み出す勇気が大切です。',
      'ひとりの時間を楽しむことで、自分の本当の望みが見えてきます。',
      '笑顔がご縁を引き寄せます。明るく過ごすことで素敵な出会いがあるかも。',
      '相手への思いやりを忘れずに。小さな気遣いが大きな信頼につながります。',
      'パートナーとの時間を大切にする日。一緒に過ごす何気ない瞬間が宝物に。',
    ],
    work: [
      'アイデアが豊かに湧き出る日。思い切って提案してみましょう。',
      '細部に注意を向けることが成功の近道。丁寧に取り組むと評価が上がります。',
      'チームワークが力を発揮します。周囲と協力して進めましょう。',
      '計画通りに進まなくても焦らないで。臨機応変な対応が好結果を生みます。',
      '集中力が高まっています。難しい課題に取り組むなら今がベストです。',
      '新しいスキルを試す良い機会。失敗を恐れずチャレンジしてみましょう。',
      'コミュニケーションを丁寧に。ひとこと確認するだけでトラブルを防げます。',
      '積み上げてきた実績が認められる兆し。自信を持って取り組んでください。',
    ],
    money: [
      '計画的な支出を意識すると、後で余裕が生まれます。',
      '衝動買いに注意。本当に必要かどうかを一呼吸おいて考えましょう。',
      '小さな節約の積み重ねが力になる日。固定費を見直すのも良いでしょう。',
      '予想外の臨時収入の暗示。感謝の気持ちを忘れずに。',
      '投資より貯蓄を優先する日。安定を大切にする判断が吉。',
      'お金の流れを整理するのに良いタイミング。家計の見直しを始めてみて。',
      '人への贈り物や食事など、気持ちへの出費は巡り巡って返ってきます。',
      '収入アップのヒントが身近にあります。アンテナを張っておきましょう。',
    ],
  },
  en: {
    overall: [
      'A new flow is beginning to move around you. Trust your intuition and take action.',
      'A calm and peaceful day unfolds. Take your time and move at your own pace.',
      'An unexpected event may turn into a great opportunity. Stay flexible and open.',
      'Being honest with your feelings will help things move forward smoothly.',
      'Pause for a moment and look around. Something important may come into view.',
      'The efforts you have built up are about to bear fruit. Move forward with confidence.',
      'Connection with others is the key to good fortune. Be open to communication.',
      'A day to listen to your inner voice. Find a quiet moment to reflect on yourself.',
    ],
    love: [
      'You are ready to receive another\'s feelings. Honest words will move their heart.',
      'Deep conversation will enrich your relationship. Choose your words thoughtfully.',
      'A sense of excitement is in the air. Notice the small joys of everyday life.',
      'If you want to deepen your bond, now is the time. Courage to take a step forward matters.',
      'Enjoying time alone will help you discover what you truly desire.',
      'Your smile attracts good encounters. Staying cheerful may bring a wonderful meeting.',
      'Don\'t forget kindness toward others. Small gestures build great trust.',
      'A day to cherish time with your partner. Ordinary moments become treasures.',
    ],
    work: [
      'Ideas flow freely today. Be bold and share your proposals.',
      'Attention to detail is the shortcut to success. A careful approach earns recognition.',
      'Teamwork shines today. Cooperate with those around you to move forward.',
      'Don\'t worry if things don\'t go as planned. Flexibility will bring good results.',
      'Your concentration is at its peak. Now is the best time to tackle difficult tasks.',
      'A great chance to try new skills. Challenge yourself without fear of failure.',
      'Communicate carefully. A single confirmation can prevent potential trouble.',
      'A sign that your accomplishments will be recognized. Proceed with confidence.',
    ],
    money: [
      'Being mindful of planned spending will create financial room later.',
      'Watch out for impulse buying. Take a breath before deciding if it\'s truly needed.',
      'Small savings add up to great power. Reviewing fixed costs is also a good idea.',
      'A hint of unexpected income. Remember to stay grateful.',
      'Prioritize saving over investing today. A stable approach brings good fortune.',
      'A good time to organize your finances. Consider reviewing your household budget.',
      'Spending on gifts or meals for others comes back around in kind.',
      'Hints for increasing income are nearby. Keep your antenna up.',
    ],
  },
};

const LUCKY_COLORS = {
  ja: ['ホワイト', 'ベージュ', 'スカイブルー', 'ラベンダー', 'ミントグリーン',
       'コーラルピンク', 'ゴールド', 'ネイビー', 'テラコッタ', 'シルバー',
       'オリーブ', 'ライラック', 'アイボリー', 'チャコール', 'パウダーブルー'],
  en: ['White', 'Beige', 'Sky Blue', 'Lavender', 'Mint Green',
       'Coral Pink', 'Gold', 'Navy', 'Terracotta', 'Silver',
       'Olive', 'Lilac', 'Ivory', 'Charcoal', 'Powder Blue'],
};

const I18N = {
  ja: {
    title:       '今日の星座占い',
    selectLabel: '星座を選んでください',
    overall:     '総合',
    love:        '恋愛',
    work:        '仕事',
    money:       '金運',
    luckyLabel:  'ラッキーカラー：',
  },
  en: {
    title:       "Today's Horoscope",
    selectLabel: 'Choose your sign',
    overall:     'Overall',
    love:        'Love',
    work:        'Work',
    money:       'Fortune',
    luckyLabel:  'Lucky Color: ',
  },
};

// --- State ---
let currentLang = 'ja';
let currentSignIndex = null;

// --- Seeded random (date + sign index) ---
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
  return '★'.repeat(count) + '☆'.repeat(5 - count);
}

function getStarCount(rand) {
  const r = rand();
  if (r < 0.1) return 2;
  if (r < 0.3) return 3;
  if (r < 0.7) return 4;
  return 5;
}

// --- Date format ---
function formatDate(d, lang) {
  if (lang === 'en') {
    const months = ['January','February','March','April','May','June',
                    'July','August','September','October','November','December'];
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }
  const week = ['日', '月', '火', '水', '木', '金', '土'];
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日（${week[d.getDay()]}）`;
}

// --- Language switch ---
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Toggle button states
  document.getElementById('btn-ja').classList.toggle('active', lang === 'ja');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  // Update page title
  document.getElementById('page-title').textContent = I18N[lang].title;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  // Update date
  document.getElementById('today-date').textContent = formatDate(new Date(), lang);

  // Update sign button labels
  document.querySelectorAll('.sign-btn').forEach(btn => {
    const i = parseInt(btn.dataset.index, 10);
    btn.querySelector('.btn-name').textContent = SIGNS[i][lang];
  });

  // Re-render result if a sign is selected
  if (currentSignIndex !== null) renderResult(currentSignIndex);
}

// --- Sign buttons ---
const grid = document.getElementById('sign-grid');
SIGNS.forEach((sign, i) => {
  const btn = document.createElement('button');
  btn.className = 'sign-btn';
  btn.dataset.index = i;
  btn.innerHTML = `<span class="btn-icon">${sign.icon}</span><span class="btn-name">${sign[currentLang]}</span>`;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sign-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSignIndex = i;
    renderResult(i);
  });
  grid.appendChild(btn);
});

// --- Render result ---
function renderResult(index) {
  const sign = SIGNS[index];
  const rand = seededRand(getDailySeed(index));
  const msgs = MESSAGES[currentLang];
  const colors = LUCKY_COLORS[currentLang];

  document.getElementById('result-icon').textContent = sign.icon;
  document.getElementById('result-sign-name').textContent = sign[currentLang];

  const categories = [
    { stars: 'stars-overall', text: 'text-overall', key: 'overall' },
    { stars: 'stars-love',    text: 'text-love',    key: 'love' },
    { stars: 'stars-work',    text: 'text-work',    key: 'work' },
    { stars: 'stars-money',   text: 'text-money',   key: 'money' },
  ];

  categories.forEach(({ stars, text, key }) => {
    document.getElementById(stars).textContent = starsHTML(getStarCount(rand));
    document.getElementById(text).textContent = pickRandom(msgs[key], rand);
  });

  document.getElementById('lucky-color').textContent = pickRandom(colors, rand);

  const result = document.getElementById('result');
  result.hidden = false;
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- Init ---
document.getElementById('today-date').textContent = formatDate(new Date(), currentLang);
