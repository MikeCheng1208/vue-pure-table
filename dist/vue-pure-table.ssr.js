'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = /*#__PURE__*/vue.defineComponent({
  name: 'VueEasyTable',
  // vue component name
  props: {
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rows: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var columnsTitle = vue.computed(function () {
      return props.columns.map(function (item) {
        return item.field;
      });
    });
    var rowsArr = vue.computed(function () {
      return props.rows.map(function (item) {
        var rowParent = [];
        Object.keys(item).forEach(function (key, idx) {
          if (columnsTitle.value[idx]) {
            rowParent.push(item[columnsTitle.value[idx]]);
          }
        });
        return rowParent;
      });
    });

    var isShowSlot = function isShowSlot(slotData) {
      return Object.keys(slots).includes(slotData);
    };

    return {
      props: props,
      rowsArr: rowsArr,
      isShowSlot: isShowSlot,
      slots: slots
    };
  }
});var _hoisted_1 = {
  class: "vue-pure-table"
};
var _hoisted_2 = {
  id: "columns"
};
var _hoisted_3 = {
  id: "rows",
  class: "flex-col"
};
var _hoisted_4 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.createElementVNode("ul", _hoisted_2, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.props.columns, function (col) {
    return vue.openBlock(), vue.createElementBlock("li", {
      key: col.label,
      class: "table_columns",
      style: vue.normalizeStyle(col.style)
    }, vue.toDisplayString(col.label), 5);
  }), 128))]), vue.createElementVNode("ul", _hoisted_3, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.rowsArr, function (rowItem, idx) {
    return vue.openBlock(), vue.createElementBlock("li", {
      key: idx
    }, [vue.createElementVNode("ul", null, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(rowItem, function (row, r) {
      return vue.openBlock(), vue.createElementBlock("li", {
        key: row.id,
        style: vue.normalizeStyle(_ctx.props.columns[r].style)
      }, [!_ctx.isShowSlot(_ctx.props.columns[r].field) ? (vue.openBlock(), vue.createElementBlock("p", _hoisted_4, vue.toDisplayString(row), 1)) : vue.renderSlot(_ctx.$slots, _ctx.props.columns[r].field, {
        key: 1,
        data: {
          rowData: row,
          rowTarget: _ctx.rowsArr[idx]
        }
      })], 4);
    }), 128))])]);
  }), 128))])]);
}function styleInject(css, ref) {
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
}var css_248z = "\n*[data-v-076b9632]{\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.vue-pure-table[data-v-076b9632] {\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  width: 100%;\n}\n#columns[data-v-076b9632]{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 45px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.table_columns[data-v-076b9632] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-right: 1px solid #e0e0e0;\n}\n.table_columns[data-v-076b9632]:last-child {\n  border: 0px;\n}\n.flex-col[data-v-076b9632] {\n  flex-direction: column;\n}\n.flex-col > li[data-v-076b9632] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  border-bottom: 1px solid #e0e0e0;\n}\n.flex-col > li[data-v-076b9632]:last-child {\n  border-bottom: 0px;\n}\n.flex-col > li > ul[data-v-076b9632] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 68px;\n}\n.flex-col > li > ul > li[data-v-076b9632] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-076b9632";// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('VuePureTable', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;