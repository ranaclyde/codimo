/**
 * @author Luciano Graziani @lgraziani2712
 * @license {@link http://www.opensource.org/licenses/mit-license.php|MIT License}
 *
 * This tester must evaluate every component.
 *
 * @flow
 */

// FIXME This function need to be more generic
// Right now only works for one specific function
function componentExecutionConfig(blockName: string) {
  Blockly.JavaScript[blockName] = () => (`${blockName};`);
}

export type Instructions = Array<string>;
export type Executor = {|
  addBlockExecutor(blockName: string): void,
  parseInstructions(code: string): Instructions,
|};
/**
 * This object is responsible for executing the code-as-string generated by blockly.
 * It allows to add every function used by each block.
 *
 * @return {Object} excecutor
 */
const executorGenerator = (): Executor => ({
  addBlockExecutor(blockName: string) {
    componentExecutionConfig(blockName);
  },
  /**
   * Each instruction follows this format:
   *      instruction;
   * Where the semicolon is the separator.
   *
   * @param  {string} rawInstructions a sequence of raw instructions
   * @return {Instructions}           an array of instructions
   */
  parseInstructions: (rawInstructions: string): Instructions => {
    const instructions = rawInstructions.replace(/ /g, '').split(';');

    // Deletes the last & empty value
    instructions.pop();

    return instructions;
  },
});

export default executorGenerator;
