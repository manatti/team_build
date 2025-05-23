const quotes = [
    '幸せとは、健康で記憶力が悪いということだ - アルベルト・シュバイツァー',
    '人は成功に向かってつまずく - メアリー・ケイ・アッシュ',
    '結婚とは、臆病者のまえに用意されたたった一つの冒険である - ヴォルテール',
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