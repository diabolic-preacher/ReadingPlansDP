    // 1. SALVATION HISTORY PERIODS & METADATA
    // =========================================================================
    const ALL_PERIODS = [
      { id: 'early', name: 'Early World', color: '#0d9488', in90: true, in365: true },
      { id: 'patriarchs', name: 'Patriarchs', color: '#991b1b', in90: true, in365: true },
      { id: 'exodus', name: 'Egypt and Exodus', color: '#dc2626', in90: true, in365: true },
      { id: 'desert', name: 'Desert Wanderings', color: '#d97706', in90: true, in365: true },
      { id: 'conquest', name: 'Conquest and Judges', color: '#16a34a', in90: true, in365: true },
      { id: 'checkpoint1', name: 'Messianic Checkpoint (John)', color: '#ca8a04', in90: false, in365: true },
      { id: 'royal', name: 'Royal Kingdom', color: '#7e22ce', in90: true, in365: true },
      { id: 'checkpoint2', name: 'Messianic Checkpoint (Mark)', color: '#ca8a04', in90: false, in365: true },
      { id: 'divided', name: 'Divided Kingdom', color: '#1e293b', in90: true, in365: true },
      { id: 'exile', name: 'Exile', color: '#0284c7', in90: true, in365: true },
      { id: 'checkpoint3', name: 'Messianic Checkpoint (Matthew)', color: '#ca8a04', in90: false, in365: true },
      { id: 'return', name: 'Return', color: '#eab308', in90: true, in365: true },
      { id: 'maccabees', name: 'Maccabean Revolt', color: '#ea580c', in90: true, in365: true },
      { id: 'messianic', name: 'Messianic Fulfillment', color: '#b45309', in90: true, in365: true },
      { id: 'church', name: 'The Church', color: '#2563eb', in90: true, in365: true }
    ];

    const NARRATIVE_BOOKS = [
      'Genesis', 'Exodus', 'Numbers', 'Joshua', 'Judges', '1 Samuel', '2 Samuel',
      '1 Kings', '2 Kings', 'Ezra', 'Nehemiah', '1 Maccabees', 'Luke', 'Acts'
    ];

    function isNarrative(reading) {
      if (!reading) return false;
      return NARRATIVE_BOOKS.some(b => reading.startsWith(b + ' '));
    }

    // =========================================================================
    // 2. 90-DAY READING PLAN DATA (ASCENSION BIBLE TIMELINE)
    // =========================================================================
    const RAW_90 = [
      "Genesis 1-4","Genesis 5-8","Genesis 9-11",
      "Genesis 12-16","Genesis 17-20","Genesis 21-24","Genesis 25-28","Genesis 29-32","Genesis 33-36","Genesis 37-40","Genesis 41-45","Genesis 46-50",
      "Exodus 1-4","Exodus 5-8","Exodus 9-12","Exodus 13-16","Exodus 17-20","Exodus 21-24","Exodus 25-28","Exodus 29-32","Exodus 33-36","Exodus 37-40",
      "Numbers 1-4","Numbers 5-8","Numbers 9-12","Numbers 13-16","Numbers 17-20","Numbers 21-24","Numbers 25-28","Numbers 29-32","Numbers 33-36",
      "Joshua 1-4","Joshua 5-8","Joshua 9-12","Joshua 13-16","Joshua 17-20","Joshua 21-24","Judges 1-4","Judges 5-8","Judges 9-12","Judges 13-16","Judges 17-21","1 Samuel 1-4","1 Samuel 5-8",
      "1 Samuel 9-12","1 Samuel 13-16","1 Samuel 17-20","1 Samuel 21-24","1 Samuel 25-28","1 Samuel 29-31","2 Samuel 1-4","2 Samuel 5-8","2 Samuel 9-12","2 Samuel 13-16","2 Samuel 17-20","2 Samuel 21-24","1 Kings 1-4","1 Kings 5-8","1 Kings 9-11",
      "1 Kings 12-15","1 Kings 16-19","1 Kings 20-22","2 Kings 1-4","2 Kings 5-8","2 Kings 9-12","2 Kings 13-16",
      "2 Kings 17-20","2 Kings 21-25",
      "Ezra 1-5","Ezra 6-10","Nehemiah 1-4","Nehemiah 5-8","Nehemiah 9-13",
      "1 Maccabees 1-4","1 Maccabees 5-8","1 Maccabees 9-12","1 Maccabees 13-16",
      "Luke 1-4","Luke 5-8","Luke 9-12","Luke 13-16","Luke 17-20","Luke 21-24",
      "Acts 1-4","Acts 5-8","Acts 9-12","Acts 13-16","Acts 17-20","Acts 21-24","Acts 25-28"
    ];

    function getPeriodFor90(d) {
      if (d <= 3) return 'early';
      if (d <= 12) return 'patriarchs';
      if (d <= 22) return 'exodus';
      if (d <= 31) return 'desert';
      if (d <= 44) return 'conquest';
      if (d <= 59) return 'royal';
      if (d <= 66) return 'divided';
      if (d <= 68) return 'exile';
      if (d <= 73) return 'return';
      if (d <= 77) return 'maccabees';
      if (d <= 83) return 'messianic';
      return 'church';
    }

    function getMonthFor90(d) {
      if (d <= 30) return 1;
      if (d <= 59) return 2;
      return 3;
    }

    const DAYS_90 = RAW_90.map((reading, idx) => {
      const dayNum = idx + 1;
      return {
        day: dayNum,
        month: getMonthFor90(dayNum),
        period: getPeriodFor90(dayNum),
        passages: [reading]
      };
    });

    // =========================================================================
    // 3. 365-DAY READING PLAN DATA (BIBLE IN A YEAR)
    // =========================================================================
    function getPeriodFor365(d) {
      if (d <= 5) return 'early';
      if (d <= 26) return 'patriarchs';
      if (d <= 51) return 'exodus';
      if (d <= 80) return 'desert';
      if (d <= 98) return 'conquest';
      if (d <= 105) return 'checkpoint1';
      if (d <= 153) return 'royal';
      if (d <= 161) return 'checkpoint2';
      if (d <= 182) return 'divided';
      if (d <= 257) return 'exile';
      if (d <= 266) return 'checkpoint3';
      if (d <= 281) return 'return';
      if (d <= 312) return 'maccabees';
      if (d <= 321) return 'messianic';
      return 'church';
    }

    const RAW_365 = [
      ["Genesis 1-2","","Psalm 19"],["Genesis 3-4","","Psalm 104"],["Genesis 5-6","","Psalm 136"],["Genesis 7-9","","Psalm 1"],["Genesis 10-11","","Psalm 2"],
      ["Genesis 12-13","Job 1-2","Proverbs 1:1-7"],["Genesis 14-15","Job 3-4","Proverbs 1:8-19"],["Genesis 16-17","Job 5-6","Proverbs 1:20-33"],["Genesis 18-19","Job 7-8","Proverbs 2:1-5"],["Genesis 20-21","Job 9-10","Proverbs 2:6-8"],
      ["Genesis 22-23","Job 11-12","Proverbs 2:9-15"],["Genesis 24","Job 13-14","Proverbs 2:16-19"],["Genesis 25-26","Job 15-16","Proverbs 2:20-22"],["Genesis 27-28","Job 17-18","Proverbs 3:1-4"],["Genesis 29-30","Job 19-20","Proverbs 3:5-8"],
      ["Genesis 31-32","Job 21-22","Proverbs 3:9-12"],["Genesis 33-34","Job 23-24","Proverbs 3:13-18"],["Genesis 35-36","Job 25-26","Proverbs 3:19-24"],["Genesis 37","Job 27-28","Proverbs 3:25-27"],["Genesis 38","Job 29-30","Proverbs 3:28-32"],
      ["Genesis 39-40","Job 31-32","Proverbs 3:33-35"],["Genesis 41-42","Job 33-34","Proverbs 4:1-9"],["Genesis 43-44","Job 35-36","Proverbs 4:10-19"],["Genesis 45-46","Job 37-38","Proverbs 4:20-27"],["Genesis 47-48","Job 39-40","Psalm 16"],
      ["Genesis 49-50","Job 41-42","Psalm 17"],["Exodus 1-2","Leviticus 1","Psalm 44"],["Exodus 3","Leviticus 2-3","Psalm 45"],["Exodus 4-5","Leviticus 4","Psalm 46"],["Exodus 6-7","Leviticus 5","Psalm 47"],
      ["Exodus 8","Leviticus 6","Psalm 48"],["Exodus 9","Leviticus 7","Psalm 49"],["Exodus 10-11","Leviticus 8","Psalm 50"],["Exodus 12","Leviticus 9","Psalm 114"],["Exodus 13-14","Leviticus 10","Psalm 53"],
      ["Exodus 15-16","Leviticus 11","Psalm 71"],["Exodus 17-18","Leviticus 12","Psalm 73"],["Exodus 19-20","Leviticus 13","Psalm 74"],["Exodus 21","Leviticus 14","Psalm 75"],["Exodus 22","Leviticus 15","Psalm 76"],
      ["Exodus 23","Leviticus 16","Psalm 77"],["Exodus 24","Leviticus 17-18","Psalm 78"],["Exodus 25-26","Leviticus 19","Psalm 119:1-56"],["Exodus 27-28","Leviticus 20","Psalm 119:57-120"],["Exodus 29","Leviticus 21","Psalm 119:121-176"],
      ["Exodus 30-31","Leviticus 22","Psalm 115"],["Exodus 32","Leviticus 23","Psalm 79"],["Exodus 33-34","Leviticus 24","Psalm 80"],["Exodus 35-36","Leviticus 25","Psalm 81"],["Exodus 37-38","Leviticus 26","Psalm 82"],
      ["Exodus 39-40","Leviticus 27","Psalm 83"],["Numbers 1","Deuteronomy 1","Psalm 84"],["Numbers 2","Deuteronomy 2","Psalm 85"],["Numbers 3","Deuteronomy 3","Psalm 87"],["Numbers 4","Deuteronomy 4","Psalm 88"],
      ["Numbers 5","Deuteronomy 5","Psalm 90"],["Numbers 6","Deuteronomy 6","Psalm 91"],["Numbers 7","Deuteronomy 7","Psalm 92"],["Numbers 8-9","Deuteronomy 8","Psalm 93"],["Numbers 10","Deuteronomy 9","Psalm 10"],
      ["Numbers 11","Deuteronomy 10","Psalm 33"],["Numbers 12-13","Deuteronomy 11","Psalm 94"],["Numbers 14","Deuteronomy 12","Psalm 95"],["Numbers 15","Deuteronomy 13-14","Psalm 96"],["Numbers 16","Deuteronomy 15-16","Psalm 97"],
      ["Numbers 17","Deuteronomy 17-18","Psalm 98"],["Numbers 18","Deuteronomy 19-20","Psalm 99"],["Numbers 19-20","Deuteronomy 21","Psalm 100"],["Numbers 21","Deuteronomy 22","Psalm 102"],["Numbers 22","Deuteronomy 23","Psalm 105"],
      ["Numbers 23","Deuteronomy 24-25","Psalm 106"],["Numbers 24-25","Deuteronomy 26","Psalm 107"],["Numbers 26","Deuteronomy 27","Psalm 111"],["Numbers 27-28","Deuteronomy 28","Psalm 112"],["Numbers 29-30","Deuteronomy 29","Psalm 113"],
      ["Numbers 31","Deuteronomy 30","Psalm 116"],["Numbers 32","Deuteronomy 31","Psalm 117"],["Numbers 33","Deuteronomy 32","Psalm 118"],["Numbers 34","Deuteronomy 33","Psalm 120"],["Numbers 35-36","Deuteronomy 34","Psalm 121"],
      ["Joshua 1-4","","Psalm 123"],["Joshua 5-7","","Psalm 125"],["Joshua 8-9","","Psalm 126"],["Joshua 10-11","","Psalm 128"],["Joshua 12-14","","Psalm 129"],
      ["Joshua 15-18","","Psalm 130"],["Joshua 19-21","","Psalm 131"],["Joshua 22-24","","Psalm 132"],["Judges 1-3","Ruth 1","Psalm 133"],["Judges 4-5","Ruth 2","Psalm 134"],
      ["Judges 6-8","Ruth 3","Psalm 135"],["Judges 9-11","Ruth 4","Psalm 137"],["Judges 12-15","","Psalm 146"],["Judges 16-18","","Psalm 147"],["Judges 19-21","","Psalm 148"],
      ["1 Samuel 1-2","","Psalm 149"],["1 Samuel 3-5","","Psalm 150"],["1 Samuel 6-8","","Psalm 86"],["John 1-3","","Proverbs 5:1-6"],["John 4-6","","Proverbs 5:7-14"],
      ["John 7-9","","Proverbs 5:15-23"],["John 10-12","","Proverbs 6:1-5"],["John 13-15","","Proverbs 6:6-11"],["John 16-18","","Proverbs 6:12-15"],["John 19-21","","Proverbs 6:16-22"],
      ["1 Samuel 9-10","","Proverbs 6:23-35"],["1 Samuel 11-12","","Psalm 55"],["1 Samuel 13-14","","Psalm 58"],["1 Samuel 15-16","","Psalm 61"],["1 Samuel 17","","Psalm 12"],
      ["1 Samuel 18-19","","Psalm 59"],["1 Samuel 20","","Psalm 142"],["1 Samuel 21-22","","Psalm 52"],["1 Samuel 23","","Psalm 54"],["1 Samuel 24","","Psalm 57"],
      ["1 Samuel 25","","Psalm 63"],["1 Samuel 26","","Psalm 56"],["1 Samuel 27-28","","Psalm 34"],["1 Samuel 29-31","","Psalm 18"],["2 Samuel 1","1 Chronicles 1","Psalm 13"],
      ["2 Samuel 2","1 Chronicles 2","Psalm 24"],["2 Samuel 3","1 Chronicles 3-4","Psalm 25"],["2 Samuel 4","1 Chronicles 5-6","Psalm 26"],["2 Samuel 5","1 Chronicles 7-8","Psalm 27"],["2 Samuel 6-7","1 Chronicles 9","Psalm 89"],
      ["2 Samuel 8","1 Chronicles 10-11","Psalm 60"],["2 Samuel 9","1 Chronicles 12","Psalm 28"],["2 Samuel 10","1 Chronicles 13","Psalm 31"],["2 Samuel 11","1 Chronicles 14-15","Psalm 32"],["2 Samuel 12","1 Chronicles 16","Psalm 51"],
      ["2 Samuel 13","1 Chronicles 17","Psalm 35"],["2 Samuel 14","1 Chronicles 18","Psalm 14"],["2 Samuel 15","1 Chronicles 19-20","Psalm 3"],["2 Samuel 16","1 Chronicles 21","Psalm 15"],["2 Samuel 17","1 Chronicles 22","Psalm 36"],
      ["2 Samuel 18","1 Chronicles 23","Psalm 37"],["2 Samuel 19","1 Chronicles 24","Psalm 38"],["2 Samuel 20","1 Chronicles 25","Psalm 39"],["2 Samuel 21","1 Chronicles 26","Psalm 40"],["2 Samuel 22","1 Chronicles 27","Psalm 41"],
      ["2 Samuel 23","1 Chronicles 28","Psalm 42"],["2 Samuel 24","1 Chronicles 29","Psalm 30"],["1 Kings 1","2 Chronicles 1","Psalm 43"],["1 Kings 2","2 Chronicles 2-3","Psalm 62"],["1 Kings 3","2 Chronicles 4-5","Psalm 64"],
      ["1 Kings 4","2 Chronicles 6","Psalm 65"],["1 Kings 5","2 Chronicles 7-8","Psalm 66"],["1 Kings 6","2 Chronicles 9","Psalm 4"],["1 Kings 7","Ecclesiastes 1-2","Psalm 5"],["1 Kings 8","Ecclesiastes 3-5","Psalm 6"],
      ["1 Kings 9","Ecclesiastes 6-7","Psalm 7"],["1 Kings 10","Ecclesiastes 8-9","Psalm 8"],["1 Kings 11","Ecclesiastes 10-12","Psalm 9"],["Mark 1-2","","Psalm 11"],["Mark 3-4","","Psalm 20"],
      ["Mark 5-6","","Psalm 21"],["Mark 7-8","","Psalm 23"],["Mark 9-10","","Psalm 29"],["Mark 11-12","","Psalm 67"],["Mark 13-14","","Psalm 68"],
      ["Mark 15-16","","Psalm 22"],["1 Kings 12","2 Chronicles 10-11","Song of Solomon 1"],["1 Kings 13","2 Chronicles 12-13","Song of Solomon 2"],["1 Kings 14","2 Chronicles 14-15","Song of Solomon 3"],["1 Kings 15-16","2 Chronicles 16-17","Song of Solomon 4"],
      ["1 Kings 17-18","2 Chronicles 18-19","Song of Solomon 5"],["1 Kings 19-20","2 Chronicles 20","Song of Solomon 6"],["1 Kings 21","2 Chronicles 21-22","Song of Solomon 7"],["1 Kings 22","2 Chronicles 23","Song of Solomon 8"],["2 Kings 1","2 Chronicles 24","Psalm 69"],
      ["2 Kings 2","2 Chronicles 25","Psalm 70"],["2 Kings 3","2 Chronicles 26-27","Psalm 72"],["2 Kings 4","2 Chronicles 28","Psalm 127"],["2 Kings 5","Hosea 1-3","Psalm 101"],["2 Kings 6-7","Hosea 4-7","Psalm 103"],
      ["2 Kings 8","Hosea 8-10","Psalm 108"],["2 Kings 9","Hosea 11-14","Psalm 109"],["2 Kings 10","Amos 1-3","Psalm 110"],["2 Kings 11-12","Amos 4-6","Psalm 122"],["2 Kings 13-14","Amos 7-9","Psalm 124"],
      ["2 Kings 15","Jonah 1-4","Psalm 138"],["2 Kings 16","Micah 1-4","Psalm 139"],["2 Kings 17","Micah 5-7","Psalm 140"],["2 Kings 18","2 Chronicles 29","Psalm 141"],["2 Kings 19","2 Chronicles 30","Psalm 143"],
      ["2 Kings 20","2 Chronicles 31","Psalm 144"],["2 Kings 21","2 Chronicles 32","Psalm 145"],["2 Kings 22","2 Chronicles 33","Proverbs 7"],["2 Kings 23","2 Chronicles 34","Proverbs 8:1-21"],["2 Kings 24","2 Chronicles 35","Proverbs 8:22-36"],
      ["2 Kings 25","2 Chronicles 36","Proverbs 9:1-6"],["Isaiah 1-2","Tobit 1-2","Proverbs 9:7-12"],["Isaiah 3-4","Tobit 3-4","Proverbs 9:13-18"],["Isaiah 5-6","Tobit 5-6","Proverbs 10:1-4"],["Isaiah 7-8","Tobit 7-9","Proverbs 10:5-8"],
      ["Isaiah 9-10","Tobit 10-12","Proverbs 10:9-12"],["Isaiah 11-13","Tobit 13-14","Proverbs 10:13-16"],["Isaiah 14-15","Joel 1-2","Proverbs 10:17-20"],["Isaiah 16-17","Joel 3","Proverbs 10:21-24"],["Isaiah 18-20","Nahum 1-2","Proverbs 10:25-28"],
      ["Isaiah 21-22","Nahum 3","Proverbs 10:29-32"],["Isaiah 23-24","Habakkuk 1-2","Proverbs 11:1-4"],["Isaiah 25-27","Habakkuk 3","Proverbs 11:5-8"],["Isaiah 28-29","Zephaniah 1-2","Proverbs 11:9-12"],["Isaiah 30-31","Zephaniah 3","Proverbs 11:13-16"],
      ["Isaiah 32-33","Baruch 1-2","Proverbs 11:17-20"],["Isaiah 34-36","Baruch 3-4","Proverbs 11:21-24"],["Isaiah 37-38","Baruch 5-6","Proverbs 11:25-28"],["Isaiah 39-40","Ezekiel 1","Proverbs 11:29-31"],["Isaiah 41-42","Ezekiel 2-3","Proverbs 12:1-4"],
      ["Isaiah 43-44","Ezekiel 4-5","Proverbs 12:5-8"],["Isaiah 45-46","Ezekiel 6-7","Proverbs 12:9-12"],["Isaiah 47-48","Ezekiel 8-9","Proverbs 12:13-16"],["Isaiah 49-50","Ezekiel 10-11","Proverbs 12:17-20"],["Isaiah 51-52","Ezekiel 12-13","Proverbs 12:21-24"],
      ["Isaiah 53-54","Ezekiel 14-15","Proverbs 12:25-28"],["Isaiah 55-56","Ezekiel 16","Proverbs 13:1-4"],["Isaiah 57-58","Ezekiel 17-18","Proverbs 13:5-8"],["Isaiah 59-60","Ezekiel 19","Proverbs 13:9-12"],["Isaiah 61-62","Ezekiel 20","Proverbs 13:13-16"],
      ["Isaiah 63-64","Ezekiel 21-22","Proverbs 13:17-20"],["Isaiah 65","Ezekiel 23-24","Proverbs 13:21-25"],["Isaiah 66","Ezekiel 25-26","Proverbs 14:1-4"],["Jeremiah 1","Ezekiel 27","Proverbs 14:5-8"],["Jeremiah 2","Ezekiel 28","Proverbs 14:9-12"],
      ["Jeremiah 3","Ezekiel 29-30","Proverbs 14:13-16"],["Jeremiah 4","Ezekiel 31-32","Proverbs 14:17-20"],["Jeremiah 5","Ezekiel 33","Proverbs 14:21-24"],["Jeremiah 6","Ezekiel 34-35","Proverbs 14:25-28"],["Jeremiah 7","Ezekiel 36","Proverbs 14:29-32"],
      ["Jeremiah 8","Ezekiel 37-38","Proverbs 14:33-35"],["Jeremiah 9","Ezekiel 39","Proverbs 15:1-4"],["Jeremiah 10-11","Ezekiel 40","Proverbs 15:5-8"],["Jeremiah 12-13","Ezekiel 41-42","Proverbs 15:9-12"],["Jeremiah 14-15","Ezekiel 43-44","Proverbs 15:13-16"],
      ["Jeremiah 16-17","Ezekiel 45-46","Proverbs 15:17-20"],["Jeremiah 18-19","Ezekiel 47-48","Proverbs 15:21-24"],["Jeremiah 20-21","Daniel 1-2","Proverbs 15:25-28"],["Jeremiah 22","Daniel 3","Proverbs 15:29-33"],["Jeremiah 23","Daniel 4-5","Proverbs 16:1-4"],
      ["Jeremiah 24-25","Daniel 6-7","Proverbs 16:5-8"],["Jeremiah 26-27","Daniel 8-9","Proverbs 16:9-12"],["Jeremiah 28-29","Daniel 10-11","Proverbs 16:13-16"],["Jeremiah 30","Daniel 12-13","Proverbs 16:17-20"],["Jeremiah 31","Daniel 14","Proverbs 16:21-24"],
      ["Jeremiah 32","Judith 1-2","Proverbs 16:25-28"],["Jeremiah 33-34","Judith 3-5","Proverbs 16:29-33"],["Jeremiah 35-36","Judith 6-7","Proverbs 17:1-4"],["Jeremiah 37-38","Judith 8-9","Proverbs 17:5-8"],["Jeremiah 39-40","Judith 10-11","Proverbs 17:9-12"],
      ["Jeremiah 41-42","Judith 12-14","Proverbs 17:13-16"],["Jeremiah 43-44","Judith 15-16","Proverbs 17:17-20"],["Jeremiah 45-46","Lamentations 1","Proverbs 17:21-28"],["Jeremiah 47-48","Lamentations 2","Proverbs 18:1-4"],["Jeremiah 49-50","Lamentations 3","Proverbs 18:5-8"],
      ["Jeremiah 51","Lamentations 4-5","Proverbs 18:9-12"],["Jeremiah 52","Obadiah","Proverbs 18:13-16"],["Matthew 1-4","","Proverbs 18:17-20"],["Matthew 5-7","","Proverbs 18:21-24"],["Matthew 8-10","","Proverbs 19:1-4"],
      ["Matthew 11-13","","Proverbs 19:5-8"],["Matthew 14-17","","Proverbs 19:9-12"],["Matthew 18-21","","Proverbs 19:13-16"],["Matthew 22-24","","Proverbs 19:17-20"],["Matthew 25-26","","Proverbs 19:21-24"],
      ["Matthew 27-28","","Proverbs 19:25-29"],["Ezra 1-2","Haggai 1-2","Proverbs 20:1-3"],["Ezra 3-4","Zechariah 1-3","Proverbs 20:4-7"],["Ezra 5-6","Zechariah 4-6","Proverbs 20:8-11"],["Ezra 7-8","Zechariah 7-8","Proverbs 20:12-15"],
      ["Ezra 9-10","Zechariah 9-11","Proverbs 20:16-19"],["Nehemiah 1-2","Zechariah 12-13","Proverbs 20:20-22"],["Nehemiah 3","Zechariah 14","Proverbs 20:23-26"],["Nehemiah 4-5","Esther 11-12","Proverbs 20:27-30"],["Nehemiah 6-7","Esther 1-2","Proverbs 21:1-4"],
      ["Nehemiah 8","Esther 3, 13","Proverbs 21:5-8"],["Nehemiah 9","Esther 4, 14","Proverbs 21:9-12"],["Nehemiah 10","Esther 15, 6-7","Proverbs 21:13-16"],["Nehemiah 11","Esther 8, 16","Proverbs 21:17-20"],["Nehemiah 12","Esther 9-11","Proverbs 21:21-24"],
      ["Nehemiah 13","Malachi 1-4","Proverbs 21:25-28"],["1 Maccabees 1","Sirach 1-3","Proverbs 21:29-31"],["1 Maccabees 2","Sirach 4-6","Proverbs 22:1-4"],["1 Maccabees 3","Sirach 7-9","Proverbs 22:5-8"],["1 Maccabees 4","Sirach 10-12","Proverbs 22:9-12"],
      ["1 Maccabees 5","Sirach 13-15","Proverbs 22:13-16"],["1 Maccabees 6","Sirach 16-18","Proverbs 22:17-21"],["1 Maccabees 7","Sirach 19-21","Proverbs 22:22-25"],["1 Maccabees 8","Sirach 22-23","Proverbs 22:26-29"],["1 Maccabees 9","Sirach 24-25","Proverbs 23:1-4"],
      ["1 Maccabees 10","Sirach 26-27","Proverbs 23:5-8"],["1 Maccabees 11","Sirach 28-29","Proverbs 23:9-12"],["1 Maccabees 12","Sirach 30-31","Proverbs 23:13-16"],["1 Maccabees 13","Sirach 32-33","Proverbs 23:17-21"],["1 Maccabees 14","Sirach 34-35","Proverbs 23:22-25"],
      ["1 Maccabees 15","Sirach 36-37","Proverbs 23:26-28"],["1 Maccabees 16","Sirach 38-39","Proverbs 23:29-35"],["2 Maccabees 1","Sirach 40-41","Proverbs 24:1-7"],["2 Maccabees 2","Sirach 42-44","Proverbs 24:8-9"],["2 Maccabees 3","Sirach 45-46","Proverbs 24:10-12"],
      ["2 Maccabees 4","Sirach 47-49","Proverbs 24:13-16"],["2 Maccabees 5","Sirach 50-51","Proverbs 24:17-20"],["2 Maccabees 6","Wisdom 1-2","Proverbs 24:21-26"],["2 Maccabees 7","Wisdom 3-4","Proverbs 24:27-29"],["2 Maccabees 8","Wisdom 5-6","Proverbs 24:30-34"],
      ["2 Maccabees 9","Wisdom 7-8","Proverbs 25:1-3"],["2 Maccabees 10","Wisdom 9-10","Proverbs 25:4-7"],["2 Maccabees 11","Wisdom 11-12","Proverbs 25:8-10"],["2 Maccabees 12","Wisdom 13-14","Proverbs 25:11-14"],["2 Maccabees 13","Wisdom 15-16","Proverbs 25:15-17"],
      ["2 Maccabees 14","Wisdom 17-18","Proverbs 25:18-20"],["2 Maccabees 15","Wisdom 19","Proverbs 25:21-23"],["Luke 1-2","","Proverbs 25:24-26"],["Luke 3-5","","Proverbs 25:27-28"],["Luke 6-8","","Proverbs 26:1-3"],
      ["Luke 9-10","","Proverbs 26:4-6"],["Luke 11-12","","Proverbs 26:7-9"],["Luke 13-16","","Proverbs 26:10-12"],["Luke 17-19","","Proverbs 26:13-16"],["Luke 20-22:38","","Proverbs 26:17-19"],
      ["Luke 22:39-24:50","","Proverbs 26:20-23"],["Acts 1","Romans 1","Proverbs 26:24-26"],["Acts 2","Romans 2-3","Proverbs 26:27-28"],["Acts 3","Romans 4-5","Proverbs 27:1-3"],["Acts 4","Romans 6-7","Proverbs 27:4-6"],
      ["Acts 5","Romans 8","Proverbs 27:7-9"],["Acts 6","Romans 9-10","Proverbs 27:10-12"],["Acts 7","Romans 11-12","Proverbs 27:13-14"],["Acts 8","Romans 13-14","Proverbs 27:15-17"],["Acts 9","Romans 15-16","Proverbs 27:18-20"],
      ["Acts 10","1 Corinthians 1-2","Proverbs 27:21-22"],["Acts 11","1 Corinthians 3-4","Proverbs 27:23-27"],["Acts 12","1 Corinthians 5-6","Proverbs 28:1-3"],["Acts 13","1 Corinthians 7-8","Proverbs 28:4-6"],["Acts 14","1 Corinthians 9-10","Proverbs 28:7-9"],
      ["Acts 15","1 Corinthians 11-12","Proverbs 28:10-12"],["Acts 16","1 Corinthians 13-14","Proverbs 28:13-15"],["Acts 17","1 Corinthians 15","Proverbs 28:16-18"],["Acts 18","1 Corinthians 16","Proverbs 28:19-21"],["Acts 19","2 Corinthians 1-2","Proverbs 28:22-24"],
      ["Acts 20","2 Corinthians 3-5","Proverbs 28:25-28"],["Acts 21","2 Corinthians 6-8","Proverbs 29:1-4"],["Acts 22","2 Corinthians 9-11","Proverbs 29:5-7"],["Acts 23","2 Corinthians 12-13","Proverbs 29:8-11"],["Acts 24","Galatians 1-3","Proverbs 29:12-14"],
      ["Acts 25","Galatians 4-6","Proverbs 29:15-17"],["Acts 26","Ephesians 1-3","Proverbs 29:18-21"],["Acts 27","Ephesians 4-6","Proverbs 29:22-24"],["Acts 28","Philippians 1-2","Proverbs 29:25-27"],["James 1-2","Philippians 3-4","Proverbs 30:1-6"],
      ["James 3-5","Colossians 1-2","Proverbs 30:7-9"],["1 Peter 1-2","Colossians 3-4","Proverbs 30:10-14"],["1 Peter 3-5","1 Thessalonians 1-3","Proverbs 30:15-16"],["2 Peter 1-3","1 Thessalonians 4-5","Proverbs 30:17-19"],["1 John 1-3","2 Thessalonians 1-3","Proverbs 30:20-23"],
      ["1 John 4-5","1 Timothy 1-3","Proverbs 30:24-28"],["2 John, 3 John","1 Timothy 4-6","Proverbs 30:29-33"],["Jude","2 Timothy 1-2","Proverbs 31:1-7"],["Revelation 1-3","2 Timothy 3-4","Proverbs 31:8-9"],["Revelation 4-7","Titus 1-3","Proverbs 31:10-15"],
      ["Revelation 8-11","Philemon","Proverbs 31:16-18"],["Revelation 12-14","Hebrews 1-4","Proverbs 31:19-22"],["Revelation 15-17","Hebrews 5-8","Proverbs 31:23-25"],["Revelation 18-20","Hebrews 9-10","Proverbs 31:26-29"],["Revelation 21-22","Hebrews 11-13","Proverbs 31:30-31"]
    ];

    const DAYS_365 = RAW_365.map((r, idx) => {
      const dayNum = idx + 1;
      const passages = r.filter(Boolean);
      return {
        day: dayNum,
        period: getPeriodFor365(dayNum),
        passages
      };
    });

    // =========================================================================
    // 4. APPLICATION STATE & STORAGE
    // =========================================================================
    const KEY_90 = 'bible_timeline_90_v1';
    const KEY_365 = 'bible_in_a_year_365_v1';
    const KEY_PREF = 'bible_tracker_active_plan';

    let state = {
      plan: '365', // '90' or '365'
      data: {
        '90': { checked: {}, notes: {} },
        '365': { checked: {}, notes: {} }
      },
      activePeriod: 'all',
      activeMonth: 'all',
      view: 'list',
      modalDay: null
    };

    function loadState() {
      try {
        const savedPlan = localStorage.getItem(KEY_PREF);
        if (savedPlan === '90' || savedPlan === '365') state.plan = savedPlan;

        const saved90 = localStorage.getItem(KEY_90);
        if (saved90) {
          const parsed90 = JSON.parse(saved90);
          state.data['90'].checked = parsed90.checked || {};
          state.data['90'].notes = parsed90.notes || {};
        }

        const saved365 = localStorage.getItem(KEY_365);
        if (saved365) {
          const parsed365 = JSON.parse(saved365);
          state.data['365'].checked = parsed365.checked || {};
          state.data['365'].notes = parsed365.notes || {};
        }
      } catch (e) { console.error(e); }
    }

    function saveState() {
      try {
        localStorage.setItem(KEY_PREF, state.plan);
        localStorage.setItem(KEY_90, JSON.stringify(state.data['90']));
        localStorage.setItem(KEY_365, JSON.stringify(state.data['365']));
      } catch (e) { console.error(e); }
    }

    function getActiveDays() {
      return state.plan === '90' ? DAYS_90 : DAYS_365;
    }

    function getActiveStore() {
      return state.data[state.plan];
    }

    function getActivePeriods() {
      return ALL_PERIODS.filter(p => state.plan === '90' ? p.in90 : p.in365);
    }

    // =========================================================================
    // 5. ACTIONS & HELPERS
    // =========================================================================
    function switchPlan(planId) {
      state.plan = planId;
      state.activePeriod = 'all';
      state.activeMonth = 'all';
      document.getElementById('status-filter').value = 'all';
      document.getElementById('search-input').value = '';
      saveState();
      render();
    }

    function isDayComplete(dayObj) {
      const store = getActiveStore();
      const val = store.checked[dayObj.day];
      if (typeof val === 'boolean') return val; // backward compatibility
      const arr = Array.isArray(val) ? val : [];
      return dayObj.passages.every((_, i) => !!arr[i]);
    }

    function isDayPartial(dayObj) {
      const store = getActiveStore();
      const val = store.checked[dayObj.day];
      if (typeof val === 'boolean') return false;
      const arr = Array.isArray(val) ? val : [];
      const count = dayObj.passages.filter((_, i) => !!arr[i]).length;
      return count > 0 && count < dayObj.passages.length;
    }

    function isPassageDone(dayObj, pIdx) {
      const store = getActiveStore();
      const val = store.checked[dayObj.day];
      if (typeof val === 'boolean') return val;
      const arr = Array.isArray(val) ? val : [];
      return !!arr[pIdx];
    }

    function togglePassage(dayNum, pIdx) {
      const days = getActiveDays();
      const store = getActiveStore();
      const d = days[dayNum - 1];
      const current = store.checked[dayNum];

      if (typeof current === 'boolean') {
        store.checked[dayNum] = d.passages.map(() => current);
      } else if (!Array.isArray(current)) {
        store.checked[dayNum] = d.passages.map(() => false);
      }

      store.checked[dayNum][pIdx] = !store.checked[dayNum][pIdx];
      saveState();
      render();
    }

    function toggleFullDay(dayNum) {
      const days = getActiveDays();
      const store = getActiveStore();
      const d = days[dayNum - 1];
      const complete = isDayComplete(d);
      store.checked[dayNum] = d.passages.map(() => !complete);
      saveState();
      render();
    }

    function setPeriodFilter(periodId) {
      state.activePeriod = periodId;
      render();
    }

    function setMonthFilter(monthVal) {
      state.activeMonth = monthVal;
      render();
    }

    function setView(v) {
      state.view = v;
      document.getElementById('view-list-btn').className = v === 'list'
        ? 'px-2.5 py-1 text-xs font-semibold rounded-md bg-stone-900 text-white'
        : 'px-2.5 py-1 text-xs font-semibold rounded-md text-stone-600 hover:text-stone-900';
      document.getElementById('view-grid-btn').className = v === 'grid'
        ? 'px-2.5 py-1 text-xs font-semibold rounded-md bg-stone-900 text-white'
        : 'px-2.5 py-1 text-xs font-semibold rounded-md text-stone-600 hover:text-stone-900';
      render();
    }

    // =========================================================================
    // 6. UI RENDERING
    // =========================================================================
    function updateHeaderAndPlanUI() {
      const is90 = state.plan === '90';
      document.getElementById('header-title').textContent = is90 ? 'The Bible Timeline' : 'The Bible in a Year';
      document.getElementById('header-subtitle').textContent = is90
        ? '90-Day Narrative Books Reading Plan'
        : '365-Day Complete Catholic Bible Reading Plan';

      document.getElementById('plan-btn-90').className = is90
        ? 'px-3 py-1.5 rounded-lg text-xs font-bold transition bg-amber-600 text-white shadow'
        : 'px-3 py-1.5 rounded-lg text-xs font-bold transition text-stone-400 hover:text-stone-200';
      document.getElementById('plan-btn-365').className = !is90
        ? 'px-3 py-1.5 rounded-lg text-xs font-bold transition bg-amber-600 text-white shadow'
        : 'px-3 py-1.5 rounded-lg text-xs font-bold transition text-stone-400 hover:text-stone-200';

      document.getElementById('status-all-label').textContent = is90 ? 'All Days (90)' : 'All Days (365)';
      document.getElementById('status-partial-opt').style.display = is90 ? 'none' : 'block';
      document.getElementById('view-grid-btn').textContent = is90 ? '90 Grid' : '365 Grid';
    }

    function renderMonthPills() {
      const row = document.getElementById('month-filter-row');
      if (state.plan !== '90') {
        row.classList.add('hidden');
        row.classList.remove('flex');
        return;
      }
      row.classList.remove('hidden');
      row.classList.add('flex');

      const months = [
        { id: 'all', label: 'All 3 Months' },
        { id: 1, label: 'Month 1 (Days 1–30)' },
        { id: 2, label: 'Month 2 (Days 31–59)' },
        { id: 3, label: 'Month 3 (Days 60–90)' }
      ];

      row.innerHTML = months.map(m => {
        const active = String(state.activeMonth) === String(m.id);
        return `<button onclick="setMonthFilter('${m.id}')"
          class="px-3 py-1 rounded-lg text-xs font-bold shrink-0 transition ${
            active ? 'bg-amber-600 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }">${m.label}</button>`;
      }).join('');
    }

    function renderEraPills() {
      const container = document.getElementById('era-pills');
      const periods = getActivePeriods();

      let html = `<button onclick="setPeriodFilter('all')" class="px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition ${
        state.activePeriod === 'all' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
      }">All Eras</button>`;

      periods.forEach(p => {
        const active = state.activePeriod === p.id;
        html += `<button onclick="setPeriodFilter('${p.id}')" style="${active ? `background:${p.color};color:#fff` : ''}"
          class="px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition flex items-center gap-1.5 ${
            active ? '' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }">
          <span class="w-2 h-2 rounded-full" style="background:${ active ? '#fff' : p.color }"></span>
          ${p.name}
        </button>`;
      });
      container.innerHTML = html;
    }

    function updateSpotlightAndStats() {
      const days = getActiveDays();
      const total = days.length;
      const completedCount = days.filter(isDayComplete).length;
      const pct = ((completedCount / total) * 100).toFixed(1);

      document.getElementById('stat-days').textContent = completedCount;
      document.getElementById('stat-total').textContent = total;
      document.getElementById('stat-pct').textContent = `${pct}% Complete`;
      document.getElementById('stat-bar').style.width = `${pct}%`;

      const nextDay = days.find(d => !isDayComplete(d)) || days[total - 1];
      const pInfo = ALL_PERIODS.find(p => p.id === nextDay.period);
      const spotPeriod = document.getElementById('spot-period');
      spotPeriod.textContent = pInfo.name;
      spotPeriod.style.backgroundColor = pInfo.color;

      const spotMonth = document.getElementById('spot-month');
      if (state.plan === '90') {
        spotMonth.textContent = `Month ${nextDay.month}`;
        spotMonth.classList.remove('hidden');
      } else {
        spotMonth.classList.add('hidden');
      }

      document.getElementById('spot-title').textContent = `Day ${nextDay.day}`;
      document.getElementById('spot-readings').innerHTML = nextDay.passages.map((pas, idx) => {
        const done = isPassageDone(nextDay, idx);
        const bold = isNarrative(pas) ? 'font-bold' : 'font-medium';
        return `<button onclick="togglePassage(${nextDay.day}, ${idx})"
          class="px-2.5 py-1 rounded-lg text-xs border transition flex items-center gap-1.5 ${bold} ${
            done ? 'bg-emerald-50 border-emerald-300 text-emerald-800 line-through' : 'bg-stone-50 border-stone-200 text-stone-800 hover:border-amber-400'
          }">
          <span>${done ? '✓' : '○'}</span> ${pas}
        </button>`;
      }).join('');

      document.getElementById('spot-complete-btn').onclick = () => toggleFullDay(nextDay.day);
      document.getElementById('spot-jump-btn').onclick = () => {
        state.activePeriod = 'all';
        state.activeMonth = 'all';
        document.getElementById('status-filter').value = 'all';
        document.getElementById('search-input').value = '';
        render();
        const el = document.getElementById(`day-card-${nextDay.day}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      };
    }

    function render() {
      updateHeaderAndPlanUI();
      renderMonthPills();
      renderEraPills();
      updateSpotlightAndStats();

      const days = getActiveDays();
      const store = getActiveStore();
      const periods = getActivePeriods();
      const query = document.getElementById('search-input').value.trim().toLowerCase();
      const statusFilter = document.getElementById('status-filter').value;
      const content = document.getElementById('content-area');

      const filtered = days.filter(d => {
        if (state.plan === '90' && state.activeMonth !== 'all' && String(d.month) !== String(state.activeMonth)) return false;
        if (state.activePeriod !== 'all' && d.period !== state.activePeriod) return false;
        const comp = isDayComplete(d);
        const part = isDayPartial(d);
        if (statusFilter === 'unread' && (comp || part)) return false;
        if (statusFilter === 'partial' && !part) return false;
        if (statusFilter === 'completed' && !comp) return false;
        if (query) {
          const matchDay = `day ${d.day}` === query || `${d.day}` === query;
          const matchPassage = d.passages.some(p => p.toLowerCase().includes(query));
          if (!matchDay && !matchPassage) return false;
        }
        return true;
      });

      if (filtered.length === 0) {
        content.innerHTML = `<div class="bg-white rounded-xl p-8 text-center text-stone-500 border border-stone-200">No readings match your current filters.</div>`;
        return;
      }

      if (state.view === 'grid') {
        content.innerHTML = `<div class="bg-white rounded-xl p-4 border border-stone-200 grid grid-cols-5 sm:grid-cols-10 gap-2">
          ${filtered.map(d => {
            const pInfo = ALL_PERIODS.find(p => p.id === d.period);
            const comp = isDayComplete(d);
            const part = isDayPartial(d);
            return `<button onclick="toggleFullDay(${d.day})" title="Day ${d.day}:${d.passages.join(' | ')}"
              class="p-2 rounded-lg border text-center transition flex flex-col items-center justify-center ${
                comp ? 'bg-emerald-600 text-white border-emerald-700 font-bold' :
                part ? 'bg-amber-50 text-amber-900 border-amber-400 font-semibold' :
                'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400'
              }">
              <span class="w-2 h-2 rounded-full mb-1" style="background:${comp ? '#fff' : pInfo.color}"></span>
              <span class="text-xs">${d.day}</span>
            </button>`;
          }).join('')}
        </div>`;
        return;
      }

      // Group by Period for Timeline View
      let html = '';
      periods.forEach(p => {
        const group = filtered.filter(d => d.period === p.id);
        if (group.length === 0) return;
        const doneInPeriod = group.filter(isDayComplete).length;

        html += `
        <section class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
          <div class="px-4 py-3 text-white flex items-center justify-between" style="background:${p.color}">
            <h3 class="font-serif-title font-bold text-sm sm:text-base tracking-wide">${p.name}</h3>
            <span class="text-xs font-semibold bg-black/25 px-2.5 py-0.5 rounded-full">${doneInPeriod} / ${group.length} Completed</span>
          </div>
          <div class="divide-y divide-stone-100">
            ${group.map(d => {
              const comp = isDayComplete(d);
              const hasNote = !!(store.notes[d.day] && store.notes[d.day].trim());
              return `
              <div id="day-card-${d.day}" class="p-3.5 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition ${comp ? 'bg-stone-50/70' : 'hover:bg-stone-50/40'}">
                <div class="flex items-start sm:items-center gap-3">
                  <button onclick="toggleFullDay(${d.day})" title="Mark entire day complete"
                    class="mt-0.5 sm:mt-0 w-6 h-6 rounded-md border flex items-center justify-center text-xs font-bold transition shrink-0 ${
                      comp ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-300 text-transparent hover:border-amber-500'
                    }">✓</button>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-bold ${comp ? 'text-stone-400 line-through' : 'text-stone-900'}">Day ${d.day}</span>${d.month ? `<span class="text-[10px] px-1.5 py-0.5 bg-stone-100 text-stone-600 rounded font-medium">Month ${d.month}</span>` : ''}
                      ${hasNote ? `<span class="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded font-medium">Note saved</span>` : ''}
                    </div>
                    <div class="flex flex-wrap gap-1.5 mt-1.5">
                      ${d.passages.map((pas, idx) => {
                        const pDone = isPassageDone(d, idx);
                        const narrativeClass = isNarrative(pas) ? 'font-bold' : 'font-normal';
                        return `<button onclick="togglePassage(${d.day}, ${idx})"
                          class="px-2.5 py-1 rounded text-xs border transition flex items-center gap-1 ${narrativeClass} ${
                            pDone ? 'bg-emerald-50 border-emerald-200 text-emerald-700 line-through' : 'bg-white border-stone-200 text-stone-800 hover:border-amber-500'
                          }">
                          <span class="text-[10px]">${pDone ? '✓' : '○'}</span> ${pas}
                        </button>`;
                      }).join('')}
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-end gap-2 shrink-0">
                  <button onclick="openNoteModal(${d.day})" class="px-2.5 py-1 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md transition">
                    ✎ Reflection
                  </button>
                </div>
              </div>`;
            }).join('')}
          </div>
        </section>`;
      });

      content.innerHTML = html;
    }

    // =========================================================================
    // 7. REFLECTION MODAL & BACKUP / RESTORE
    // =========================================================================
    function openNoteModal(dayNum) {
      state.modalDay = dayNum;
      const days = getActiveDays();
      const store = getActiveStore();
      const d = days[dayNum - 1];
      document.getElementById('modal-plan-badge').textContent = state.plan === '90'
        ? '90-Day Plan • Scripture Reflection'
        : '365-Day Plan • Scripture Reflection';
      document.getElementById('modal-day-title').textContent = `Day ${d.day}`;
      document.getElementById('modal-readings-summary').textContent = d.passages.join('  •  ');
      document.getElementById('modal-note-input').value = store.notes[dayNum] || '';
      const modal = document.getElementById('note-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeNoteModal() {
      const modal = document.getElementById('note-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      state.modalDay = null;
    }

    function saveNoteFromModal() {
      if (!state.modalDay) return;
      const store = getActiveStore();
      store.notes[state.modalDay] = document.getElementById('modal-note-input').value;
      saveState();
      closeNoteModal();
      render();
    }

    function exportData() {
      const payload = {
        version: 2,
        plan90: state.data['90'],
        plan365: state.data['365']
      };
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
      const a = document.createElement('a');
      a.setAttribute('href', dataStr);
      a.setAttribute('download', 'bible_timeline_combined_backup.json');
      document.body.appendChild(a);
      a.click();
      a.remove();
    }

    function importData(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        try {
          const parsed = JSON.parse(e.target.result);
          if (parsed.plan90 || parsed.plan365) {
            if (parsed.plan90) state.data['90'] = parsed.plan90;
            if (parsed.plan365) state.data['365'] = parsed.plan365;
          } else if (parsed.checked || parsed.notes) {
            // Single-plan backup imported into currently active plan
            const store = getActiveStore();
            if (parsed.checked) store.checked = parsed.checked;
            if (parsed.notes) store.notes = parsed.notes;
          }
          saveState();
          render();
          alert('Progress restored successfully!');
        } catch (err) {
          alert('Invalid backup file.');
        }
      };
      reader.readAsText(file);
    }

    // =========================================================================
    // 8. CONSOLE HELPER: CLEAR APP DATA (FOR DEV USE ONLY)
    // =========================================================================
    function clearAppData() {
      localStorage.removeItem(KEY_90);
      localStorage.removeItem(KEY_365);
      localStorage.removeItem(KEY_PREF);
      state.data = {
        '90': { checked: {}, notes: {} },
        '365': { checked: {}, notes: {} }
      };
      state.plan = '365';
      render();
      console.log('Application data cleared from localStorage.');
    }

    loadState();
    render();
