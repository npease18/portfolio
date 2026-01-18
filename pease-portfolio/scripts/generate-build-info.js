const fs = require('fs');
const path = require('path');

function generateBuildInfo() {
  const buildInfo = {
    buildTime: new Date().toISOString()
  };

  // Write to a JSON file that can be imported
  const outputPath = path.join(__dirname, '../src/data/build-info.json');
  fs.writeFileSync(outputPath, JSON.stringify(buildInfo, null, 2));
  
  console.log('Build info generated:', buildInfo);
}

generateBuildInfo();