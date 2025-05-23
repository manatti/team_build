const quotes = [
    '幸せとは、健康で記憶力が悪いということだ - アルベルト・シュバイツァー',
    '継続は力なり - 不詳',
    '人間万事塞翁が馬 - 古事成語',
    '七転び八起き - 日本の諺',
    '意思あるところに道あり - 英語の諺',
    'おもしろき こともなき世をおもしろく すみなすものは 心なりけり - 高杉晋作',
    '人を信じよ、しかしその百倍も自らを信じよ - 手塚治虫',
    '辛い現実はあるものの、私は、今でも人間の心は本質的に善であると信じている。 - アンネフランク',
    '学び続けることが人生の基本 - アインシュタイン',
    '人を動かすにはまず自分が動け - 孫子'
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-container').innerText = quotes[randomIndex];
}