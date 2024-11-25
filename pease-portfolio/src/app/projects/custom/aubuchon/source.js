export default `function AUBDATALOOKUP(input, type) {
  if (input && type) {
    var url = API_URL;
    var text = UrlFetchApp.fetch(url).getContentText();
    var json = JSON.parse(text)
    switch (type.toLowerCase()) {
      case "description":
        return json.product[0].webDesc
        break;
      case "qty":
        return json.product[0].onHandAmt
        break;
      case "price":
        return json.product[0].promoPrice != ""? "*"+json.product[0].promoPrice: json.product[0].retailPrice
        break;
      case "location":
        return json.product[0].section + " S:" + json.product[0].Slot
        break;
      case "sku":
        return json.product[0].sku
        break;
      default:
        for (var UPC in json.Table1) {
          UPC = json.Table1[UPC]
          if (UPC.Primary) return UPC.altUPC
        }
        break;
    }
  } else if (input) {
    var url = API_URL;
    var text = UrlFetchApp.fetch(url).getContentText();
    var json = JSON.parse(text)
    for (var UPC in json.Table1) {
          UPC = json.Table1[UPC]
          if (UPC.Primary) return UPC.altUPC
    }
  } else {
    return "AUBUCHON PRODUCT DATA TOOL\\n[SKU TO LOOKUP], [TYPE OF DATA]\\nVALID TYPES: UPC, DESCRIPTION, QTY, PRICE, LOCATION"
  }
}`