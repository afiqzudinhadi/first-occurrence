import { input } from '@inquirer/prompts';

const answer = await input({ message: 'Enter an array of numbers separated by commas:' });

const array = answer.split(',').filter(Boolean).map(Number).sort((a, b) => a - b);

const target = await input({ message: 'Enter a target number:' });

const index = array.findIndex((num) => num == target);

console.log('Sorted array:', array);
console.log(index === -1 ? 'Target number not found' : `Target number found at index ${index}`);