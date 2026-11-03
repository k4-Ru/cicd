const fs = require ('fs');
const path = require('path');


for (const file of ['src/app.js', 'src/server.js']) {
    const fullPath = path.join(process.cwd(), file );
    if (!fs.existsSync(fullPath)) {
        console.error(`Error: ${file} does not exist.`);
        process.exit(1);
    }
    require('vm').compileFunction(fs.readFileSync(fullPath, 
    'utf8'), [], { filename: fullPath }); 
}
console.log(`Successfully built!`);