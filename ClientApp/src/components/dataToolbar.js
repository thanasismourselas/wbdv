export const toolbarActions = [
    {
        id: '1',
        name: 'First',
        ico: 'glyphicon glyphicon-step-backward',
        className: 'pageLeft',
    },
    {
        id: '3',
        name: '',
        ico: 'glyphicon glyphicon-chevron-up',
        className: 'pageUp',
    },
    {
        id: '4',
        name: '',
        ico: 'glyphicon glyphicon-chevron-down',
        className: 'pageDown',
    },
    {
        id: '2',
        name: 'Last',
        ico: 'glyphicon glyphicon-step-forward',
        className: 'pageRight',
    },

    {
        id: '5',
        name: 'Save',
        ico: 'glyphicon glyphicon-save',
        className: 'toolbarButton',
        event:'closeWindowAndRefresh',
      
    }, {
        id: '6',
        name: 'Edit',
        ico: 'glyphicon glyphicon-edit',
        className: 'toolbarButton',
    }, {
        id: '7',
        name: 'Cancel',
        ico: 'glyphicon glyphicon-remove-circle',
        className: 'toolbarButton',
        event: 'closeWindow',
    },
    {
        id: '8',
        name: 'Exit',
        ico: 'glyphicon glyphicon-off',
        className: 'toolbarButton',
        event: 'closeWindow',
    }
];
