const { generateText } = require('../util.test.js')

TextDecoderStream('Saída de Nome e Idade', ()=>{
    const text = generateText('Houser', 30);
    expect(text).toBe('Houser(30 years old)');
});