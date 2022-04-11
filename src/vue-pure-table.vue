<script>
import { defineComponent, computed } from 'vue';

export default /*#__PURE__*/defineComponent({
  name: 'VueEasyTable', // vue component name
  props: {
      columns: {
        type: Array,
        default: () => [],
      },
      rows: {
        type: Array,
        default: () => [],
      },
    },
    setup(props, { slots }) {
      const columnsTitle = computed(() => props.columns.map(item => item.field));

      const rowsArr = computed(() => {
        return props.rows.map(item => {
          const rowParent = [];
          Object.keys(item).forEach((key, idx) => {
            if (columnsTitle.value[idx]) {
              rowParent.push(item[columnsTitle.value[idx]]);
            }
          });
          return rowParent;
        });
      });

      const isShowSlot = slotData => Object.keys(slots).includes(slotData);

      return { props, rowsArr, isShowSlot, slots };
    },
});
</script>

<template>
  <div class="vue-easy-table">
    <ul id="columns">
      <li v-for="col in props.columns" :key="col.label" class="table_columns" :style="col.style">
        {{ col.label }}
      </li>
    </ul>
    <ul id="rows" class="flex-col">
      <li v-for="(rowItem, idx) in rowsArr" :key="idx">
        <ul>
          <li v-for="(row, r) in rowItem" :key="row.id" :style="props.columns[r].style">
            <p v-if="!isShowSlot(props.columns[r].field)">{{ row }}</p>
            <slot v-else :name="props.columns[r].field" :data="{ rowData: row, rowTarget: rowsArr[idx] }"></slot>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.vue-easy-table {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 100%;
}
#columns{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  border-bottom: 1px solid #e0e0e0;
}
.table_columns {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e0e0e0;
}
.table_columns:last-child {
  border: 0px;
}
.flex-col {
  flex-direction: column;
}
.flex-col > li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
}
.flex-col > li:last-child {
  border-bottom: 0px;
}
.flex-col > li > ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
}
.flex-col > li > ul > li {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
