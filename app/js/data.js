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
    images: [
      { imageURL: 'placeholder.jpg',
        mapMarkers: [
          { mapMarkerTitle: 'A',
            mapMarkerX: '23',
            mapMarkerY: '45',
            mapMarkerLink: '1,2'
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
        name: 'Вал',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.00.019',
        catalogNumber: '4.3.1.19'
      },
      { id: 'id0402',
        name: 'Вал',
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
        name: 'Шкив',
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
    images: [
      { imageURL: '3.3.1.2.jpg',
        mapMarkers: [
          { mapMarkerTitle: '',
            mapMarkerX: '2.5',
            mapMarkerY: '47',
            mapMarkerW: '9.8',
            mapMarkerH: '4',
            mapMarkerLink: '5,0'
          },
          { mapMarkerTitle: '',
            mapMarkerX: '69.5',
            mapMarkerY: '60.5',
            mapMarkerW: '9.8',
            mapMarkerH: '4',
            mapMarkerLink: '5,1'
          }
        ]
      }
    ],
    children: [
      { id: 'id0501',
        name: 'Вал-шестерня (под шкив) (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.02.200СБ',
        catalogNumber: '3.3.1.2.2',
        images: [
          { imageURL: '3.3.1.2.2.jpg' }
        ]
      },
      { id: 'id0502',
        name: 'Ступица (выходного вала) (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.02.300СБ',
        catalogNumber: '3.3.1.2.3',
        images: [
          { imageURL: '3.3.1.2.3.jpg' }
        ]
      },
      { id: 'id0503',
        name: 'Сапун',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.10.00.000СБ',
        catalogNumber: '3.3.10.21',
        images: [
          { imageURL: '3.3.10.21.jpg' }
        ]
      },
      { id: 'id0504',
        name: 'Зубчатый венец (4 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.02.007',
        catalogNumber: '3.3.1.2.7',
        images: [
          { imageURL: '3.3.1.2.7.jpg' }
        ]
      },
      { id: 'id0505',
        name: 'Вал-шестерня (промежуточной ступицы) (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.02.008',
        catalogNumber: '3.3.1.2.8',
        images: [
          { imageURL: '3.3.1.2.8.jpg' }
        ]
      },
      { id: 'id0506',
        name: 'Ступица (промежуточная) (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '03АБЗ-003.01.02.015',
        catalogNumber: '3.3.1.2.15',
        images: [
          { imageURL: '3.3.1.2.15.jpg' }
        ]
      },
      { id: 'id0507',
        name: 'Шкив (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-003.01.02.016',
        catalogNumber: '4.3.1.2.16',
        images: [
          { imageURL: '4.3.1.2.16.jpg' }
        ]
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

  // 6.
  { id: 'id06',
    name: 'Весы битумные',
    description: '(описание детали)',
    constructorNumber: '04АБЗ-004.10.00.000СБ',
    catalogNumber: '4.4.10',
    children: [
      { id: 'id0601',
        name: 'Тензодатчик (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.4.10.93'
      },
      { id: 'id0602',
        name: 'Аммортизатор (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.4.10.95'
      },
      { id: 'id0603',
        name: 'Нагреватель хомутовый',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.4.10.104'
      },
      { id: 'id0604',
        name: 'Пневмоцилиндр',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '6.90.4.106'
      },
      { id: 'id0605',
        name: 'Электронагреватель',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.4.10.108'
      },
      { id: 'id0606',
        name: 'Клапан аварийный',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-004.10.03.000СБ',
        catalogNumber: '4.4.10.3'
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
        name: 'Тензодатчик (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '2.4.2.93'
      },
      { id: 'id0702',
        name: 'Аммортизатор (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '2.4.2.95'
      },
      { id: 'id0703',
        name: 'Заслонка поворотная',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '2.4.2.97'
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
        name: 'Затвор',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-004.03.01.000-МСБ',
        catalogNumber: '4.4.3.1.М'
      },
      { id: 'id0802',
        name: 'Тензодатчик (3 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.4.3.100'
      },
      { id: 'id0803',
        name: 'Аммортизатор (3 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.4.3.103'
      },
      { id: 'id0804',
        name: 'Пневмоцилиндр',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '6.90.4.75'
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
        name: 'Тензодатчик (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '8.4.6.67'
      },
      { id: 'id0902',
        name: 'Заслонка поворотная',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '8.4.6.72'
      },
      { id: 'id0903',
        name: 'Демпфер (4 шт.)',
        description: '(описание детали)',
        constructorNumber: '02АБЗ-004.06.00.023(3)-01',
        catalogNumber: '2.4.6.23'
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
        name: 'Затвор (5 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-004.03.01.000-МСБ',
        catalogNumber: '4.4.3.1.М'
      },
      { id: 'id1002',
        name: 'Пневмоцилиндр (5 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '6.90.4.75'
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
        name: 'Заслонка поворотная',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '8.5.3.6'
      },
      { id: 'id1102',
        name: 'Шнек',
        description: '(описание детали)',
        constructorNumber: '08АБЗ-005.03.01.200-М',
        catalogNumber: '8.5.3.1.2'
      },
      { id: 'id1103',
        name: 'Мотор-редуктор',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '8.5.3.1.56'
      },
      { id: 'id1104',
        name: 'Рукав соединительный',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-004.00.00.018',
        catalogNumber: '4.4.18'
      },
      { id: 'id1105',
        name: 'Рукав соединительный',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-004.00.00.019',
        catalogNumber: '4.4.19'
      },
      { id: 'id1106',
        name: 'Рукав соединительный',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-004.00.00.020',
        catalogNumber: '4.4.20'
      },
      { id: 'id1107',
        name: 'Рукав соединительный',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-004.00.00.021',
        catalogNumber: '4.4.21'
      },
      { id: 'id1108',
        name: 'Промежуточный бункер (п.у!)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-005.00.00.000-М1',
        catalogNumber: ''
      },
      { id: 'id1109',
        name: 'Ротационный датчик уровня',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-005.01.13.000СБ-01-М1',
        catalogNumber: '4.5.1.13'
      },
      { id: 'id1110',
        name: 'Ротационный датчик уровня (5 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-005.01.14.000СБ-М1',
        catalogNumber: '4.5.1.14'
      },
      { id: 'id1111',
        name: 'Транспортер шнековый',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-005.02.00.000-М1',
        catalogNumber: '4.5.2.М1'
      },
      { id: 'id1112',
        name: 'Мотор-редуктор',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.5.2.56'
      },
      { id: 'id1113',
        name: 'Шнек',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-005.02.02.000СБ-М1',
        catalogNumber: '4.5.2.2.М1'
      },
      { id: 'id1114',
        name: 'Цапфа',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-005.02.02.003-М1',
        catalogNumber: '4.5.2.2.3.М1'
      },
      { id: 'id1115',
        name: 'Цапфа',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-011.01.07.002',
        catalogNumber: '4.11.1.7.2'
      },
      { id: 'id1116',
        name: 'Втулка (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-011.01.07.005',
        catalogNumber: '4.11.1.7.5'
      },
      { id: 'id1117',
        name: 'Перо шнека',
        description: '(описание детали)',
        constructorNumber: '04АБЗ-005.02.02.006-М1',
        catalogNumber: '4.5.2.2.6М1'
      },
      { id: 'id1118',
        name: 'Подшипник (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.5.2.45'
      },
      { id: 'id1119',
        name: 'Манжета (3 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.5.2.48'
      },
      { id: 'id1120',
        name: 'Шпонка',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.5.2.47'
      },
      { id: 'id1121',
        name: 'Набивка (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '4.5.2.50'
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
        name: 'Кожух (54 шт.)',
        description: '(описание детали)',
        constructorNumber: 'ГН-001.02.11.000АСБ',
        catalogNumber: '1.7.2.2.А'
      },
      { id: 'id1202',
        name: 'Отбойник',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.03.000СБ',
        catalogNumber: '1.7.2.3'
      },
      { id: 'id1203',
        name: 'Балка зацепная',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.04.000СБ',
        catalogNumber: '1.7.2.4'
      },
      { id: 'id1204',
        name: 'Балка опорная (25 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.05.000СБ',
        catalogNumber: '1.7.2.5'
      },
      { id: 'id1205',
        name: 'Балка натяжная (9 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.07.000-М1СБ',
        catalogNumber: '1.7.2.7.М1'
      },
      { id: 'id1206',
        name: 'Крюк (54 шт.)',
        description: '(описание детали)',
        constructorNumber: 'ГН-001.02.15.000СБ',
        catalogNumber: '1.7.2.15.8'
      },
      { id: 'id1207',
        name: 'Сито',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.09.000СБ',
        catalogNumber: '1.7.2.9'
      },
      { id: 'id1208',
        name: 'Сито',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.09.000-01СБ',
        catalogNumber: '1.7.2.10'
      },
      { id: 'id1209',
        name: 'Сито',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.09.000-02СБ',
        catalogNumber: '1.7.2.11'
      },
      { id: 'id1210',
        name: 'Сито',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.09.000-03СБ',
        catalogNumber: '1.7.2.12'
      },
      { id: 'id1211',
        name: 'Сито',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.09.000-04СБ',
        catalogNumber: '1.7.2.13'
      },
      { id: 'id1212',
        name: 'Сито',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.09.000-05СБ',
        catalogNumber: '1.7.2.14'
      },
      { id: 'id1213',
        name: 'Втулка (54 шт.)',
        description: '(описание детали)',
        constructorNumber: 'ГН-001.02.17.000',
        catalogNumber: '1.7.2.24'
      },
      { id: 'id1214',
        name: 'Шкив (2 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.01.009-01-М',
        catalogNumber: '1.7.2.1.25.М'
      },
      { id: 'id1215',
        name: 'Электродвигатель (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '1.7.2.50'
      },
      { id: 'id1216',
        name: 'Ремень (6 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '1.7.2.52'
      },
      { id: 'id1217',
        name: 'Пружина (54 шт.)',
        description: '(описание детали)',
        constructorNumber: 'ГН-001.02.00.019',
        catalogNumber: '1.7.2.22'
      },
      { id: 'id1218',
        name: 'Пружина (8 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '1.7.32'
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
        name: 'Вал (2 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.01.012-М1',
        catalogNumber: '1.7.2.1.12.М1'
      },
      { id: 'id1302',
        name: 'Стакан (4 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.01.005-М1',
        catalogNumber: '1.7.2.1.5.М1'
      },
      { id: 'id1303',
        name: 'Крышка (4 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.01.006-М1',
        catalogNumber: '1.7.2.1.6.М1'
      },
      { id: 'id1304',
        name: 'Кольцо (4 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.01.008-М1',
        catalogNumber: '1.7.2.1.8.М1'
      },
      { id: 'id1305',
        name: 'Шкив (2 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.01.009-М1',
        catalogNumber: '1.7.2.1.9.М1'
      },
      { id: 'id1306',
        name: 'Втулка (4 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.01.013-М1',
        catalogNumber: '1.7.2.1.13.М1'
      },
      { id: 'id1307',
        name: 'Груз (2 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.01.015-М1',
        catalogNumber: '1.7.2.1.15.М1'
      },
      { id: 'id1308',
        name: 'Груз (2 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.01.015-01-М1',
        catalogNumber: '1.7.2.1.16.М1'
      },
      { id: 'id1309',
        name: 'Кольцо (2 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.01.017-М1',
        catalogNumber: '1.7.2.1.17.М1'
      },
      { id: 'id1310',
        name: 'Шайба (8 шт.)',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.02.01.018-М1',
        catalogNumber: '1.7.2.1.18.М1'
      },
      { id: 'id1311',
        name: 'Подшипник (4 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '1.7.2.1.35'
      },
      { id: 'id1312',
        name: 'Манжета (8 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '1.7.2.1.37'
      },
      { id: 'id1313',
        name: 'Кольцо (4 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '1.7.2.1.39'
      },
      { id: 'id1314',
        name: 'Шпонка (2 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '1.7.2.1.41'
      },
      { id: 'id1315',
        name: 'Шпонка (4 шт.)',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '1.7.2.1.42'
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
        name: 'Рычаг',
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
        name: 'Рукав соединительный',
        description: '(описание детали)',
        constructorNumber: 'АБЗ-007.03.00.015',
        catalogNumber: '1.7.3.15'
      },
      { id: 'id1404',
        name: 'Пневмоцилиндр',
        description: '(описание детали)',
        constructorNumber: '',
        catalogNumber: '6.90.7'
      }
    ]
  }
] // end Megauzels array
