<template>
    <table class="w-full text-left">
        <thead class="font-small-subtitle-bold bg-white sticky top-0">
            <tr>
                <th scope="col" class="w-full">
                    Name
                </th>
                <th scope="col">
                    NPI
                </th>
            </tr>
        </thead>
        <tbody>
            <template v-for="practice in data">
                <tr class="h-4 border-t border-gray-light"></tr>
                <tr>
                    <th scope="row" class="whitespace-nowrap font-body-bold">
                        <div class="font-body-bold">
                            {{ practice.name }}
                        </div>
                        <div class="row-label font-label text-default">
                            Practice
                        </div>
                    </th>
                    <td class="flex items-start">
                        {{ practice.npi }}
                    </td>
                </tr>
                <template v-for="office in practice.offices">
                    <tr>
                        <th scope="row" class="child-row whitespace-nowrap font-body-bold">
                            <div class="font-body-bold">
                                {{ office.name }}
                            </div>
                            <div class="row-label font-label text-default">
                                Office
                            </div>
                        </th>
                        <td class="flex items-start">
                            {{ office.npi }}
                        </td>
                    </tr>
                </template>
            </template>
            <tr class="h-4 border-t border-gray-light"></tr>
        </tbody>
    </table>
</template>

<script>

export default {
    name: 'PracticiesTable',
    props: {
        data: {
            type: Array,
            required: true,
        },
    }
}

</script>

<style scoped>
thead th {
    padding: 12px 0px;
}

tbody th,
tbody td {
    padding: 10px 0px;
}

.child-row {
    padding-left: 20px;
}

.row-label {
    padding-top: 2px;
    color: var(--gray);
}
</style>
