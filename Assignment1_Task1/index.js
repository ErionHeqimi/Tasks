const data = [
  {
    imgSrc: 'photo1.jpg',
    header: 'The TLD',
    paragraph: 'Does the domain extendion math the language of the domain name?'
  },
  {
    imgSrc: 'photo2.jpg',
    header: 'Domain Length',
    paragraph: 'Is the domain short enough to remember?'
  },
  {
    imgSrc: 'photo3.jpg',
    header: 'Language',
    paragraph: 'How complex is the actuall domain name?'
  },
  {
    imgSrc: 'photo4.jpg',
    header: 'International recognition',
    paragraph: 'Can the domain name be used on an international scale?'
  },
  {
    imgSrc: 'photo5.jpg',
    header: 'Search engine',
    paragraph: 'Does the domain follow search engine guifelines?'
  },
  {
    imgSrc: 'photo6.jpg',
    header: 'Advertising Potential',
    paragraph: 'Could the domain be used for advertising campaigns?'
  },
  {
    imgSrc: 'photo7.jpg',
    header: 'Sales Opportunities',
    paragraph: 'Can the domain name be used on an international scale?'
  },
  {
    imgSrc: 'photo8.jpg',
    header: 'Typo susceptiblity',
    paragraph: 'How high is the risk of mistyping the domain name'
  },
  {
    imgSrc: 'photo9.jpg',
    header: 'Business Potential',
    paragraph: 'Can the domain be used as your company address?'
  },
];

const app = document.getElementById('app');

data.map(item => {
  const listItem = document.createElement('div');
  listItem.classList.add('item');

  const circle = document.createElement('div');
  circle.classList.add('circle');
  const img = document.createElement('img');
  img.src = item.imgSrc;
  circle.appendChild(img);

  const text = document.createElement('div');
  text.classList.add('text');

  const header = document.createElement('div');
  header.classList.add('header');
  header.textContent = item.header;

  const paragraph = document.createElement('div');
  paragraph.classList.add('paragraph');
  paragraph.textContent = item.paragraph;

  text.appendChild(header);
  text.appendChild(paragraph);

  listItem.appendChild(circle);
  listItem.appendChild(text);

  app.appendChild(listItem);
});
