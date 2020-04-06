var list = [];
const items = document.querySelector('main.bd-content').childNodes;

items.forEach((item, index) => {
  if(item.nodeName == "H2"){
    let subItems = [];

    for (let i = index+1; i < items.length; i++) {
      const element = items[i];
      if(element.matches != undefined){
        if(element.nodeName == 'H2'){
          break;
        }else if(element.nodeName == 'H3'){
          subItems.push(items[i])
        }
      }
    }

    list.push({
      li: item,
      ul: subItems
    })
  }
})

let sectionNav = document.querySelector('.section-nav');

for (var i = 0; i < list.length; i++) {
  var item = list[i];
  var li = document.createElement('li');
  li.classList.add('toc-entry');
  li.classList.add('toc-h2');

  let link = document.createElement('a');
  link.href = '#'+item.li.id;
  link.innerText = item.li.innerText;
  li.appendChild(link);

  if(item.ul != []){
    let ul = document.createElement('ul');
    item.ul.forEach((subItem) => {
      let li = document.createElement('li');
      li.classList.add('toc-entry');
      li.classList.add('toc-h3');

      let link = document.createElement('a');
      link.href = '#'+subItem.id;
      link.innerText = subItem.innerText;
      li.appendChild(link);

      ul.appendChild(li);
    })

    li.appendChild(ul);
  }

  sectionNav.appendChild(li);
}

$(document).ready(function () {
  
  $('.toc-entry a').click(function(){    
    divId = $(this).attr('href');
     $('html, body').animate({
      scrollTop: $(divId).offset().top - 70
    }, 100);
  });

});