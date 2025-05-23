const quotes = [
    '失敗は成功の母 - 孔子',
    '継続は力なり - 不詳',
    '人間万事塞翁が馬 - 古事成語',
    '七転び八起き - 日本の諺',
    '意思あるところに道あり - 英語の諺',
    '夢を持つことは重要です - ウォルト・ディズニー',
    '幸せは旅の目的ではなく、旅そのもの - マルセル・プルースト',
    '挑戦しない人生はつまらない - スティーブ・ジョブズ',
    '学び続けることが人生の基本 - アインシュタイン',
    '人を動かすにはまず自分が動け - 孫子'
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-container').innerText = quotes[randomIndex];
}