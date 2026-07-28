<template>
  <pub-table>
    <pub-table-head>
      <pub-table-head-cell>Key</pub-table-head-cell>
      <pub-table-head-cell>Description</pub-table-head-cell>
    </pub-table-head>
    <pub-table-body>
      <pub-table-row>
        <pub-table-cell>
          <pub-kbd>Shift</pub-kbd> or <pub-kbd>Tab</pub-kbd>
        </pub-table-cell>
        <pub-table-cell>Navigate to interactive elements</pub-table-cell>
      </pub-table-row>
      <pub-table-row>
        <pub-table-cell>
          <pub-kbd>Enter</pub-kbd> or <pub-kbd>Spacebar</pub-kbd>
        </pub-table-cell>
        <pub-table-cell>
          Ensure elements with ARIA role="button" can be activated with both key
          commands
        </pub-table-cell>
      </pub-table-row>
      <pub-table-row>
        <pub-table-cell>
          <span class="inline-flex gap-1">
            <pub-kbd>
              <template #icon>
                <svg
                  aria-hidden="true"
                  class="mx-1 h-2.5 w-2.5 -rotate-90"
                  fill="none"
                  viewBox="0 0 6 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L5 5L1 1"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </template>
              <span class="sr-only">Up</span>
            </pub-kbd>
            <pub-kbd>
              <template #icon>
                <svg
                  aria-hidden="true"
                  class="mx-1 h-2.5 w-2.5 rotate-90"
                  fill="none"
                  viewBox="0 0 6 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L5 5L1 1"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </template>
              <span class="sr-only">Down</span>
            </pub-kbd>
          </span>
          or
          <span class="inline-flex gap-1">
            <pub-kbd>
              <template #icon>
                <svg
                  aria-hidden="true"
                  class="mx-1 h-2.5 w-2.5 rotate-180"
                  fill="none"
                  viewBox="0 0 6 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L5 5L1 1"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </template>
              <span class="sr-only">Left</span>
            </pub-kbd>
            <pub-kbd>
              <template #icon>
                <svg
                  aria-hidden="true"
                  class="mx-1 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 6 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L5 5L1 1"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </template>
              <span class="sr-only">Right</span>
            </pub-kbd>
          </span>
        </pub-table-cell>
        <pub-table-cell>Choose and activate previous/next tab</pub-table-cell>
      </pub-table-row>
    </pub-table-body>
  </pub-table>
</template>

<script setup lang="ts">
import {
    PubKbd,
    PubTable,
    PubTableBody,
    PubTableCell,
    PubTableHead,
    PubTableHeadCell,
    PubTableRow,
} from 'vuelicity'
</script>
