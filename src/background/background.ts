import MessageManagerClass from '../common/class.messageManager.ts';
import ActionsClass from '../common/class.actions.ts';

const Actions = new ActionsClass();
const MessageManager = new MessageManagerClass();

chrome.runtime.onMessage.addListener(
    async function (request, sender) {

        const ACTION = request.action,
            DATA = request.data;

        console.log(request);
    }
);
