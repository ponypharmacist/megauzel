var treeHtml = '';

//============================================
// Rendering
//============================================
function renderTree() {
  abz.forEach(function(megauzel, i, abz) {
    treeHtml += '<li><span>' + i + '.</span>'
    treeHtml += '<a onclick="renderNode(' + i + ');">' + megauzel.name + '</a>'
    treeHtml += megauzel.children ? renderChildren(megauzel, i) : '</li>';
  });

  $('#tree-root').html(treeHtml);
};

function renderChildren(uzel, parentIndex) {
  let thisUzelChildren = uzel.children;
  let thisUzelId = uzel.id;
  let childrenHtml = '&nbsp;<a class="expand-link" rel="' + thisUzelId + '">[+]</a></li>';
  childrenHtml += '<ul id="childrenof-' + thisUzelId + '">'
  thisUzelChildren.forEach(function(child, k, thisUzelChildren) {
    childrenHtml += '<li><a onclick="renderNode(' + parentIndex + ',' + k + ');">' + child.name + '</a></li>'
  });
  childrenHtml += '</ul>'
  return childrenHtml;
};

function renderNode(i, k) {
  let target = '';
  if (i >= 0 && k >= 0) {
    target = abz[i].children[k];
  } else if (i >= 0) {
    target = abz[i];
  } else {};
  $('#nodeName').html(target.name);
  $('#nodeConstructionNumber').html(target.constructorNumber ? target.constructorNumber : '');
  $('#nodeCatalogNumber').html(target.catalogNumber ? target.catalogNumber : '');
  $('#nodeDescription').html(target.description ? target.description : '');

  renderBreadcrumbs(i, k);
};

function renderBreadcrumbs(i, k) {
  // i && !k - if level 1
  let renderedBreadcrumbs = '';
  let targetLvl1 = '';
  let targetLvl2 = '';

  if (i >= 0 && k >= 0) {
    targetLvl1 = abz[i];
    targetLvl2 = abz[i].children[k];
    renderedBreadcrumbs += '<li><a href="">КА-160</a></li>';
    renderedBreadcrumbs += '<li><a href="">' + targetLvl1.name + '</a></li>';
    renderedBreadcrumbs += '<li class="active"><a href="">' + targetLvl2.name + '</a></li>';
  } else if (i >= 0) {
    targetLvl1 = abz[i];
    renderedBreadcrumbs += '<li><a href="">КА-160</a></li>';
    renderedBreadcrumbs += '<li class="active"><a href="">' + targetLvl1.name + '</a></li>';
  } else {
    renderedBreadcrumbs += '<li class="active"><a href="">КА-160</a></li>';
  };

  $('#breadcrumbs').html(renderedBreadcrumbs);
};


//============================================
// Document Ready
//============================================
$(document).ready(function(){
  // Рендерим список узлов
  renderTree();

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
    let li = $('#tree-root li');

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  });
  // Выключаем поиск на Esc
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('#tree-root').removeClass('being-filtered');
      $('#tree-root li').css('display', '');
      $('.filter-hint').css('display', 'none');
    } else {};
  });

  // ...

});
