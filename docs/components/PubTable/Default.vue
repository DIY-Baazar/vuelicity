<template>
    <pub-table>
        <pub-table-head>
            <pub-table-head-cell>Product name</pub-table-head-cell>
            <pub-table-head-cell>Color</pub-table-head-cell>
            <pub-table-head-cell>Category</pub-table-head-cell>
            <pub-table-head-cell>Price</pub-table-head-cell>
            <pub-table-head-cell>
                <span class="sr-only">Edit</span>
            </pub-table-head-cell>
        </pub-table-head>
        <pub-table-body>
            <pub-table-row>
                <pub-table-cell>Louis Vuitton Neverfull Tote</pub-table-cell>
                <pub-table-cell>Brown</pub-table-cell>
                <pub-table-cell>Handbag</pub-table-cell>
                <pub-table-cell>₹1,65,000</pub-table-cell>
                <pub-table-cell>
                    <pub-a href="#">Edit</pub-a>
                </pub-table-cell>
            </pub-table-row>

            <pub-table-row>
                <pub-table-cell>Gucci GG Marmont Shoulder Bag</pub-table-cell>
                <pub-table-cell>Black</pub-table-cell>
                <pub-table-cell>Shoulder Bag</pub-table-cell>
                <pub-table-cell>₹2,10,000</pub-table-cell>
                <pub-table-cell>
                    <pub-a href="#">Edit</pub-a>
                </pub-table-cell>
            </pub-table-row>

            <pub-table-row>
                <pub-table-cell>Nike Utility Backpack</pub-table-cell>
                <pub-table-cell>Navy</pub-table-cell>
                <pub-table-cell>Backpack</pub-table-cell>
                <pub-table-cell>₹4,499</pub-table-cell>
                <pub-table-cell>
                    <pub-a href="#">Edit</pub-a>
                </pub-table-cell>
            </pub-table-row>
        </pub-table-body>
    </pub-table>
</template>

<script lang="ts" setup>
import {
    PubA,
    PubTable,
    PubTableBody,
    PubTableCell,
    PubTableHead,
    PubTableHeadCell,
    PubTableRow,
} from 'vuelicity';
</script>