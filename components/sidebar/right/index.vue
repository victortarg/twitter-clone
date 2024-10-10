<template>
  <div class="flex flex-col">
    
    <!-- Card de previa dos trendings topics -->
    <SidebarRightPreviewCard title="Trends no Brasil">
        <SidebarRightPreviewCardItem v-for="Trends in TrendItens">
            <div class="">
                <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ Trends.title }}</h2>
                <p class="text-xs text-gray-400">{{ Trends.count }}</p>
            </div>
        </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    
    <!-- Card de previa de sujestoes de quem seguir -->
    <SidebarRightPreviewCard title="Sugestões para seguir">
        <SidebarRightPreviewCardItem v-for="QuemSeguir in QuemSeguirItens">
            <div class="flex flex-row justify-between items-center p-2">
                <div class="flex flex-row">
                    <img class="w-10 h-10 rounded-full" :src="QuemSeguir.image" :alt="QuemSeguir.name">
                    <div class="flex flex-col ml-2">
                        <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ QuemSeguir.name }}</h1>
                        <p class="text-xs text-gray-400">{{ QuemSeguir.id }}</p>
                    </div>
                </div>

                <div class="flex h-full">
                    <Button class="px-4 py-2 font-bold text-xs text-white rounded-full bg-black dark:text-black dark:bg-white">
                        Seguir
                    </Button>
                </div>

            </div>
        </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  
  </div>
</template>

<script lang="ts" setup>
const TrendItens = ref([
    {
        title: '#VitaoFaz21',
        count: '1.2M Tweets'
    },
    {
        title: 'Aniversário do Vitão',
        count: '5.3M Tweets'
    },
    {
        title: '#CarnasEmOlinda',
        count: '2.0k Tweets'
    },
])

const QuemSeguirItens = ref([
    {
        name: 'Victor Targino',
        id: '@victortarg',
        image: 'https://picsum.photos/200/200'
    },
    {
        name: 'Victor Targino',
        id: '@victortarg',
        image: 'https://picsum.photos/200/200'
    },
    {
        name: 'Victor Targino',
        id: '@victortarg',
        image: 'https://picsum.photos/200/200'
    },
])
</script>