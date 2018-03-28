<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-title>Layout de login</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn @click="$router.push('/register')" flat>Registrarse</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <router-view/>
        </v-content>        
    </v-app>
</template>