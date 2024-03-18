<template>
    <div class="flex flex-col items-center h-full gap-16 py-8 px-4">
        <Icon name="logo-symbol" class="shrink-0 w-12 h-12" />
        <div class="flex flex-col gap-8 sidebar">
            <Icon name="dashboard" class="sidebar-btn" />
            <Icon name="case" class="sidebar-btn" />
            <Icon name="admin" class="sidebar-btn sidebar-btn-active" />
            <ProfilePhoto class="sidebar-btn sidebar-btn-profile" />
            <Icon name="logout" class="sidebar-btn" />
        </div>
    </div>
</template>

<script>

import ProfilePhoto from './ProfilePhoto.vue';

export default {
    components: {
        ProfilePhoto,
    }
}

</script>

<style scoped>

.sidebar-btn {
    width: 48px;
    height: 48px;
    padding: 10px;
    color: var(--dark);
    border-radius: 14px;
    transition: background-color 0.2s;
}

.sidebar-btn:hover {
    background-color: var(--gray-light);
}

.sidebar-btn-profile {
    width: 52px;
    height: 52px;
    padding: 8px;
}

.sidebar-btn-active {
    color: white;
    background-color: var(--mint-green);
}

</style>