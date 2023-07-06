const tab = [...document.querySelectorAll('.tab')];
const tabContent = [...document.querySelectorAll('.tab__content')];

tab.forEach((item) => {
  item.addEventListener('click', (event) => {
    let idTab = tab.findIndex((value) => value.classList.contains('tab_active'));
    tab[idTab].classList.remove('tab_active');
    item.classList.add('tab_active');
    let ind = tab.findIndex((value) => value.classList.contains('tab_active'));

    let idTabContent = tabContent.findIndex((val) => val.classList.contains('tab__content_active'));
    tabContent[idTabContent].classList.remove('tab__content_active');
    tabContent[ind].classList.add('tab__content_active');
  })
})
