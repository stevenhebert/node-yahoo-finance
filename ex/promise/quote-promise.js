  var util = require('util');

  require('colors');

  var _ = require('lodash');
  var yahooFinance = require('../..');

  var SYMBOLS = [
    'MMM',
    'ABT',
    'ABBV',
    'ACN'
  ];

  var SYMBOLS = [
    'MMM',
    'ABT',
    'ABBV',
    'ACN',
    'ATVI',
    'AYI',
    'AAP',
    'AES',
    'AET',
    'AMG',
    'AFL',
    'A',
    'APD',
    'ALK',
    'ALB',
    'ARE',
    'ALGN',
    'ALLE',
    'ADS',
    'LNT',
    'ALL',
    'MO',
    'AEE',
    'AAL',
    'AEP',
    'AXP',
    'AIG',
    'AMT',
    'AWK',
    'AMP',
    'ABC',
    'AME',
    'AMGN',
    'APH',
    'APC',
    'ADI',
    'ANSS',
    'ANTM',
    'AOS',
    'AON',
    'APA',
    'AIV',
    'AAPL',
    'AMAT',
    'ADM',
    'AJG',
    'AIZ',
    'T',
    'ADP',
    'AVB',
    'AVY',
//  'BHI',
    'BLL',
    'BAC',
    'BCR',
    'BAX',
    'BBT',
    'BDX',
    'BBY',
    'BLK',
    'HRB',
    'BA',
    'BWA',
    'BXP',
    'BHF',
    'BMY',
    'AVGO',
    'BF.B',
    'CHRW',
    'CA',
    'COG',
    'CDNS',
    'CPB',
    'COF',
    'CAH',
    'CCL',
    'CAT',
    'CBOE',
    'CBS',
    'CNP',
    'CTL',
    'CF',
    'SCHW',
    'CVX',
    'CB',
    'CHD',
    'CI',
    'XEC',
    'CINF',
    'CTAS',
    'CSCO',
    'C',
    'CFG',
    'CME',
    'CMS',
    'COH',
    'KO',
    'CL',
    'CMCSA',
    'CMA',
    'CAG',
    'COP',
    'ED',
    'STZ',
    'GLW',
    'COST',
    'COTY',
    'CCI',
    'CSRA',
    'CSX',
    'CMI',
    'CVS',
    'DHI',
    'DHR',
    'DRI',
    'DE',
    'DLPH',
    'DAL',
    'XRAY',
    'DVN',
    'DLR',
    'DFS',
    'DG',
    'D',
    'DOV',
    'DOW',
    'DPS',
    'DTE',
    'DUK',
    'DRE',
    'EMN',
    'ETN',
    'ECL',
    'EIX',
    'EMR',
    'ETR',
    'EOG',
    'EQT',
    'EFX',
    'EQIX',
    'EQR',
    'ESS',
    'EL',
    'RE',
    'ES',
    'EXC',
    'EXPE',
    'EXPD',
    'EXR',
    'XOM',
    'FAST',
    'FRT',
    'FDX',
    'FIS',
    'FITB',
    'FE',
    'FLIR',
    'FLS',
    'FLR',
    'FMC',
    'FL',
    'F',
    'FTV',
    'FBHS',
    'BEN',
    'GPS',
    'GRMN',
    'GD',
    'GE',
    'GGP',
    'GIS',
    'GM',
    'GPC',
    'GILD',
    'GPN',
    'GS',
    'GT',
    'GWW',
    'HAL',
    'HBI',
    'HOG',
    'HRS',
    'HIG',
    'HAS',
    'HCP',
    'HP',
    'HES',
    'HPE',
    'HLT',
    'HD',
    'HON',
    'HRL',
    'HST',
    'HPQ',
    'HUM',
    'HBAN',
    'INFO',
    'ITW',
    'IR',
    'INTC',
    'ICE',
    'IBM',
    'IP',
    'IPG',
    'IFF',
    'INTU',
    'IVZ',
    'IRM'
    ];

  // var SYMBOLS = [
  //   'JBHT',
  //   'SJM',
  //   'JNJ',
  //   'JCI',
  //   'JPM',
  //   'JNPR',
  //   'KSU',
  //   'K',
  //   'KEY',
  //   'KMB',
  //   'KIM',
  //   'KMI',
  //   'KLAC',
  //   'KSS',
  //   'KHC',
  //   'KR',
  //   'LB',
  //   'LRCX',
  //   'LEG',
  //   'LEN',
  //   'LUK',
  //   'LLY',
  //   'LNC',
  //   'LMT',
  //   'L',
  //   'LOW',
  //   'LYB',
  //   'MTB',
  //   'MAC',
  //   'M',
  //   'MRO',
  //   'MPC',
  //   'MAR',
  //   'MMC',
  //   'MLM',
  //   'MAS',
  //   'MA',
  //   'MAT',
  //   'MKC',
  //   'MCD',
  //   'MCK',
  //   'MDT',
  //   'MRK',
  //   'MET',
  //   'MGM',
  //   'MCHP',
  //   'MSFT',
  //   'MAA',
  //   'TAP',
  //   'MDLZ',
  //   'MON',
  //   'MCO',
  //   'MS',
  //   'MSI',
  //   'NDAQ',
  //   'NOV',
  //   'NAVI',
  //   'NTAP',
  //   'NWL',
  //   'NEM',
  //   'NWS',
  //   'NEE',
  //   'NLSN',
  //   'NKE',
  //   'NI',
  //   'NBL',
  //   'JWN',
  //   'NSC',
  //   'NTRS',
  //   'NOC',
  //   'NCLH',
  //   'NRG',
  //   'NUE',
  //   'NVDA',
  //   'OMC',
  //   'OKE',
  //   'ORCL',
  //   'PCAR',
  //   'PKG',
  //   'PH',
  //   'PDCO',
  //   'PAYX',
  //   'PNR',
  //   'PBCT',
  //   'PEP',
  //   'PKI',
  //   'PRGO',
  //   'PFE',
  //   'PCG',
  //   'PM',
  //   'PSX',
  //   'PNW',
  //   'PXD',
  //   'PNC',
  //   'RL',
  //   'PPG',
  //   'PPL',
  //   'PX',
  //   'PFG',
  //   'PG',
  //   'PGR',
  //   'PLD',
  //   'PRU',
  //   'PEG',
  //   'PSA',
  //   'PHM',
  //   'PVH',
  //   'QCOM',
  //   'DGX',
  //   'Q',
  //   'RRC',
  //   'RJF',
  //   'RTN',
  //   'O',
  //   'REG',
  //   'RF',
  //   'RSG',
  //   'RMD',
  //   'RHI',
  //   'ROK',
  //   'COL',
  //   'ROP',
  //   'ROST',
  //   'RCL',
  //   'SPGI',
  //   'SBAC',
  //   'SCG',
  //   'SLB',
  //   'SNI',
  //   'STX',
  //   'SEE',
  //   'SRE',
  //   'SHW',
  //   'SIG',
  //   'SPG',
  //   'SWKS',
  //   'SLG',
  //   'SNA',
  //   'SO',
  //   'LUV',
  //   'SWK',
  //   'SBUX',
  //   'STT',
  //   'SYK',
  //   'STI',
  //   'SYMC',
  //   'SYF',
  //   'SYY',
  //   'TROW',
  //   'TGT',
  //   'TEL',
  //   'TSO',
  //   'TXN',
  //   'TXT',
  //   'BK',
  //   'CLX',
  //   'COO',
  //   'HSY',
  //   'MOS',
  //   'TRV',
  //   'DIS',
  //   'TMO',
  //   'TIF',
  //   'TWX',
  //   'TJX',
  //   'TMK',
  //   'TSS',
  //   'TSCO',
  //   'TSN',
  //   'USB',
  //   'UDR',
  //   'UNP',
  //   'UNH',
  //   'UPS',
  //   'UTX',
  //   'UHS',
  //   'UNM',
  //   'VFC',
  //   'VLO',
  //   'VTR',
  //   'VZ',
  //   'VIAB',
  //   'V',
  //   'VNO',
  //   'VMC',
  //   'WBA',
  //   'WMT',
  //   'WM',
  //   'WEC',
  //   'WFC',
  //   'HCN',
  //   'WDC',
  //   'WU',
  //   'WRK',
  //   'WY',
  //   'WHR',
  //   'WLTW',
  //   'WYN',
  //   'WYNN',
  //   'XEL',
  //   'XRX',
  //   'XLNX',
  //   'XL',
  //   'XYL',
  //   'YUM',
  //   'ZBH',
  //   'ZION',
  //   'ZTS'
  // ];

  yahooFinance.quote({
    symbols: SYMBOLS,
    modules: ['earnings','summaryDetail','summaryProfile']
  }).then(function (result) {
    _.each(result, function (quote, symbol) {
      console.log(util.format('=== %s ===', symbol).cyan);
      console.log(JSON.stringify(quote, null, 4));
    });
  });



  // }, function (err, quote) {
  //   console.log(JSON.stringify(quote, null, 4));
  // });
