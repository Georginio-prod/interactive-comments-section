<template>
    <div class="w-full h-auto justify-center items-center bg-[#F5F6FA]">
        <div class="w-full flex flex-col justify-center items-center px-4 py-8">

            <div class="bg-white px-4 py-4">
                <div class="flex ">
                    <img src="/public/avatars/image-amyrobson.png" alt="avatar" class="w-8 h-8">
                    <p class="pl-4">
                        amyrobson <span>1 month ago</span>
                    </p>
                </div>
                <div class="">
                    <p>
                        {{ msg }}
                    </p>
                    <div class="flex justify-between items-center">
                        <div class="bg-bgcol flex">
                            <p class="px-3 py-1">
                                <button @click="conteur++" key="bA">+</button>
                                {{ conteur }}
                                <button @click="conteur--" key="bB">-</button>
                            </p>
                        </div>
                        <div class="flex items-center">
                            <div v-if="!visible" class="flex items-center">
                                <img src="/public/icon-reply.svg" alt="" class="mx-auto">
                                <button @click="visible = true">
                                    Reply
                                </button>
                            </div>
                            <div v-else class="flex flex-col items-center">
                                <div class="flex items-center">
                                    <img src="/public/icon-delete.svg" alt="">
                                    <button>
                                        Delete
                                    </button>
                                    <img src="/public/icon-edit.svg" alt="">
                                    <button>
                                        Edit
                                    </button>
                                </div>

                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            conteur: 1,
            visible: false,
            msg: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design, and the responsiveness at various breakpoints works really well.",

        }
    },
    methods() {

    }
}

</script>