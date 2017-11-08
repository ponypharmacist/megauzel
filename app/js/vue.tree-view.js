Vue.component('treeview', Vue.extend({
  template: '#treeview-template',
  props:
  {
    id:
    {
      Type: String,
      default: 'tv_' + Math.ceil(Math.random()*100000), /* Unique identifier for treeview. */
    },
    value: [String, Number], /* Value of the selected node in the tree. */
    model: /* Initial tree composition. */
    {
      Type: Array,
      default: function() {
        return [];
      },
    },
    /**
     * Additional CSS class to apply to component.
     * @var string
     */
    class:
    {
      Type: String,
      default: '',
    },
    /**
     * Name of the child nodes property.
     * @var string
     */
    children:
    {
      Type: String,
      default: 'nodes',
    },
    /**
     * Name of the property holding the node name.
     * @var string
     */
    labelname:
    {
      Type: String,
      default: 'label',
    },
    /**
     * Name of the property holding the node value.
     * @var string
     */
    valuename:
    {
      Type: String,
      default: 'value',
    },
    /**
     * Parent node model index.
     * @var int
     */
    parent:
    {
      Type: Number,
      default: undefined,
    },
  },
  methods:
  {
    /**
     * Selects a node from tree view.
     * @param int  index Tree index selected.
     * @param mixed value Value selected.
     */
    select: function(index, value)
    {
      // Unselect from current level, children and parents
      this.toggleOpen(index);
      this.$set('value', value);
      // Call to event.
      this.$dispatch('treeview_click', {
        label: this.model[index][this.labelname],
        value: this.model[index][this.valuename],
      });
    },
    /**
     * Toggles open / close node.
     * @param int index Index to open
     */
    toggleOpen: function(index)
    {
      // Return if no children
      if (!this.areValidNodes(this.model[index][this.children]))
        return;
      // Init
      if (this.model[index].isOpened == undefined)
        this.$set('model['+index+'].isOpened', this.hasSelectedChild(index));
      // General
      this.$set('model['+index+'].isOpened', !this.model[index].isOpened);
    },
    /**
     * Returns flag indicating if nodes are valid or not.
     * @param array nodes Nodes to validate.
     */
    areValidNodes: function(nodes)
    {
      return nodes != undefined
        && Object.prototype.toString.call(nodes) === '[object Array]'
        && nodes.length > 0;
    },
    /**
     * Returns flag indicating if tree view has a node selected.
     * @return bool
     */
    hasSelected: function()
    {
      // Check children
      for (var i in this.model) {
        if (this.isSelected(i) || this.hasSelectedChild(i))
          return true;
      }
      return false;
    },
    /**
     * Returns flag indicating if node at specified index has a child selcted or not.
     * @param int index Index to check
     * @return bool
     */
    hasSelectedChild: function(index)
    {
      for (var i in this.$children) {
        if (this.$children[i].parent == index
          && this.$children[i].hasSelected()
        )
          return true;
      }
      return false;
    },
    /**
     * Returns flag indicating if node at specified index is selected or not.
     * @param int index Index to check
     * @return bool
     */
    isSelected: function(index)
    {
      return this.value && this.model[index][this.valuename] == this.value;
    },

    /**
     * Returns flag indicating if node is opened or not.
     * @param int index Index to check
     * @return bool
     */
    isOpened: function(index)
    {
      return (this.model[index].isOpened != undefined && this.model[index].isOpened)
        || this.hasSelectedChild(index);
    },
  },
}));
