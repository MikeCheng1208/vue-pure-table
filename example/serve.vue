<script>
import { defineComponent, ref } from 'vue';
import VuePureTable from '@/vue-pure-table.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VuePureTable
  },

  setup(){

    const columns = ref([
      { id: 0, label: 'Product Number', field: 'serial', style: { width: '12%', color: 'red' } },
      { id: 1, label: 'Product Name', field: 'product', style: { width: '12%', color: 'coral' } },
      { id: 2, label: 'Price', field: 'sellingPrice', style: { width: '12%', color: 'green' } },
      { id: 3, label: 'Narrative', field: 'discount', style: { width: '57%', color: 'blue' } },
      { id: 5, label: 'Other', field: 'other', style: { width: '7%', color: 'blueviolet' } },
    ]);

    const rows = ref([
      {
        id: 0,
        serial: 'TAPX4689',
        product: 'apple',
        sellingPrice: 'TWD 20',
        discount: '美國好吃大蘋果',
        other: 'other',
      },
      {
        id: 0,
        serial: 'TAPX4689',
        product: 'pineapple',
        sellingPrice: 'TWD 50',
        discount: '住在深海的大鳳梨',
        other: 'other',
      },
      {
        id: 1,
        serial: 'TAPX4689',
        product: 'tangerinr',
        sellingPrice: 'TWD 70',
        discount: '朱志清的橘子',
        other: 'other',
      },
      {
        id: 2,
        serial: 'TAPX4689',
        product: 'pear',
        sellingPrice: 'TWD 20',
        discount: '好吃多汁的水梨',
        other: 'other',
      },
      {
        id: 3,
        serial: 'TAPX4689',
        product: 'cherry',
        sellingPrice: 'TWD 30',
        discount: '加州紅櫻桃',
        other: 'other',
      },
      {
        id: 4,
        serial: 'TAPX4689',
        product: 'banana',
        sellingPrice: 'TWD 40',
        discount: '猴子吃香蕉',
        other: 'other',
      },
    ]);


    return {columns, rows}
  }
});
</script>

<template>
  <div id="app">
    <vue-pure-table :columns="columns" :rows="rows">
       <template #product="{data}">
         <h3>😏 {{ data.rowData }}</h3>
       </template>
    </vue-pure-table>
  </div>
</template>
