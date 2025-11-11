const quotes=[
  'To express habits or daily routines.',
  'To express universal truths or facts.',
  'To express feelings, opinions, or general statements.',
  'A letter is written by her every day.',
  'Football is played by them on Sundays.',
  'Ice cream is liked by me.',
  'The work is done by the students.',
  'The house is cleaned by my mother.',
  'She is writing a letter now.',
  'I am studying English grammar.',
  'Has the challenge been accepted?',
  ' The email has just been sent to them.',
  'Why hasn’t the email been sent yet?',
  'Why haven’t they come yet?',
  'The house is cleaned by my mother.',
  'তুমি কাপড়গুলো ধুয়েছ? ',
  'has not she come yet ?',
  'have not  the clothes been washed yet ?',
'The Math.floor() ',
'Because floor() is a static method of Math',
];
const btn=document.querySelector('button');
const quote=document.querySelector('h1');

btn.addEventListener('click',()=>{
  const index=Math.floor(Math.random()*quotes.length);
  quote.textContent=quotes[index];

})
