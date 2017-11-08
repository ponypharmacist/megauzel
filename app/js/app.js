var treeHtml = '';

function renderTree() {
  abz.forEach(function(megauzel, i, abz) {
    treeHtml += '<li><span>' + (i + 1) + '.</span>'
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
  if (i >= 0) {
    console.log('First condition');
    target = abz[i];
  } else if (i >= 0 && k >= 0) {
    target = abz[i].children[k];
  } else {};
  $('#nodeName').html(target.name);
  $('#nodeConstructionNumber').html(target.constructorNumber ? target.constructorNumber : '');
  $('#nodeCatalogNumber').html(target.catalogNumber ? target.catalogNumber : '');
  $('#nodeDescription').html(target.description ? target.description : '');
};

$(document).ready(function(){
  // Рендерим список узлов
  renderTree();

  $('.expand-link').on('click', function(){
    $('#childrenof-' + $(this).attr('rel')).toggle();
    $(this).toggleClass('expanded');
    if ($(this).hasClass('expanded')) {
      $(this).html('[-]');
    } else { $(this).html('[+]'); };
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('#tree-root').removeClass('being-filtered');
      $('#tree-root li').css('display', '');
      $('.filter-hint').css('display', 'none');
    } else {};
  });

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
});
