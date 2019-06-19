<script>
    function endorseProfile () {
        console.log('now endorsing')
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
}

</style>

<div class="endorse-master-widget">
    <button on:click={endorseProfile} class="endorse-widget-button">Endorse Skills</button>
</div>