import LocalStorageClass from '../../common/storage/localStorageClass.ts';
import {REPOSITORY_NAME} from '../../common/storage/storageConstants.ts';
import _ from 'lodash';

class MessageRepository {
    private storage: LocalStorageClass;

    constructor(storage: LocalStorageClass) {
        this.storage = storage
    }

    public async get (): Promise<string>{
        let message = await this.storage.get(REPOSITORY_NAME.MESSAGE);

        if (_.isEmpty(message)) {
            return null;
        }

        return message[REPOSITORY_NAME.MESSAGE];
    }

    public async set (message: string): Promise<void>{
        let messageObj = {};

        messageObj[REPOSITORY_NAME.MESSAGE] = message;

        await this.storage.set(messageObj);
    }
}

export default new MessageRepository(new LocalStorageClass());