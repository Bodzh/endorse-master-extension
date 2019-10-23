// @ts-ignore
import chromep from 'chrome-promise';

export default class LocalStorage {
    private readonly initialization: Promise<void>;
    private readonly app: { message: string, position: object, messageSetting: boolean};

    constructor () {
        this.app = {
            message: '',
            position: {top: 0, right: 0},
            messageSetting: false
        };

        this.initialization = (async () => {
            await this.allProps().then((props) => {
                let promises = Object.keys(props).map(key => chromep.storage.local.get(key)); // run through all properties and get them from chrome storage
                return Promise.all(promises);
            }).then((values) => { // get array of objects returned by chrome storage, example: values = (6) [{…}, {…}, {…}, {…}, {…}, {…}]
                values
                    .map(key =>
                        this.app[Object.keys(key)[0]] = key[Object.keys(key)[0]] // set each prop value to value from chrome storage
                    );
                return values;
            })
                .catch((err) => {
                    console.log(err.message);
                });
        })();

        this.onChanged();
    }

    async set (obj: any): Promise<void> {
        return chromep.storage.local.set(obj);
    }

    async get (key: string): Promise<any> {
        return chromep.storage.local.get(key);
    }

    onChanged (): void {
        let ls = this;

        chrome.storage.onChanged.addListener(function (changes, namespace) {
            for (let key in changes) {
                let storageChange = changes[key];

                console.log('Storage key "%s" in namespace "%s" changed. ' +
                    'Old value was "%s", new value is "%s".',
                    key,
                    namespace,
                    storageChange.oldValue,
                    storageChange.newValue);

                ls.app[key] = storageChange.newValue;
            }
        });
    }

    async allProps (): Promise<object> {
        return this.app;
    }

    async init (): Promise<void> {
        await this.initialization;
    }
}
