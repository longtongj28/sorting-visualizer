import React from 'react';
import { AiTwotoneSetting } from "react-icons/ai";
import {AiFillContacts, AiFillHome , AiOutlineClose, AiFillQuestionCircle
} from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'About Heap Sort',
        path: '/heapSort',
        icon: <AiFillQuestionCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'About Bubble Sort',
        path: '/bubbleSort',
        icon: <AiFillQuestionCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'About Insertion Sort',
        path: '/insertionSort',
        icon: <AiFillQuestionCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'About Selection Sort',
        path: '/selectionSort',
        icon: <AiFillQuestionCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'About Quick Sort',
        path: '/quickSort',
        icon: <AiFillQuestionCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'About Merge Sort',
        path: '/mergeSort',
        icon: <AiFillQuestionCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact me',
        path: '/contactMe',
        icon: <AiFillContacts/>,
        cName: 'nav-text'
    },
];