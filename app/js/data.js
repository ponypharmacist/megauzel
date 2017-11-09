// === Выбор узла из маркера на чертеже, ===
//     Получать родителя для узлов автоматически? и хранить в параметре узла? Вставлять сразу в ссылку кастомными параметрами?
//     как открыть целевой элемент дерева снаружи, без кликов по дереву?
// Подсветка открытого узла

var abz = [
  { id: 'id00',
    name: 'Асфальтосмесительная Установка',
    description: '(описание детали)',
    constructorNumber: '08АБЗ-000.00.00.000'
  },

  // 1.
  { id: 'id01',
    name: 'Бункер готового асфальта',
    description: '(описание детали)',
    constructorNumber: '04АБЗ-001.00.00.000СБ',
    catalogNumber: '4.1',
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
        name: 'Подшипник (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.1.49'
      },
      { id: 'id0106',
        name: 'Пневмоцилиндр (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '6.90.1.51'
      }
    ] // end Uzels array
  },

  // 2.
  { id: 'id02',
    name: 'Устройство разгрузки асфальта',
    description: '(описание детали)',
    constructorNumber: '08АБЗ-002.00.00.000СБ',
    catalogNumber: '8.2',
    children: [
      { id: 'id0201',
        name: 'Затвор',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-002.03.00.000СБ	',
        catalogNumber: '4.2.3'
      },
      { id: 'id0202',
        name: 'Кронштейн',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-021.11.00.000СБ',
        catalogNumber: '4.2.11'
      },
      { id: 'id0203',
        name: 'Пневмоцилиндр (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '6.90.2.75'
      }
    ]
  },

  // 3.
  { id: 'id03',
    name: 'Бункер негабарита',
    description: '(описание детали)',
    constructorNumber: '04АБЗ-023.00.00.000СБ',
    catalogNumber: '4.23',
    children: [
      { id: 'id0301',
        name: 'Короб-затвор',
        description: '(описание детали)',
        constructorNumber: '05АБЗ-023.04.00.000СБ',
        catalogNumber: '5.23.4'
      },
      { id: 'id0302',
        name: 'Датчик уровня',
        description: '(описание детали)',
        constructorNumber: '08АБЗ-004.05.00.000-С3',
        catalogNumber: '8.4.5'
      },
      { id: 'id0303',
        name: 'Пневмоцилиндр',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.23.04.17'
      }
    ]
  },

  // 4.
  { id: 'id04',
    name: 'Мешалка',
    description: '(описание детали)',
    constructorNumber: '04АБЗ-003.01.00.000СБ',
    catalogNumber: '4.3.1',
    children: [
      { id: 'id0401',
        name: 'Вал (1 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.00.019',
        catalogNumber: '4.3.1.19'
      },
      { id: 'id0402',
        name: 'Вал (1 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.00.020',
        catalogNumber: '4.3.1.20'
      },
      { id: 'id0403',
        name: 'Втулка (4 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.00.021',
        catalogNumber: '4.3.1.21'
      },
      { id: 'id0404',
        name: 'Фланец (4 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.00.022А',
        catalogNumber: '4.3.1.22'
      },
      { id: 'id0405',
        name: 'Втулка (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.00.023',
        catalogNumber: '3.3.1.23'
      },
      { id: 'id0406',
        name: 'Втулка (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.00.024А',
        catalogNumber: '4.3.1.24'
      },
      { id: 'id0407',
        name: 'Отражатель (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.00.025',
        catalogNumber: '4.3.1.25'
      },
      { id: 'id0408',
        name: 'Шайба (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.00.026',
        catalogNumber: '3.3.1.26'
      },
      { id: 'id0409',
        name: 'Крышка (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.00.027',
        catalogNumber: '3.3.1.27'
      },
      { id: 'id0410',
        name: 'Крышка (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.00.028',
        catalogNumber: '3.3.1.28'
      },
      { id: 'id0411',
        name: 'Крышка (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.00.029',
        catalogNumber: '3.3.1.29'
      },
      { id: 'id0412',
        name: 'Шкив (1 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.00.030',
        catalogNumber: '4.3.1.30'
      },
      { id: 'id0413',
        name: 'Отражатель (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.00.032',
        catalogNumber: '4.3.1.32'
      },
      { id: 'id0414',
        name: 'Прокладка (12 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.13.004',
        catalogNumber: '4.3.1.13.4'
      },
      { id: 'id0415',
        name: 'Кольцо нажимное (4 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.00.058',
        catalogNumber: '4.3.1.58'
      },
      { id: 'id0416',
        name: 'Лопасть (12 шт.)',
        description: '(описание детали)',
        constructorNumber: 'ЛО К160 М031 М 01',
        catalogNumber: '4.3.1.13.3'
      },
      { id: 'id0417',
        name: 'Стойка правая (8 шт.)',
        description: '(описание детали)',
        constructorNumber: 'СТ К160М032 R 03',
        catalogNumber: '4.3.1.13.2'
      },
      { id: 'id0418',
        name: 'Стойка левая (4 шт.)',
        description: '(описание детали)',
        constructorNumber: 'СТ К160М033 L 03',
        catalogNumber: '4.3.1.13.1'
      },
      { id: 'id0419',
        name: 'Ступица (бугель) (8 шт.)',
        description: '(описание детали)',
        constructorNumber: 'БУ К160 М034 М 03',
        catalogNumber: '4.3.1.13.5'
      },
      { id: 'id0420',
        name: 'Болт М20 (24 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.13.7'
      },
      { id: 'id0421',
        name: 'Болт М30 (20 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.13.8'
      },
      { id: 'id0422',
        name: 'Гайка М20 (48 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.13.9'
      },
      { id: 'id0423',
        name: 'Гайка М30 (40 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.13.10'
      },
      { id: 'id0424',
        name: 'Шайба тарельчатая (24 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.13.11'
      },
      { id: 'id0425',
        name: 'Шайба 30 (20 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.13.12'
      },
      { id: 'id0426',
        name: 'Лист изнашивающийся (30 шт.)',
        description: '(описание детали)',
        constructorNumber: 'ЛИ К160 М035 М 01',
        catalogNumber: '4.3.1.15.35'
      },
      { id: 'id0427',
        name: 'Лист изнашивающийся (10 шт.)',
        description: '(описание детали)',
        constructorNumber: 'ЛИ К160 М036 М 01',
        catalogNumber: '4.3.1.15.36'
      },
      { id: 'id0428',
        name: 'Лист изнашивающийся (8 шт.)',
        description: '(описание детали)',
        constructorNumber: 'ЛИ К160 М037 М 01',
        catalogNumber: '4.3.1.15.37'
      },
      { id: 'id0429',
        name: 'Лист изнашивающийся (4 шт.)',
        description: '(описание детали)',
        constructorNumber: 'ЛИ К160 М038 R 01',
        catalogNumber: '4.3.1.15.38'
      },
      { id: 'id0430',
        name: 'Лист изнашивающийся (4 шт.)',
        description: '(описание детали)',
        constructorNumber: 'ЛИ К160 М039 L 01',
        catalogNumber: '4.3.1.15.39'
      },
      { id: 'id0431',
        name: 'Лист изнашивающийся (6 шт.)',
        description: '(описание детали)',
        constructorNumber: 'ЛИ К160 М040 М 01',
        catalogNumber: '4.3.1.15.40'
      },
      { id: 'id0432',
        name: 'Вставка',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.00.017',
        catalogNumber: '4.3.1.15.41'
      },
      { id: 'id0433',
        name: 'Вставка',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.00.017-01',
        catalogNumber: '4.3.1.15.42'
      },
      { id: 'id0434',
        name: 'Винт М12 (156 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.15.45'
      },
      { id: 'id0435',
        name: 'Шайба 12.65Г (156 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.15.46'
      },
      { id: 'id0436',
        name: 'Гайка М12 (156 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.15.47'
      },
      { id: 'id0437',
        name: 'Шайба 12 (156 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.15.48'
      },
      { id: 'id0438',
        name: 'Подшипник (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.120'
      },
      { id: 'id0439',
        name: 'Подшипник (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.121'
      },
      { id: 'id0440',
        name: 'Манжета (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.126'
      },
      { id: 'id0441',
        name: 'Ремень (12 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.131'
      },
      { id: 'id0442',
        name: 'Электродвигатель (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.3.1.130'
      },
      { id: 'id0443',
        name: 'Пневмоцилиндр (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '6.90.3.132'
      }
    ]
  },

  // 5.
  { id: 'id05',
    name: 'Редуктор',
    description: '(описание детали)',
    constructorNumber: '03АБЗ-003.01.02.000СБ',
    catalogNumber: '3.3.1.2',
    children: [
      { id: 'id0501',
        name: 'Вал-шестерня (под шкив) (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.02.200СБ',
        catalogNumber: '3.3.1.2.2'
      },
      { id: 'id0502',
        name: 'Ступица (выходного вала) (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.02.300СБ',
        catalogNumber: '3.3.1.2.3'
      },
      { id: 'id0503',
        name: 'Сапун (1 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.10.00.000СБ',
        catalogNumber: '3.3.10.21'
      },
      { id: 'id0504',
        name: 'Зубчатый венец (4 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.02.007',
        catalogNumber: '3.3.1.2.7'
      },
      { id: 'id0505',
        name: 'Вал-шестерня (промежуточной ступицы) (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.02.008',
        catalogNumber: '3.3.1.2.8'
      },
      { id: 'id0506',
        name: 'Ступица (промежуточная) (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.02.015',
        catalogNumber: '3.3.1.2.15'
      },
      { id: 'id0507',
        name: 'Шкив (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.02.016',
        catalogNumber: '4.3.1.2.16'
      },
      { id: 'id0508',
        name: 'Подшипник (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '3.3.1.2.50'
      },
      { id: 'id0509',
        name: 'Подшипник (8 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '3.3.1.2.51'
      },
      { id: 'id0510',
        name: 'Подшипник (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '3.3.1.2.52'
      },
      { id: 'id0511',
        name: 'Манжета (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '3.3.1.2.55'
      },
      { id: 'id0512',
        name: 'Манжета (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '3.3.1.2.56'
      },
      { id: 'id0513',
        name: 'Шпонка (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '3.3.1.2.58'
      },
      { id: 'id0514',
        name: 'Шпонка (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '3.3.1.2.59'
      },
      { id: 'id0515',
        name: 'Затвор',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.03.000СБ',
        catalogNumber: '4.3.1.3'
      },
      { id: 'id0516',
        name: 'Рычаг',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.10.000СБ',
        catalogNumber: '4.3.1.10'
      },
      { id: 'id0517',
        name: 'Рычаг',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.11.000СБ',
        catalogNumber: '4.3.1.11'
      },
      { id: 'id0518',
        name: 'Короб в сборе',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.02.00.000СБ',
        catalogNumber: '4.3.2'
      }
    ]
  },

/*
Тензодатчик (2 шт.)		4.4.10.93
Аммортизатор (2 шт.)		4.4.10.95
Нагреватель хомутовый 		4.4.10.104
Пневмоцилиндр		6.90.4.106
Электронагреватель		4.4.10.108
Клапан аварийный	04АБЗ-004.10.03.000СБ	4.4.10.3
*/
  // 6.
  { id: 'id06',
    name: 'Весы битумные',
    description: '(описание детали)',
    constructorNumber: '04АБЗ-004.10.00.000СБ',
    catalogNumber: '4.4.10',
    children: [
      { id: 'id0601',
        name: '',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: ''
      },
      { id: 'id0602',
        name: '',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: ''
      },
      { id: 'id0603',
        name: '',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: ''
      },
      { id: 'id0604',
        name: '',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: ''
      },
      { id: 'id0605',
        name: '',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: ''
      },
      { id: 'id0606',
        name: '',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: ''
      }
    ]
  },

  // 7.
  { id: 'id07',
    name: 'Весы пыли',
    description: '(описание детали)',
    constructorNumber: '02АБЗ-004.02.00.000(3)СБ',
    catalogNumber: '2.4.2',
    children: [
      { id: 'id0701',
        name: '',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: ''
      }
    ]
  },

  // 8.
  { id: 'id08',
    name: 'Весы минерала',
    description: '(описание детали)',
    constructorNumber: '04АБЗ-004.03.00.000СБ',
    catalogNumber: '4.4.3',
    children: [
      { id: 'id0801',
        name: '',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: ''
      }
    ]
  },

  // 9.
  { id: 'id09',
    name: 'Весы ВИАТОПа',
    description: '(описание детали)',
    constructorNumber: '08АБЗ-004.06.00.000СБ',
    catalogNumber: '8.4.6',
    children: [
      { id: 'id0901',
        name: '',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: ''
      }
    ]
  },

  // 10.
  { id: 'id10',
    name: 'Бункер минерала',
    description: '(описание детали)',
    constructorNumber: '04АБЗ-005.02.00.000СБ',
    catalogNumber: '4.5.2',
    children: [
      { id: 'id1001',
        name: '',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: ''
      }
    ]
  },

  // 11.
  { id: 'id11',
    name: 'Бункер пыли',
    description: '(описание детали)',
    constructorNumber: '08АБЗ-005.03.00.000-ВСБ',
    catalogNumber: '8.5.3',
    children: [
      { id: 'id1101',
        name: '',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: ''
      }
    ]
  },

  // 12.
  { id: 'id12',
    name: 'Короб грохота',
    description: '(описание детали)',
    constructorNumber: 'АБЗ-007.02.00.000-М1СБ',
    catalogNumber: '1.7.2.М1',
    children: [
      { id: 'id1201',
        name: '',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: ''
      }
    ]
  },

  // 13.
  { id: 'id13',
    name: 'Вибратор',
    description: '(описание детали)',
    constructorNumber: 'АБЗ-007.02.01.000СБ-М1',
    catalogNumber: '1.7.2.1.М1',
    children: [
      { id: 'id1301',
        name: '',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: ''
      }
    ]
  },

  // 14.
  { id: 'id14',
    name: 'Устройство распределительное',
    description: '(описание детали)',
    constructorNumber: 'АБЗ-007.03.00.000СБ',
    catalogNumber: '1.7.3',
    children: [
      { id: 'id1401',
        name: 'Рычаг (1 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.03.00.014',
        catalogNumber: '1.7.3.14'
      },
      { id: 'id1402',
        name: 'Пошипник (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '1.7.3.47'
      },
      { id: 'id1403',
        name: 'Рукав соединительный (1 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.03.00.015',
        catalogNumber: '1.7.3.15'
      },
      { id: 'id1404',
        name: 'Пневмоцилиндр (1 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '6.90.7'
      }
    ]
  }
] // end Megauzels array




/*
7	Весы пыли
		Тензодатчик-2шт.		2.4.2.93
		Аммортизатор-2шт.		2.4.2.95
		Заслонка поворотная-1шт.		2.4.2.97

8	Весы минерала
		Затвор-1шт.	04АБЗ-004.03.01.000-МСБ	4.4.3.1.М
		Тензодатчик-3шт.		4.4.3.100
		Аммортизатор-3шт.		4.4.3.103
		Пневмоцилиндр-1шт		6.90.4.75

9	  Весы ВИТАТОПа
		Тензодатчик-2шт.		8.4.6.67
		Заслонка поворотная-1шт.		8.4.6.72
		Демпфер-4шт.	02АБЗ-004.06.00.023(3)-01	2.4.6.23

10	Бункер минерала
		Затвор-5шт.	04АБЗ-004.03.01.000-МСБ	4.4.3.1.М
		Пневмоцилиндр-5шт		6.90.4.75

11	Бункер пыли
		Заслонка поворотная-1шт.		8.5.3.6
		Шнек-1шт.	08АБЗ-005.03.01.200-М	8.5.3.1.2
		Мотор-редуктор-1шт.		8.5.3.1.56
		Рукав соединит.-1шт.	04АБЗ-004.00.00.018	4.4.18
		Рукав соединит.-1шт.	04АБЗ-004.00.00.019	4.4.19
		Рукав соединит.-1шт.	04АБЗ-004.00.00.020	4.4.20
		Рукав соединит.-1шт.	04АБЗ-004.00.00.021	4.4.21
	  Промежуточный бункер  (п.у!)		04АБЗ-005.00.00.000-М1
		Ротационный датчик уровня-1шт.	04АБЗ-005.01.13.000СБ-01-М1	4.5.1.13
		Ротационный датчик уровня-5шт.	04АБЗ-005.01.14.000СБ-М1	4.5.1.14
		Транспортер шнековый-1шт.	04АБЗ-005.02.00.000-М1	4.5.2.М1
		Мотор-редуктор-1шт.		4.5.2.56
		Шнек-1шт.	04АБЗ-005.02.02.000СБ-М1	4.5.2.2.М1
		Цапфа-1шт.	04АБЗ-005.02.02.003-М1	4.5.2.2.3.М1
		Цапфа-1шт.	04АБЗ-011.01.07.002	4.11.1.7.2
		Втулка-2шт.	04АБЗ-011.01.07.005	4.11.1.7.5
		Перо шнека-1шт.	04АБЗ-005.02.02.006-М1	4.5.2.2.6М1
		Подшипник-2шт.		4.5.2.45
		Манжета-3шт.		4.5.2.48
		Шпонка-1шт.		4.5.2.47
		Набивка-2шт.		4.5.2.50

12	Короб грохота
		Кожух 54 шт.	ГН-001.02.11.000АСБ	1.7.2.2.А
		Отбойник 1 шт.	АБЗ-007.02.03.000СБ	1.7.2.3
		Балка зацепная 1 шт.	АБЗ-007.02.04.000СБ	1.7.2.4
		Балка опорная-25шт.	АБЗ-007.02.05.000СБ	1.7.2.5
		Балка натяжная 9 шт.	АБЗ-007.02.07.000-М1СБ	1.7.2.7.М1
		Крюк 54 шт.	ГН-001.02.15.000СБ	1.7.2.15.8
		Сито 1 шт.	АБЗ-007.02.09.000СБ	1.7.2.9
		Сито 1 шт.	АБЗ-007.02.09.000-01СБ	1.7.2.10
		Сито 1 шт.	АБЗ-007.02.09.000-02СБ	1.7.2.11
		Сито 1 шт.	АБЗ-007.02.09.000-03СБ	1.7.2.12
		Сито 1 шт.	АБЗ-007.02.09.000-04СБ	1.7.2.13
		Сито 1 шт.	АБЗ-007.02.09.000-05СБ	1.7.2.14
		Втулка-54шт.	ГН-001.02.17.000	1.7.2.24
		Шкив 2 шт.	АБЗ-007.02.01.009-01-М	1.7.2.1.25.М
		Электродвигатель 2 шт.		1.7.2.50
		Ремень 6 шт.		1.7.2.52
		Пружина 54 шт.	ГН-001.02.00.019	1.7.2.22
		Пружина 8 шт.		1.7.32

13	Вибратор
		Вал 2 шт.	АБЗ-007.02.01.012-М1	1.7.2.1.12.М1
		Стакан 4 шт.	АБЗ-007.02.01.005-М1	1.7.2.1.5.М1
		Крышка 4 шт.	АБЗ-007.02.01.006-М1	1.7.2.1.6.М1
		Кольцо 4 шт.	АБЗ-007.02.01.008-М1	1.7.2.1.8.М1
		Шкив 2 шт.	АБЗ-007.02.01.009-М1	1.7.2.1.9.М1
		Втулка 4 шт.	АБЗ-007.02.01.013-М1	1.7.2.1.13.М1
		Груз 2 шт.	АБЗ-007.02.01.015-М1	1.7.2.1.15.М1
		Груз 2 шт.	АБЗ-007.02.01.015-01-М1	1.7.2.1.16.М1
		Кольцо 2 шт.	АБЗ-007.02.01.017-М1	1.7.2.1.17.М1
		Шайба 8 шт.	АБЗ-007.02.01.018-М1	1.7.2.1.18.М1
		Подшипник 4 шт.		1.7.2.1.35
		Манжета 8 шт.		1.7.2.1.37
		Кольцо 4 шт.		1.7.2.1.39
		Шпонка 2 шт.		1.7.2.1.41
		Шпонка 4 шт.		1.7.2.1.42
*/
