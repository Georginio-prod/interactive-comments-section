<template>
    <div class="w-full h-auto justify-center items-center bg-[#F5F6FA]">
        <div class="w-full flex flex-col  px-4 py-8 lg:px-80">

            <div class="bg-white px-4 py-4 rounded-xl lg:pt-6 lg:h-40">
                <div class="flex lg:px-16 ">
                    <img src="/public/avatars/image-amyrobson.png" alt="avatar" class="w-8 h-8">
                    <p class="pl-4 text-textcol ">
                        amyrobson <span class="text-textdes pl-4">1 month ago</span>
                    </p>
                </div>
                <div class=" pt-4 text-textdes ">
                    <p class="lg:px-16">
                        {{ msg }}
                    </p>
                    <div class="flex justify-between items-center">
                        <div
                            class="bg-bgcol flex rounded-xl mt-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:-translate-y-[135px]">
                            <p class="px-6 py-2 lg:flex lg:flex-col lg:px-3 lg:items-center lg:justify-center ">
                                <button @click="conteur++" key="bA" class="pr-4 text-btn lg:pr-0">+</button>
                                <span class="text-num pr-4 lg:pr-0">{{ conteur }}</span>
                                <button @click="conteur--" key="bB" class="text-btn lg:pr-0">-</button>
                            </p>
                        </div>

                        <div class="flex items-center mt-4 ">
                            <div v-if="!visible" class="flex items-center lg:transform lg:-translate-y-[166px]">
                                <img src="/public/icon-reply.svg" alt="" class="mx-auto">
                                <button @click="visible = true" class="text-num p-2">
                                    Reply
                                </button>
                            </div>
                            <div v-else class="flex flex-col items-center lg:transform lg:-translate-y-[166px]">
                                <div class="flex items-center">
                                    <img src="/public/icon-delete.svg" alt="">
                                    <button class="p-2 text-sup">
                                        Delete
                                    </button>
                                    <img src="/public/icon-edit.svg" alt="" class="pl-3">
                                    <button class="p-2 text-num ">
                                        Edit
                                    </button>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white px-4 py-4 mt-4 rounded-xl lg:pt-6 lg:h-40">
                <div class="flex  lg:px-16">
                    <img src="/public/avatars/image-maxblagun.png" alt="avatar" class="w-8 h-8">
                    <p class="pl-4 text-textcol ">
                        maxblagun <span class="text-textdes pl-4">2 weeks ago</span>
                    </p>
                </div>
                <div class=" pt-4 text-textdes">
                    <p class="lg:px-16">
                        {{ msg1 }}
                    </p>
                    <div class="flex justify-between items-center">
                        <div
                            class="bg-bgcol flex rounded-xl mt-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:transform lg:-translate-y-[135px]">
                            <p class="px-6 py-2 lg:flex lg:flex-col lg:px-4 lg:items-center lg:justify-center">
                                <button @click="conteur1++" key="bA" class="pr-4 text-btn lg:pr-0">+</button>
                                <span class="text-num pr-4 lg:pr-0">{{ conteur1 }}</span>
                                <button @click="conteur1--" key="bB" class="text-btn lg:pr-0">-</button>
                            </p>
                        </div>

                        <div class="flex items-center mt-4">
                            <div v-if="!visible1" class="flex items-center  lg:transform lg:-translate-y-[166px]">
                                <img src="/public/icon-reply.svg" alt="" class="mx-auto">
                                <button @click="visible1 = true" class="text-num p-2">
                                    Reply
                                </button>
                            </div>
                            <div v-else class="flex flex-col items-center  lg:transform lg:-translate-y-[166px]">
                                <div class="flex items-center">
                                    <div>
                                        <div v-if="!open" class="flex justify-center items-center">
                                            <img src="/public/icon-delete.svg" alt="">
                                            <div>
                                                <button class="p-2 text-sup" @click="pop = true">
                                                    Delete
                                                </button>
                                                <div>
                                                    <div v-if="isPopupOpen"
                                                        class="fixed inset-0 bg-red-300 bg-opacity-50 flex justify-center items-center">
                                                        <div
                                                            class="bg-white pt-9 rounded-3xl shadow-lg max-w-md w-full">
                                                            FLDSFDLK
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="/public/icon-edit.svg" alt="" class="pl-3">
                                            <button class="p-2 text-num" @click="open = true">
                                                Edit
                                            </button>
                                        </div>
                                        <div v-else class="flex w-full pt-5 justify-center items-center gap-4">
                                            <div>
                                                <img src="/public/avatars/image-juliusomo.png" alt="" class="h-6 w-6">
                                            </div>
                                            <div class="">
                                                <input type="text" placeholder="Add a comment..."
                                                    class="w-full rounded-xl h-24 pl-4  border pb-10">
                                            </div>
                                            <div class="flex justify-between pt-4">

                                                <div>
                                                    <button class="text-white bg-num py-3 px-4 rounded-lg"
                                                        type="submit">
                                                        SEND
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div class="relative">
                <div class="border-2 w-1 h-[530px]  mt-4 absolute lg:ml-12 z-10"></div>
            </div>

            <div class="bg-white px-4 py-4 mt-4 ml-4 rounded-xl lg:ml-24">
                <div class="flex ">
                    <img src="/public/avatars/image-ramsesmiron.png" alt="avatar" class="w-8 h-8">
                    <p class="pl-4 text-textcol ">
                        ramsesmiron <span class="text-textdes pl-4">1 week ago</span>
                    </p>
                </div>
                <div class=" pt-4 text-textdes">
                    <p>
                        <span class="text-num">@maxblagun</span>
                        {{ msg2 }}
                    </p>
                    <div class="flex justify-between items-center">
                        <div class="bg-bgcol flex rounded-xl mt-4">
                            <p class="px-6 py-2">
                                <button @click="conteur2++" key="bA" class="pr-4 text-btn">+</button>
                                <span class="text-num pr-4"> {{ conteur2 }}</span>
                                <button @click="conteur2--" key="bB" class=" text-btn">-</button>
                            </p>
                        </div>
                        <div class="flex items-center mt-4">
                            <div v-if="!visible2" class="flex items-center">
                                <img src="/public/icon-reply.svg" alt="" class="mx-auto">
                                <button @click="visible2 = true" class="text-num p-2">
                                    Reply
                                </button>
                            </div>
                            <div v-else class="flex flex-col items-center">
                                <div class="flex items-center">
                                    <img src="/public/icon-delete.svg" alt="">
                                    <button class="p-2 text-sup">
                                        Delete
                                    </button>
                                    <img src="/public/icon-edit.svg" alt="" class="pl-3">
                                    <button class="p-2 text-num ">
                                        Edit
                                    </button>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white px-4 py-4 mt-4 ml-4 rounded-xl lg:ml-24">
                <div class="flex ">
                    <img src="/public/avatars/image-juliusomo.png" alt="avatar" class="w-8 h-8">
                    <p class="pl-4 text-textcol ">
                        juliusomo <span class="text-white bg-num p-1 text-xs ml-2"> you</span> <span
                            class="text-textdes pl-4">1 month ago</span>
                    </p>
                </div>
                <div class=" pt-4 text-textdes">
                    <p>
                        <span class="text-num ">@ramsesmiron</span>
                        {{ msg3 }}
                    </p>
                    <div class="flex justify-between items-center">
                        <div class="bg-bgcol flex rounded-xl mt-4">
                            <p class="px-6 py-2">
                                <button @click="conteur3++" key="bA" class="pr-4 text-btn">+</button>
                                <span class="text-num pr-4"> {{ conteur3 }}</span>
                                <button @click="conteur3--" key="bB" class=" text-btn">-</button>
                            </p>
                        </div>
                        <div class="flex items-center mt-4">
                            <div v-if="!visible3" class="flex items-center">
                                <img src="/public/icon-reply.svg" alt="" class="mx-auto">
                                <button @click="visible3 = true" class="text-num p-2">
                                    Reply
                                </button>
                            </div>
                            <div v-else class="flex flex-col items-center">
                                <div class="flex items-center">
                                    <img src="/public/icon-delete.svg" alt="">
                                    <button class="p-2 text-sup">
                                        Delete
                                    </button>
                                    <img src="/public/icon-edit.svg" alt="" class="pl-3">
                                    <button class="p-2 text-num ">
                                        Edit
                                    </button>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="text-textdes bg-white mt-4 px-4 py-4 rounded-xl z-30 lg:flex lg:gap-4">
                <!-- Avatar en premier sur lg -->
                <div class="flex items-center lg:order-1 translate-y-36 lg:translate-y-0 ">
                    <img src="/public/avatars/image-juliusomo.png" alt="" class="h-8 w-8 ">
                </div>

                <!-- Input en deuxième sur lg -->
                <div class="lg:order-2 w-full">
                    <input type="text" placeholder="Add a comment..." class="w-full rounded-xl h-24 pl-4 border pb-10">
                </div>

                <!-- Bouton en dernier sur lg -->
                <div class="flex items-center pt-4 lg:order-3 float-right">
                    <button class="text-white bg-num py-3 px-8 rounded-lg" type="submit">
                        SEND
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isPopupOpen: false,
            pop: false,
            open: false,
            conteur: 12,
            visible: false,

            conteur1: 5,
            visible1: false,

            conteur2: 4,
            visible2: false,

            conteur3: 2,
            visible3: false,
            msg: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design, and the responsiveness at various breakpoints works really well.",
            msg1: "Woah, your peoject looks awesome! How long have you been coding for? I'm still new, but think I want to drive into Reaxt as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            msg2: "If you're still new, I'd recommend focusing on the fundamentals of Html, CSS, and JS before considerinf React. It-s very tempting to jump ahead but lay a solid foundation first.",
            msg3: "I couldn-t agree more with this. Everything moves so fast and it alxays seems like everyone knows the newest libary/framework.but the fundamentals are what stay constant."
        }
    },
    methods() {

    }
}

</script>