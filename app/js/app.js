var treeHtml = '';

function renderTree() {
  abz.forEach(function(megauzel, i, abz) {
    treeHtml += '<li><a class="uzel-link" href="#">' + megauzel.name + '</a>'
    treeHtml += megauzel.children && renderChildren(megauzel);
    treeHtml += '</li>'
  });

  $('#tree-root').html(treeHtml);
};

function renderChildren(uzel) {
  let thisUzelChildren = uzel.children;
  let thisUzelId = uzel.id;
  let childrenHtml = '&nbsp;<a class="expand-link" href="#" rel="' + thisUzelId + '">[+]</a>';
  childrenHtml += '<ul id="childrenof-' + thisUzelId + '">'
  thisUzelChildren.forEach(function(child, i, thisUzelChildren) {
    childrenHtml += '<li><a href="#">' + child.name + '</a></li>'
  });
  childrenHtml += '</ul>'
  return childrenHtml;
};

function renderNode(descriptionText) {
  // Обновить хлебокрошки
  // Обновить описание
  $('#nodeName').html(name);
  $('#nodeConstructionNumber').html(constructorNumber);
  $('#nodeCatalogNumber').html(catalogNumber);
  $('#nodeDescription').html(description);
};

$(document).ready(function(){
  // Рендерим список узлов
  renderTree();

  $('.expand-link').click(function(){
    $('#childrenof-' + $(this).attr('rel')).toggle();
    $(this).toggleClass('expanded');
    if ($(this).hasClass('expanded')) {
      $(this).html('[-]');
    } else { $(this).html('[+]'); };
  });
});
