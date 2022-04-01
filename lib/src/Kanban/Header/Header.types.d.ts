import React from 'react';
export interface HeaderProps {
    text: string;
    itemCount: number;
    color: string;
    dragHandleProps: any;
    _deleteColumn: (columnIndex: number) => void;
    _editColumn?: (columnIndex: number, title: string, color: string) => void;
    columnIndex: number;
    isDragging?: boolean;
    i18n?: {
        addNew: string;
        remove: string;
        edit: string;
    };
    newColumn: boolean;
    setNewColumn: React.Dispatch<React.SetStateAction<boolean>>;
    _isEditingColumn?: (columnIndex: number, isEditing: boolean) => void;
    locked?: boolean;
}
