import LocalStorageClass from '../../common/storage/localStorageClass';
import {REPOSITORY_NAME} from '../../common/storage/storageConstants';
import _ from 'lodash';

class MessageSettingRepository {
    private storage: LocalStorageClass;

    constructor(storage: LocalStorageClass) {
        this.storage = storage
    }

    public async get (): Promise<boolean>{
        let message = await this.storage.get(REPOSITORY_NAME.MESSAGE_SETTING);

        if (_.isEmpty(message)) {
            return null;
        }

        return message[REPOSITORY_NAME.MESSAGE_SETTING];
    }

    public async set (setting: boolean): Promise<void>{
        let messageSettingObj = {};

        messageSettingObj[REPOSITORY_NAME.MESSAGE_SETTING] = setting;

        await this.storage.set(messageSettingObj);
    }
}

export default new MessageSettingRepository(new LocalStorageClass());