var abz = [
  { id: 'id00',
    name: 'Асфальтосмесительная Установка',
    description: ''
  },

  // 1.
  { id: 'id01',
    name: 'Бункер готового асфальта',
    catalogNumber: '4.1',
    images: [
      { imageURL: '4.1.jpg',
        mapMarkers: [
          { left: '32.8',
            top: '88.5',
            width: '5.1',
            height: '4',
            href: '1,0'
          },
          { left: '48.8',
            top: '88.7',
            width: '5.1',
            height: '4',
            href: '1,1'
          },
          { left: '30.2',
            top: '43.3',
            width: '5.1',
            height: '4',
            href: '1,2'
          },
          { left: '64.5',
            top: '78.7',
            width: '5.6',
            height: '4',
            href: '1,4'
          },
          { left: '24.2',
            top: '86.9',
            width: '7.8',
            height: '4',
            href: '1,5'
          }
        ]
      }
    ],
    children: [
      { id: 'id0101',
        name: 'Затвор',
        catalogNumber: '4.1.3',
        images: [
          { imageURL: '4.1.3.jpg' }
        ]
      },
      { id: 'id0102',
        name: 'Затвор',
        catalogNumber: '4.1.4',
        images: [
          { imageURL: '4.1.4.jpg' }
        ]
      },
      { id: 'id0103',
        name: 'Кронштейн',
        catalogNumber: '4.1.6',
        images: [
          { imageURL: '4.1.6.jpg' }
        ]
      },
      { id: 'id0104',
        name: 'Кронштейн',
        catalogNumber: '4.1.7',
        images: [
          { imageURL: '4.1.7.jpg' }
        ]
      },
      { id: 'id0105',
        name: 'Подшипник (2 шт.)',
        catalogNumber: '4.1.49'
      },
      { id: 'id0106',
        name: 'Пневмоцилиндр (2 шт.)',
        catalogNumber: '6.90.1.51'
      },
      { id: 'id0107',
        name: 'Пневмоцилиндр',
        catalogNumber: '6.90.1.55'
      }
    ] // end Uzels array
  },

  // 2.
  { id: 'id02',
    name: 'Устройство разгрузки асфальта',
    catalogNumber: '8.2',
    images: [
      { imageURL: '8.2.jpg',
        mapMarkers: [
          { left: '52.5',
            top: '14',
            width: '11',
            height: '5',
            href: '2,0'
          },
          { left: '8',
            top: '64.5',
            width: '9.5',
            height: '4',
            href: '2,1'
          },
          { left: '10.5',
            top: '71.2',
            width: '15',
            height: '4',
            href: '2,2'
          }
        ]
      }
    ],
    children: [
      { id: 'id0201',
        name: 'Затвор',
        catalogNumber: '4.2.3',
        images: [
          { imageURL: '4.2.3.jpg' }
        ]
      },
      { id: 'id0202',
        name: 'Кронштейн',
        catalogNumber: '4.2.11',
        images: [
          { imageURL: '4.2.11.jpg' }
        ]
      },
      { id: 'id0203',
        name: 'Пневмоцилиндр (2 шт.)',
        catalogNumber: '6.90.2.75'
      }
    ]
  },

  // 3.
  { id: 'id03',
    name: 'Бункер негабарита',
    catalogNumber: '4.23',
    children: [
      { id: 'id0301',
        name: 'Короб-затвор',
        catalogNumber: '5.23.4'
      },
      { id: 'id0302',
        name: 'Датчик уровня',
        catalogNumber: '8.4.5'
      },
      { id: 'id0303',
        name: 'Пневмоцилиндр',
        catalogNumber: '4.23.04.17'
      }
    ]
  },

  // 4.
  { id: 'id04',
    name: 'Мешалка',
    catalogNumber: '4.3.1',
    images: [
      { imageURL: '4.3.1.jpg',
        mapMarkers: [
          { top: '57.8',
            left: '79.7',
            width: '6',
            height: '3',
            href: '4,0'
          },
          { top: '35.8',
            left: '40.8',
            width: '6',
            height: '3',
            href: '4,1'
          },
          { top: '47',
            left: '76.1',
            width: '5.7',
            height: '3',
            href: '4,2'
          },
          { top: '42.5',
            left: '81',
            width: '5.7',
            height: '3',
            href: '4,3'
          },
          { top: '74.4',
            left: '48.1',
            width: '5.7',
            height: '3',
            href: '4,4'
          },
          { top: '28.4',
            left: '71',
            width: '5.7',
            height: '3',
            href: '4,5'
          },
          { top: '79',
            left: '42.3',
            width: '5.7',
            height: '3',
            href: '4,6'
          }
        ]
      }
    ],
    children: [
      { id: 'id0401',
        name: 'Вал',
        catalogNumber: '4.3.1.19',
        images: [
          { imageURL: '4.3.1.19.jpg' }
        ]
      },
      { id: 'id0402',
        name: 'Вал',
        catalogNumber: '4.3.1.20',
        images: [
          { imageURL: '4.3.1.20.jpg' }
        ]
      },
      { id: 'id0403',
        name: 'Втулка (4 шт.)',
        catalogNumber: '4.3.1.21',
        images: [
          { imageURL: '4.3.1.21.jpg' }
        ]
      },
      { id: 'id0404',
        name: 'Фланец (4 шт.)',
        catalogNumber: '4.3.1.22',
        images: [
          { imageURL: '4.3.1.22.jpg' }
        ]
      },
      { id: 'id0405',
        name: 'Втулка (2 шт.)',
        catalogNumber: '3.3.1.23',
        images: [
          { imageURL: '3.3.1.23.jpg' }
        ]
      },
      { id: 'id0406',
        name: 'Втулка (2 шт.)',
        catalogNumber: '4.3.1.24',
        images: [
          { imageURL: '4.3.1.24.jpg' }
        ]
      },
      { id: 'id0407',
        name: 'Отражатель (2 шт.)',
        catalogNumber: '4.3.1.25',
        images: [
          { imageURL: '4.3.1.25.jpg' }
        ]
      },
      { id: 'id0408',
        name: 'Шайба (2 шт.)',
        catalogNumber: '3.3.1.26',
        images: [
          { imageURL: '3.3.1.26.jpg' }
        ]
      },
      { id: 'id0409',
        name: 'Крышка (2 шт.)',
        catalogNumber: '3.3.1.27',
        images: [
          { imageURL: '3.3.1.27.jpg' }
        ]
      },
      { id: 'id0410',
        name: 'Крышка (2 шт.)',
        catalogNumber: '3.3.1.28',
        images: [
          { imageURL: '3.3.1.28.jpg' }
        ]
      },
      { id: 'id0411',
        name: 'Крышка (2 шт.)',
        catalogNumber: '3.3.1.29',
        images: [
          { imageURL: '3.3.1.29.jpg' }
        ]
      },
      { id: 'id0412',
        name: 'Шкив',
        catalogNumber: '4.3.1.30',
        images: [
          { imageURL: '4.3.1.30.jpg' }
        ]
      },
      { id: 'id0413',
        name: 'Отражатель (2 шт.)',
        catalogNumber: '4.3.1.32',
        images: [
          { imageURL: '4.3.1.32.jpg' }
        ]
      },
      { id: 'id0414',
        name: 'Прокладка (12 шт.)',
        catalogNumber: '4.3.1.13.4',
        images: [
          { imageURL: '4.3.1.13.4.jpg' }
        ]
      },
      { id: 'id0415',
        name: 'Кольцо нажимное (4 шт.)',
        catalogNumber: '4.3.1.58',
        images: [
          { imageURL: '4.3.1.58.jpg' }
        ]
      },
      { id: 'id0416',
        name: 'Лопасть (12 шт.)',
        catalogNumber: '4.3.1.13.3',
        images: [
          { imageURL: '4.3.1.13.3.jpg' }
        ]
      },
      { id: 'id0417',
        name: 'Стойка правая (8 шт.)',
        catalogNumber: '4.3.1.13.2',
        images: [
          { imageURL: '4.3.1.13.2.jpg' }
        ]
      },
      { id: 'id0418',
        name: 'Стойка левая (4 шт.)',
        catalogNumber: '4.3.1.13.1',
        images: [
          { imageURL: '4.3.1.13.1.jpg' }
        ]
      },
      { id: 'id0419',
        name: 'Ступица (бугель) (8 шт.)',
        catalogNumber: '4.3.1.13.5',
        images: [
          { imageURL: '4.3.1.13.5.jpg' }
        ]
      },
      { id: 'id0420',
        name: 'Болт М20 (24 шт.)',
        catalogNumber: '4.3.1.13.7'
      },
      { id: 'id0421',
        name: 'Болт М30 (20 шт.)',
        catalogNumber: '4.3.1.13.8'
      },
      { id: 'id0422',
        name: 'Гайка М20 (48 шт.)',
        catalogNumber: '4.3.1.13.9'
      },
      { id: 'id0423',
        name: 'Гайка М30 (40 шт.)',
        catalogNumber: '4.3.1.13.10'
      },
      { id: 'id0424',
        name: 'Шайба тарельчатая (24 шт.)',
        catalogNumber: '4.3.1.13.11'
      },
      { id: 'id0425',
        name: 'Шайба 30 (20 шт.)',
        catalogNumber: '4.3.1.13.12'
      },
      { id: 'id0426',
        name: 'Лист изнашивающийся (30 шт.)',
        catalogNumber: '4.3.1.15.35',
        images: [
          { imageURL: '4.3.1.15.35.jpg' }
        ]
      },
      { id: 'id0427',
        name: 'Лист изнашивающийся (10 шт.)',
        catalogNumber: '4.3.1.15.36',
        images: [
          { imageURL: '4.3.1.15.36.jpg' }
        ]
      },
      { id: 'id0428',
        name: 'Лист изнашивающийся (8 шт.)',
        catalogNumber: '4.3.1.15.37',
        images: [
          { imageURL: '4.3.1.15.37.jpg' }
        ]
      },
      { id: 'id0429',
        name: 'Лист изнашивающийся (4 шт.)',
        catalogNumber: '4.3.1.15.38',
        images: [
          { imageURL: '4.3.1.15.38.jpg' }
        ]
      },
      { id: 'id0430',
        name: 'Лист изнашивающийся (4 шт.)',
        catalogNumber: '4.3.1.15.39',
        images: [
          { imageURL: '4.3.1.15.39.jpg' }
        ]
      },
      { id: 'id0431',
        name: 'Лист изнашивающийся (6 шт.)',
        catalogNumber: '4.3.1.15.40',
        images: [
          { imageURL: '4.3.1.15.40.jpg' }
        ]
      },
      { id: 'id0432',
        name: 'Вставка',
        catalogNumber: '4.3.1.15.41',
        images: [
          { imageURL: '4.3.1.15.41.jpg' }
        ]
      },
      { id: 'id0433',
        name: 'Вставка',
        catalogNumber: '4.3.1.15.42',
        images: [
          { imageURL: '4.3.1.15.42.jpg' }
        ]
      },
      { id: 'id0434',
        name: 'Винт М12 (156 шт.)',
        catalogNumber: '4.3.1.15.45'
      },
      { id: 'id0435',
        name: 'Шайба 12.65Г (156 шт.)',
        catalogNumber: '4.3.1.15.46'
      },
      { id: 'id0436',
        name: 'Гайка М12 (156 шт.)',
        catalogNumber: '4.3.1.15.47'
      },
      { id: 'id0437',
        name: 'Шайба 12 (156 шт.)',
        catalogNumber: '4.3.1.15.48'
      },
      { id: 'id0438',
        name: 'Подшипник (2 шт.)',
        catalogNumber: '4.3.1.120'
      },
      { id: 'id0439',
        name: 'Подшипник (2 шт.)',
        catalogNumber: '4.3.1.121'
      },
      { id: 'id0440',
        name: 'Манжета (2 шт.)',
        catalogNumber: '4.3.1.126'
      },
      { id: 'id0441',
        name: 'Ремень (12 шт.)',
        catalogNumber: '4.3.1.131'
      },
      { id: 'id0442',
        name: 'Электродвигатель (2 шт.)',
        catalogNumber: '4.3.1.130'
      },
      { id: 'id0443',
        name: 'Пневмоцилиндр (2 шт.)',
        catalogNumber: '6.90.3.132'
      }
    ]
  },

  // 5.
  { id: 'id05',
    name: 'Редуктор',
    catalogNumber: '3.3.1.2',
    images: [
      { imageURL: '3.3.1.2.jpg',
        mapMarkers: [
          { left: '7',
            top: '49.3',
            width: '9.8',
            height: '4',
            href: '5,0'
          },
          { left: '74',
            top: '62.8',
            width: '9.8',
            height: '4',
            href: '5,1'
          },
          { left: '37',
            top: '15',
            width: '9.8',
            height: '4',
            href: '5,2'
          },
          { left: '50.2',
            top: '92.7',
            width: '9.8',
            height: '4',
            href: '5,3'
          },
          { left: '72',
            top: '77',
            width: '9.8',
            height: '4',
            href: '5,4'
          },
          { left: '31.8',
            top: '90',
            width: '11',
            height: '4',
            href: '5,5'
          },
          { left: '9.6',
            top: '82',
            width: '11',
            height: '4',
            href: '5,6'
          },
          { left: '7.5',
            top: '44',
            width: '11',
            height: '4',
            href: '5,7'
          },
          { left: '40.5',
            top: '94.8',
            width: '11',
            height: '4',
            href: '5,8'
          },
          { left: '92.5',
            top: '31.5',
            width: '11',
            height: '4',
            href: '5,9'
          },
          { left: '25.8',
            top: '79.8',
            width: '11',
            height: '4',
            href: '5,10'
          },
          { left: '73.5',
            top: '33.6',
            width: '11',
            height: '4',
            href: '5,11'
          },
          { left: '57.5',
            top: '69.5',
            width: '11',
            height: '4',
            href: '5,12'
          },
          { left: '7.5',
            top: '54',
            width: '11',
            height: '4',
            href: '5,13'
          }
        ]
      }
    ],
    children: [
      { id: 'id0501',
        name: 'Вал-шестерня (под шкив) (2 шт.)',
        catalogNumber: '3.3.1.2.2',
        images: [
          { imageURL: '3.3.1.2.2.jpg' }
        ]
      },
      { id: 'id0502',
        name: 'Ступица (выходного вала) (2 шт.)',
        catalogNumber: '3.3.1.2.3',
        images: [
          { imageURL: '3.3.1.2.3.jpg' }
        ]
      },
      { id: 'id0503',
        name: 'Сапун',
        catalogNumber: '3.3.10.21',
        images: [
          { imageURL: '3.3.10.21.jpg' }
        ]
      },
      { id: 'id0504',
        name: 'Зубчатый венец (4 шт.)',
        catalogNumber: '3.3.1.2.7',
        images: [
          { imageURL: '3.3.1.2.7.jpg' }
        ]
      },
      { id: 'id0505',
        name: 'Вал-шестерня (промежуточной ступицы) (2 шт.)',
        catalogNumber: '3.3.1.2.8',
        images: [
          { imageURL: '3.3.1.2.8.jpg' }
        ]
      },
      { id: 'id0506',
        name: 'Ступица (промежуточная) (2 шт.)',
        catalogNumber: '3.3.1.2.15',
        images: [
          { imageURL: '3.3.1.2.15.jpg' }
        ]
      },
      { id: 'id0507',
        name: 'Шкив (2 шт.)',
        catalogNumber: '4.3.1.2.16',
        images: [
          { imageURL: '4.3.1.2.16.jpg' }
        ]
      },
      { id: 'id0508',
        name: 'Подшипник (2 шт.)',
        catalogNumber: '3.3.1.2.50'
      },
      { id: 'id0509',
        name: 'Подшипник (8 шт.)',
        catalogNumber: '3.3.1.2.51'
      },
      { id: 'id0510',
        name: 'Подшипник (2 шт.)',
        catalogNumber: '3.3.1.2.52'
      },
      { id: 'id0511',
        name: 'Манжета (2 шт.)',
        catalogNumber: '3.3.1.2.55'
      },
      { id: 'id0512',
        name: 'Манжета (2 шт.)',
        catalogNumber: '3.3.1.2.56'
      },
      { id: 'id0513',
        name: 'Шпонка (2 шт.)',
        catalogNumber: '3.3.1.2.58'
      },
      { id: 'id0514',
        name: 'Шпонка (2 шт.)',
        catalogNumber: '3.3.1.2.59'
      },
      { id: 'id0515',
        name: 'Затвор',
        catalogNumber: '4.3.1.3',
        images: [
          { imageURL: '4.3.1.3.jpg' }
        ]
      },
      { id: 'id0516',
        name: 'Рычаг',
        catalogNumber: '4.3.1.10',
        images: [
          { imageURL: '4.3.1.10.jpg' }
        ]
      },
      { id: 'id0517',
        name: 'Рычаг',
        catalogNumber: '4.3.1.11',
        images: [
          { imageURL: '4.3.1.11.jpg' }
        ]
      },
      { id: 'id0518',
        name: 'Короб в сборе',
        catalogNumber: '4.3.2'
      }
    ]
  },

  // 6.
  { id: 'id06',
    name: 'Весы битумные',
    catalogNumber: '4.4.10',
    children: [
      { id: 'id0601',
        name: 'Тензодатчик (2 шт.)',
        catalogNumber: '4.4.10.93'
      },
      { id: 'id0602',
        name: 'Аммортизатор (2 шт.)',
        catalogNumber: '4.4.10.95'
      },
      { id: 'id0603',
        name: 'Нагреватель хомутовый',
        catalogNumber: '4.4.10.104'
      },
      { id: 'id0604',
        name: 'Пневмоцилиндр',
        catalogNumber: '6.90.4.106'
      },
      { id: 'id0605',
        name: 'Электронагреватель',
        catalogNumber: '4.4.10.108'
      },
      { id: 'id0606',
        name: 'Клапан аварийный',
        catalogNumber: '4.4.10.3'
      }
    ]
  },

  // 7.
  { id: 'id07',
    name: 'Весы пыли',
    catalogNumber: '2.4.2',
    children: [
      { id: 'id0701',
        name: 'Тензодатчик (2 шт.)',
        catalogNumber: '2.4.2.93'
      },
      { id: 'id0702',
        name: 'Аммортизатор (2 шт.)',
        catalogNumber: '2.4.2.95'
      },
      { id: 'id0703',
        name: 'Заслонка поворотная',
        catalogNumber: '2.4.2.97'
      }
    ]
  },

  // 8.
  { id: 'id08',
    name: 'Весы минерала',
    catalogNumber: '4.4.3',
    children: [
      { id: 'id0801',
        name: 'Затвор',
        catalogNumber: '4.4.3.1.М'
      },
      { id: 'id0802',
        name: 'Тензодатчик (3 шт.)',
        catalogNumber: '4.4.3.100'
      },
      { id: 'id0803',
        name: 'Аммортизатор (3 шт.)',
        catalogNumber: '4.4.3.103'
      },
      { id: 'id0804',
        name: 'Пневмоцилиндр',
        catalogNumber: '6.90.4.75'
      }
    ]
  },

  // 9.
  { id: 'id09',
    name: 'Весы ВИАТОПа',
    catalogNumber: '8.4.6',
    children: [
      { id: 'id0901',
        name: 'Тензодатчик (2 шт.)',
        catalogNumber: '8.4.6.67'
      },
      { id: 'id0902',
        name: 'Заслонка поворотная',
        catalogNumber: '8.4.6.72'
      },
      { id: 'id0903',
        name: 'Демпфер (4 шт.)',
        catalogNumber: '2.4.6.23'
      }
    ]
  },

  // 10.
  { id: 'id10',
    name: 'Бункер минерала',
    catalogNumber: '4.5.2',
    children: [
      { id: 'id1001',
        name: 'Затвор (5 шт.)',
        catalogNumber: '4.4.3.1.М'
      },
      { id: 'id1002',
        name: 'Пневмоцилиндр (5 шт.)',
        catalogNumber: '6.90.4.75'
      }
    ]
  },

  // 11.
  { id: 'id11',
    name: 'Бункер пыли',
    catalogNumber: '8.5.3',
    children: [
      { id: 'id1101',
        name: 'Заслонка поворотная',
        catalogNumber: '8.5.3.6'
      },
      { id: 'id1102',
        name: 'Шнек',
        catalogNumber: '8.5.3.1.2'
      },
      { id: 'id1103',
        name: 'Мотор-редуктор',
        catalogNumber: '8.5.3.1.56'
      },
      { id: 'id1104',
        name: 'Рукав соединительный',
        catalogNumber: '4.4.18'
      },
      { id: 'id1105',
        name: 'Рукав соединительный',
        catalogNumber: '4.4.19'
      },
      { id: 'id1106',
        name: 'Рукав соединительный',
        catalogNumber: '4.4.20'
      },
      { id: 'id1107',
        name: 'Рукав соединительный',
        catalogNumber: '4.4.21'
      },
      { id: 'id1108',
        name: 'Промежуточный бункер (п.у!)',
        catalogNumber: ''
      },
      { id: 'id1109',
        name: 'Ротационный датчик уровня',
        catalogNumber: '4.5.1.13'
      },
      { id: 'id1110',
        name: 'Ротационный датчик уровня (5 шт.)',
        catalogNumber: '4.5.1.14'
      },
      { id: 'id1111',
        name: 'Транспортер шнековый',
        catalogNumber: '4.5.2.М1'
      },
      { id: 'id1112',
        name: 'Мотор-редуктор',
        catalogNumber: '4.5.2.56'
      },
      { id: 'id1113',
        name: 'Шнек',
        catalogNumber: '4.5.2.2.М1'
      },
      { id: 'id1114',
        name: 'Цапфа',
        catalogNumber: '4.5.2.2.3.М1'
      },
      { id: 'id1115',
        name: 'Цапфа',
        catalogNumber: '4.11.1.7.2'
      },
      { id: 'id1116',
        name: 'Втулка (2 шт.)',
        catalogNumber: '4.11.1.7.5'
      },
      { id: 'id1117',
        name: 'Перо шнека',
        catalogNumber: '4.5.2.2.6М1'
      },
      { id: 'id1118',
        name: 'Подшипник (2 шт.)',
        catalogNumber: '4.5.2.45'
      },
      { id: 'id1119',
        name: 'Манжета (3 шт.)',
        catalogNumber: '4.5.2.48'
      },
      { id: 'id1120',
        name: 'Шпонка',
        catalogNumber: '4.5.2.47'
      },
      { id: 'id1121',
        name: 'Набивка (2 шт.)',
        catalogNumber: '4.5.2.50'
      }
    ]
  },

  // 12.
  { id: 'id12',
    name: 'Короб грохота',
    catalogNumber: '1.7.2.М1',
    children: [
      { id: 'id1201',
        name: 'Кожух (54 шт.)',
        catalogNumber: '1.7.2.2.А'
      },
      { id: 'id1202',
        name: 'Отбойник',
        catalogNumber: '1.7.2.3'
      },
      { id: 'id1203',
        name: 'Балка зацепная',
        catalogNumber: '1.7.2.4'
      },
      { id: 'id1204',
        name: 'Балка опорная (25 шт.)',
        catalogNumber: '1.7.2.5'
      },
      { id: 'id1205',
        name: 'Балка натяжная (9 шт.)',
        catalogNumber: '1.7.2.7.М1'
      },
      { id: 'id1206',
        name: 'Крюк (54 шт.)',
        catalogNumber: '1.7.2.15.8'
      },
      { id: 'id1207',
        name: 'Сито',
        catalogNumber: '1.7.2.9'
      },
      { id: 'id1208',
        name: 'Сито',
        catalogNumber: '1.7.2.10'
      },
      { id: 'id1209',
        name: 'Сито',
        catalogNumber: '1.7.2.11'
      },
      { id: 'id1210',
        name: 'Сито',
        catalogNumber: '1.7.2.12'
      },
      { id: 'id1211',
        name: 'Сито',
        catalogNumber: '1.7.2.13'
      },
      { id: 'id1212',
        name: 'Сито',
        catalogNumber: '1.7.2.14'
      },
      { id: 'id1213',
        name: 'Втулка (54 шт.)',
        catalogNumber: '1.7.2.24'
      },
      { id: 'id1214',
        name: 'Шкив (2 шт.)',
        catalogNumber: '1.7.2.1.25.М'
      },
      { id: 'id1215',
        name: 'Электродвигатель (2 шт.)',
        catalogNumber: '1.7.2.50'
      },
      { id: 'id1216',
        name: 'Ремень (6 шт.)',
        catalogNumber: '1.7.2.52'
      },
      { id: 'id1217',
        name: 'Пружина (54 шт.)',
        catalogNumber: '1.7.2.22'
      },
      { id: 'id1218',
        name: 'Пружина (8 шт.)',
        catalogNumber: '1.7.32'
      }
    ]
  },

  // 13.
  { id: 'id13',
    name: 'Вибратор',
    catalogNumber: '1.7.2.1.М1',
    children: [
      { id: 'id1301',
        name: 'Вал (2 шт.)',
        catalogNumber: '1.7.2.1.12.М1'
      },
      { id: 'id1302',
        name: 'Стакан (4 шт.)',
        catalogNumber: '1.7.2.1.5.М1'
      },
      { id: 'id1303',
        name: 'Крышка (4 шт.)',
        catalogNumber: '1.7.2.1.6.М1'
      },
      { id: 'id1304',
        name: 'Кольцо (4 шт.)',
        catalogNumber: '1.7.2.1.8.М1'
      },
      { id: 'id1305',
        name: 'Шкив (2 шт.)',
        catalogNumber: '1.7.2.1.9.М1'
      },
      { id: 'id1306',
        name: 'Втулка (4 шт.)',
        catalogNumber: '1.7.2.1.13.М1'
      },
      { id: 'id1307',
        name: 'Груз (2 шт.)',
        catalogNumber: '1.7.2.1.15.М1'
      },
      { id: 'id1308',
        name: 'Груз (2 шт.)',
        catalogNumber: '1.7.2.1.16.М1'
      },
      { id: 'id1309',
        name: 'Кольцо (2 шт.)',
        catalogNumber: '1.7.2.1.17.М1'
      },
      { id: 'id1310',
        name: 'Шайба (8 шт.)',
        catalogNumber: '1.7.2.1.18.М1'
      },
      { id: 'id1311',
        name: 'Подшипник (4 шт.)',
        catalogNumber: '1.7.2.1.35'
      },
      { id: 'id1312',
        name: 'Манжета (8 шт.)',
        catalogNumber: '1.7.2.1.37'
      },
      { id: 'id1313',
        name: 'Кольцо (4 шт.)',
        catalogNumber: '1.7.2.1.39'
      },
      { id: 'id1314',
        name: 'Шпонка (2 шт.)',
        catalogNumber: '1.7.2.1.41'
      },
      { id: 'id1315',
        name: 'Шпонка (4 шт.)',
        catalogNumber: '1.7.2.1.42'
      }
    ]
  },

  // 14.
  { id: 'id14',
    name: 'Устройство распределительное',
    catalogNumber: '1.7.3',
    children: [
      { id: 'id1401',
        name: 'Рычаг',
        catalogNumber: '1.7.3.14'
      },
      { id: 'id1402',
        name: 'Пошипник (2 шт.)',
        catalogNumber: '1.7.3.47'
      },
      { id: 'id1403',
        name: 'Рукав соединительный',
        catalogNumber: '1.7.3.15'
      },
      { id: 'id1404',
        name: 'Пневмоцилиндр',
        catalogNumber: '6.90.7'
      }
    ]
  }
] // end Megauzels array
