import {selectors} from './selectors.ts';

export default class EndorseManager {

    async perform (): Promise<void> {
        await this.scrollPageToBottom();

        await this.scrollPageToMiddle();

        $(selectors.endorses.openSkills).click();

        let endorses = $(selectors.endorses.uncheckedSkills);

        console.log('endorses available', endorses.length);

        for (let endorse of endorses) {
            endorse.click();

            this.clickSubmit();

            this.clickVeryGood();
        }

        $(selectors.endorses.closeModalBtn).click();

        console.log('all done!')
    }

    async clickVeryGood(): Promise<boolean> {
        return new Promise(function(resolve) {
            let veryGoodBtn = $(selectors.endorses.veryGoodBtn);

            veryGoodBtn.click();

            setTimeout(function () {
                resolve(true);
            },1500)
        });
    }

    async clickSubmit (): Promise<boolean> {
        return new Promise(function(resolve) {
            let submitBtn = $(selectors.endorses.submitBtn);

            submitBtn.click();

            setTimeout(function () {
                resolve(true);
            },1500)
        })
    }

    async scrollPageToMiddle (): Promise<boolean> {
        return new Promise(function (resolve) {
            let thirdOfHeight = Math.floor(document.body.clientHeight/3);

            scroll(0, thirdOfHeight);

            setTimeout(function () {
                resolve(true);
            },1500)
        });
    }

    async scrollPageToBottom (): Promise<boolean> {
        return new Promise(function (resolve) {
            scroll(0, document.body.clientHeight);

            setTimeout(function () {
                resolve(true);
            },1500)
        });
    }
}