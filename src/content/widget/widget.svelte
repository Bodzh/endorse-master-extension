<script>
    import EndorseManagerClass from '../class.endorseManager.ts'
    const EndorseManager = new EndorseManagerClass();

    async function endorseProfile () {
        console.log('now endorsing');

        await EndorseManager.perform();

        console.log('endorses done')
    }
</script>

<style>
.endorse-master-widget {
    position: fixed;
    top: 120px;
    right: 60px;
}

.endorse-widget-button {
    width: 120px;
    height: 50px;
    background-color: deepskyblue;
    color: white;
    border-radius: 30px;
    z-index: 103;
    cursor: pointer;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
}

.endorse-widget-button:hover {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.3), 0 0 3px 0 rgba(0, 0, 0, 0.2);
}

</style>

<div class="endorse-master-widget">
    <button on:click={endorseProfile} class="endorse-widget-button">Endorse Skills</button>
</div>