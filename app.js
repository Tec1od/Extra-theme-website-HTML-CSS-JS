const data = [
    {
      // img: './img1/ico1.png',
      img: './img1/ico1.png',
      title: 'Pre-built <br/> full websites',
      p: 'Save your website design time by importing pixel perfect ready to use WordPress website theme demos from our huge collection of starter sites.'
    },
    {
      // img: './img1/ico2.png',
      img: './img1/ico2.png',
      title: 'Live <br/> website builder',
      p: 'Create and customize your Xtra WordPress website in real time and see the results instantly with our unique preview mode. it will save you time!'
    },
    {
      // img: './img1/ico3.png',
      img: './img1/ico3.png',
      title: 'Super fast <br/> performance',
      p: 'XTRA WordPress theme is the most lightweight theme available in the market and offers unmatched performance and best result in search engines.'
    },
    {
      // img: './img1/ico4.png',
      img: './img1/ico4.png',
      title: 'No coding <br/> skills required',
      p: 'Build any WordPress website you can imagine with no coding skills. all settings and features are visual and you do not need touch any codes.'
    }
  ];


  // Card Container
  const cardContainer = document.querySelector('.card-container');
  data.slice(0, data.length).forEach(item => {
  // console.log(item);
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML= `
      <img src="${item.img}" alt="" class="ico">
      <h1 class="title">${item.title}</h1>
      <p class="p">${item.p}</p>
    `;
    // console.log(card);
    cardContainer.appendChild(card);
  
  });
  