<!--
 * @Author: your name
 * @Date: 2021-03-02 22:41:22
 * @LastEditTime: 2021-03-03 02:20:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\components\svg\index.vue
-->
<template>
    <div>
        <svg ref="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" width="600" height="600"  @mousewheel="onWheel" @mousemove="onMouseMove" version="1.1">
            <image xlink:href="http://img.htmleaf.com/1506/logo.png" />
        </svg>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                svgCanvas: null,
                mousePosition: null,
                allowPanning: false,
                prevViewBox: null,
                svgInitialClick: null,
                SVGWIDTH: 500,
                ZOOMSPEED: 1.25
            }
        },
        mounted () {
            this.svgCanvas = this.$refs.svg;
        },
        methods: {
            onMouseMove(e) {
                if (e.buttons === 2 && allowPanning === false) {
                    this.allowPanning = true;
                    this.svgInitialClick = getRelativeCoords(e, svgCanvas);
                    this.prevViewBox = this.svgCanvas.viewBox.baseVal; // viewBox value at start
                }
                if (this.allowPanning) {
                    this.mousePosition = this.getRelativeCoords(e, this.svgCanvas);
                    this.svgCanvas.viewBox.baseVal.x = -this.mousePosition.x - (-this.svgInitialClick.x - this.prevViewBox.x);
                    this.svgCanvas.viewBox.baseVal.y = -this.mousePosition.y - (-this.svgInitialClick.y - this.prevViewBox.y);
                }
            },
            getRelativeCoords(evt, svgDoc) {
                const originPt = svgDoc.createSVGPoint();
                originPt.x = evt.clientX;
                originPt.y = evt.clientY;
                // The cursor point, translated into svg coordinates
                return originPt.matrixTransform(svgDoc.getScreenCTM().inverse());
            },
            onWheel(e) {
                console.log('wheel')
                e.preventDefault();
                this.mousePosition = this.getRelativeCoords(e, this.svgCanvas);
                let zoomFactor = (e.deltaY > 0 ? this.ZOOMSPEED : 1/this.ZOOMSPEED);
                let xProp = (this.mousePosition.x - this.svgCanvas.viewBox.baseVal.x) / this.svgCanvas.viewBox.baseVal.width;
                let xInc = this.svgCanvas.viewBox.baseVal.width * zoomFactor - this.svgCanvas.viewBox.baseVal.width;
                let yProp = (this.mousePosition.y - this.svgCanvas.viewBox.baseVal.y) / this.svgCanvas.viewBox.baseVal.height;
                let yInc = this.svgCanvas.viewBox.baseVal.height * zoomFactor - this.svgCanvas.viewBox.baseVal.height;
                if (e.deltaY > 0 ? this.svgCanvas.viewBox.baseVal.width < this.SVGWIDTH*10 : this.svgCanvas.viewBox.baseVal.width > this.SVGWIDTH/10) {
                    this.svgCanvas.viewBox.baseVal.x -= xInc * xProp;
                    this.svgCanvas.viewBox.baseVal.width += xInc;
                    this.svgCanvas.viewBox.baseVal.y -= yInc * yProp;
                    this.svgCanvas.viewBox.baseVal.height += yInc;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>