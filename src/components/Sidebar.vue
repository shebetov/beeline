<template>
    <div class="flex flex-col items-center h-full py-8 px-4">
        <LogoSymbol class="shrink-0 w-12 h-12 mb-16" />
        <div class="flex flex-col gap-8 sidebar">
            <DashboardIcon class="sidebar-btn" />
            <CaseIcon class="sidebar-btn" />
            <AdminIcon class="sidebar-btn-active" />
            <ProfilePhoto class="sidebar-btn-profile" />
            <LogoutIcon class="sidebar-btn" />
        </div>
    </div>
</template>

<script>

import LogoSymbol from '@/components/icons/LogoSymbol.vue'
import AdminIcon from '@/components/icons/AdminIcon.vue'
import CaseIcon from '@/components/icons/CaseIcon.vue'
import DashboardIcon from '@/components/icons/DashboardIcon.vue'
import LogoutIcon from '@/components/icons/LogoutIcon.vue'
import ProfilePhoto from '@/components/ProfilePhoto.vue'

export default {
    name: 'Sidebar',
    components: {
        LogoSymbol,
        AdminIcon,
        CaseIcon,
        DashboardIcon,
        LogoutIcon,
        ProfilePhoto,
    }
}

</script>

<style scoped>

.sidebar-btn {
    width: 52px;
    height: 52px;
    padding: 12px;
    color: var(--dark);
    border-radius: 16px;
}

.sidebar-btn:hover {
    background-color: var(--light-gray);
}

.sidebar-btn-profile {
    @apply sidebar-btn;
    width: 54px;
    height: 54px;
    padding: 10px;
}

.sidebar-btn-active {
    @apply sidebar-btn;
    color: white;
    background-color: var(--mint-green);
}

</style>