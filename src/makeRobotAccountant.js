'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstEl) => {
    counter++;

    return (secondEl) => {
      const sum = firstEl + secondEl;

      if (counter % 2 === 0 && counter >= 3) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
