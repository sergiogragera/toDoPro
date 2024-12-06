import { Task } from './Task';
import { User } from './User';

interface BaseProcessResult {
    isSuccess: boolean;
    message: string;
}

export interface SingleTaskResult extends BaseProcessResult {
    data: Task | null;
}

export interface TaskListResult extends BaseProcessResult {
    data: Task[] | null;
}

export interface SingleUserResult extends BaseProcessResult {
    data: User | null;
}

export interface UserListResult extends BaseProcessResult {
    data: User[] | null;
}

export interface NoDataResult extends BaseProcessResult {
    data?: null;
}

export type ProcessResult = 
    | SingleTaskResult 
    | TaskListResult 
    | SingleUserResult 
    | UserListResult 
    | NoDataResult;
