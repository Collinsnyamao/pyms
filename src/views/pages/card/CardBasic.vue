<!-- =========================================================================================
    File Name: CardBasic.vue
    Description: Basic Cards
    ----------------------------------------------------------------------------------------



========================================================================================== -->

<template>
    <div id="demo-basic-card">
        <div class="vx-row">

            <!-- CONTENT CARD - PROGRESS BAR/GOAL -->
            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                <vx-card>
                    <img :src="require(`@/assets/images/pages/${card_3.contentImg3}`)" alt="content-img" class="responsive rounded-lg">
                    <div class="my-6">
                        <h5 class="mb-2">{{ card_3.title }}</h5>
                    </div>
                    <div class="mb-4">
                        <div class="flex justify-between">
                            <small class="font-semibold">{{ card_3.current_progress }}</small>
                            <small class="text-grey">{{ card_3.progress_goal }}</small>
                        </div>
                        <vs-progress :percent="card_3.progress_done_per" class="block mt-1 shadow-md"></vs-progress>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <vs-button class="mt-4 shadow-lg" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">{{ card_3.btn_left_text }}</vs-button>
                        <vs-button class="mt-4" type="border" color="#b9b9b9">{{ card_3.btn_right_text }}</vs-button>
                    </div>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default{
    data() {
        return {

            card_3: {
                contentImg3: 'content-img-3.jpg',
                title: 'Project Title',
                progress_done_per: 60,
                current_progress: '60%',
                progress_goal: '100 %',
                btn_left_text: 'Todo',
                btn_right_text: 'Remove'

            },


            name: '',
            email: '',
            msg: '',

            playerOptions: {
                height: '460',
                fluid: true,
                autoplay: false,
                muted: true,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [ { type: "video/mp4", src: "http://vjs.zencdn.net/v/oceans.mp4" } ],
                poster: 'https://goo.gl/xcCsDd',
            },
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
            chatMsgInput: '',
            chatMsg: [
                { senderImg: 'avatar-s-2.png', msg: 'Cake sesame snaps cupcake gingerbread', isSent: false },
                { senderImg: 'avatar-s-5.png', msg: 'Apple pie pie jujubes chupa chups muffin', isSent: true },
                { senderImg: 'avatar-s-2.png', msg: 'Chocolate cake', isSent: false },
                { senderImg: 'avatar-s-5.png', msg: 'Donut sweet pie oat cake dragée fruitcake', isSent: true },
                { senderImg: 'avatar-s-2.png', msg: 'Liquorice chocolate bar jelly beans icing', isSent: false },
                { senderImg: 'avatar-s-5.png', msg: 'Pudding candy', isSent: true },
            ]
        }
    },
    components: {
        VuePerfectScrollbar,
        videoPlayer
    },
    mounted() {
        this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    }
}
</script>

<style lang="scss">
#demo-basic-card {
    .overlay-card {
        .vx-card__collapsible-content {
            max-height: 485px;
        }
    }

    .chat-card-log {
        height: 360px;

        .chat-sent-msg {
            background-color: #f2f4f7 !important;
        }
    }

    .card-video {
        .video-js {
            height: 370px;
        }
    }
}
</style>
