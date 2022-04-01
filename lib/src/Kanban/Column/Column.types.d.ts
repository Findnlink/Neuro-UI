import Item from '../Item/Item.types';
import React from 'react';
export default interface ColumnProps {
    title: string;
    color: string;
    position: number;
    _id: string;
    items: Item[];
    createdAt?: string;
    updatedAt?: string;
    dragHandleProps?: any;
    i18n?: {
        addNew: string;
        remove: string;
        edit: string;
    };
    index?: number;
    isDragging?: boolean;
    _addItem?: (columnIndex: number, columnId: string) => void;
    _deleteItem?: (columnIndex: number, itemIndex: number) => void;
    _editItem?: (columnIndex: number, itemIndex: number, text: string) => void;
    _deleteColumn?: (columnIndex: number) => void;
    _editColumn?: (columnIndex: number, title: string, color: string) => void;
    newColumn: boolean;
    setNewColumn: React.Dispatch<React.SetStateAction<boolean>>;
    provided?: any;
    _isEditingColumn?: (columnIndex: number, isEditing: boolean) => void;
    _isEditingItem?: (columnIndex: number, itemIndex: number, isEditing: boolean) => void;
    editList?: string[];
    locked?: boolean;
}
