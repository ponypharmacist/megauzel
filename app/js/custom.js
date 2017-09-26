// Show nested list on click
$(".menu-toggler").on('click', function(e) {
  $($(this).attr("href")).slideToggle("slow");
  $(this).text(function(i, text){
      return text === "►" ? "▼" : "►";
  })
});

// SCROLL SPY ===========================================================
// Cache selectors
var lastId,
  topMenu = $(".scroll-spy"),
  // All list items
  menuItems = topMenu.find("a");

// Bind to accordion
$('#accordion').on('shown.bs.collapse', function () { // После появления скрытого блока...

  var id = $('#accordion .in').attr('id');

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
    .parent().removeClass("scrollspy-is-current")
    .end().filter("[href='#"+id+"']").parent().addClass("scrollspy-is-current");
  }
});

// ToDo
// 0. Иерархическая структура узлов (json?), которую легко читать и редактировать [имя, номер-id, картинка, текст, дети, родители]
// 1. Update Breadcrumbs, включая ссылки на родительские компоненты
// 2. Search

// Запредельные реквесты
// 0. Добавление узлов руками
// 0. Режим редактирования маркеров
