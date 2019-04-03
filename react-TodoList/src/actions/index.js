import {ADD_TODO_ITME,DEL_TODO_ITME} from './actionTypes';

export const add_todo = (value)=>({type:ADD_TODO_ITME,value:value});
export const del_todo = (index)=>({type:DEL_TODO_ITEM,index:index});