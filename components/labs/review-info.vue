<template>
  <div>
    <p class="font-bold text-xl mb-11">Review Info</p>
    <div class="pb-5 border-b">
      <div v-if="!editContactForm">
        <div class="flex items-center mb-6">
          <p class="font-semibold text-sm">Collection Information</p>
          <div
            class="cursor-pointer ml-5 flex items-center"
            @click="editContactForm = true"
          >
            <p class="font-semibold text-danger text-sm mr-2">Edit</p>
            <edit-pen-red />
          </div>
        </div>
        <div class="">
          <p>{{ contact.fullName }}</p>
          <p>{{ contact.email }}</p>
          <p>{{ contact.phone.dialCode }}{{ contact.phone.number }}</p>
        </div>
      </div>
      <div v-else>
        <div class="flex items-center mb-6">
          <p class="font-semibold text-sm">Contact Information</p>
          <p
            class="cursor-pointer font-semibold text-danger ml-5 text-sm"
            @click="saveContactInfo"
          >
            Save
          </p>
        </div>
        <div>
          <cornie-input
            v-model="contact.fullName"
            label="Full Name"
            class="mb-6"
          />
          <cornie-input v-model="contact.email" label="Email" class="mb-6" />
          <phone-input
            v-model="contact.phone.number"
            v-model:code="contact.phone.dialCode"
            :rules="required"
            :required="true"
            label="Phone Number"
            placeholder="--Enter--"
          />
        </div>
      </div>
    </div>
    <div class="py-5 border-b">
      <div v-if="!editAddressForm">
        <div class="flex items-center mb-6">
          <p class="font-semibold text-sm">Contact Information</p>
          <div
            class="cursor-pointer ml-5 flex items-center"
            @click="editAddressForm = true"
          >
            <p class="font-semibold text-danger text-sm mr-2">Edit</p>
            <edit-pen-red />
          </div>
        </div>
        <div class="capitalize">
          <p>
            <cornie-radio
              :value="contact.serviceType"
              v-model="contact.serviceType"
              name="shipping-method"
              class="bg-danger float-right focus-within:bg-danger capitalize px-6 shadow"
              :label="contact.serviceType"
            />
          </p>
          <p>{{ contact.address }}</p>
          <p>{{ contact.apartment }}</p>
        </div>
      </div>
      <div v-else>
        <div class="flex items-center mb-6">
          <p class="font-semibold text-sm">Contact Information</p>
          <p
            class="cursor-pointer font-semibold text-danger ml-5 text-sm"
            @click="saveAddressInfo"
          >
            Save
          </p>
        </div>
        <div class="capitalize mb-5">
          <!-- <div
            class="flex flex-col pb-5 space-x-0 space-y-7 md:flex-row md:space-x-7 md:space-y-0"
          >
            <cornie-radio
              value="home collection sample"
              v-model="contact.serviceType"
              name="shipping-method"
              class="bg-danger float-right focus-within:bg-danger capitalize px-6 shadow"
              label="Home Collection sample"
            />
            <cornie-radio
              value="visit provider location"
              v-model="contact.serviceType"
              name="shipping-method"
              class="bg-danger float-right focus-within:bg-danger capitalize px-6 shadow"
              label="visit provider location"
            />
          </div> -->
          <cornie-input
            v-model="contact.address"
            label="Address"
            class="mb-6"
          />
          <cornie-input
            v-model="contact.apartment"
            label="Apartment/Suite/Others (Optional)"
            class="mb-6"
          />
        </div>
        <div class="bg-cotton-ball px-3 py-2">
          <CornieCheckbox label="Save as preferred address" />
        </div>
      </div>
    </div>
    <div class="py-5 border-b">
      <div v-if="!editCollectionTime">
        <div class="flex items-center mb-6">
          <p class="font-semibold text-sm">Preferred Collection Time</p>
          <!-- <div
            class="cursor-pointer ml-5 flex items-center"
            @click="editAddressForm = true"
          >
            <p class="font-semibold text-danger text-sm mr-2">Edit</p>
            <edit-pen-red />
          </div> -->
        </div>
        <div class="">
          <p>{{ formatDate(contact.collectionTime) }}</p>
          <!-- <p>
            {{ contact.scheduledTime }}
            <span @click="editCollectionTime = true" class="text-blue underline"
              >Change</span
            >
          </p> -->
        </div>
      </div>
      <div v-else>
        <div class="flex items-center mb-6">
          <p class="font-semibold text-sm">Preferred Collection Time</p>
          <p
            class="cursor-pointer font-semibold text-danger ml-5 text-sm"
            @click="saveCollectionTime"
          >
            Save
          </p>
        </div>
        <div>
          <!-- <date-picker
            class="w-full"
            label="Start Date/Time"
            v-model="contact.collectionTime"
          /> -->
          <p>Start Date/Time</p>
          <input
            v-model="contact.collectionTime"
            class="px-3 py-2 ap-card1"
            type="date"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import CornieBtn from "@/components/CButton.vue"
import CornieInput from "@/components/CornieInput.vue"
import CornieRadio from "@/components/cornieradio.vue"
import CornieCheckbox from "@/components/CornieCheckbox.vue"
// import DatePicker from "@/components/datepicker.vue";
import ChevronleftBlue from "@/components/icons/chevronleft-blue.vue"
import ChevronLeftIcon from "@/components/icons/chevronleftorange.vue"
import ChevronRightIcon from "@/components/icons/chevronrightorange.vue"
import EditPenRed from "@/components/icons/edit-pen-red.vue"
import ExternalLinkRed from "@/components/icons/external-link-red.vue"
import Search from "@/components/icons/search.vue"
import PhoneInput from "@/components/CorniePhoneInput.vue"
import { Component, Vue, Prop, PropSync } from "nuxt-property-decorator"
import { string } from "yup"

@Component({
  name: "Collection-info",
  components: {
    ChevronRightIcon,
    ChevronLeftIcon,
    CornieBtn,
    Search,
    CornieCheckbox,
    CornieRadio,
    CornieInput,
    ChevronleftBlue,
    PhoneInput,
    EditPenRed,
    ExternalLinkRed,
  },
})
export default class CollectionInfo extends Vue {
  @PropSync("modelValue", { type: Object, default: {} })
  contact!: any
  required = string().required()

  editContactForm = true
  editAddressForm = true
  editCollectionTime = true
  contacts = {
    fullName: "",
    email: "",
    phone: {
      dialCode: "",
      number: "",
    },
    serviceType: "home collection sample",
    address: "",
    apartment: "",
    collectionTime: "",
  }
  saveContactInfo() {
    this.editContactForm = false
  }
  saveAddressInfo() {
    this.editAddressForm = false
  }
  saveCollectionTime() {
    this.editCollectionTime = false
  }

  formatDate(date: string) {
    return new Date(date).toDateString()
  }
}
</script>
<style scoped>
.bg-cotton-ball {
  background: #f0f4fe;
}
</style>
