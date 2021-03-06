/**
 * @author Luciano Graziani @lgraziani2712
 * @license {@link http://www.opensource.org/licenses/mit-license.php|MIT License}
 *
 * @flow
 */
/* eslint-disable no-magic-numbers */
import { Container } from 'pixi.js';

import numberGenerator from './';

describe('engine > components > numberGenerator', () => {
  it('should update its position acording to the new position', async () => {
    const rawNumber = 3;
    const initPosition = '1,1';
    const newPosition = '2,2';
    const size = 64;
    const margin = 10;
    const number = numberGenerator(rawNumber, initPosition, newPosition, size, margin);
    const initX = number.view.x;
    const initY = number.view.y;

    await number.updatePosition(newPosition);

    expect(number.position).toBe(newPosition);
    expect(number.view.x).not.toBe(initX);
    expect(number.view.y).not.toBe(initY);

    number.resetPosition();

    expect(number.position).toBe(initPosition);
    expect(number.view.x).toBe(initX);
    expect(number.view.y).toBe(initY);
    expect(number.view.rotation).toBe(0);
    expect(number.view.scale.x).toBe(0.5);
    expect(number.view.scale.y).toBe(0.5);
  });
  it('should update its position to undefined when enter to numeric line', async () => {
    const parent = new Container();
    const rawNumber = 3;
    const initPosition = '1,1';
    const finalPosition = '1,1';
    const size = 64;
    const margin = 10;
    const number = numberGenerator(rawNumber, initPosition, finalPosition, size, margin);

    await number.hasEnteredToNumericLine(parent);

    expect(number.position).toBeUndefined();
  });
  it('should disappear on `beTheFallenOne`', async () => {
    const rawNumber = 3;
    const initPosition = '1,1';
    const finalPosition = '1,1';
    const size = 64;
    const margin = 10;
    const number = numberGenerator(rawNumber, initPosition, finalPosition, size, margin);

    await number.beTheFallenOne();

    expect(number.position).toBeUndefined();
    expect(number.view.scale.x).toBe(0);
    expect(number.view.scale.y).toBe(0);
  });
});
