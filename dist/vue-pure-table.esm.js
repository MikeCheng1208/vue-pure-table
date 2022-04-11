import { defineComponent, computed, openBlock, createElementBlock, createElementVNode, Fragment, renderList, normalizeStyle, toDisplayString, renderSlot } from 'vue';

var script = /*#__PURE__*/defineComponent({
  name: 'VuePureTable',
  // vue component name
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    }
  },

  setup(props, _ref) {
    let {
      slots
    } = _ref;
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

    return {
      props,
      rowsArr,
      isShowSlot,
      slots
    };
  }

});

const _hoisted_1 = {
  class: "vue-pure-table"
};
const _hoisted_2 = {
  id: "columns"
};
const _hoisted_3 = {
  id: "rows",
  class: "flex-col"
};
const _hoisted_4 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("ul", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.props.columns, col => {
    return openBlock(), createElementBlock("li", {
      key: col.label,
      class: "table_columns",
      style: normalizeStyle(col.style)
    }, toDisplayString(col.label), 5);
  }), 128))]), createElementVNode("ul", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rowsArr, (rowItem, idx) => {
    return openBlock(), createElementBlock("li", {
      key: idx
    }, [createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(rowItem, (row, r) => {
      return openBlock(), createElementBlock("li", {
        key: row.id,
        style: normalizeStyle(_ctx.props.columns[r].style)
      }, [!_ctx.isShowSlot(_ctx.props.columns[r].field) ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(row), 1)) : renderSlot(_ctx.$slots, _ctx.props.columns[r].field, {
        key: 1,
        data: {
          rowData: row,
          rowTarget: _ctx.rowsArr[idx]
        }
      })], 4);
    }), 128))])]);
  }), 128))])]);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n*[data-v-7f001e7c]{\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.vue-pure-table[data-v-7f001e7c] {\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  width: 100%;\n}\n#columns[data-v-7f001e7c]{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 45px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.table_columns[data-v-7f001e7c] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-right: 1px solid #e0e0e0;\n}\n.table_columns[data-v-7f001e7c]:last-child {\n  border: 0px;\n}\n.flex-col[data-v-7f001e7c] {\n  flex-direction: column;\n}\n.flex-col > li[data-v-7f001e7c] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  border-bottom: 1px solid #e0e0e0;\n}\n.flex-col > li[data-v-7f001e7c]:last-child {\n  border-bottom: 0px;\n}\n.flex-col > li > ul[data-v-7f001e7c] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 68px;\n}\n.flex-col > li > ul > li[data-v-7f001e7c] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-7f001e7c";

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('VuePureTable', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export { entry_esm as default };
