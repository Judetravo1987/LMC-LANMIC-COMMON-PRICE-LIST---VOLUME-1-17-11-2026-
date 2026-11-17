LANMIC Common Price Finder
==========================

Files:
- index.html: app interface
- products.json: 132 product rows parsed from the uploaded workbook
- manifest.webmanifest: installable app metadata
- sw.js: offline cache service worker
- source_structure.json: source workbook mapping

SOURCE:
Common Price List LMC & LME with SSCL.xlsx
Worksheet: Table 1
Data rows parsed: 132

WHAT THE APP DOES:
1. Search by product description or code.
2. Filter by source category/code label.
3. Retrieve Ex-factory price Below 5MT or Above 5MT.
4. Retrieve delivery price using the exact combinations in the source:
   - 80 km, 100 km, 120 km, 240 km
   - 3MT, 5MT, 7.5MT, 10MT, 15MT, 20MT
5. If a price cell is blank in the source, the app displays "Not available in source".

SOURCE DATA NOTES:
- Currency and price unit are not stated in the column headings, so the app does not invent them.
- Rows with blank code/category cells are labelled "Category not specified in source".
- Category labels "Rod Mill" and "Skim Coat" are retained as supplied in the source.
- Price values are preserved from the workbook.

INSTALL:
This is an installable web app (PWA), not a signed native APK.
1. Upload all files to the root of an HTTPS website or GitHub Pages repository.
2. Open the HTTPS website in Chrome on Android.
3. Choose Chrome menu > Install app / Add to Home screen.
4. After first load, the app can work offline using its cached data.

UPDATE:
Replace products.json and deploy the updated file. If the app shows old data, clear the website cache / reload after the service worker updates.
