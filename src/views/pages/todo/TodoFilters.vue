<!-- =========================================================================================
    File Name: TodoAddNew.vue
    Description: Add new todo component

========================================================================================== -->


<template>
    <div class="todo__filters-container">

        <!-- all -->
        <div class="px-6 py-4">
            <div class="flex cursor-pointer" :class="{'text-primary': todoFilter == 'all'}" @click="applyTodoFilter('all')">
                <feather-icon icon="MailIcon" :svgClasses="[{'text-primary stroke-current': todoFilter == 'all'}, 'h-6 w-6']"></feather-icon>
                <span class="text-lg ml-3">All</span>
            </div>
        </div>

        <vs-divider></vs-divider>

        <vs-divider></vs-divider>

        <div class="px-6 py-4">
            <h5>Filters</h5>
            <div class="todo__lables-list">
                <div class="todo__label flex items-center mt-6 cursor-pointer" v-for="(tag, index) in todoTags" :key="index" @click="applyTodoFilter(tag.value)">
                    <div class="h-4 w-4 rounded-full mr-4" :class="'bg-' + tag.color"></div>
                    <span class="text-lg" :class="{'text-primary': todoFilter == tag.value}">{{ tag.text }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default{
    data() {
        return {
            todoFilters: [
                { filterName: 'Starred', filter: 'starred', icon: 'StarIcon' },
                { filterName: 'Important', filter: 'important', icon: 'InfoIcon' },
                { filterName: 'Done', filter: 'done', icon: 'CheckIcon' },
                { filterName: 'Trashed', filter: 'trashed', icon: 'TrashIcon' },
            ]
        }
    },
    computed: {
        todoTags() {
            return this.$store.state.todo.todoTags;
        },
        todoFilter() {
            return this.$store.state.todo.todoFilter;
        }
    },
    methods: {
        applyTodoFilter(filterName) {
            this.$store.dispatch('todo/applyTodoFilter', filterName);
            this.$emit('closeSidebar', false);
        },
    },
}
</script>
