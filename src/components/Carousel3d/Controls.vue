<template>
    <div class="carousel-3d-controls">
        <!-- <a href="#" class="prev" @click.prevent="parent.goPrev()"
           :class="{ disabled: !parent.isPrevPossible }"
           :style="`width: ${width}px; height: ${height}px; line-height: ${height}px;`">
            <span v-html="prevHtml"></span>
        </a>
        <a href="#" class="next" @click.prevent="parent.goNext()"
           :class="{ disabled: !parent.isNextPossible }"
           :style="`width: ${width}px; height: ${height}px; line-height: ${height}px;`">
            <span v-html="nextHtml"></span>
        </a> -->

        <div class="btn">
            <!-- <img src="../../assets/img/left.png" alt="">
            <img src="../../assets/img/right.png" alt=""> -->
            <div class="btn-left" @click.prevent="parent.goPrev()"><Icon type="ios-arrow-back" /></div>
            <div class="btn-right" @click.prevent="parent.goNext()"><Icon type="ios-arrow-forward" /></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'controls',
        props: {
            /**
             * Width in pixels of the navigation buttons
             */
            width: {
                type: [String, Number],
                default: 50
            },
            /**
             * Height in pixels of the navigation buttons
             */
            height: {
                type: [String, Number],
                default: 60
            },
            /**
             * Text content of the navigation prev button
             */
            prevHtml: {
                type: String,
                default: '&lsaquo;'
            },
            /**
             * Text content of the navigation next button
             */
            nextHtml: {
                type: String,
                default: '&rsaquo;'
            }
        },
        data () {
            return {
                parent: this.$parent
            }
        }
    }
</script>

<style scoped lang="less">
    .carousel-3d-controls {
        position: absolute;
        bottom: 2%;
        height:30px;
        // margin-top: -30px;
        left: 0;
        z-index: 1000;
        width:100%;
        display: flex;
        justify-content: flex-end;
    }
    .btn{
        width: 60%;
        display: flex;
        justify-content: flex-end;
        height:30px;
        padding-right: 90px;
        .btn-right{
            transition: all .5s;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #FFD02C;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            line-height: 30px;
            margin-left: 14px;
            cursor: pointer;
        }
        .btn-left{
            transition: all .5s;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #FFD02C;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            line-height: 30px;
            cursor: pointer;
        }
        .btn-right:hover{
            background-color: #ffd02cb0;
        }
        .btn-left:hover{
            background-color: #ffd02cb0;
        }
    }
</style>
