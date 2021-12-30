export enum RESULT_STATUS {
	SUCCESS = 1,
	FAILED = 2
}
export interface GlobalResult<T> {
	data: T;
	message: string;
	status: RESULT_STATUS;
}
