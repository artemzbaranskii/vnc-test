import {Conversation} from '../interfaces/conversation.interface';
import {Message} from '../interfaces/message.interface';

export const CONVERSATION: Conversation = {
  messages: [
    new Message('message 1'),
    new Message('message 2'),
    new Message('message 3'),
    new Message('message 4'),
    new Message('message 5'),
  ],
};
