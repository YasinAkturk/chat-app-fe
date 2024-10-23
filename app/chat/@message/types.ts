export interface IMessageItem {
    message: string;
    incoming: boolean;
    outgoing: boolean;
  }
  
  export type IMessageItems = IMessageItem[];