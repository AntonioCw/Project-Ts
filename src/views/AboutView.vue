<template>
  <div>
    <h1>TESTE 02</h1>
    <b-button v-b-toggle.sidebar-footer>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow>
      <template #footer="{ hide }">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto">Footer</strong>
          <b-button size="sm" @click="hide">Close</b-button>
        </div>
      </template>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
  <b-container fluid class="p-4 bg-dark">
    <b-row>
      <b-col>
        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>
