<template>
    <div class="pa-4 text-center">
        <v-dialog v-model="dialog" max-width="600" persistent>
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                    class="text-none font-weight-regular"
                    prepend-icon="mdi-at"
                    text="Contact Me"
                    variant="tonal"
                    v-bind="activatorProps"
                />
            </template>

            <v-card title="Contact Me">
                <v-card-text>
                    <v-form ref="form">
                        <v-text-field
                            v-model="contactData.name"
                            label="Your Full Name"
                            required
                            :rules="[rules.required]"
                        />

                        <v-text-field
                            v-model="contactData.email"
                            label="Your Email Address"
                            type="email"
                            required
                            :rules="[rules.email, rules.required]"
                        />

                        <v-text-field
                            v-model="contactData.subject"
                            label="Subject of Your Message"
                            required
                            :rules="[rules.required]"
                        />

                        <v-textarea
                            v-model="contactData.message"
                            label="Your Message"
                            required
                            :rules="[rules.required]"
                        />
                    </v-form>
                </v-card-text>

                <v-divider />

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="plain" @click="dialog = false">Cancel</v-btn>
                    <v-btn variant="tonal" @click="submitForm">Send Message</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, useTemplateRef } from 'vue'

const dialog = ref(false)

const form = useTemplateRef('form')

interface ContactForm {
    name: string
    email: string
    subject: string
    message: string
}

const contactData = reactive<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
})

const rules = {
    required: (value: string) => !!value || 'This field is required.',
    email: (value: string) => /.+@.+\..+/.test(value) || 'Please enter a valid email address.',
}

const submitForm = () => {
    form.value?.validate().then((form) => {
        const isValid = form.valid
        if (isValid) {
            console.log('Form submitted', contactData)
            dialog.value = false
        } else {
            console.error('Form invalid', contactData)
        }
    })
}
</script>

<style scoped></style>
