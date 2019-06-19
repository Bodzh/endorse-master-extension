
export default class EndorseManager {

    async perform (): Promise<void> {
        await this.scrollPageToBottom();

        await this.scrollPageToMiddle();

        $('.pv-skills-section__additional-skills').click();

        let endorses = $('.pv-skill-entity__featured-endorse-button-shared[aria-pressed="false"]');

        console.log('endorses available', endorses.length);

        for (let endorse of endorses) {
            endorse.click();

            this.clickSubmit();

            this.clickVeryGood();
        }

        $('.artdeco-hoverable-content__close-btn').click();

        console.log('all done!')
    }

    async clickVeryGood() {
        return new Promise(function(resolve) {
            let veryGoodBtn = $('#endorsement-followup-proficiency-1-Performance');

            veryGoodBtn.click();

            setTimeout(function () {
                resolve(true);
            },1500)
        });
    }

    async clickSubmit () {
        return new Promise(function(resolve) {
            let submitBtn = $('.pv-endorsement-followup__footer > button');

            submitBtn.click();

            setTimeout(function () {
                resolve(true);
            },1500)
        })
    }

    async scrollPageToMiddle () {
        return new Promise(function (resolve) {
            let thirdOfHeight = Math.floor(document.body.clientHeight/3);

            scroll(0, thirdOfHeight);

            setTimeout(function () {
                resolve(true);
            },1500)
        });
    }

    async scrollPageToBottom () {
        return new Promise(function (resolve) {
            scroll(0, document.body.clientHeight);

            setTimeout(function () {
                resolve(true);
            },1500)
        });
    }
}