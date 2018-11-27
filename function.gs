//global variable
var sh = SpreadsheetApp.getActiveSpreadsheet();
var sheet = sh.getSheetByName('Analyse');
var sheet2 =sh.getSheetByName('Report Configuration');

function selectDataConnect() {
  //データ入力規則で設定した値を取得
  var cellA = sheet.getRange('E4');
  var cellB = sheet.getRange('F4');
  var dimension1 = 'ga:sessions';
  var dimension2 = 'ga:newUsers';
  var dimension3 = 'ga:goal9Completions';
  var filterLabel  = 'ga:eventLabel=@pcSlide';
  var filterSource = 'ga:source==www3.lin.ac,ga:source==m.facebook.com,ga:source==twitter,ga:source==l.instagram.com';
  
  if(cellA.getValue() === dimension1) {
    cellB.setValue('ga:eventLabel');
    sheet2.getRange('B9').setValue(filterLabel);
  } else if(cellA.getValue() === dimension2) {
    cellB.setValue('ga:eventLabel');
    sheet2.getRange('B9').setValue(filterLabel);
  } else if(cellA.getValue() === dimension3) {
    cellB.setValue('ga:source');
    sheet2.getRange('B9').setValue(filterSource);
  }
  
}

function channelSelection() {
  var cellA = sheet.getRange('E4').getValue();
  var cellB = sheet.getRange('F4').getValue();
  
  var addMetricsNameA = sheet.getRange('E5');
  var addMetricsNameB = sheet.getRange('F5');
  
  if(cellA === 'ga:sessions') {
    addMetricsNameA.setValue('セッション数');
  } else if(cellA === 'ga:newUsers') {
    addMetricsNameA.setValue('新規ユーザー数');
  } else if(cellA === 'ga:goal9Completions') {
    addMetricsNameA.setValue('予約件数');
  }
  
  if(cellB === 'ga:eventLabel') {
    addMetricsNameB.setValue('クリックイベント');
  } else if(cellB === 'ga:source'){
    addMetricsNameB.setValue('メディア別');
  }
}

function triggerChangeValue() {
  selectDataConnect();
  channelSelection();
}