class DataTableInstance {
  static VIEW_ACTION = "VIEW";
  static EDIT_ACTION = "EDIT";
  static DELETE_ACTION = "DELETE";
  showActionColumn = false;
  headers = [];
  data = {
    entityKeys: [],
    entities: [],
  };
  actions = [
    {
      actionHandaler: (func) => func(),
      actionClasses: "",
      actionType: this.VIEW_ACTION,
    },
  ];
}

export default DataTableInstance;
