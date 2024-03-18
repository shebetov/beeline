<template>
  <div class="flex flex-row h-full w-full max-w-full max-h-full">

    <Sidebar />

    <div class="grow flex flex-col items-left w-1/2 gap-6 p-20">
      <h1>
        Henry Ford Health
      </h1>
      <p class="font-title text-pretty">
        Contact Beeline if you need to make changes to your healthcare system.
      </p>
    </div>

    <div class="grow flex flex-col w-1/2 pt-6 pb-4 my-4 mr-8 bg-white rounded-2xl">

      <div class="flex flex-row justify-between items-end px-9">
        <div class="flex flex-col items-left mb-4 mx-3">
          <div class="font-label text-gray">
            Manage
          </div>
          <h3 class="font-title-bold">
            Your Beeline Account
          </h3>
        </div>

        <div class="flex flex-row items-end">
          <div class="tab tab-active">
            Practicies & Offices
          </div>
          <div class="tab">
            Presribers
          </div>
          <div class="tab">
            Users
          </div>
        </div>
      </div>

      <hr class="pt-px mt-px bg-gray-light border-0">

      <div class="font-title m-8 mb-1">
        Practicies & Offices List
      </div>

      <div class="grow table-scroll relative ml-8 mb-8 mr-4 mt-1">
        <PracticiesTable :data="practiciesData" />
      </div>

      <hr class="pt-px mt-px bg-gray-light border-0">

      <div class="flex flex-row justify-end items-end gap-4 mx-3 mt-4">
        <button class="secondary-button">
          Add Office
        </button>
        <button class="secondary-button">
          Add Practice
        </button>
      </div>
    </div>


  </div>

</template>

<script>

import Sidebar from './components/Sidebar.vue'
import PracticiesTable from './components/PracticiesTable.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    PracticiesTable,
  },
  data() {
    return {
      practiciesData: [
        {
          name: 'Henry Ford Medical Center - Grosse Pointe',
          npi: '0123456789',
          offices: [
            {
              name: 'Beaumont Physicians',
              npi: '0123456789'
            },
            {
              name: 'Grosse Point Primary Care',
              npi: '0123456789'
            },
            {
              name: 'Preventative Medicine Detroit',
              npi: '0123456789'
            }
          ]
        },
        {
          name: 'Henry Ford Medical Center - Harper Woods',
          npi: '0123456789',
          offices: [
            {
              name: 'Williams Family Medicine',
              npi: '0123456789'
            },
            {
              name: 'Dr. Susan Wheeler, MD',
              npi: '0123456789'
            },
            {
              name: 'Harper Clinic',
              npi: '0123456789'
            }
          ]
        },
        {
          name: 'Henry Ford Medical Center - Wilcox',
          npi: '0123456789',
          offices: [
            {
              name: 'River Park Internal Medicine',
              npi: '0123456789'
            },
            {
              name: 'Family Health Care - White Cloud',
              npi: '0123456789'
            },
            {
              name: 'Dr. Robert Smith, MD',
              npi: '0123456789'
            }
          ]
        },
        {
          name: 'Henry Ford Medical Center - Grosse Pointe',
          npi: '0123456789',
          offices: [
            {
              name: 'Beaumont Physicians',
              npi: '0123456789'
            },
            {
              name: 'Grosse Point Primary Care',
              npi: '0123456789'
            },
            {
              name: 'Preventative Medicine Detroit',
              npi: '0123456789'
            }
          ]
        },
        {
          name: 'Henry Ford Medical Center - Harper Woods',
          npi: '0123456789',
          offices: [
            {
              name: 'Williams Family Medicine',
              npi: '0123456789'
            },
            {
              name: 'Dr. Susan Wheeler, MD',
              npi: '0123456789'
            },
            {
              name: 'Harper Clinic',
              npi: '0123456789'
            }
          ]
        },
        {
          name: 'Henry Ford Medical Center - Wilcox',
          npi: '0123456789',
          offices: [
            {
              name: 'River Park Internal Medicine',
              npi: '0123456789'
            },
            {
              name: 'Family Health Care - White Cloud',
              npi: '0123456789'
            },
            {
              name: 'Dr. Robert Smith, MD',
              npi: '0123456789'
            }
          ]
        },
      ],
    }
  },
}

</script>

<style scoped>
.tab {
  color: var(--gray);
  padding: 10px 12px;
  transition: color 0.2s ease-in-out;
}

.tab:hover {
  color: var(--dark);
  border-bottom: 1px solid var(--mint-green);
  margin-bottom: -1px;
}

.tab-active {
  font-weight: 600;
  color: var(--dark);
  border-bottom: 1px solid var(--mint-green);
  margin-bottom: -1px;
}
</style>
