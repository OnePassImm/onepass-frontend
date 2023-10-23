export type TComponent<T = undefined> = T extends undefined ? { (): JSX.Element } : { (props: T): JSX.Element };

/**
 * DistributiveOmit credit goes to jcalz
 *
 * Link the community https://stackoverflow.com/questions/57103834/typescript-omit-a-property-from-all-interfaces-in-a-union-but-keep-the-union-s
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

/**
 * This function doesn't do any runtime checks, it's just assert the type of the input parameter.
 */
export const Assert = <T>(element: T) => element;

/**
 * If the assertion passes, it does nothing.
 *
 * If the assertion fails, a runtime error is thrown.
 *
 * This function is useful when need to ensure that a value is of a certain type before proceeding with further operations.
 */
export function _Assert<T>(v: any): asserts v is T {}

export enum Direction {
	"Left",
	"Center",
	"Right",
}

export enum State {
	NONE,
	LOADING,
	SUCCESS,
	FAILURE,
}

export type TImage = {
	imgSrc: string;
	imgAlt: string;
};
