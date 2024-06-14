

export interface Task {
    id: number;
    title: string;
    content: string;
    created_by: string;
    atribuited_to: string;
    status: string;

}

export interface BoardTypes {
    tasks:Task[];
    id: string;
    name:string;
}