import _ from 'lodash';
import LocalStorageClass from "../../common/storage/localStorageClass";
import {REPOSITORY_NAME} from "../../common/storage/storageConstants";

class ButtonPositionRepository {
    private storage: LocalStorageClass;

    constructor (storage: LocalStorageClass) {
        this.storage = storage;
    }

    async get (): Promise<object> {
        let position = await this.storage.get(REPOSITORY_NAME.BUTTON_POSITION);

        if (_.isEmpty(position)) {
            return null;
        }

        return position[REPOSITORY_NAME.BUTTON_POSITION];
    }

    async set (position: object) {
        let positionObj = {};

        positionObj[REPOSITORY_NAME.BUTTON_POSITION] = position;

        return this.storage.set(positionObj);
    }

}
export default new ButtonPositionRepository(new LocalStorageClass());