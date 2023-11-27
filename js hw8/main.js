

let title = document.createElement('title');
title.innerHTML = 'New page';
let utf8 = document.createElement('meta');
utf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(title);
document.head.appendChild(utf8);


let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
let container = document.body;
container.appendChild(h1);
h1.classList.add('mainHeader');
h1.style.textAlign = 'center';
h1.style.fontSize = '36px';
h1.style.fontFamily = 'Arvo';
h1.style.color = '#212121';
h1.style.lineHeight = '133.333%';
h1.style.margin = '0';
h1.style.paddingTop = '100px';
let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
container.appendChild(p1);
p1.style.textAlign = 'center';
p1.style.marginTop = '10px';
p1.style.fontSize = '14px';
p1.style.fontFamily = 'OpenSans';
p1.style.color = '#9FA3A7';
p1.style.lineHeight = '185.714%';

let mainBlok = document.createElement('div');
container.appendChild(mainBlok);
mainBlok.style.display = 'flex';
mainBlok.style.width = '800px';
mainBlok.style.margin = '0 auto';
mainBlok.style.marginTop  = '55px';
mainBlok.style.borderRadius = '5px';

let leftBlok = document.createElement('div');
mainBlok.appendChild(leftBlok);
leftBlok.style.width = '400px';
leftBlok.style.display = 'flex';
leftBlok.style.flexDirection = 'column';
leftBlok.style.alignItems = 'center';
leftBlok.style.justifyContent = 'center';
leftBlok.style.border = '1px solid #E8E9ED';
leftBlok.style.borderRadius = '3px';



let leftSubtitle = document.createElement('h4');
leftSubtitle.innerHTML = 'FREELANCER'
leftBlok.appendChild(leftSubtitle);
leftSubtitle.style.marginTop = '82px';
leftSubtitle.style.marginBottom = '19px';
leftSubtitle.style.color = '#9FA3A7';
leftSubtitle.style.fontFamily = 'Montserrat';
leftSubtitle.style.fontSize = '14px';
leftSubtitle.style.letterSpacing = '2.4px';

let rightBlok = document.createElement('div');
mainBlok.appendChild(rightBlok);
rightBlok.style.width = '400px';
rightBlok.style.backgroundColor = '#8F75BE';
rightBlok.style.display = 'flex';
rightBlok.style.justifyContent = 'center';
rightBlok.style.alignItems = 'center';
rightBlok.style.flexDirection = 'column';
rightBlok.style.borderRadius = '3px';

let rightSubtitle = document.createElement('h4');
rightSubtitle.innerHTML = 'STUDIO';
rightBlok.appendChild(rightSubtitle);
rightSubtitle.style.marginTop = '82px';
rightSubtitle.style.marginBottom = '19px';
rightSubtitle.style.color = '#FFC80A';
rightSubtitle.style.fontFamily = 'Montserrat';
rightSubtitle.style.fontSize = '14px';
rightSubtitle.style.letterSpacing = '2.4px';







let text = document.createElement('p');
let leftText = document.createElement('p');
text.innerHTML = 'Initially designed to';
leftText.innerHTML = 'Initially designed to';
rightBlok.appendChild(text);
leftBlok.appendChild(leftText);
text.classList.add('mainText');
leftText.classList.add('mainText');
leftText.classList.add('mainLeftText');
let style = document.createElement('style');
style.innerHTML = `
.mainText {
    width: 210px;
    color: #FFF;;
    font-family: Arvo;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 127.778%;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 25px;
}
.mainLeftText{
    color: #212121;
}`
document.head.appendChild(style);


let leftParagraf = document.createElement('p');
let rightParagraf = document.createElement('p');
leftParagraf.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
rightParagraf.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
leftBlok.appendChild(leftParagraf);
rightBlok.appendChild(rightParagraf);
leftParagraf.classList.add('paragraf');
rightParagraf.classList.add('paragraf');
rightParagraf.classList.add('rightParagraf');
let style1 = document.createElement('style');
style1.innerHTML = `
.paragraf{
    width: 210px;
    color: #9FA3A7;
    text-align: center;
    font-family: OpenSans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 183.333%;
    margin-top: 0px;
    margin-bottom: 56px;
}
.rightParagraf{
    color: #FFF;
}`
document.head.appendChild(style1);

let leftButton = document.createElement('button');
let rightButton = document.createElement('button');
leftButton.innerHTML = 'START HERE';
rightButton.innerHTML = 'START HERE';
leftBlok.appendChild(leftButton);
rightBlok.appendChild(rightButton);
leftButton.classList.add('button');
rightButton.classList.add('button');
rightButton.classList.add('rightButton');
let style2 = document.createElement('style');
style2.innerHTML = `
.button{
    width: 156px;
    height: 45px;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 20px;
    border: #FFC80A solid 3px;
    letter-spacing: 2.4px;
    margin-bottom: 90px;
    font-family: 'Montserrat';
}
.rightButton{
    color: white;
}
`
document.head.appendChild(style2);







