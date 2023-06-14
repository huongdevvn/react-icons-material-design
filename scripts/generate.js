const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const SOURCE_SVG_PATH = path.resolve(
  __dirname,
  '../svg'
);
const DESTINATION_ICONS_PATH = path.resolve(__dirname, '../src/icons');

function pascalCase(string) {
  // Remove leading and trailing whitespace
  string = string.trim();

  // Replace non-alphanumeric characters with spaces
  string = string.replace(/[^0-9a-zA-Z]+/g, ' ');

  // Split the string into words
  var words = string.split(' ');

  // Capitalize the first letter of each word and join them
  var pascalCase = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');

  // Handle cases where the string starts with a number
  if (pascalCase && !isNaN(pascalCase.charAt(0))) {
    pascalCase = '_' + pascalCase;
  }

  return pascalCase;
}

function cleanFolder(folderPath) {
  // Get a list of all files and subdirectories in the folder
  const files = fs.readdirSync(folderPath);

  // Iterate through each file and subdirectory
  files.forEach(file => {
    const filePath = path.join(folderPath, file);

    // Check if it's a file or a subdirectory
    const isFile = fs.statSync(filePath).isFile();

    if (isFile) {
      // If it's a file, delete it
      fs.unlinkSync(filePath);
      console.log(`Deleted file: ${filePath}`);
    } else {
      // If it's a subdirectory, recursively call the function to delete its contents
      cleanFolder(filePath);

      // Delete the empty subdirectory
      fs.rmdirSync(filePath);
      console.log(`Deleted folder: ${filePath}`);
    }
  });
}

function createFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Created folder: ${folderPath}`);
  } else {
    console.log(`Folder already exists: ${folderPath}`);
  }
}

function findIcons(directory) {
  let icons = [];

  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively search subdirectories
      const subdirectoryIcons = findIcons(filePath);
      icons = icons.concat(subdirectoryIcons);
    } else if (file.endsWith('.svg')) {
      // Filter SVG files
      icons.push(filePath);
    }
  });

  return icons;
}

function createComponentName(originalName, variant) {
  const name = originalName + '_' + variant;
  return (
    pascalCase(name)
  );
}

async function generateNewComponents() {
  const prettierOptions = (await prettier.resolveConfig(__dirname)) || {};
  const exports = [];

  createFolder(path.resolve(__dirname, '../src/icons'))


  for (const file of findIcons(SOURCE_SVG_PATH)) {
    const elements = file.split('/');
    const variant = elements[elements.length - 2];
    const [originalName] = elements[elements.length - 1].split('.');
    const svgFileContents = fs.readFileSync(
      file
    );

    const componentName = createComponentName(originalName, variant);

    console.log('Processing to component: ', componentName)

    exports.push(
      `export { default as ${componentName} } from './icons/${originalName}_${variant}.js';`
    );

    const [, svgContent] = /<svg[^>]*>([\s\S]*?)<\/svg>/.exec(svgFileContents);

    let source = getComponentTemplate()
      .replace(/%%COMPONENT_NAME%%/g, componentName)
      .replace(/%%SVG_CONTENT%%/g, svgContent)

    fs.writeFileSync(
      path.resolve(DESTINATION_ICONS_PATH, `${originalName}_${variant}.js`),
      prettier.format(source, { parser: 'babel', ...prettierOptions })
    );
  }

  fs.writeFileSync(
    path.resolve(__dirname, '../src/index.js'),
    prettier.format(exports.join('\n'), { parser: 'babel', ...prettierOptions })
  );
}

async function createTypesFile() {
  const prettierOptions = (await prettier.resolveConfig(__dirname)) || {};
  const exports = findIcons(SOURCE_SVG_PATH).map((file) => {
    const elements = file.split('/');
    const variant = elements[elements.length - 2];
    const [originalName] = elements[elements.length - 1].split('.');

    const componentName = createComponentName(originalName, variant);

    return `export const ${componentName}: SVGIcon;`;
  });

  fs.writeFileSync(
    path.resolve(__dirname, '../src/index.d.ts'),
    prettier.format(getTypesTemplate() + exports.join('\n'), {
      parser: 'babel-ts',
      ...prettierOptions,
    })
  );
}

function getComponentTemplate() {
  return fs.readFileSync(
    path.resolve(__dirname, './component-template.txt'),
    'utf8'
  );
}

function getTypesTemplate() {
  return fs.readFileSync(
    path.resolve(__dirname, './types-template.txt'),
    'utf8'
  );
}


cleanFolder(path.resolve(
  __dirname,
  '../src'
));
generateNewComponents();
createTypesFile();
