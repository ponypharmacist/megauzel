var abz = [
  { id: 'id01',
    name: 'Бункер готового асфальта',
    description: '(описание детали)',
    constructorNumber: '04АБЗ-001.00.00.000СБ',
    catalogNumber: '4.1.',
    imageMaps: [
      { imageMap: '',
        mapMarkers: [
          { mapMarkerTitle: 'A',
            mapMarkerX: '23',
            mapMarkerY: '45',
            mapMarkerLink: 'nodes.children[0].children[0]'
          }
        ]
      }
    ],
    children: [
      { id: 'id0101',
        name: 'Затвор',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-001.03.00.000СБ',
        catalogNumber: '4.1.3'
      },
      { id: 'id0102',
        name: 'Затвор',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-001.04.00.000СБ',
        catalogNumber: '4.1.4'
      },
      { id: 'id0103',
        name: 'Кронштейн',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-001.06.00.000СБ',
        catalogNumber: '4.1.6'
      },
      { id: 'id0104',
        name: 'Кронштейн',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-001.07.00.000СБ',
        catalogNumber: '4.1.7'
      },
      { id: 'id0105',
        name: 'Подшипник',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.1.49'
      },
      { id: 'id0106',
        name: 'Пневмоцилиндр',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '6.90.1.51'
      }
    ] // end Uzels array
  },
  { id: 'id02',
    name: 'Устройство разгрузки асфальта',
    description: '(описание детали)',
    children: ''
  },
  { id: 'id03',
    name: 'Бункер негабарита',
    description: '(описание детали)',
    children: ''
  },
  { id: 'id04',
    name: 'Мешалка',
    description: '(описание детали)',
    children: ''
  },
  { id: 'id05',
    name: 'Редуктор',
    description: '(описание детали)',
    children: ''
  },
  { id: 'id06',
    name: 'Весы битумные',
    description: '(описание детали)',
    children: ''
  },
  { id: 'id07',
    name: 'Весы пыли',
    description: '(описание детали)',
    children: ''
  },
  { id: 'id08',
    name: 'Весы минерала',
    description: '(описание детали)',
    children: ''
  },
  { id: 'id09',
    name: 'Весы ВИАТОПа',
    description: '(описание детали)',
    children: ''
  },
  { id: 'id10',
    name: 'Бункер минерала',
    description: '(описание детали)',
    children: ''
  },
  { id: 'id11',
    name: 'Бункер пыли',
    description: '(описание детали)',
    children: ''
  },
  { id: 'id12',
    name: 'Короб грохота',
    description: '(описание детали)',
    children: ''
  },
  { id: 'id13',
    name: 'Вибратор',
    description: '(описание детали)',
    children: ''
  },
  { id: 'id14',
    name: 'Устройство распределительное',
    description: '(описание детали)',
    children: ''
  }
] // end Megauzels array
  // Получать родителя для узлов автоматически, цепочку родителей, хранить в строковом параметре и выдавать в хлебокрошки целиком? Возможно
  // === Выбор узла из маркера на чертеже, ===
  //     как открыть целевой элемент дерева снаружи, без кликов по дереву?

  // Подсветка открытого узла
