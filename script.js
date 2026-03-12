const SIGNS = {
  aries:       '♈ 牡羊座',
  taurus:      '♉ 牡牛座',
  gemini:      '♊ 双子座',
  cancer:      '♋ 蟹座',
  leo:         '♌ 獅子座',
  virgo:       '♍ 乙女座',
  libra:       '♎ 天秤座',
  scorpio:     '♏ 蠍座',
  sagittarius: '♐ 射手座',
  capricorn:   '♑ 山羊座',
  aquarius:    '♒ 水瓶座',
  pisces:      '♓ 魚座',
};

const MESSAGES = [
  '✨ 今日は新しいことに挑戦するのに最適な日です。直感を信じて、一歩踏み出してみましょう！',
  '🌸 周囲の人との絆が深まる一日です。感謝の気持ちを言葉にすると、良い関係が築けるでしょう。',
  '🌿 少し立ち止まって、自分自身を見つめ直す時間を作りましょう。焦らずに進めることが大切です。',
  '🌟 思いがけない出会いやチャンスが訪れるかもしれません。アンテナを高く張っておきましょう！',
  '🌈 コツコツと積み重ねてきた努力が実を結ぶ予感があります。自分を信じて進みましょう。',
  '☁️ 今日は無理せず、自分のペースを大切にしてください。休息も大きな前進につながります。',
  '💡 クリエイティブなアイデアが次々と浮かぶ日です。メモを取りながら行動に移していきましょう！',
  '👂 人の話をよく聞くことで、大切なヒントが得られます。傾聴の姿勢を心がけてみてください。',
  '📋 計画をしっかり立てることで、物事がスムーズに進みます。段取り上手な一日になりそうです。',
  '🕊️ 感情の波が穏やかで、冷静な判断ができる日です。重要な決断をするのに向いています。',
  '🤝 誰かを助けることで、自分にも幸運が舞い込んでくる日です。積極的に手を差し伸べましょう。',
  '🍀 小さなことに喜びを見つけてみてください。日常の中に幸せのヒントが隠れています。',
];

const LOVE_MESSAGES = [
  '💬 素直な気持ちを伝えることで、関係が一歩進みそうです。',
  '💞 相手の言葉をしっかり受け止めると、心の距離が縮まります。',
  '🌺 焦らず自然体でいることが、魅力を引き出すカギです。',
  '🎊 偶然の出会いが、特別な縁につながるかもしれません。',
  '🕯️ 二人の時間を大切にすると、絆がより深まるでしょう。',
  '💅 自分を磨くことへの意欲が、恋愛運を高めてくれます。',
  '🌷 少し勇気を出して、気持ちを行動で示してみましょう。',
  '☺️ 穏やかな雰囲気が、相手に安心感を与える日です。',
  '🌱 過去のことは手放して、新しい気持ちで向き合いましょう。',
  '✨ 心のゆとりが、素敵な出会いを引き寄せてくれます。',
];

const WORK_MESSAGES = [
  '🤝 チームとの連携を意識すると、仕事が円滑に進みます。',
  '🔍 細かいことにも丁寧に取り組む姿勢が評価されそうです。',
  '💡 新しいアイデアを積極的に提案するのに良いタイミングです。',
  '📌 優先順位を整理することで、効率がぐっと上がります。',
  '💬 困ったときは一人で抱え込まず、周囲に相談しましょう。',
  '🌟 地道な努力が実を結ぶ日です。自分を信じて進んで！',
  '🎯 集中力が高まる日。重要な作業を今日中に片付けましょう。',
  '🌿 コミュニケーションを丁寧にとることで、信頼が深まります。',
  '🚀 新しいスキルへの挑戦が、将来の可能性を広げてくれます。',
  '💪 今日の頑張りが、明日の自信につながっていきます。',
];

const MONEY_MESSAGES = [
  '🛍️ 衝動買いは控えめに。本当に必要なものを見極めて。',
  '🪙 小さな節約の積み重ねが、大きな実りになります。',
  '💰 思わぬ臨時収入の予感！ただし使い道は慎重に。',
  '🔭 長期的な視点でお金を考えると、安心感が生まれます。',
  '📒 今日の出費は記録しておくと、後で役立ちます。',
  '🏦 投資よりも貯蓄を優先するのが吉の日です。',
  '🍽️ 友人との食事など、心の豊かさへの出費は◎。',
  '🌱 価値あるものへの出費は惜しまないで。未来への投資です。',
  '📊 家計の見直しをするのに良いタイミングです。',
  '🌊 お金の流れを整えることで、運気も整ってきます。',
];

const COLORS = ['ホワイト', 'ベージュ', 'ライトブルー', 'ラベンダー', 'ミントグリーン', 'コーラルピンク', 'ゴールド', 'シルバー', 'テラコッタ', 'ネイビー', 'スカイブルー', 'チャコール'];

// 日付ベースのシード生成（同じ日・同じ星座なら同じ結果）
function seedRandom(sign, date) {
  const str = sign + date;
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return function () {
    h ^= h << 13;
    h ^= h >> 17;
    h ^= h << 5;
    return (h >>> 0) / 4294967296;
  };
}

function randInt(rng, min, max) {
  return min + Math.floor(rng() * (max - min + 1));
}

function renderStars(score) {
  return '★'.repeat(score) + '☆'.repeat(5 - score);
}

function formatDate(d) {
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

// 今日の日付を表示
const today = new Date();
const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
document.getElementById('today').textContent = formatDate(today);

// ボタンのクリック処理
document.querySelectorAll('.sign-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sign-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showFortune(btn.dataset.sign);
  });
});

function showFortune(sign) {
  const rng = seedRandom(sign, dateStr);

  const overall = randInt(rng, 2, 5);
  const love    = randInt(rng, 1, 5);
  const work    = randInt(rng, 1, 5);
  const money   = randInt(rng, 1, 5);
  const msgIdx      = Math.floor(rng() * MESSAGES.length);
  const loveMsgIdx  = Math.floor(rng() * LOVE_MESSAGES.length);
  const workMsgIdx  = Math.floor(rng() * WORK_MESSAGES.length);
  const moneyMsgIdx = Math.floor(rng() * MONEY_MESSAGES.length);
  const colorIdx    = Math.floor(rng() * COLORS.length);
  const luckyNum    = randInt(rng, 1, 99);

  document.getElementById('result-sign').textContent = SIGNS[sign];
  document.getElementById('result-date').textContent = formatDate(today);
  document.getElementById('overall-stars').textContent = renderStars(overall);
  document.getElementById('overall-message').textContent = MESSAGES[msgIdx];
  document.getElementById('love-stars').textContent = renderStars(love);
  document.getElementById('love-message').textContent = LOVE_MESSAGES[loveMsgIdx];
  document.getElementById('work-stars').textContent = renderStars(work);
  document.getElementById('work-message').textContent = WORK_MESSAGES[workMsgIdx];
  document.getElementById('money-stars').textContent = renderStars(money);
  document.getElementById('money-message').textContent = MONEY_MESSAGES[moneyMsgIdx];
  document.getElementById('lucky-color').textContent = COLORS[colorIdx];
  document.getElementById('lucky-number').textContent = luckyNum;

  const result = document.getElementById('result');
  result.hidden = false;
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}