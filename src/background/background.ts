import MessageManagerClass from '../common/class.messageManager.ts';
import ActionsClass from '../common/class.actions.ts';
import LocalStorageClass from '../common/storage/localStorageClass.ts';

const LocalStorage = new LocalStorageClass();
const Actions = new ActionsClass();
const MessageManager = new MessageManagerClass();

LocalStorage.init();

chrome.runtime.onMessage.addListener(
    async function (request, sender) {

        const ACTION = request.action,
            DATA = request.data;

        console.log(request);
    }
);
