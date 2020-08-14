<template>
<q-page class="container scene" padding="">
    <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
    >
        <a-nft
            type="nft"
            url="model/nft/hp"
            smooth="true"
            smoothCount="10"
            smoothTolerance=".01"
            smoothThreshold="5"
        >
            <a-entity
                gltf-model="model/scene.glb"
                scale="15 15 15"
                position="50 150 0"
            >
            </a-entity>
        </a-nft>
        <!-- static camera that moves according to the device movemenents -->
        <a-entity camera></a-entity>
    </a-scene>
</q-page>
</template>

<script>
export default {
  name: 'AFrame'
}
</script>

<style scoped>
body >>> .ar {
    overflow: hidden;
    margin : 0px;
}
.scene{
    z-index: 100 !important;
}
a-scene {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
