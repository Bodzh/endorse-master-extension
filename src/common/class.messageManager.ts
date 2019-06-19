import chromep from 'chrome-promise';

export default class MessageManager {

    public sendMessageToContent (sender: object, action: string, data: object): void {
        chrome.tabs.sendMessage(
            sender.tab.id,
            this.getRequestDataFormat(action, data)
        );
    }

    public async sendMessageToBackgroundWithResponse (action: string, data: object): Promise<void> {
        return chromep.runtime.sendMessage(
            this.getRequestDataFormat(action, data)
        );
    }

    public sendMessageToBackground (action: string, data: object): void {
        chrome.runtime.sendMessage(
            this.getRequestDataFormat(action, data)
        );
    }

    public sendMessageToPopup (action: string, data: object): void {
        chrome.runtime.sendMessage(
            this.getRequestDataFormat(action, data)
        );
    }

    public getRequestDataFormat (action: string, data = {}): object {
        return {
            action: action,
            data: data
        };
    }
}