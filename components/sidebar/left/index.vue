<template>
    <div class="h-screen flex flex-col">

        <div class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20" :class="defaultTransition">
            <NuxtLink to="/">
                <div class="w-8 h-8">
                    <LogoTwitter/>
                </div>
            </NuxtLink>
        </div>
        
        <div class="mt-2 space-y-3">

            <SidebarLeftTab active>
                <template v-slot:icon>
                    <HomeIcon />
                </template>
                <template v-slot:name>
                    Home
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <HashtagIcon />
                </template>
                <template v-slot:name>
                    Explorar
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <BellIcon />
                </template>
                <template v-slot:name>
                    Notificações
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <InboxIcon />
                </template>
                <template v-slot:name>
                    Mensagens
                </template>
            </SidebarLeftTab>
            
            <SidebarLeftTab>
                <template v-slot:icon>
                    <BookmarkIcon />
                </template>
                <template v-slot:name>
                    Salvos
                </template>
            </SidebarLeftTab>
            
            <SidebarLeftTab>
                <template v-slot:icon>
                    <DocumentTextIcon />
                </template>
                <template v-slot:name>
                    Lista
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <UserIcon />
                </template>
                <template v-slot:name>
                    Perfil
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <InformationCircleIcon />
                </template>
                <template v-slot:name>
                    Mais
                </template>
            </SidebarLeftTab>

        </div>
    </div>
</template>

<script lang="ts" setup>
    import { HomeIcon } from '@heroicons/vue/24/solid'
    import {HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, InformationCircleIcon } from '@heroicons/vue/24/outline'
    const { defaultTransition } = UseTailwindConfig();
</script>