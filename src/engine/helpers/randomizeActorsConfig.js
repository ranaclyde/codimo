/**
 * @author Luciano Graziani @lgraziani2712
 * @license {@link http://www.opensource.org/licenses/mit-license.php|MIT License}
 *
 * @flow
 */
import { ONE } from 'constants/numbers';
import { type GameDifficulty } from 'engine/containers/mazeEngineGenerator';
import { getRandomInt } from 'helpers/randomizers';

/* eslint-disable no-magic-numbers */
const RANGES = {
  easy: [0, 9],
  normal: [0, 99],
  hard: [-99, 99],
};
/* eslint-enable */

const randomizeActorsConfig = (
  statics: Array<number | null>,
  accesses: Array<number>,
  difficulty: GameDifficulty,
) => {
  const definedRanges = accesses.map((actorPosition) => ({
    min: typeof statics[actorPosition - ONE] === 'number'
        ? statics[actorPosition - ONE]
        : RANGES[difficulty][0] - ONE,
    max: typeof statics[actorPosition + ONE] === 'number'
        ? statics[actorPosition + ONE]
        : RANGES[difficulty][1] + ONE,
  }));

  return () => (
    // $FlowDoNotDisturb they ARE numbers!
    definedRanges.map(({ min, max }) => (getRandomInt(min + ONE, max)))
  );
};

export default randomizeActorsConfig;
