import { downTo } from './helpers';

export class Bottles {
  verse(bottleNumber) {
    if (bottleNumber === 0) {
      return (
        'No more bottles of beer on the wall, ' +
        'no more bottles of beer.\n' +
        'Go to the store and buy some more, ' +
        '99 bottles of beer on the wall.' +
        '\n'
      );
    }

    if (bottleNumber === 1) {
      return (
        `${bottleNumber} bottle of beer on the wall, ${bottleNumber} bottle of beer.` +
        '\n' +
        'Take it down and pass it around, no more bottles of beer on the wall.' +
        '\n'
      );
    }

    if (bottleNumber === 2) {
      return (
        `${bottleNumber} bottles of beer on the wall, ${bottleNumber} bottles of beer.` +
        '\n' +
        `Take one down and pass it around, ${--bottleNumber} bottle of beer on the wall.` +
        '\n'
      );
    }

    return (
      `${bottleNumber} bottles of beer on the wall, ${bottleNumber} bottles of beer.` +
      '\n' +
      `Take one down and pass it around, ${--bottleNumber} bottles of beer on the wall.` +
      '\n'
    );
  }
  verses(max, min) {
    const versesRange = downTo(max, min);

    const bottleSongArray = versesRange.map((item) => this.verse(item));

    return bottleSongArray.join('\n');
  }
}
