var treeHtml = '';

//============================================
// Рендерим дерево
//============================================
function renderTree() {
  abz.forEach(function(megauzel, i, abz) {
    treeHtml += '<li id="id' + megauzel.id + '"><span>' + megauzel.id + '.</span>'
    treeHtml += '<a ' + (megauzel.images ? 'class="has-image"' : '') + ' onclick="renderNode(' + i + ');">' + megauzel.name + '</a>'
    treeHtml += megauzel.children ? renderChildren(megauzel, i) : '</li>';
  });

  $('#tree-root').html(treeHtml);
};

//============================================
// Рендерим детишек 1 урв. для дерева
//============================================
function renderChildren(uzel, parentIndex) {
  let thisUzelChildren = uzel.children;
  let thisUzelId = uzel.id;
  let childrenHtml = '&nbsp;<a class="expand-link" rel="' + thisUzelId + '">[+]</a></li>';
  childrenHtml += '<ul id="childrenof-' + thisUzelId + '">'
  thisUzelChildren.forEach(function(child, k, thisUzelChildren) {
    childrenHtml += '<li><a ' + (child.images ? 'class="has-image"' : '') + ' onclick="renderNode(' + parentIndex + ',' + k + ');">' + child.name + '<span>' + (child.catalogNumber ? child.catalogNumber : 0) + '</span></a>';
    childrenHtml += child.children ? renderSubChildren(child, k, parentIndex) : '</li>';
  });
  childrenHtml += '</ul>'
  return childrenHtml;
};

//============================================
// Рендерим детишек 2 урв. для дерева
//============================================
function renderSubChildren(uzel, parentIndex, megaParentIndex) {
  let thisUzelChildren = uzel.children;
  let thisUzelId = uzel.id;
  let childrenHtml = '&nbsp;<a class="expand-link" rel="' + thisUzelId + '">[+]</a></li>';
  childrenHtml += '<ul id="childrenof-' + thisUzelId + '">'
  thisUzelChildren.forEach(function(child, l, thisUzelChildren) {
    childrenHtml += '<li><a onclick="renderNode(' + megaParentIndex + ',' + parentIndex + ',' + l + ');">' + child.name + '<span>' + (child.catalogNumber ? child.catalogNumber : 0) + '</span></a></li>';
  });
  childrenHtml += '</ul>'
  return childrenHtml;
};

//============================================
// По клику рендерим в области контента инфу
//============================================
function renderNode(i, k, l) {
  let target = '';
  if (i >= 0 && k >= 0 && l >= 0) {
    target = abz[i].children[k].children[l];
  } else if (i >= 0 && k >= 0) {
    target = abz[i].children[k];
  } else if (i >= 0) {
    target = abz[i];
  } else {};

  target.images ? $('#image-maps').html(renderImages(target.images)) : $('#image-maps').html('');

  $('#nodeName').html(target.name);
  $('#nodeCatalogNumber').html(target.catalogNumber ? 'Номер в каталоге: <b>' + target.catalogNumber + '</b>' : '');
  $('#nodeDescription').html(target.description ? target.description : '');

  renderBreadcrumbs(i, k, l);
  highlightCurrent(i, k, l);
};

//============================================
// Подсвечиваем в списке текущий узел
//============================================
function highlightCurrent(i, k, l) {
  $('#tree-root .selected').removeClass('selected');
  if (i >= 0 && k >= 0 && l >= 0) {
    $('#childrenof-' + abz[i].children[k].id).addClass('selected');
    let targetList = $('#childrenof-' + abz[i].children[k].id + ' li');
    $(targetList[l]).addClass('selected');
  } else if (i >= 0 && k >= 0) {
    $('#childrenof-' + abz[i].id).addClass('selected');
    let targetList = $('#childrenof-' + abz[i].id + ' li');
    $(targetList[k]).addClass('selected');
  } else if (i >= 0) {
    $('#' + abz[i].id).addClass('selected');
  } else {
  };
};

//============================================
// Рендерим картинки с маркерами
//============================================
function renderImages(imagesList) {
  let imageMapsHtml = '';
  let mapList = imagesList;
  mapList.forEach(function(imageMap, p, mapList) {
    imageMapsHtml += '<div class="image-map">';
    imageMapsHtml += imageMap.mapMarkers ? getImageMapMarkers(imageMap.mapMarkers) : '';
    imageMapsHtml += '<img src="images/' + imageMap.imageURL + '" alt=""/></div>';
  });
  return imageMapsHtml;
};

function getImageMapMarkers(markersArray) {
  let iMMHtml = '';
  markersArray.forEach(function(iMM, q, markersArray) {
    iMMHtml += '<a onclick="renderNode(' + iMM.href + ');" class="map-marker"';
    iMMHtml += ' style="top:' + iMM.top + '%; left:' + iMM.left + '%;';
    iMMHtml += ' width:' + (iMM.width ? iMM.width + '%' : '30px') + '; height:' + (iMM.height ? iMM.height + '%' : '30px') + ';';
    iMMHtml += ' margin-left:-' + (iMM.width ? (iMM.width / 2) + '%' : '15px') + '; margin-top:-' + (iMM.height ? (iMM.height / 2) + '%' : '15px') + ';">'
    iMMHtml += '' + (iMM.mapMarkerTitle ? iMM.mapMarkerTitle : '') + '</a>';
  });
  return iMMHtml;
};

//============================================
// Показываем хлебокрошки
//============================================
function renderBreadcrumbs(i, k, l) {
  // i && !k - if level 1
  let renderedBreadcrumbs = '';
  let targetLvl1 = '';
  let targetLvl2 = '';
  let targetLvl3 = '';

  if (i >= 0 && k >= 0 && l >= 0) {
    targetLvl1 = abz[i];
    targetLvl2 = abz[i].children[k];
    targetLvl3 = abz[i].children[k].children[l];
    renderedBreadcrumbs += '<li><a href="http://koloksha.ru/parts-catalog/">КА-160</a></li>';
    renderedBreadcrumbs += '<li><a onclick="renderNode(' + i + ');">' + targetLvl1.name + '</a></li>';
    renderedBreadcrumbs += '<li><a onclick="renderNode(' + i + ',' + k + ');">' + targetLvl2.name + '</a></li>';
    renderedBreadcrumbs += '<li class="active">' + targetLvl3.name + '</li>';
  } else if (i >= 0 && k >= 0) {
    targetLvl1 = abz[i];
    targetLvl2 = abz[i].children[k];
    renderedBreadcrumbs += '<li><a href="http://koloksha.ru/parts-catalog/">КА-160</a></li>';
    renderedBreadcrumbs += '<li><a onclick="renderNode(' + i + ');">' + targetLvl1.name + '</a></li>';
    renderedBreadcrumbs += '<li class="active">' + targetLvl2.name + '</li>';
  } else if (i >= 0) {
    targetLvl1 = abz[i];
    renderedBreadcrumbs += '<li><a href="">КА-160</a></li>';
    renderedBreadcrumbs += '<li class="active">' + targetLvl1.name + '</li>';
  } else {
    renderedBreadcrumbs += '<li class="active"><a>КА-160</a></li>';
  };

  $('#breadcrumbs').html(renderedBreadcrumbs);
};

//============================================
// Document Ready
//============================================
$(document).ready(function(){
  // Рендерим список узлов
  renderTree();

  // Рендерим этикетки для мегаузлов
  $('<div class="megauzel-tag"><a onclick="renderNode(0,0);">Устройство смесительное</a></div>').insertAfter('#childrenof-3');
  $('<div class="megauzel-tag"><a onclick="renderNode(0,1);">Устройство взвешивания</a></div>').insertAfter('#childrenof-5');
  $('<div class="megauzel-tag"><a onclick="renderNode(0,2);">Грохот</a></div>').insertAfter('#childrenof-11');
  $('<div class="megauzel-tag"><a onclick="renderNode(0,3);">Элеватор горячий</a></div>').insertAfter('#childrenof-14');
  $('<div class="megauzel-tag"><a onclick="renderNode(0,4);">Элеватор пыли</a></div>').insertAfter('#childrenof-19');
  $('<div class="megauzel-tag"><a onclick="renderNode(0,5);">Бочка собственного и привозного заполнителя</a></div>').insertAfter('#childrenof-22');
  $('<div class="megauzel-tag">Шнеки наклонные</div>').insertAfter('#id24');
  $('<div class="megauzel-tag"><a onclick="renderNode(0,6);">Барабан сушильный</a></div>').insertAfter('#childrenof-28');
  $('<div class="megauzel-tag"><a onclick="renderNode(0,7);">Устройство фильтрующее</a></div>').insertAfter('#childrenof-37');
  $('<div class="megauzel-tag"><a onclick="renderNode(0,8);">Устройство предварительного дозирования</a></div>').insertAfter('#childrenof-41');
  $('<div class="megauzel-tag"><a onclick="renderNode(0,9);">Склад битума</a></div>').insertAfter('#id58');
  $('<div class="megauzel-tag">Система подачи целлюлозной добавки</div>').insertAfter('#childrenof-62');

  // Рендерим этикетки для подузлов
  //$('#childrenof-11 li:nth-child(8)').addClass('subuzel-tag');

  // [+] и [-] кнопки
  $('.expand-link').on('click', function(){
    $('#childrenof-' + $(this).attr('rel')).toggle();
    $(this).toggleClass('expanded');
    if ($(this).hasClass('expanded')) {
      $(this).html('[-]');
    } else { $(this).html('[+]'); };
  });

  // Фильтр-поиск списка
  $('#filter-input').on('keyup', function(){
    $('#tree-root').addClass('being-filtered');
    $('.filter-hint').css('display', 'inline-block');
    let a, i;
    let filter = $(this).val().toUpperCase();
    let li = $('#tree-root ul li');

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
    // Прячем родительские узлы, у которых нет детей
    $('#tree-root > ul').each( function(index, element) {
      if ($(this).children(':visible').length == 0) {
        $(this).prev().css('display', 'none');
      } else {
        $(this).prev().css('display', 'visible');
      }
    });
  });

  // Выключаем поиск на Esc
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
	  filterOff();
    } else {};
  });

  $('#filter-reset').onclick(function() {
	filterOff();
  });

  // ...

});


// Выключение поиска
function filterOff() {
  $('#tree-root').removeClass('being-filtered');
  $('#tree-root li').css('display', '');
  $('.filter-hint').css('display', 'none');
}
