var treeHtml = '';

//============================================
// �������� ������
//============================================
function renderTree() {
  abz.forEach(function(megauzel, i, abz) {
    treeHtml += '<li id="' + megauzel.id + '"><span>' + i + '.</span>'
    treeHtml += '<a onclick="renderNode(' + i + ');">' + megauzel.name + '</a>'
    treeHtml += megauzel.children ? renderChildren(megauzel, i) : '</li>';
  });

  $('#tree-root').html(treeHtml);
};

//============================================
// �������� ������� 1 ���. ��� ������
//============================================
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

//============================================
// �� ����� �������� � ������� �������� ����
//============================================
function renderNode(i, k) {
  let target = '';
  if (i >= 0 && k >= 0) {
    target = abz[i].children[k];
  } else if (i >= 0) {
    target = abz[i];
  } else {};

  target.images ? $('#image-maps').html(renderImages(target.images)) : $('#image-maps').html('');

  $('#nodeName').html(target.name);
  $('#nodeCatalogNumber').html(target.catalogNumber ? '����� � ��������: <b>' + target.catalogNumber + '</b>' : '');
  $('#nodeDescription').html(target.description ? target.description : '');

  renderBreadcrumbs(i, k);
  highlightCurrent(i, k);
};

//============================================
// ������������ � ������ ������� ����
//============================================
function highlightCurrent(i, k) {
  $('#tree-root .selected').removeClass('selected');
  if (i >= 0 && k >= 0) {
    $('#childrenof-' + abz[i].id).addClass('selected');
    let targetList = $('#childrenof-' + abz[i].id + ' li');
    $(targetList[k]).addClass('selected');
  } else if (i >= 0) {
    $('#' + abz[i].id).addClass('selected');
  } else {
  };
};

//============================================
// �������� �������� � ���������
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
    iMMHtml += '<a onclick="renderNode(' + iMM.mapMarkerLink + ');" class="map-marker"';
    iMMHtml += ' style="top:' + iMM.mapMarkerY + '%; left:' + iMM.mapMarkerX + '%;';
    iMMHtml += ' width:' + (iMM.mapMarkerW ? iMM.mapMarkerW + '%' : '30px') + '; height:' + (iMM.mapMarkerH ? iMM.mapMarkerH + '%' : '30px') + ';';
    iMMHtml += ' margin-left:-' + (iMM.mapMarkerW ? (iMM.mapMarkerW / 2) + '%' : '15px') + '; margin-top:-' + (iMM.mapMarkerH ? (iMM.mapMarkerH / 2) + '%' : '15px') + ';">'
    iMMHtml += '' + iMM.mapMarkerTitle + '</a>';
  });
  return iMMHtml;
};

//============================================
// ���������� �����������
//============================================
function renderBreadcrumbs(i, k) {
  // i && !k - if level 1
  let renderedBreadcrumbs = '';
  let targetLvl1 = '';
  let targetLvl2 = '';

  if (i >= 0 && k >= 0) {
    targetLvl1 = abz[i];
    targetLvl2 = abz[i].children[k];
    renderedBreadcrumbs += '<li><a href="http://koloksha.ru/parts-catalog/">��-160</a></li>';
    renderedBreadcrumbs += '<li><a onclick="renderNode(' + i + ');">' + targetLvl1.name + '</a></li>';
    renderedBreadcrumbs += '<li class="active">' + targetLvl2.name + '</li>';
  } else if (i >= 0) {
    targetLvl1 = abz[i];
    renderedBreadcrumbs += '<li><a href="">��-160</a></li>';
    renderedBreadcrumbs += '<li class="active">' + targetLvl1.name + '</li>';
  } else {
    renderedBreadcrumbs += '<li class="active"><a>��-160</a></li>';
  };

  $('#breadcrumbs').html(renderedBreadcrumbs);
};

//============================================
// Document Ready
//============================================
$(document).ready(function(){
  // �������� ������ �����
  renderTree();

  // �������� �������� ��� ���������
  $('<div class="megauzel-tag">���������� ������������</div>').insertAfter('#childrenof-id03');
  $('<div class="megauzel-tag">���������� �����������</div>').insertAfter('#childrenof-id05');
  $('<div class="megauzel-tag">������</div>').insertAfter('#childrenof-id11');

  // [+] � [-] ������
  $('.expand-link').on('click', function(){
    $('#childrenof-' + $(this).attr('rel')).toggle();
    $(this).toggleClass('expanded');
    if ($(this).hasClass('expanded')) {
      $(this).html('[-]');
    } else { $(this).html('[+]'); };
  });

  // ������-����� ������
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
    // ������ ������������ ����, � ������� ��� �����
    $('#tree-root > ul').each( function(index, element) {
      if ($(this).children(':visible').length == 0) {
        $(this).prev().css('display', 'none');
      } else {
        $(this).prev().css('display', 'visible');
      }
    });
  });
  // ��������� ����� �� Esc
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('#tree-root').removeClass('being-filtered');
      $('#tree-root li').css('display', '');
      $('.filter-hint').css('display', 'none');
    } else {};
  });

  // ...

});
