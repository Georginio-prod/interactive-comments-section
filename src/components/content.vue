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

                    <p class="lg:pl-16">

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

                            <div class="flex items-center mt-4">
                                <!-- Bouton Reply -->
                                <div v-if="!visible" class="flex items-center lg:transform lg:-translate-y-[166px]">
                                    <img src="/public/icon-reply.svg" alt="" class="mx-auto">
                                    <button @click="visible = true" class="text-num p-2">Reply</button>
                                </div>

                                <!-- Boutons Delete et Edit -->
                                <div v-else class="flex flex-col items-center lg:transform lg:-translate-y-[166px]">
                                    <div class="flex items-center">
                                        <!-- Bouton Delete avec popup -->
                                        <img src="/public/icon-delete.svg" alt="">
                                        <button class="p-2 text-sup" @click="openDeletePopup">Delete</button>

                                        <!-- Popup Delete -->
                                        <div v-if="isDeletePopupOpen"
                                            class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                            <div
                                                class="bg-white p-9 rounded-3xl shadow-lg max-w-md w-full lg:w-96 lg:p-12">
                                                <p class="text-lg font-bold mb-4">Delete Comment</p>
                                                <p class="mb-8">
                                                    Are you sure you want to delete this comment? This will remove the
                                                    comment and can’t be undone.
                                                </p>
                                                <!-- Boutons en flex -->
                                                <div class="flex gap-3">
                                                    <button @click="closeDeletePopup"
                                                        class="bg-gray-500 text-white py-2 px-7 rounded">
                                                        NO, CANCEL
                                                    </button>
                                                    <button @click="deleteComment"
                                                        class="bg-red-500 text-white py-2 px-7 rounded">
                                                        YES, DELETE
                                                    </button>
                                                </div>
                                            </div>
                                        </div>




                                        <!-- Bouton Edit -->
                                        <img src="/public/icon-edit.svg" alt="" class="pl-3">
                                        <button class="p-2 text-num" @click="openEditCard">Edit</button>
                                    </div>
                                </div>
                            </div>

                        
                    </div>
                </div>
            </div>
            <div>
                <!-- Carte de commentaire avec l'input -->
                <div v-if="showEditCard" class="text-textdes bg-white mt-4 px-4 py-4 rounded-xl z-30 lg:flex lg:gap-4">
                    <!-- Avatar en premier sur lg -->
                    <div
                        class="flex items-center lg:order-1 translate-y-36 lg:translate-y-0 lg:flex lg:items-start lg:justify-start">
                        <img src="/public/avatars/image-juliusomo.png" alt="" class="h-8 w-8 lg:w-auto">
                    </div>

                    <!-- Input en deuxième sur lg -->
                    <div class="lg:order-2 w-full">
                        <textarea placeholder="Add a comment..." class="w-full rounded-xl h-24 pl-4 border pb-10"
                            v-model="text">
                        </textarea>
                    </div>

                    <!-- Bouton en dernier sur lg -->
                    <div
                        class="flex items-center pt-4 lg:order-3 float-right lg:justify-start lg:items-start lg:-translate-y-3">
                        <button class="text-white bg-num py-3 px-8 rounded-lg" @click="sendComment">
                            SEND
                        </button>
                    </div>
                </div>

                <!-- Zone où le message envoyé sera affiché -->
                <div v-if="commentSent" class="mt-4 p-4 bg-white rounded-lg">
                    <p>{{ text }}</p>
                </div>
            </div>

            <div class="bg-white px-4 py-4 mt-4 rounded-xl lg:pt-6 lg:h-40">
                <div class="flex lg:px-16">
                    <img src="/public/avatars/image-maxblagun.png" alt="avatar" class="w-8 h-8">
                    <p class="pl-4 text-textcol ">
                        maxblagun <span class="text-textdes pl-4">2 weeks ago</span>
                    </p>
                </div>
                <div class="pt-4 text-textdes">
                    <p class="lg:pl-16">{{ msg1 }}</p>
                    <div class="flex justify-between items-center">

                        <div
                            class="bg-bgcol flex rounded-xl mt-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:transform lg:-translate-y-[135px]">
                            <p class="px-6 py-2 lg:flex lg:flex-col lg:px-4 lg:items-center lg:justify-center">
                                <button @click="conteur1++" class="pr-4 text-btn lg:pr-0">+</button>
                                <span class="text-num pr-4 lg:pr-0">{{ conteur1 }}</span>

                                <button @click="conteur1--" key="bB" class="text-btn lg:pr-0">-</button>

                            </p>
                        </div>

                        <div class="flex items-center mt-4">

                            <div v-if="!visible1" class="flex items-center  lg:transform lg:-translate-y-[166px]">

                                <img src="/public/icon-reply.svg" alt="" class="mx-auto">
                                <button @click="visible1 = true" class="text-num p-2">Reply</button>
                            </div>

                            <!-- Boutons Delete et Edit -->
                            <div v-else class="flex flex-col items-center lg:transform lg:-translate-y-[166px]">
                                <div class="flex items-center">
                                    <!-- Bouton Delete avec popup -->
                                    <img src="/public/icon-delete.svg" alt="">
                                    <button class="p-2 text-sup" @click="openDeletePopup">Delete</button>

                                    <!-- Popup Delete -->
                                    <div v-if="isDeletePopupOpen"
                                        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                        <div class="bg-white p-9 rounded-3xl shadow-lg max-w-md w-full lg:w-96 lg:p-12">
                                            <p class="text-lg font-bold mb-4">Delete Comment</p>
                                            <p class="mb-8">
                                                Are you sure you want to delete this comment? This will remove the
                                                comment and can’t be undone.
                                            </p>
                                            <!-- Boutons en flex -->
                                            <div class="flex gap-3">
                                                <button @click="closeDeletePopup"
                                                    class="bg-gray-500 text-white py-2 px-7 rounded">
                                                    NO, CANCEL
                                                </button>
                                                <button @click="deleteComment"
                                                    class="bg-red-500 text-white py-2 px-7 rounded">
                                                    YES, DELETE
                                                </button>
                                            </div>
                                        </div>
                                    </div>




                                    <!-- Bouton Edit -->
                                    <img src="/public/icon-edit.svg" alt="" class="pl-3">
                                    <button class="p-2 text-num" @click="openEditCard">Edit</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <!-- Carte de commentaire avec l'input -->
                <div v-if="showEditCard" class="text-textdes bg-white mt-4 px-4 py-4 rounded-xl z-30 lg:flex lg:gap-4">
                    <!-- Avatar en premier sur lg -->
                    <div
                        class="flex items-center lg:order-1 translate-y-36 lg:translate-y-0 lg:flex lg:items-start lg:justify-start">
                        <img src="/public/avatars/image-juliusomo.png" alt="" class="h-8 w-8 lg:w-auto">
                    </div>

                    <!-- Input en deuxième sur lg -->
                    <div class="lg:order-2 w-full">
                        <textarea placeholder="Add a comment..." class="w-full rounded-xl h-24 pl-4 border pb-10"
                            v-model="text">
                        </textarea>
                    </div>

                    <!-- Bouton en dernier sur lg -->
                    <div
                        class="flex items-center pt-4 lg:order-3 float-right lg:justify-start lg:items-start lg:-translate-y-3">
                        <button class="text-white bg-num py-3 px-8 rounded-lg" @click="sendComment">
                            SEND
                        </button>
                    </div>
                </div>

                <!-- Zone où le message envoyé sera affiché -->
                <div v-if="commentSent" class="mt-4 p-4 bg-white rounded-lg">
                    <p>{{ text }}</p>
                </div>
            </div>

            <div class="relative">
                <div class="border-2 w-1 h-[530px]  mt-4 absolute lg:ml-12 z-10 lg:h-96"></div>
            </div>

            <div class="bg-white px-4 py-4 mt-4 ml-4 rounded-xl lg:ml-24 lg:h-40">
                <div class="flex lg:pl-16 ">
                    <img src="/public/avatars/image-ramsesmiron.png" alt="avatar" class="w-8 h-8">
                    <p class="pl-4 text-textcol ">
                        ramsesmiron <span class="text-textdes pl-1">1 week ago</span>
                    </p>
                </div>
                <div class=" pt-4 text-textdes">
                    <p class="lg:pl-16 pr-6">
                        <span class="text-num">@maxblagun</span>
                        {{ msg2 }}
                    </p>
                    <div class="flex justify-between items-center ">
                        <div
                            class="bg-bgcol flex rounded-xl mt-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:transform lg:-translate-y-[135px]">
                            <p class="px-6 py-2 lg:flex lg:flex-col lg:px-4 lg:items-center lg:justify-center">
                                <button @click="conteur2++" key="bA" class="pr-4 text-btn lg:pr-0">+</button>
                                <span class="text-num pr-4 lg:pr-0">{{ conteur2 }}</span>
                                <button @click="conteur2--" key="bB" class="text-btn lg:pr-0">-</button>
                            </p>
                        </div>

                        <div class="flex items-center mt-4">
                                <!-- Bouton Reply -->
                                <div v-if="!visible" class="flex items-center lg:transform lg:-translate-y-[166px]">
                                    <img src="/public/icon-reply.svg" alt="" class="mx-auto">
                                    <button @click="visible = true" class="text-num p-2">Reply</button>
                                </div>

                                <!-- Boutons Delete et Edit -->
                                <div v-else class="flex flex-col items-center lg:transform lg:-translate-y-[166px]">
                                    <div class="flex items-center">
                                        <!-- Bouton Delete avec popup -->
                                        <img src="/public/icon-delete.svg" alt="">
                                        <button class="p-2 text-sup" @click="openDeletePopup">Delete</button>

                                        <!-- Popup Delete -->
                                        <div v-if="isDeletePopupOpen"
                                            class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                            <div
                                                class="bg-white p-9 rounded-3xl shadow-lg max-w-md w-full lg:w-96 lg:p-12">
                                                <p class="text-lg font-bold mb-4">Delete Comment</p>
                                                <p class="mb-8">
                                                    Are you sure you want to delete this comment? This will remove the
                                                    comment and can’t be undone.
                                                </p>
                                                <!-- Boutons en flex -->
                                                <div class="flex gap-3">
                                                    <button @click="closeDeletePopup"
                                                        class="bg-gray-500 text-white py-2 px-7 rounded">
                                                        NO, CANCEL
                                                    </button>
                                                    <button @click="deleteComment"
                                                        class="bg-red-500 text-white py-2 px-7 rounded">
                                                        YES, DELETE
                                                    </button>
                                                </div>
                                            </div>
                                        </div>




                                        <!-- Bouton Edit -->
                                        <img src="/public/icon-edit.svg" alt="" class="pl-3">
                                        <button class="p-2 text-num" @click="openEditCard">Edit</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div>
                <!-- Carte de commentaire avec l'input -->
                <div v-if="showEditCard" class="text-textdes bg-white mt-4 px-4 py-4 rounded-xl z-30 lg:flex lg:gap-4 lg:ml-24">
                    <!-- Avatar en premier sur lg -->
                    <div
                        class="flex items-center lg:order-1 translate-y-36 lg:translate-y-0 lg:flex lg:items-start lg:justify-start">
                        <img src="/public/avatars/image-juliusomo.png" alt="" class="h-8 w-8 lg:w-auto">
                    </div>

                    <!-- Input en deuxième sur lg -->
                    <div class="lg:order-2 w-full">
                        <textarea placeholder="Add a comment..." class="w-full rounded-xl h-24 pl-4 border pb-10"
                            v-model="text">
                        </textarea>
                    </div>

                    <!-- Bouton en dernier sur lg -->
                    <div
                        class="flex items-center pt-4 lg:order-3 float-right lg:justify-start lg:items-start lg:-translate-y-3">
                        <button class="text-white bg-num py-3 px-8 rounded-lg" @click="sendComment">
                            SEND
                        </button>
                    </div>
                </div>

                <!-- Zone où le message envoyé sera affiché -->
                <div v-if="commentSent" class="mt-4 p-4 bg-white rounded-lg">
                    <p>{{ text }}</p>
                </div>
            </div>

            <div class="bg-white px-4 py-4 mt-4 ml-4 rounded-xl lg:ml-24 lg:h-40">
                <div class="flex lg:pl-16 ">
                    <img src="/public/avatars/image-juliusomo.png" alt="avatar" class="w-8 h-8">
                    <p class="pl-4 text-textcol ">
                        juliusomo <span class="text-white bg-num p-1 text-xs "> you</span> <span class="text-textdes">2
                            days ago</span>
                    </p>
                </div>
                <div class=" pt-4 text-textdes">
                    <p class="lg:pl-16">
                        <span class="text-num ">@ramsesmiron</span>
                        {{ msg3 }}
                    </p>
                    <div class="flex justify-between items-center">
                        <div
                            class="bg-bgcol flex rounded-xl mt-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:transform lg:-translate-y-[135px]">
                            <p class="px-6 py-2 lg:flex lg:flex-col lg:px-4 lg:items-center lg:justify-center">
                                <button @click="conteur3++" key="bA" class="pr-4 text-btn lg:pr-0">+</button>
                                <span class="text-num pr-4 lg:pr-0">{{ conteur3 }}</span>
                                <button @click="conteur3--" key="bB" class="text-btn lg:pr-0">-</button>
                            </p>
                        </div>
                        <div class="flex items-center mt-4">
                                <!-- Bouton Reply -->
                                <div v-if="!visible" class="flex items-center lg:transform lg:-translate-y-[166px]">
                                    <img src="/public/icon-reply.svg" alt="" class="mx-auto">
                                    <button @click="visible = true" class="text-num p-2">Reply</button>
                                </div>

                                <!-- Boutons Delete et Edit -->
                                <div v-else class="flex flex-col items-center lg:transform lg:-translate-y-[166px]">
                                    <div class="flex items-center">
                                        <!-- Bouton Delete avec popup -->
                                        <img src="/public/icon-delete.svg" alt="">
                                        <button class="p-2 text-sup" @click="openDeletePopup">Delete</button>

                                        <!-- Popup Delete -->
                                        <div v-if="isDeletePopupOpen"
                                            class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                            <div
                                                class="bg-white p-9 rounded-3xl shadow-lg max-w-md w-full lg:w-96 lg:p-12">
                                                <p class="text-lg font-bold mb-4">Delete Comment</p>
                                                <p class="mb-8">
                                                    Are you sure you want to delete this comment? This will remove the
                                                    comment and can’t be undone.
                                                </p>
                                                <!-- Boutons en flex -->
                                                <div class="flex gap-3">
                                                    <button @click="closeDeletePopup"
                                                        class="bg-gray-500 text-white py-2 px-7 rounded">
                                                        NO, CANCEL
                                                    </button>
                                                    <button @click="deleteComment"
                                                        class="bg-red-500 text-white py-2 px-7 rounded">
                                                        YES, DELETE
                                                    </button>
                                                </div>
                                            </div>
                                        </div>




                                        <!-- Bouton Edit -->
                                        <img src="/public/icon-edit.svg" alt="" class="pl-3">
                                        <button class="p-2 text-num" @click="openEditCard">Edit</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div>
                <!-- Carte de commentaire avec l'input -->
                <div v-if="showEditCard" class="text-textdes bg-white mt-4 px-4 py-4 rounded-xl z-30 lg:flex lg:gap-4 lg:ml-24">
                    <!-- Avatar en premier sur lg -->
                    <div
                        class="flex items-center lg:order-1 translate-y-36 lg:translate-y-0 lg:flex lg:items-start lg:justify-start">
                        <img src="/public/avatars/image-juliusomo.png" alt="" class="h-8 w-8 lg:w-auto">
                    </div>

                    <!-- Input en deuxième sur lg -->
                    <div class="lg:order-2 w-full">
                        <textarea placeholder="Add a comment..." class="w-full rounded-xl h-24 pl-4 border pb-10"
                            v-model="text">
                        </textarea>
                    </div>

                    <!-- Bouton en dernier sur lg -->
                    <div
                        class="flex items-center pt-4 lg:order-3 float-right lg:justify-start lg:items-start lg:-translate-y-3">
                        <button class="text-white bg-num py-3 px-8 rounded-lg" @click="sendComment">
                            SEND
                        </button>
                    </div>
                </div>

                <!-- Zone où le message envoyé sera affiché -->
                <div v-if="commentSent" class="mt-4 p-4 bg-white rounded-lg">
                    <p>{{ text }}</p>
                </div>
            </div>

            <div class="text-textdes bg-white mt-4 px-4 py-4 rounded-xl z-30 lg:flex ">
                <!-- Avatar en premier sur lg -->
                <div
                    class="flex items-center lg:order-1 translate-y-36 lg:translate-y-0 lg:flex lg:items-start lg:justify-start">
                    <img src="/public/avatars/image-juliusomo.png" alt="" class="h-8 w-8 ">
                </div>


                <!-- Input en deuxième sur lg -->

                <div class="lg:order-2 w-full gap-4">

                    <textarea placeholder="Add a comment..." class="w-full rounded-xl h-24 pl-4 border pb-10">

                    </textarea>

                </div>

                <!-- Bouton en dernier sur lg -->
                <div
                    class="flex items-center pt-4 lg:order-3 float-right lg:justify-start lg:items-start lg:-translate-y-3">
                    <button class="text-white bg-num py-3 px-8 rounded-lg " type="submit">
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
            showEditCard: false,
            commentSent: false,
            isDeletePopupOpen: false,

            conteur2: 4,
            visible2: false,

            conteur3: 2,
            visible3: false,
            msg: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design, and the responsiveness at various breakpoints works really well.",
            msg1: "Woah, your peoject looks awesome! How long have you been coding for? I'm still new, but think I want to drive into Reaxt as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            msg2: "If you're still new, I'd recommend focusing on the fundamentals of Html, CSS, and JS before considerinf React. It-s very tempting to jump ahead but lay a solid foundation first.",
            msg3: "I couldn-t agree more with this. Everything moves so fast and it alxays seems like everyone knows the newest libary/framework.but the fundamentals are what stay constant.",

            text: "@amyrobson Great work! You’ve done an excellent job!"
        }
    },
    methods: {
        sendComment() {
            // Afficher le commentaire envoyé
            if (this.text.trim()) {
                this.commentSent = true; // Rendre visible la zone du commentaire envoyé
                this.showEditCard = false; // Optionnel: masquer la carte d'édition après envoi
            }
        },
        openDeletePopup() {
            this.isDeletePopupOpen = true;
            this.showEditCard = false; // Fermer le popup Edit si ouvert
        },
        closeDeletePopup() {
            this.isDeletePopupOpen = false;
        },
        deleteComment() {
            // Ajoutez ici la logique pour supprimer le commentaire
            console.log("Comment deleted");
            this.isDeletePopupOpen = false;
        },
        openEditCard() {
            this.showEditCard = true;
            this.isDeletePopupOpen = false; // Fermer le popup Delete si ouvert
        }
    }


}

</script>