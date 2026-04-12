<template>
    <pub-accordion>
        <pub-accordion-panel>
            <pub-accordion-header class="hover:bg-blue-200 hover:text-blue-900" activeClass="bg-blue-100 text-blue-900">
                What is PehliBazar?
            </pub-accordion-header>
            <pub-accordion-content>
                <p class="mb-2 text-gray-500">
                    PehliBazar is a premier online marketplace dedicated to bringing you the finest selection of local
                    handicrafts, modern fashion, and daily essentials.
                </p>
                <p class="text-gray-500">
                    Our mission is to support local artisans while providing customers with a seamless shopping
                    experience and high-quality products.
                </p>
            </pub-accordion-content>
        </pub-accordion-panel>
        <pub-accordion-panel>
            <pub-accordion-header class="hover:bg-blue-200 hover:text-blue-900" activeClass="bg-blue-100 text-blue-900">
                How can I track my order?
            </pub-accordion-header>
            <pub-accordion-content>
                <p class="mb-2 text-gray-500">
                    Tracking your order is easy! Once your package is dispatched, you will receive a confirmation email
                    containing a tracking ID.
                </p>
                <p class="text-gray-500">
                    You can enter this ID on our
                    <a href="/track-order" class="text-blue-600 hover:underline">Order Tracking</a> page to see the
                    real-time status of your delivery.
                </p>
            </pub-accordion-content>
        </pub-accordion-panel>
        <pub-accordion-panel>
            <pub-accordion-header class="hover:bg-blue-200 hover:text-blue-900" activeClass="bg-blue-100 text-blue-900">
                What is your return policy?
            </pub-accordion-header>
            <pub-accordion-content>
                <p class="mb-2 text-gray-500">
                    At PehliBazar, we want you to be completely satisfied with your purchase. If for any reason you are
                    not happy, you can return most items within 30 days of delivery.
                </p>
                <p class="text-gray-500">
                    Please visit our <a href="/returns" class="text-blue-600 hover:underline">Returns Portal</a> to
                    review eligibility and start your return process.
                </p>
            </pub-accordion-content>
        </pub-accordion-panel>
    </pub-accordion>
</template>

<script setup>
import { PubAccordion, PubAccordionPanel, PubAccordionHeader, PubAccordionContent } from "vuelicity";
</script>
