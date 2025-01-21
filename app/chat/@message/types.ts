export interface IMessageItem {
  _id?: string;
  sender: string;
  receiver: string;
  content: string;
  seen: boolean;
  createdAt: string;
  updatedAt?: string;
}

export type IMessageItems = IMessageItem[];
