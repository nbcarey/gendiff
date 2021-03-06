import fs from 'fs';
import genDiff from '../src';


const result = fs.readFileSync(`${__dirname}/__fixtures__/result.txt`, 'utf-8');
const result2 = fs.readFileSync(`${__dirname}/__fixtures__/result2.txt`, 'utf-8');


// eslint-disable-next-line no-multi-str
test('# 1 Compare 2 JSON files and in 2 variants of sequence.\
    \nPaths are absolutely. Should return the difference.', () => {
  const json1path = `${__dirname}/__fixtures__/before.json`;
  const json2path = `${__dirname}/__fixtures__/after.json`;
  const actual = genDiff(json1path, json2path);
  expect(actual).toBe(result);

  const actual2 = genDiff(json2path, json1path);
  expect(actual2).toBe(result2);
});


// eslint-disable-next-line no-multi-str
test('# 2 Compare 2 YAML files and in 2 variants of sequence.\
    \nPaths are absolutely. Should return the difference.', () => {
  const yaml1path = `${__dirname}/__fixtures__/before.yml`;
  const yaml2path = `${__dirname}/__fixtures__/after.yml`;

  const actual = genDiff(yaml1path, yaml2path);
  expect(actual).toBe(result);

  const actual2 = genDiff(yaml2path, yaml1path);
  expect(actual2).toBe(result2);
});


// eslint-disable-next-line no-multi-str
test('# 3 Compare 2 INI files and in 2 variants of sequence.\
    \nPaths are absolutely. Should return the difference.', () => {
  const ini1path = `${__dirname}/__fixtures__/before.ini`;
  const ini2path = `${__dirname}/__fixtures__/after.ini`;

  const actual = genDiff(ini1path, ini2path);
  expect(actual).toBe(result);

  const actual2 = genDiff(ini2path, ini1path);
  expect(actual2).toBe(result2);
});

// eslint-disable-next-line no-multi-str
test('# 4 Compare 2 JSON tree files and in 2 variants of sequence.\
    \nPaths are absolutely. Should return the difference.', () => {
  const jsonTree1path = `${__dirname}/__fixtures__/beforeTree.json`;
  const jsonTree2path = `${__dirname}/__fixtures__/afterTree.json`;
  const result4Trees = fs.readFileSync(`${__dirname}/__fixtures__/result4Trees.txt`, 'utf-8');

  const actual = genDiff(jsonTree1path, jsonTree2path);
  expect(actual).toBe(result4Trees);
});

// eslint-disable-next-line no-multi-str
test('# 5 Plain format. Compare 2 JSON tree files and in 2 variants of sequence.\
    \nPaths are absolutely. Should return the difference.', () => {
  const jsonTree1path = `${__dirname}/__fixtures__/beforeTree.json`;
  const jsonTree2path = `${__dirname}/__fixtures__/afterTree.json`;
  const plainResult4Trees = fs.readFileSync(`${__dirname}/__fixtures__/plainResult4Trees.txt`, 'utf-8');

  const actual = genDiff(jsonTree1path, jsonTree2path, 'plain');
  expect(actual).toBe(plainResult4Trees);
});

// eslint-disable-next-line no-multi-str
test('# 6 JSON format. Compare 2 JSON tree files and in 2 variants of sequence.\
    \nPaths are absolutely. Should return the difference.', () => {
  const beforesPath = `${__dirname}/__fixtures__/beforeTree.json`;
  const aftersPath = `${__dirname}/__fixtures__/afterTree.json`;
  const resultFromFile = fs.readFileSync(`${__dirname}/__fixtures__/result4Trees.json`, 'utf-8');

  const actual = genDiff(beforesPath, aftersPath, 'JSON');
  expect(actual).toBe(resultFromFile);
});
