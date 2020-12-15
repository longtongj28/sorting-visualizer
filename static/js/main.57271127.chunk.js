(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){},46:function(e,t,r){},52:function(e,t,r){},53:function(e,t,r){"use strict";r.r(t);var s=r(1),a=r(2),o=r.n(a),n=r(13),c=r.n(n),i=(r(32),r(4)),l=r(21),b=r(22),j=r(26),h=r(25),d=(r(33),r(34),function(e){return Object(s.jsx)("div",{className:"backdrop"})}),u=r(9),x=r(3),m=(r(7),r(5)),O=r.n(m);var p=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),r=t[0],o=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("button",{className:"sortInfoButton",onClick:function(){return o(!0)},children:[Object(s.jsx)(x.c,{className:"side-icon"})," About Bubble Sort"]}),Object(s.jsx)("div",{className:"infoBox",children:Object(s.jsxs)(O.a,{closeTimeoutMS:150,style:{overlay:{backgroundColor:"rgba(0,0,0,0.4)"},content:{boxShadow:"2px 2px 30px black",background:"#2C2C34",top:"60px",bottom:"60px",left:"60px",border:"none",right:"60px"}},isOpen:r,onRequestClose:function(){return o(!1)},children:[Object(s.jsxs)("div",{className:"aboutSortInfo",children:[Object(s.jsxs)("h2",{id:"top",className:"titles",children:["Basic Concept of Bubble Sort",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["1. In an unsorted array, have two pointers point to the first two elements and compare them and swap into ascending order if necessary.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"2. Then, increment the two pointers and do the same comparison and swap if necessary.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"3. Repeat step 2 until the end of the array has been reached.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"4. Then, repeat steps 1-3 all over again, but this time, go until you've reached the second to last element (length - 1). Remember arrays start count from zero, so you'll have to subtract 1 again if you are coding it.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),'5. Cool fact/trick: the reason why it\'s called "bubble sort" is because the largest element of the array will "bubble" its way to the end of the array. This explains the reasoning behind step 4 and why we only need to go to the second to last element. The last element is already the largest!',Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("h2",{className:"titles",children:["Pseudocode of Bubble Sort",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:['for every element "i" of index 0 to arrayLength-1,',Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),'\u2003\u2003for every element "j" of index 0 to arrayLength - 1 - i, (see step 5 from "Basic Concept" above for the intuition)',Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"\u2003\u2003\u2003\u2003if the element at j is greater than the element after it (j+1), swap them.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"\u2003\u2003if no swap has occured during an iteration, that means the array is sorted, and we can forgo the remaining loop, improving the time complexity.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("h2",{className:"titles",children:["Big O Time Complexity",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:['This sorting algorithm is easy to understand, and is a nice "brute force" solution. However, the time complexity is O(n^2) in its worst case, and is slightly improved with some modifications, which I have included in the pseudocode. You can tell through the nested for loop that, for each element for the array, iterates the whole array again.',Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Check out this ",Object(s.jsx)("a",{className:"link",target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/watch?v=o4bAoo_gFBU",children:"lecture/video"})," for a much more detailed explanation on everything about this sorting algorithm.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{className:"link backTop",href:"#top",children:"Back to top"})]})]}),Object(s.jsx)("button",{align:"center",className:"close-button",onClick:function(){return o(!1)},children:Object(s.jsx)(x.d,{color:"#EEEEEE",className:"close-icon"})})]})})]})};var f=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),r=t[0],o=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("button",{className:"sortInfoButton",onClick:function(){return o(!0)},children:[Object(s.jsx)(x.c,{className:"side-icon"})," About Heap Sort"]}),Object(s.jsx)("div",{className:"infoBox",children:Object(s.jsxs)(O.a,{closeTimeoutMS:150,style:{overlay:{backgroundColor:"rgba(0,0,0,0.4)"},content:{background:"#B9314F",top:"60px",bottom:"60px",left:"60px",border:"none",right:"60px"}},isOpen:r,onRequestClose:function(){return o(!1)},children:[Object(s.jsxs)("div",{id:"top",className:"aboutSortInfo",children:[Object(s.jsxs)("h2",{className:"titles",children:["Basic Concept of Heap Sort",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:['The heap sort algorithm makes use of organizing data into a "max heap."',Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"A max heap is a binary tree, where the greatest node is located at the root.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"So, given an array, we need to first turn it into a max heap tree.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),'1. To do this, we first need to "heapify" all the nodes that aren\'t leaf nodes. (the leaf nodes are already sorted according to max heap)',Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"tree-example",children:["(0)",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"(1)\u2003(2)",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"(3)\xa0 (4)\u2003(5)\xa0 (6)",Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),"We can calculate the index of the first non-leaf node (2) by floor(num_of_nodes/2 - 1). In the above example, it's floor(7/2-1) = 2.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),'2. Then, we need to "delete" the root AND heapify the tree since we modified it. ',Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),'To "delete" a node from an array, we can simply swap the last node with the root. In the picture above, it would swap the (0) with (6). (the first and last element of array)',Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"3. Repeat step 2 until there are no more nodes left. Above, it should happen 3 times, for (2), (1), and (0). If done correctly, the tree should be deleted from greatest to least.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("h3",{className:"sub-headers",children:'How do we "heapify"?'}),Object(s.jsx)("br",{}),'1. After finding the node we want to heapify, we want to section off the node and its children and ONLY focus on those nodes (max of 3 nodes). Deleting nodes in arrays means swapping them, we also don\'t want to be touching the nodes that are "deleted." (usually, they are towards the end of the array)',Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"2. While we're in the subtree, let our largest value equal the root, and compare with the left and right children. Change the largest value to the a child if it is larger.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"3. If the largest value has changed from the original root value, we swap the nodes at the root and where the new largest location is found.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"4. Now, our subtree (max 3 nodes) has become a max heap. However, if there are grandchildren to the root we were working with, we need to recursively heapify the rest of the subtree beyond what we originally worked with.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("h2",{className:"titles",children:["Pseudocode of Heap Sort",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["// Build our max heap (reorganize our array) ",Object(s.jsx)("br",{}),"// Heapify starting from our first non-leaft node, decrement until our 0th index.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"for every non-leaf node, array indices from (floor(num_of_nodes/2 -1)) to 0,",Object(s.jsx)("br",{}),"\u2003 \u2003 heapify the node and its subtree.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"for every node in our tree",Object(s.jsx)("br",{}),'\u2003 \u2003 swap the root with the last node. (this is synonymous with "deleting" in a tree)',Object(s.jsx)("br",{}),"\u2003 \u2003 heapify the array (since we modified the tree structure)",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"// heapify function",Object(s.jsx)("br",{}),"// this function moves the largest element in a tree to the root.",Object(s.jsx)("br",{}),"// The size_of_tree is dynamic and changes depending on the subtree that you are currently on. Likewise, root_index depends on the subtree as well.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"heapify(array, size_of_tree, root_index):",Object(s.jsx)("br",{}),"\u2003 index_of_largest = root_index",Object(s.jsx)("br",{}),"\u2003 left_child_of_root = 2*root_index + 1",Object(s.jsx)("br",{}),"\u2003 right_child_of_root = 2*root_index + 2",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"\u2003 While the left_child_of_root is < the size of the tree AND array[right_child_of_root] > array[index_of_largest]",Object(s.jsx)("br",{}),"\u2003\u2003\u2003 index_of_largest = left_child_of_root",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"\u2003 While the right_child_of_root is < the size of the tree AND array[right_child_of_root] > array[index_of_largest]",Object(s.jsx)("br",{}),"\u2003\u2003\u2003 index_of_largest = right_child_of_root",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"\u2003  if index_of_largest is not root_index, that means it changed,",Object(s.jsx)("br",{}),"\u2003\u2003\u2003swap the placed of the index_of_largest and the root_index",Object(s.jsx)("br",{}),"\u2003\u2003\u2003heapify(array, size_of_tree, index_of_largest)",Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("h2",{className:"titles",children:["Big O Time Complexity",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["The heap sort algorithm is a bit complicated due to the use of trees and recursion. The time complexity of the heapify function is O(logn). This is because the function makes use of a bianry tree, where every node is sorted to a particular order and has 2 children.",Object(s.jsx)("br",{}),"The time complexity of the building of the max heap of the array takes O(n) time compelxity, since there are two for loops. However, the heapify operations inside the for loops take O(logn) time.",Object(s.jsx)("br",{}),"Thus, the overall time complexity would be O(2 * n * logn), which can be simplified to O(nlogn).",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Check out this ",Object(s.jsx)("a",{className:"link",target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/watch?v=Q_eia3jC9Ts",children:"lecture/video"})," for a much more detailed explanation on everything about this sorting algorithm.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{className:"link backTop",href:"#top",children:"Back to top"})]})]}),Object(s.jsx)("button",{className:"close-button",onClick:function(){return o(!1)},children:Object(s.jsx)(x.d,{color:"#EEEEEE",className:"close-icon"})})]})})]})};var g=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),r=t[0],o=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("button",{className:"sortInfoButton",onClick:function(){return o(!0)},children:[Object(s.jsx)(x.c,{className:"side-icon"})," About Insertion Sort"]}),Object(s.jsx)("div",{className:"infoBox",children:Object(s.jsxs)(O.a,{closeTimeoutMS:150,style:{overlay:{backgroundColor:"rgba(0,0,0,0.4)"},content:{background:"#330036",top:"60px",bottom:"60px",left:"60px",border:"none",right:"60px"}},isOpen:r,onRequestClose:function(){return o(!1)},children:[Object(s.jsxs)("div",{id:"top",className:"aboutSortInfo",children:[Object(s.jsxs)("h2",{className:"titles",children:["Basic Concept of Insertion Sort",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["1. Iterate through the entire array. ",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"2. For each element, compare it with every element behind it UNTIL you've found the first element smaller than it, ",Object(s.jsx)("br",{}),"\u2003OR you've reached the beginning of the array and run out of options.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"3. Swap the element at the index currently being checked, and the element found meeting one or both of the conditions from step 2.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("h2",{className:"titles",children:["Pseudocode of Insertion Sort",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["for every element i of the array,",Object(s.jsx)("br",{}),"\u2003let j = i.",Object(s.jsx)("br",{}),"\u2003while( j > 0 and array[j-1] > array[j])",Object(s.jsx)("br",{}),"\u2003\u2003\u2003swap(array[j-1], array[j]);",Object(s.jsx)("br",{}),"\u2003\u2003\u2003j--;",Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("h2",{className:"titles",children:["Big O Time Complexity",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["On average, this sorting algorithm takes O(n^2). This can be explained by the for loop iterating every element, and checking elements before the index currently traversed. In the worst case, the algorithm would need to check every element before the index currently traversed.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Check out this ",Object(s.jsx)("a",{className:"link",target:"_blank",href:"https://www.youtube.com/watch?v=yCxV0kBpA6M",children:"lecture/video"})," for a much more detailed explanation on everything about this sorting algorithm.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{className:"link backTop",rel:"noreferrer",href:"#top",children:"Back to top"})]})]}),Object(s.jsx)("button",{className:"close-button",onClick:function(){return o(!1)},children:Object(s.jsx)(x.d,{color:"#EEEEEE",className:"close-icon"})})]})})]})};var y=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),r=t[0],o=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("button",{className:"sortInfoButton",onClick:function(){return o(!0)},children:[Object(s.jsx)(x.a,{className:"side-icon"})," About/Contact me"]}),Object(s.jsx)("div",{className:"infoBox",children:Object(s.jsxs)(O.a,{closeTimeoutMS:150,style:{overlay:{backgroundColor:"rgba(0,0,0,0.4)"},content:{background:"#2D1115",top:"60px",bottom:"60px",left:"60px",border:"none",right:"60px"}},isOpen:r,onRequestClose:function(){return o(!1)},children:[Object(s.jsxs)("div",{id:"top",className:"aboutSortInfo",children:[Object(s.jsxs)("h2",{className:"titles",children:["How was this website made?",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["This website was made entirely on React! It's definitely a good beginner project for learning the basics of the technology.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("h2",{className:"titles",children:["About me and my Programming",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsx)("p",{className:"paragraphs",children:"I'm a computer science student at Cal State Fullerton. I've recently began learning about web development (as of December 2020). Prior to this, I have had some experience with Python, and I can code comfortably with C++."}),Object(s.jsx)("br",{}),Object(s.jsxs)("h2",{className:"titles",children:["Contact Me",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["You can reach me through email at tong.johnson.28@gmail.com or on ",Object(s.jsx)("a",{className:"link",target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/johnson-tong-11311917a",children:"LinkedIn"}),". Here's my ",Object(s.jsx)("a",{className:"link",target:"_blank",rel:"nonreferrer",href:"https://github.com/longtongj28",children:"Github"})," if you'd like to check that out."]})]}),Object(s.jsx)("button",{className:"close-button",onClick:function(){return o(!1)},children:Object(s.jsx)(x.d,{color:"#EEEEEE",className:"close-icon"})})]})})]})};var v=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),r=t[0],o=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("button",{className:"sortInfoButton",onClick:function(){return o(!0)},children:[Object(s.jsx)(x.c,{className:"side-icon"})," About Merge Sort"]}),Object(s.jsx)("div",{className:"infoBox",children:Object(s.jsxs)(O.a,{closeTimeoutMS:150,style:{overlay:{backgroundColor:"rgba(0,0,0,0.4)"},content:{background:"#091540",top:"60px",bottom:"60px",left:"60px",border:"none",right:"60px"}},isOpen:r,onRequestClose:function(){return o(!1)},children:[Object(s.jsxs)("div",{id:"top",className:"aboutSortInfo",children:[Object(s.jsxs)("h2",{className:"titles",children:["Basic Concept of Merge Sort",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["The basic isea of merge sort is that the algorithm continually splits the array until there is only 1 element left in each subarray.",Object(s.jsx)("br",{}),"Then, we want to merge the subarrays back together into a sorted array. Similar to quick sort, operations are done separately on the halves of the array, recursively."]}),Object(s.jsx)("br",{}),Object(s.jsxs)("h2",{className:"titles",children:["Pseudocode of Merge Sort",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["function mergeSort(array, auxarray, start, end)",Object(s.jsx)("br",{}),"\u2003\u2003 if start == end return",Object(s.jsx)("br",{}),"\u2003\u2003 let middle = floor(start+end/2) ~~~ how to calculate the middle index",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"\u2003\u2003 mergeSort(array, auxarray, start, middle) ~~~ first half of the array",Object(s.jsx)("br",{}),"\u2003\u2003 mergeSort(array, auxarray, middle+1, end) ~~~ second half of the array",Object(s.jsx)("br",{}),"\u2003\u2003 merge(array, auxarray, start, middle, end)",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"function merge(array, start, middle, end) \u2003\u2003 let i = start, let j = middle + 1, let k = start",Object(s.jsx)("br",{}),"\u2003\u2003 while ( i <= middle and j <= end)",Object(s.jsx)("br",{}),"\u2003\u2003\u2003\u2003 if ( array[i] <= array[j] )",Object(s.jsx)("br",{}),"\u2003\u2003\u2003\u2003\u2003\u2003 array[k++] = array[i++]",Object(s.jsx)("br",{}),"\u2003\u2003\u2003\u2003 else",Object(s.jsx)("br",{}),"\u2003\u2003\u2003\u2003\u2003\u2003 array[k++] = auxarray[j++] ",Object(s.jsx)("br",{}),"\u2003\u2003 while ( i <= middle ) ~~~ if the second half of the array is completed ",Object(s.jsx)("br",{}),"\u2003\u2003\u2003\u2003 array[k++] = auxarray[i++]",Object(s.jsx)("br",{}),"\u2003\u2003 while ( j <= end ) ~~~ if the first half of the array is completed ",Object(s.jsx)("br",{}),"\u2003\u2003\u2003\u2003 array[k++] = auxarray[j++]",Object(s.jsx)("br",{})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("h2",{className:"titles",children:["Big O Time Complexity",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["The worst case time complexity for this algorithm is O(nlogn) and the average case is also O(nlogn). Similar to quick sort, this is the result of having to split the aray continuously in half and performing operations, which is O(logn), and having to traverse subarrays to rebuild/merge into the sorted array.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Check out this ",Object(s.jsx)("a",{className:"link",target:"_blank",href:"https://www.youtube.com/watch?v=jlHkDBEumP0",children:"lecture/video"})," for a much more detailed explanation on everything about this sorting algorithm.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{className:"link backTop",rel:"noreferrer",href:"#top",children:"Back to top"})]})]}),Object(s.jsx)("button",{className:"close-button",onClick:function(){return o(!1)},children:Object(s.jsx)(x.d,{color:"#EEEEEE",className:"close-icon"})})]})})]})};var w=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),r=t[0],o=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("button",{className:"sortInfoButton",onClick:function(){return o(!0)},children:[Object(s.jsx)(x.c,{className:"side-icon"})," About Quick Sort"]}),Object(s.jsx)("div",{className:"infoBox",children:Object(s.jsxs)(O.a,{closeTimeoutMS:150,style:{overlay:{backgroundColor:"rgba(0,0,0,0.4)"},content:{background:"#4A6C6F",top:"60px",bottom:"60px",left:"60px",border:"none",right:"60px"}},isOpen:r,onRequestClose:function(){return o(!1)},children:[Object(s.jsxs)("div",{id:"top",className:"aboutSortInfo",children:[Object(s.jsxs)("h2",{className:"titles",children:["Basic Concept of Quick Sort",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["First, a pivot element must be chosen. In my implementation, I chose the first element as the pivot element. ",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Second, the array is partitioned until the left side of the pivot contains all elements less than the pivot element, and where the right side of the pivot has all the elements greater than it. Eventually, the pivot becomes the middle of the array.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Third, the left side and the right side of the partitioned original array are also individually partitioned and sorted so that the first element of those subarrays becomes the middle pivot element.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Recursively perform these operations until the array is sorted. Remember that the pivot element is already in its sorted position, so it doesn't need to move."]}),Object(s.jsxs)("h2",{className:"titles",children:["Pseudocode of Quick Sort",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["function quickSort( array, lower_bound, upper_bound )",Object(s.jsx)("br",{}),"\u2003\u2003 if (lower_bound >= upper_bound) return; ",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"\u2003\u2003 let loc_of_pivot = partition( array, lower_bound, upper_bound )",Object(s.jsx)("br",{}),"\u2003\u2003 quickSort( array, lower_bound, loc_of_pivot - 1) ~~~partition from the beginning to the pivot spot",Object(s.jsx)("br",{}),"\u2003\u2003 quickSort( array, loc_of_pivot + 1, upper_bound ) ~~~ and partition from the pivot spot to the end",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"function partition(array, lower_bound, upper_bound)",Object(s.jsx)("br",{}),"\u2003\u2003 let pivot = auxArray[lower_bound] ~~~In my implentation I used the first element of an array be the pivot",Object(s.jsx)("br",{}),"\u2003\u2003 let start = lower_bound",Object(s.jsx)("br",{}),"\u2003\u2003 let end = upper_bound",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"\u2003\u2003 while ( start < end ) ",Object(s.jsx)("br",{}),"\u2003\u2003\u2003\u2003 while ( array[start] <= pivot ) ~~~ Starting form the left, find the first element that is greater than the pivot ",Object(s.jsx)("br",{}),"\u2003\u2003 \u2003\u2003 \u2003\u2003 start++",Object(s.jsx)("br",{}),"\u2003\u2003\u2003\u2003 while ( array[end] > pivot ) ~~~ Staring from the right side of the array, find the first element that is less than the pivot  ",Object(s.jsx)("br",{}),"\u2003\u2003 \u2003\u2003 \u2003\u2003 end--",Object(s.jsx)("br",{}),"\u2003\u2003\u2003\u2003 if (start < end)",Object(s.jsx)("br",{}),"\u2003\u2003\u2003\u2003\u2003\u2003 swap(array[start], array[end]) ~~~ start must be found before end to be swapped, so it can't be past the pivot element",Object(s.jsx)("br",{}),"\u2003\u2003 swap( array[lower_bound], array[end] ) ~~~~ swap the pivot element with 'end' index",Object(s.jsx)("br",{}),"\u2003\u2003 return end"]}),Object(s.jsxs)("h2",{className:"titles",children:["Big O Time Complexity",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:['The worst case scenario for this is O(n^2, where the "lower_bound" above is always the greatest or smallest element. ',Object(s.jsx)("br",{}),"The partitioning is O(logn) since we split the array into two subarrays continuously and employ a divide and conquer approach.",Object(s.jsx)("br",{}),"Thus, the average and best case is O(nlogn) time complexity, since the partitioning is O(logn) and we need to partition every element eventually.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Check out this ",Object(s.jsx)("a",{className:"link",target:"_blank",href:"https://www.youtube.com/watch?v=QN9hnmAgmOc",children:"lecture/video"})," for a much more detailed explanation on everything about this sorting algorithm.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{className:"link backTop",rel:"noreferrer",href:"#top",children:"Back to top"})]})]}),Object(s.jsx)("button",{className:"close-button",onClick:function(){return o(!1)},children:Object(s.jsx)(x.d,{color:"#EEEEEE",className:"close-icon"})})]})})]})};var N=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),r=t[0],o=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("button",{className:"sortInfoButton",onClick:function(){return o(!0)},children:[Object(s.jsx)(x.c,{className:"side-icon"})," About Selection Sort"]}),Object(s.jsx)("div",{className:"infoBox",children:Object(s.jsxs)(O.a,{closeTimeoutMS:150,style:{overlay:{backgroundColor:"rgba(0,0,0,0.4)"},content:{background:"#C57B57",top:"60px",bottom:"60px",left:"60px",border:"none",right:"60px"}},isOpen:r,onRequestClose:function(){return o(!1)},children:[Object(s.jsxs)("div",{id:"top",className:"aboutSortInfo",children:[Object(s.jsxs)("h2",{className:"titles",children:["Basic Concept of Selection Sort",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["1. Iterate through the entire array. ",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"2. At the current element, compare it to every element after it.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"3. If an element smaller than the current element was found, swap that element with the element currently being traversed. If the minimum is still the originally traversed element, continue onto the next element without swapping.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("h2",{className:"titles",children:["Pseudocode of Selection Sort",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["for every element i of the array,",Object(s.jsx)("br",{}),"\u2003let min = i.",Object(s.jsx)("br",{}),"\u2003for every element j after i,",Object(s.jsx)("br",{}),"\u2003\u2003\u2003if there is an element smaller,",Object(s.jsx)("br",{}),"\u2003\u2003\u2003\u2003min = j",Object(s.jsx)("br",{}),"\u2003if ( min != i )",Object(s.jsx)("br",{}),"\u2003\u2003\u2003swap( array[min], array[j] )",Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("h2",{className:"titles",children:["Big O Time Complexity",Object(s.jsx)("hr",{}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("p",{className:"paragraphs",children:["This algorithm has an O(n^2) time complexity in all cases. This is because for every element, you must check every element after it to complete an iteration. In general, this algorithm performs worse than insertion sort, although the algorithms are very similar.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Check out this ",Object(s.jsx)("a",{className:"link",target:"_blank",href:"https://www.youtube.com/watch?v=9oWd4VJOwr0",children:"lecture/video"})," for a much more detailed explanation on everything about this sorting algorithm.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{className:"link backTop",rel:"noreferrer",href:"#top",children:"Back to top"})]})]}),Object(s.jsx)("button",{className:"close-button",onClick:function(){return o(!1)},children:Object(s.jsx)(x.d,{color:"#EEEEEE",className:"close-icon"})})]})})]})},k=[{path:Object(s.jsx)(f,{}),cName:"nav-text"},{path:Object(s.jsx)(p,{}),cName:"nav-text"},{path:Object(s.jsx)(g,{}),cName:"nav-text"},{path:Object(s.jsx)(N,{}),cName:"nav-text"},{path:Object(s.jsx)(w,{}),cName:"nav-text"},{path:Object(s.jsx)(v,{}),cName:"nav-text"},{path:Object(s.jsx)(y,{}),cName:"nav-text"}],C=r(0);r(46);var S=function(){var e,t=Object(a.useState)(!1),r=Object(i.a)(t,2),o=r[0],n=r[1],c=function(){n(!o)};return o&&(e=Object(s.jsx)(d,{onclick:c})),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(C.b.Provider,{value:{color:"#fff"},children:[e,Object(s.jsx)("div",{className:"navbar",children:Object(s.jsx)(u.b,{to:"#",className:"menu-bars",children:Object(s.jsx)(x.e,{title:"Learn more about the site and the algorithms",color:"white",className:"settings-icon",onClick:c})})}),Object(s.jsx)("nav",{className:o?"nav-menu active":"nav-menu",children:Object(s.jsxs)("ul",{className:"nav-manu-items",children:[Object(s.jsx)("li",{className:"navbar-toggle",children:Object(s.jsx)(u.b,{to:"#",children:Object(s.jsx)(x.d,{className:"close",onClick:c})})}),Object(s.jsx)("div",{className:"menu-items",children:k.map((function(e,t){return Object(s.jsx)("li",{kay:t,className:e.cName,children:e.path})}))})]})})]})})};function _(e){var t=[];if(e.length<=1)return e;var r=e.slice();return B(e,0,e.length-1,r,t),t}function B(e,t,r,s,a){if(t!==r){var o=Math.floor((t+r)/2);B(s,t,o,e,a),B(s,o+1,r,e,a),function(e,t,r,s,a,o){var n=t,c=t,i=r+1;for(;c<=r&&i<=s;)o.push([c,i]),a[c]<=a[i]?(o.push([n,a[c]]),o.push([c,i]),e[n++]=a[c++]):(o.push([n,a[i]]),o.push([c,i]),e[n++]=a[i++]);for(;c<=r;)o.push([c,c]),o.push([n,a[c]]),o.push([c,c]),e[n++]=a[c++];for(;i<=s;)o.push([i,i]),o.push([n,a[i]]),o.push([i,i]),e[n++]=a[i++]}(e,t,o,r,s,a)}}function T(e){var t=[];return E(e,0,e.length-1,t),t}function E(e,t,r,s){if(!(t>=r)){var a=function(e,t,r,s){var a=e[t],o=t,n=r;for(;o<n;){for(;e[o]<=a;)o++;for(;e[n]>a;)n--;o<n&&(s.push([o,n]),s.push([o,e[n]]),s.push([n,e[o]]),s.push([o,n]),I(e,o,n))}return s.push([t,n]),s.push([t,e[n]]),s.push([n,e[t]]),s.push([t,n]),I(e,t,n),n}(e,t,r,s);E(e,t,a-1,s),E(e,a+1,r,s)}}function I(e,t,r){var s=e[t];e[t]=e[r],e[r]=s}function A(e){var t=[];return function(e,t,r){for(var s=Math.floor(t/2-1);s>=0;s--)F(e,t,s,r);for(var a=t-1;a>0;a--)r.push([0,a]),r.push([0,e[a]]),r.push([a,e[0]]),r.push([0,a]),I(e,0,a),F(e,a,0,r)}(e,e.length,t),t}function F(e,t,r,s){for(var a=r,o=2*r+1,n=2*r+2;o<t&&e[o]>e[a];)a=o;for(;n<t&&e[n]>e[a];)a=n;a!==r&&(s.push([a,r]),s.push([a,e[r]]),s.push([r,e[a]]),s.push([a,r]),I(e,a,r),F(e,t,a,s))}function M(e){var t=[];return function(e,t){for(var r=e.length,s=1;s<r;s++)for(var a=s;a>0&&e[a-1]>e[a];)t.push([a-1,a]),t.push([a-1,e[a]]),t.push([a,e[a-1]]),t.push([a-1,a]),I(e,a-1,a),a--}(e,t),t}function q(e){var t=[];return function(e,t){for(var r=e.length,s=0;s<r-1;s++){for(var a=s,o=s+1;o<r;o++)e[o]<e[a]&&(a=o);a!==s&&(t.push([s,a]),t.push([s,e[a]]),t.push([a,e[s]]),t.push([s,a]),I(e,s,a))}}(e,t),t}var D=r(24),R="#DAD2BC",P="#2EBFA5",H="#C5D86D",z=function(e){Object(j.a)(r,e);var t=Object(h.a)(r);function r(e){var s;return Object(l.a)(this,r),(s=t.call(this,e)).handleChangeSpeed=function(e){s.setState({speed:e.target.value})},s.handleChangeBars=function(e){s.setState({arrayBars:e.target.value}),s.resetArray()},s.state={array:[],arrayBars:50,speed:30},s}return Object(b.a)(r,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){for(var e,t,r=[],s=0;s<this.state.arrayBars;s++)r.push((e=7,t=550,Math.floor(Math.random()*(t-e+1)+e)));this.setState({array:r});var a,o=document.getElementsByClassName("btn disabled").length;console.log(o),o>0&&(a=!0),this.toggleButtons(a,"all")}},{key:"toggleButtons",value:function(e,t,r){var s=document.getElementsByClassName("btn disabled"),a=document.getElementsByClassName("slider");if(!1===e){for(var o=document.getElementsByClassName("btn sort");o.length>0;)o[0].className="btn disabled";for(var n=0;n<a.length;n++)a[n].disabled=!0;document.getElementsByClassName("btn")[0].className="btn disabled"}else if(!0===e&&"gen"===t)setTimeout((function(){s[0].className="btn";for(var e=0;e<a.length;e++)a[e].disabled=!1}),r*this.state.speed);else if(!0===e&&"all"===t)for(;s.length>0;)s[0].className="btn sort"}},{key:"mergeSort",value:function(){var e=this,t=_(this.state.array);this.toggleButtons(!1),this.toggleButtons(!0,"gen",t.length);for(var r=function(r){var s=document.getElementsByClassName("array-bar");if(r%3===0||r%3===2){var a=Object(i.a)(t[r],2),o=a[0],n=a[1],c=s[o].style,l=s[n].style;r%3===0&&setTimeout((function(){c.backgroundColor=P,l.backgroundColor=H}),r*e.state.speed),r%3===2&&setTimeout((function(){c.backgroundColor=R,l.backgroundColor=R}),r*e.state.speed)}else setTimeout((function(){var e=Object(i.a)(t[r],2),a=e[0],o=e[1];s[a].style.height="".concat(o,"px")}),r*e.state.speed)},s=0;s<t.length;s++)r(s)}},{key:"quickSort",value:function(){var e=T(this.state.array);this.toggleButtons(!1),this.toggleButtons(!0,"gen",e.length),this.showSwap(e)}},{key:"bubbleSort",value:function(){var e=this,t=function(e){for(var t=[],r=e.length,s=0;s<r-1;s++){for(var a=0,o=0;o<r-1-s;o++){if(t.push([o,o+1]),e[o]>e[o+1]){t.push([o,e[o+1]]),t.push([o+1,e[o]]);var n=e[o];e[o]=e[o+1],e[o+1]=n,a=1}else e[o]<=e[o+1]&&(t.push("no swap"),t.push("no swap"));t.push([o,o+1])}if(0===a)break}return t}(this.state.array);this.toggleButtons(!1),this.toggleButtons(!0,"gen",t.length);for(var r=function(r){var s=document.getElementsByClassName("array-bar");if(r%4===0||r%4===3){var a=Object(i.a)(t[r],2),o=a[0],n=a[1],c=s[o].style,l=s[n].style;r%4===0&&setTimeout((function(){c.backgroundColor=P,l.backgroundColor=H}),r*e.state.speed),r%4===3&&setTimeout((function(){c.backgroundColor=R,l.backgroundColor=R}),r*e.state.speed)}else if((r%4===1||r%4===2)&&"no swap"!==t[r]){var b=Object(i.a)(t[r],2),j=b[0],h=b[1];setTimeout((function(){s[j].style.height="".concat(h,"px")}),r*e.state.speed)}},s=0;s<t.length;s++)r(s)}},{key:"heapSort",value:function(){var e=A(this.state.array);this.toggleButtons(!1),this.toggleButtons(!0,"gen",e.length),this.showSwap(e)}},{key:"insertionSort",value:function(){var e=M(this.state.array);this.toggleButtons(!1),this.toggleButtons(!0,"gen",e.length),this.showSwap(e)}},{key:"selectionSort",value:function(){var e=q(this.state.array);this.toggleButtons(!1),this.toggleButtons(!0,"gen",e.length),this.showSwap(e)}},{key:"showSwap",value:function(e){for(var t=this,r=function(r){var s=document.getElementsByClassName("array-bar"),a=r%4;if(0===a){var o=e[r][0],n=e[r][1];setTimeout((function(){s[o].style.backgroundColor=P,s[n].style.backgroundColor=H}),r*t.state.speed)}else if(3===a){var c=e[r][0],i=e[r][1];setTimeout((function(){s[c].style.backgroundColor=R,s[i].style.backgroundColor=R}),r*t.state.speed)}else if(1===a||2===a){var l=e[r][0],b=e[r][1];setTimeout((function(){s[l].style.height="".concat(b,"px")}),r*t.state.speed)}},s=0;s<e.length;s++)r(s)}},{key:"render",value:function(){var e=this,t=this.state.array;return[Object(s.jsxs)("header",{className:"top",children:[Object(s.jsx)("button",{title:"Stop animation and reset array",className:"stop-button",children:Object(s.jsx)("a",{id:"stop-link",href:"/",children:Object(s.jsx)(D.a,{id:"stop-icon"})})}),Object(s.jsxs)("div",{className:"speedSlider",children:[Object(s.jsx)("div",{className:"name-slider",children:"Speed"}),Object(s.jsx)("input",{title:"Drag left to make animation faster",className:"slider",type:"range",min:1,max:100,value:this.state.speed,onChange:this.handleChangeSpeed})]}),Object(s.jsxs)("div",{className:"barSlider",children:[Object(s.jsx)("div",{className:"name-slider",children:"Bars"}),Object(s.jsx)("input",{title:"Drag right to increase the number of bars",className:"slider",type:"range",min:10,max:70,value:this.state.arrayBars,onChange:this.handleChangeBars})]}),Object(s.jsx)(u.a,{children:Object(s.jsx)(S,{})}),Object(s.jsx)("a",{id:"github-link",target:"_blank",rel:"nonreferrer",href:"https://github.com/longtongj28/sorting-visualizer",children:Object(s.jsx)(x.b,{title:"Github Repository for the site",id:"github-icon"})}),Object(s.jsx)("a",{className:"homelink",href:"/"}),Object(s.jsx)("h1",{id:"title",children:"Sorting Algorithms"}),Object(s.jsxs)("div",{className:"button-bar",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){return e.resetArray()},children:" Generate New Array"}),Object(s.jsx)("button",{className:"btn sort",onClick:function(){return e.quickSort()},children:"Quick Sort"}),Object(s.jsx)("button",{className:"btn sort",onClick:function(){return e.bubbleSort()},children:"Bubble Sort"}),Object(s.jsx)("button",{className:"btn sort",onClick:function(){return e.mergeSort()},children:"Merge Sort"}),Object(s.jsx)("button",{className:"btn sort",onClick:function(){return e.heapSort()},children:"Heap Sort"}),Object(s.jsx)("button",{className:"btn sort",onClick:function(){return e.insertionSort()},children:"Insertion Sort"}),Object(s.jsx)("button",{className:"btn sort",onClick:function(){return e.selectionSort()},children:"Selection Sort"})]})]}),Object(s.jsx)("div",{className:"array-container",children:t.map((function(e,t){return Object(s.jsx)("div",{className:"array-bar",style:{height:"".concat(e,"px"),backgroundColor:R}},t)}))})]}}]),r}(o.a.Component);r(52);var L=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(z,{})})})},Q=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,54)).then((function(t){var r=t.getCLS,s=t.getFID,a=t.getFCP,o=t.getLCP,n=t.getTTFB;r(e),s(e),a(e),o(e),n(e)}))};c.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root")),Q()},7:function(e,t,r){}},[[53,1,2]]]);
//# sourceMappingURL=main.57271127.chunk.js.map